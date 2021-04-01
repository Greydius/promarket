<?php

namespace App\Http\Controllers;


use App\Color;
use App\FixingType;
use App\Manufacturer;
use App\ManufacturerModel;
use App\Quality;
use Illuminate\Support\Facades\Http;
use Spatie\Searchable\Search;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\FixingDetail;
use App\Category;
use App\SubCategory;
use App\Product;

function startsWith($haystack, $needle)
{
    $length = strlen($needle);
    return substr($haystack, 0, $length) === $needle;
}

function endsWith($haystack, $needle)
{
    $length = strlen($needle);
    if (!$length) {
        return true;
    }
    return substr($haystack, -$length) === $needle;
}

class RemonlineController extends Controller
{
    private $api_key = '12aadbdfe6524e558a8407ac3b9d0f71';
    private $warehouses = [63647, 43086];

    public function getCategories()
    {
        $token = $this->getToken();
        $res2 = Http::get("https://api.remonline.ru/warehouse/categories/?token=$token");
        return $res2['data'];
    }

    public function getToken()
    {
        $res2 = Http::post("https://api.remonline.ru/token/new", [
            'api_key' => $this->api_key,
        ]);
        dump($res2['token']);
        return $res2['token'];
    }

    public function uploadCategories()
    {
        $token = $this->getToken();
        $res2 = Http::get("https://api.remonline.ru/warehouse/categories/?token=$token");

        $resData = array_filter($res2['data'], function ($item) {
            if (!isset($item['parent_id'])) {
                return $item;
            }
        });
        foreach ($resData as $category) {
            $isCategoryInDataBase = Category::where('old_id', $category['id'])->first();

            if ($isCategoryInDataBase == null) {

                \DB::table('categories')->insert([
                    'name' => $category['title'],
                    'code' => Str::slug($category['title'], '_'),
                    'title' => $category['title'],
                    'breadcrumbs' => $category['title'],
                    'old_id' => $category['id'],
                ]);
            } else {
                if (!isset($category['title'])) {
                    dd($cateogry);
                }

                $isCategoryInDataBase->update([
                    'name' => $category['title'],
                    'code' => Str::slug($category['title'], '_'),
                    'title' => $category['title'],
                    'breadcrumbs' => $category['title'],
                    'old_id' => $category['id'],
                ]);
            }
        }
    }

    public function uploadSubCategories()
    {
        $token = $this->getToken();
        $res2 = Http::get("https://api.remonline.ru/warehouse/categories/?token=$token");
        $resData = array_filter($res2['data'], function ($item) {
            if (isset($item['parent_id'])) {
                return $item;
            }
        });

        foreach ($resData as $category) {
            $bigCategory = Category::where('old_id', $category['parent_id'])->first();

            if ($bigCategory != null) {
                $subCategory = SubCategory::where('old_id', $category['id'])->first();
                if ($subCategory == null) {
                    \DB::table('sub_categories')->insert([
                        'name' => $category['title'],
                        'code' => Str::slug($category['title'], '_'),
                        'title' => $category['title'],
                        'breadcrumbs' => $category['title'],
                        'old_id' => $category['id'],
                        'category_id' => $bigCategory->id,
                    ]);
                } else {
                    $subCategory->update([
                        'name' => $category['title'],
                        'code' => Str::slug($category['title'], '_'),
                        'title' => $category['title'],
                        'breadcrumbs' => $category['title'],
                        'old_id' => $category['id'],
                        'category_id' => $bigCategory->id,
                    ]);
                }
            }
        }
    }

    public function uploadProductsFromWarehouses()
    {
        foreach ($this->warehouses as $warehouse) {
            $token = $this->getToken();
            $page = 1;
            $products = [];
            while ($page) {
                $productsQuery = Http::get("https://api.remonline.ru/warehouse/goods/$warehouse?token=$token&page=$page");
                try {
                    $productsQuery['data'];
                    $pageProducts = $productsQuery['data'];
                    $products = array_merge($products, $pageProducts);
                    $page++;
                } catch (\Exception $err) {
                    break;
                }
                sleep(0.125);
            }

            $allCategories = $this->getCategories();
            foreach ($products as $product) {
                $fixingModel = $this->uploadForFixing($product, $allCategories);
                if ($fixingModel != null) {
                    $this->uploadProducts($product, $fixingModel, $allCategories, $warehouse);
                } else {
                    $this->uploadProducts($product, null, $allCategories, $warehouse);
                }
            }
        }
    }

