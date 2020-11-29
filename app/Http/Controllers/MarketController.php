<?php

namespace App\Http\Controllers;

use App\Category;
use App\FixingDetail;

use App\Product;
use App\SubCategory;
use Illuminate\Http\Request;

class MarketController extends Controller
{
    public function shopMain($categoryCode, $subCategoryCode)
    {
       $category = '';
       $mainCategory = Category::where('code', $categoryCode)->first();
       foreach ($mainCategory->subCategories as $sub) {
           if ($sub->code == $subCategoryCode){
               $category = $sub;
           }
       }

       $products = $category->products()->withTranslations()->paginate(12);
       return view('pages.market.main', ['category' => $category,'products'=>$products, 'nds' => 0.85]);
    }
    public function sortAjax($categoryCode, $subCategoryCode)
    {
       // $category = SubCategory::where('code', $subCategoryCode)->first();
        
        $category = '';
       $mainCategory = Category::where('code', $categoryCode)->first();
       foreach ($mainCategory->subCategories as $sub) {
           if ($sub->code == $subCategoryCode){
               $category = $sub;
           }
       }
        $products = $category->products();
      
       // if(request()->filter == 1){
        if(isset(request()->attrs)){
            foreach(request()->attrs as $key => $val){
               $products = $products->whereIn($key, $val);
            }

        }
        if(isset(request()->min_price) && isset(request()->max_price)){
          $products = $products->where('price','>=', request()->min_price);
          $products = $products->where('price','<=', request()->max_price);
        }
        // $products = $products->paginate(12);
       // } 
       // if(request()->sorting == 1){
          $products = $products->orderBy('price',request()->order)->paginate(request()->per_page);
       // }

       // dd($products);
       return view('components.market.sort',compact('products'));
    }

    public function shopInner($categoryCode, $subcategoryCode, $modelCode)
    { 
        $details='';
        $accessuars='';
        $product = Product::where('code', $modelCode)->with('translations')->first();
        $product->installation = FixingDetail::where('vendor_code', $product->vendor_code)->with('translations')->first();

        $detail_cats = SubCategory::where('category_id', 18)->get();
        foreach($detail_cats as $det){
            $details = $det->products();
        }
        $access_cats = SubCategory::where('category_id', 18)->get();
        foreach($access_cats as $acc){
            $accessuars = $acc->products();
        }

        return view('pages.market.product', compact('product','details','accessuars'));
    }
}
