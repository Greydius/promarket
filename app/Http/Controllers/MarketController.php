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
       $category = SubCategory::where('code', $subCategoryCode)->with('translations')->first();
       // dump(request()->per_page);
       if(request()->sorting == 1){
       $products = $category->products()->orderBy('price',request()->order)->paginate(request()->per_page);
       }
       if(request()->filter == 1){
        $products = $category->products();
        if(isset(request()->attrs)){
            foreach(request()->attrs as $key => $val){
            // dd($val);
               $products = $products->where($key, $val);
            }

        }
        $products = $products->where('price','>=', request()->min_price);
        $products = $products->where('price','<=', request()->max_price);
        // dd();
        $products = $products->paginate(9);
       }

       // dd($products);
       return view('components.market.sort',compact('products'));
    }

    public function shopInner($categoryCode, $subcategoryCode, $modelCode)
    {
        $product = Product::where('code', $modelCode)->with('translations')->first();
        $product->installation = FixingDetail::where('vendor_code', $product->vendor_code)->with('translations')->first();
        return view('pages.market.product', compact('product'));
    }
}