    private function uploadForFixing($product, $categories)
    {

        $upperCategory = $this->findUpperCategory($product, $categories);
        if ($upperCategory !== null) {
            $parentCategory = $this->createUpperCategory($upperCategory);
            $manufacturer = $this->createManufacturer($parentCategory, $product, $categories);
            $manufacturerModel = $this->createManufacturerModels($manufacturer, $product);
            return $this->createService($manufacturerModel, $product, $categories);
        } else {
            return null;
        }

    }

    private function findUpperCategory($product, $categories)
    {
        $currentCategory = $product['category'];

        while ($currentCategory['parent_id']) {
            $category = array_filter($categories, function ($cat) use ($currentCategory) {
                if ($cat['id'] == $currentCategory['parent_id']) {
                    return $cat;
                }
            });
            $currentCategory = array_values($category)[0];
            if (!isset($currentCategory['parent_id'])) {
                return null;
            }
        }
        $title = $currentCategory['title'];
        if (
            $title == 'Mobilo telefonu detaļas' ||
            $title == 'Planšetdatoru detaļas'
        ) {
            return $currentCategory;
        }
        return null;
    }

    private function createUpperCategory($upperCategory)
    {
        $fixingType = FixingType::where('remonlie_id', $upperCategory['id'])->first();
        if ($fixingType == null) {
            $newFixingType = new FixingType();
            $newFixingType->code = Str::slug($upperCategory['title'], '_');
            $newFixingType->img = $upperCategory['title'];
            $newFixingType->name = $upperCategory['title'];
            $newFixingType->small_img = $upperCategory['title'];
            $newFixingType->breadcrumb = $upperCategory['title'];
            $newFixingType->device_type = $upperCategory['title'];
            $newFixingType->title = $upperCategory['title'];
            $newFixingType->description = $upperCategory['title'];
            $newFixingType->background_image = $upperCategory['title'];
            $newFixingType->remonlie_id = $upperCategory['id'];
            $newFixingType->save();
            return $newFixingType;
        }
        return $fixingType;
    }

    private function createManufacturer($upperCategory, $product, $categories)
    {
        $productCategoryId = $product['category']['parent_id'];

        $productCategory = current(array_filter($categories, function ($category) use ($productCategoryId) {
            return $category['id'] == $productCategoryId;
        }));

        $manufacturer = Manufacturer::where('remonline_id', Str::slug($upperCategory->name . $productCategory['title']))->first();

        if ($manufacturer == null) {

            $newManufacturer = new Manufacturer();
            $newManufacturer->img = $productCategory['title'];
            $newManufacturer->name = $productCategory['title'];
            $newManufacturer->code = Str::slug($productCategory['title'], '_');
            $newManufacturer->title = $productCategory['title'];
            $newManufacturer->fixing_type_id = $upperCategory->id;
            $newManufacturer->remonline_id = Str::slug($upperCategory->name . $productCategory['title']);
            $newManufacturer->save();

            return $newManufacturer;
        }

        return $manufacturer;

    }

    private function createManufacturerModels($manufacturer, $product)
    {
        $modelName = $product['category']['title'];

        $model = ManufacturerModel::where('remonline_title', $modelName)->first();

        if ($model == null) {
            $newModel = new ManufacturerModel();
            $newModel->name = $modelName;
            $newModel->title = $modelName;
            $newModel->code = Str::slug($modelName, '_');
            $newModel->model_name = $modelName;
            $newModel->manufacturer_id = $manufacturer->id;
            $newModel->remonline_title = $modelName;
            $newModel->save();

            return $newModel;
        }

        return $model;

    }

    private function createService($manufacturerModel, $product, $categories)
    {
        $productCategoryId = $product['category']['parent_id'];

        $productCategory = current(array_filter($categories, function ($category) use ($productCategoryId) {
            return $category['id'] == $productCategoryId;
        }));

        $productCategoryForCommodity = current(array_filter($categories, function ($category) use ($productCategory) {
            return $category['id'] == $productCategory['parent_id'];
        }));


        $fixingDetail = FixingDetail::where('remonline_id', $manufacturerModel->name . $productCategoryForCommodity['id'] . $productCategory['id'])->first();

        if ($fixingDetail == null) {
            $newFixingDetail = new FixingDetail();
            $newFixingDetail->remonline_id = $manufacturerModel->name . $productCategoryForCommodity['id'] . $productCategory['id'];
            $newFixingDetail->name = $productCategoryForCommodity['title'];
            $newFixingDetail->code = Str::slug($manufacturerModel->name . $productCategoryForCommodity['title']);
            $newFixingDetail->breadcrumb_name = $productCategoryForCommodity['title'];
            $newFixingDetail->fixing_time = '1 час';
            $newFixingDetail->description = $productCategoryForCommodity['title'];
            $newFixingDetail->manufacturer_model_id = $manufacturerModel->id;
            $newFixingDetail->service_id = 1;
            $newFixingDetail->price = $product['price']['91237'];
            $newFixingDetail->save();
            return $newFixingDetail;
        }
        return $fixingDetail;

    }

