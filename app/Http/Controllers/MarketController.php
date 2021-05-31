<?php

namespace App\Http\Controllers;

use App\Category;
use App\FixingDetail;

use App\Product;
use App\SubCategory;
use Illuminate\Http\Request;
use App\Helpers\CollectionHelper;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\SEOTools;

class MarketController extends Controller
{
    public function shopMain($categoryCode, $subCategoryCode, $filters = null)
    {
       // dump(request('manufacturer'));
       // dd($manufacturer);
       $filters_array = [];
       $category = '';
       $mainCategory = Category::where('code', $categoryCode)->first();
        // SEOMeta::setDescription($mainCategory->resume);
        SEOMeta::addMeta('article:published_time', $mainCategory->updated_at, 'property');
        // SEOMeta::addMeta('article:section', $post->category, 'property');
        // SEOMeta::addKeyword(['key1', 'key2', 'key3']);

       foreach ($mainCategory->subCategories as $sub) {
           if ($sub->code == $subCategoryCode){
               $category = $sub;
           }
       }
        SEOMeta::setTitle($mainCategory->title);


       // $products = $category->products()->withTranslations()->paginate(12);

        $query = request('query2');
       
        $products = $category->products();
        
       // if(isset(request()->attrs)){
        //     foreach(request()->attrs as $key => $val){
        //        $products = $products->whereIn($key, $val);
        //     }

        // }

        // Filters
        if($filters) {
          $current_filters = explode('-and-', $filters);

          foreach($current_filters as $current_filter) {
            $current_filter_data = explode('-is-', $current_filter);
    
            $current_filter_name = $current_filter_data[0];
            $current_filter_variants = explode('-or-', $current_filter_data[1]);
            $filters_array[$current_filter_name] = $current_filter_variants;

            $products = $products->whereIn($current_filter_name, $current_filter_variants);
          }
        }     

        if(isset(request()->quantity)){
          $c=count(request()->quantity);
          if($c == 1){
            foreach(request()->quantity as $quantity){
              if($quantity == 0){
                $products = $products->where('quantity', 0);

              }else{
                // dd($quantity);
              $products = $products->where('quantity','>=', $quantity);
              }
            }
          }else{
              $products = $products->where('quantity','>=', 0);
          }
        }
        if(isset(request()->min_price) && isset(request()->max_price)){
          $products = $products->where('price','>=', request()->min_price);
          $products = $products->where('price','<=', request()->max_price);
        }
        if(isset(request()->order)){
          $sort=request()->order;
        }else{
          $sort = 'ASC';
        }
        $products = $products->where('name', 'LIKE', "%$query%")->orderBy('price',$sort)->paginate(12);

        // dd($products);
       return view('pages.market.main', ['category' => $category,'products'=>$products, 'nds' => 0.85, 'filters' => $filters_array]);
    }

    public function shopMainCat($categoryCode, $filters = null)
    {
      $filters_array = [];
       $category = '';
       $products = '';
       $category = Category::where('code', $categoryCode)->first();
       //  foreach ($category->subCategories as $sub) {
       //         $products += $sub->products();
       // }
       // dd($products);
        SEOMeta::setTitle($category->title);
        // SEOMeta::setDescription($category->resume);
        SEOMeta::addMeta('article:published_time', $category->updated_at, 'property');
       // $products = $category->allProducts();


        $subCatId = $category->subCategories()->select('id')->pluck('id');
        $products_id = \DB::table('product_sub_category')->whereIn('sub_category_id', $subCatId)->select('product_id')->pluck('product_id');
        $products = Product::whereIn('id',$products_id);
       $pageSize = 12;
       
        $query = request('query2');

        // Filters
        if($filters) {
          $current_filters = explode('-and-', $filters);

          foreach($current_filters as $current_filter) {
            $current_filter_data = explode('-is-', $current_filter);
    
            $current_filter_name = $current_filter_data[0];
            $current_filter_variants = explode('-or-', $current_filter_data[1]);
            $filters_array[$current_filter_name] = $current_filter_variants;

            $products = $products->whereIn($current_filter_name, $current_filter_variants);
          }
        }

        if(isset(request()->quantity)){
          $c=count(request()->quantity);
          if($c == 1){
            foreach(request()->quantity as $quantity){
              if($quantity == 0){
                $products = $products->where('quantity', 0);

              }else{
                // dd($quantity);
              $products = $products->where('quantity','>=', $quantity);
              }
            }
          }else{
              $products = $products->where('quantity','>=', 0);
          }
        }
        if(isset(request()->min_price) && isset(request()->max_price)){
          $products = $products->where('price','>=', request()->min_price);
          $products = $products->where('price','<=', request()->max_price);
        }
        if(isset(request()->order)){
          $sort=request()->order;
        }else{
          $sort = 'ASC';
        }

        $products = $products->where('name', 'LIKE', "%$query%")->orderBy('price',$sort)->paginate(12)->onEachSide(2);


        // $products = CollectionHelper::paginate($products, $pageSize);
        // dd($products);
       return view('pages.market.category', ['category' => $category,'products'=>$products, 'nds' => 0.85, 'filters' => $filters_array]);

    }

