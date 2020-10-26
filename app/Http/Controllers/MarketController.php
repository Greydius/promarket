<?php

namespace App\Http\Controllers;

use App\FixingDetail;

use App\Product;
use App\SubCategory;
use Illuminate\Http\Request;

class MarketController extends Controller
{
    public function shopMain($categoryCode, $subCategoryCode)
    {
       $category = SubCategory::where('code', $subCategoryCode)->first();
       return view('pages.market.main', ['category' => $category, 'nds' => 0.85]);
    }
    public function sortAjax($categoryCode, $subCategoryCode)
    {
       $category = SubCategory::where('code', $subCategoryCode)->first();
       // dump(request()->per_page);

       $products = $category->products()->orderBy('price',request()->order)->paginate(request()->per_page);

       // dd($products);
       return view('components.market.sort',compact('products'));
    }

    public function shopInner($categoryCode, $subcategoryCode, $modelCode)
    {
        $product = Product::where('code', $modelCode)->first();
        $product->installation = FixingDetail::where('vendor_code', $product->vendor_code)->first();
        return view('pages.market.product', compact('product'));
    }
}