    private function findSubCategory($product, $categories, $allCategories)
    {

        $returningValue = '';

        foreach ($categories as $cat) {
            if ($cat['old_id'] == $product['category']['parent_id']) {
                $returningValue = SubCategory::where('old_id', $product['category']['parent_id'])->first();
                break;
                return $returningValue;
            } else if ($cat['old_id'] == $product['category']['id']) {
                $returningValue = SubCategory::where('old_id', $product['category']['id'])->first();
                break;
                return $returningValue;

            }
            else {
                $parentCategories = [];
                $category = $product['category'];
                array_push($parentCategories, $category);
                while(isset($category['parent_id'])) {
                    foreach($allCategories as $remCategories) {
                        if ($category['parent_id'] == $remCategories['id']) {
                            array_push($parentCategories, $remCategories);
                            $category = $remCategories;
                            break;
                        }
                    }
                }
                $returningValue = SubCategory::where('old_id', $parentCategories[count($parentCategories) - 2]['id'])->first();
            }
        }
        return $returningValue;
    }

    private function uploadProducts($product, $fixingModel, $allCategories, $warehouse = 63647)
    {
        $categories = SubCategory::get();
        $colors = Color::get();
        $qualities = Quality::get();
        $productDB = Product::where('remonline_id', $product['id'])->first();
        $subCategory = $this->findSubCategory($product, $categories, $allCategories);
        if ($subCategory == null) {
            dump('not fixed');
            return 'nothing';
        }
        $manufacturerId = $product['category']['parent_id'];
        $manufacturer = '';
        $productColorId = 0;
        $productQualityId = 0;


        foreach ($colors as $color) {
            if (trim(strtoupper($color->name)) == trim(strtoupper($product['code']))) {
                $productColorId = $color->id;
            }
        }

        foreach ($qualities as $quality) {
            if (trim(strtoupper($quality->name)) == trim(strtoupper($product['article']))) {
                $productQualityId = $quality->id;
            }
        }

        foreach ($allCategories as $cat) {
            if ($manufacturerId == $cat['id']) {
                $manufacturer = $cat['title'];
            }
        }

        if ($productDB == null) {
            $newProd = new Product();
            $newProd->name = $product['title'];
            $newProd->price = $product['price']['85836'];
            $newProd->name = $product['title'];
            $newProd->code = Str::slug($product['title'], '_');
            $newProd->vendor_code = 'A11213';
            if ($warehouse == 63647) {
                $newProd->quantity_XO = $product['residue'];
            } else {
                $newProd->quantity = $product['residue'];
            }

            $newProd->model = $product['category']['title'];
            $newProd->price_with_installation = $product['price']['91237'];
            $newProd->installation_description = $product['description'];
            $newProd->manufacturer = $manufacturer;
            $newProd->img = $product['image'];
            $newProd->remonline_id = $product['id'];
            if ($fixingModel != null) {
                $newProd->fixing_detail_id = $fixingModel->id;
            }
            $newProd->color_id = $productColorId;
            $newProd->quality_id = $productQualityId;
            $newProd->wholesale_price = $product['price']['85837'];
            $newProd->save();
            $subCategory->products()->attach($newProd->id);
            return $newProd;
        } else {
            if ($warehouse == 63647) {
                $productDB->quantity_XO = $product['residue'];
            } else {
                $productDB->quantity = $product['residue'];
            }
            $productDB->color_id = $productColorId;
            $productDB->quality_id = $productQualityId;
            $productDB->model = $product['category']['title'];
            $productDB->wholesale_price = $product['price']['85837'];
            $productDB->price_with_installation = $product['price']['91237'];
            $productDB->price = $product['price']['85836'];
            $productDB->manufacturer = $manufacturer;
            $productDB->update();
        }
        return $productDB;


    }


}