    public function sortAjax($categoryCode, $subCategoryCode, $filters = null)
    {
      if(!$subCategoryCode){
          $subCategoryCode = 0;
      }

       // $category = SubCategory::where('code', $subCategoryCode)->first();
       $query = request('query2');
       if($subCategoryCode =='0'){
            $category = Category::where('code', $categoryCode)->with('subCategories.products')->first();
            $subCatId = $category->subCategories()->select('id')->pluck('id');
            $products_id = \DB::table('product_sub_category')->whereIn('sub_category_id', $subCatId)->select('product_id')->pluck('product_id');
            $products = Product::whereIn('id',$products_id);
        }else{

             $category = '';
             $mainCategory = Category::where('code', $categoryCode)->first();
             foreach ($mainCategory->subCategories as $sub) {
                 if ($sub->code == $subCategoryCode){
                     $category = $sub;
                 }
             }
              $products = $category->products();
          }
        
        if($filters) {
          $current_filters = explode('-and-', $filters);

          foreach($current_filters as $current_filter) {
            $current_filter_data = explode('-is-', $current_filter);
    
            $current_filter_name = $current_filter_data[0];
            $current_filter_variants = explode('-or-', $current_filter_data[1]);
            $filters_array[$current_filter_name] = $current_filter_variants;

            $products = $products->whereIn($current_filter_name, $current_filter_variants);
          }
        }

        if(isset(request()->quantity)){
          $c=count(request()->quantity);
          if($c == 1){
            foreach(request()->quantity as $quantity){
              if($quantity == 0){
                $products = $products->where('quantity', 0);

              }else{
                // dd($quantity);
              $products = $products->where('quantity','>=', $quantity);
              }
            }
          }else{
              $products = $products->where('quantity','>=', 0);
          }
        }
        if(isset(request()->min_price) && isset(request()->max_price)){
          $products = $products->where('price','>=', request()->min_price);
          $products = $products->where('price','<=', request()->max_price);
        }
          $sort=request()->order;
          $products = $products->where('name', 'LIKE', "%$query%")->orderBy('price',request()->order)->paginate(request()->per_page)->onEachSide(2);

       return view('components.market.sort',compact('products','category','sort'));
    }

    public function shopInner(Request $request, $categoryCode, $subcategoryCode, $modelCode)
    {

        $productCode = $request->i;

        if(isset($productCode)) {
          $subcategoryCode = str_replace('-', '_', $categoryCode);
          $subcategory = SubCategory::where('code', $subcategoryCode)->first();
          $category = Category::find($subcategory->category_id);

          $productCode = str_replace('-', '_', $productCode);
          $product = Product::where('code', $productCode)->first();

          if($product) {
            return redirect()->route('shop-inner', ["category" => $category->code, "subcategory" => $subcategory->code, "modelCode" => $product->code]);
          }  
        }

        $details='';
        $accessuars='';
        $product = Product::where('code', $modelCode)->with('translations')->first();
        $category = Category::where('code', $categoryCode)->first();
        SEOMeta::setTitle($product->name);
        SEOMeta::setDescription($product->installation_description);
        SEOMeta::addMeta('article:published_time', $product->updated_at, 'property');
        SEOTools::setTitle($product->name);
        SEOTools::setDescription($product->installation_description);
        $product->installation = FixingDetail::where('id', $product->fixing_id)->with('translations')->first();
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
