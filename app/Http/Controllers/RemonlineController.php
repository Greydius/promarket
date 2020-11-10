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
      public function getCategories()
    {
        $categories = Category::all();
        // $categories->load('translations');
        $categories->translate('locale', 'fallbackLocale');
        dd($categories[0]->title);
        foreach($categories as $category){
        $category = $category->translate('locale', 'fallbackLocale');
            dd($category->name);
        }
        return $categories;
    }

    public function forTesting()
    {

        $res2 = Http::get('https://api.remonline.ru/warehouse/categories/?token=ce1ce3057298c453e1f89692debf29c809bc4d4c&=');
        $resData = array_filter($res2['data'], function ($item) {
            return $item['parent_id'] == null;
        });
        foreach ($resData as $category) {
            \DB::table('categories')->insert([
                'name' => $category['title'],
                'code' => Str::slug($category['title'], '_'),
                'title' => $category['title'],
                'breadcrumbs' => $category['title'],
                'old_id' => $category['id'],

            ]);
        }
        dd($resData);
    }

    public function getToken () {}

    public function uploadCategories () {}

    public function uploadInnerCategories () {}

    public function createSubCategories()
    {

        $res2 = Http::get('https://api.remonline.ru/warehouse/categories/?token=ce1ce3057298c453e1f89692debf29c809bc4d4c&=');
        $resData = array_filter($res2['data'], function ($item) {
            return $item['parent_id'] != null;
        });

        foreach ($resData as $category) {
        $bigCategory = Category::where('old_id',$category['parent_id'])->first();
            if($bigCategory != null){
                if()
                \DB::table('sub_categories')->insert([
                    'name' => $category['title'],
                    'code' => Str::slug($category['title'], '_'),
                    'title' => $category['title'],
                    'breadcrumbs' => $category['title'],
                    'old_id' => $category['id'],
                    'category_id' => $bigCategory->id,

                ]);
            }
        }
        dd($resData);
    }

}
