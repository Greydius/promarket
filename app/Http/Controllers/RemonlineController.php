<?php

namespace App\Http\Controllers;


use App\FixingType;
use App\Manufacturer;
use App\ManufacturerModel;
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
            return $item['parent_id'] == null;
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
            return $item['parent_id'] != null;
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
        $token = $this->getToken();
        $page = 1;
        $products = [];
        $productsQuery = Http::get("https://api.remonline.ru/warehouse/goods/63647?token=$token&page=$page");
        $pageProducts = $productsQuery['data'];
        $products = array_merge($products, $pageProducts);
        $existingIds = [];
        $filteredProducts = [];
        foreach ($products as $product) {
            if (!in_array($product['article'], $existingIds)) {
                array_push($existingIds, $product['article']);
                array_push($filteredProducts, $product);
            }
        }
        $this->uploadProducts($products);
        $this->uploadForFixing($filteredProducts);
    }

    private function uploadForFixing($products)
    {
        $categories = $this->getCategories();
        foreach ($products as $product) {
            $upperCategory = $this->findUpperCategory($product, $categories);
            if ($upperCategory !== null) {
                $parentCategory = $this->createUpperCategory($upperCategory);
                $manufacturer = $this->createManufacturer($parentCategory, $product);
                $manufacturerModel = $this->createManufacturerModels($manufacturer, $product);
            }
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
        }
        $title = $currentCategory['title'];
        if (
            $title == 'Mobilo telefonu detaļas' ||
            $title == 'Planšetdatoru detaļas' ||
            $title == 'Gudro pulksteņu detaļas'
        ) {
            return $currentCategory;
        }
        return null;
    }

    private function createUpperCategory($upperCategory)
    {
        $fixingType = FixingType::where('remonlie_title', $upperCategory['title'])->first();
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
            $newFixingType->remonlie_title = $upperCategory['title'];
            $newFixingType->save();
            return $newFixingType;
        }
        return $fixingType;
    }

    private function createManufacturer($upperCategory, $product)
    {
        $productCategory = $product['category'];

        $manufacturer = Manufacturer::where('remonline_title', $productCategory['title'])->first();

        if ($manufacturer == null) {

            $newManufacturer = new Manufacturer();
            $newManufacturer->img = $productCategory['title'];
            $newManufacturer->name = $productCategory['title'];
            $newManufacturer->code = Str::slug($productCategory['title'], '_');
            $newManufacturer->title = $productCategory['title'];
            $newManufacturer->fixing_type_id = $upperCategory->id;
            $newManufacturer->remonline_title = $productCategory['title'];
            $newManufacturer->save();

            return $newManufacturer;
        }

        return $manufacturer;

    }

    private function createManufacturerModels($manufacturer, $product)
    {
        $modelName = $product['article'];

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

    private function findSubCategory($product, $categories)
    {
        $returningValue = '';
        foreach ($categories as $category) {
            if ($category['old_id'] == $product['category']['id']) {
                $returningValue = $category;
            }
            if ($category['old_id'] == $product['category']['parent_id']){
                $returningValue = SubCategory::where('old_id', $product['category']['parent_id'])->first();
            }
        }
        return $returningValue;
    }

    private function uploadProducts ($products)
    {
        $categories = SubCategory::get();
        foreach ($products as $product) {
            $productDB = Product::where('remonline_title', $product['title'])->first();
            $subCategory = $this->findSubCategory($product, $categories);
            if ($productDB == null) {
                $newProd = new Product();
                $newProd->name = $product['title'];
                $newProd->price = $product['price']['85837'];
                $newProd->name = $product['title'];
                $newProd->code = Str::slug($product['title'], '_');
                $newProd->vendor_code = 'A11213';
                $newProd->quantity = $product['residue'];
                $newProd->model = $product['article'];
                $newProd->price_with_installation = $product['price']['91237'];
                $newProd->installation_description = $product['description'];
                $newProd->manufacturer = $product['category']['title'];
                $newProd->color = 'melns';
                $newProd->img = $product['image'];
                $newProd->sub_category_id = $subCategory->id;
                $newProd->remonline_title = $product['title'];
                $newProd->save();
            }
        }
    }



}
