<?php

namespace App\Http\Controllers;


use Illuminate\Support\Facades\Http;
use Spatie\Searchable\Search;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\FixingDetail;
use App\Category;
use App\SubCategory;
use App\Product;

class RemonlineController extends Controller
{
    private $api_key = '12aadbdfe6524e558a8407ac3b9d0f71';
    private $warehouses = [63647, 43086];

    public function getCategories()
    {
        $categories = Category::all();
        // $categories->load('translations');
        $categories->translate('locale', 'fallbackLocale');
        foreach ($categories as $category) {
            $category = $category->translate('locale', 'fallbackLocale');
        }
        return $categories;
    }

    public function getToken()
    {
        $res2 = Http::post("https://api.remonline.ru/token/new", [
            'api_key' => $this->api_key,
        ]);
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
                $category = SubCategory::find($category['id']);
                if ($category == null) {
                    \DB::table('sub_categories')->insert([
                        'name' => $category['title'],
                        'code' => Str::slug($category['title'], '_'),
                        'title' => $category['title'],
                        'breadcrumbs' => $category['title'],
                        'old_id' => $category['id'],
                        'category_id' => $bigCategory->id,

                    ]);
                } else {
                    $category->update([
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

        $products = Http::get("https://api.remonline.ru/warehouse/goods/63647?token=$token")['data'];
        $existingIds = [];
        $filteredProducts = [];
        foreach ($products as $product) {
            if (!in_array($product['article'], $existingIds)) {
                array_push($existingIds, $product['article']);
                array_push($filteredProducts, $product);
            }
        }
        dump($filteredProducts);
        dd($products);

    }
}
