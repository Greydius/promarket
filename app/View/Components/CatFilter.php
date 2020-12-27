<?php

namespace App\View\Components;

use Illuminate\View\Component;
use App\Category;
use App\Product;
use App\Color;

class CatFilter extends Component
{
    public $category;
    public $subcategory;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($category)
    {
        $this->category = $category;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
      
            $category = Category::where('code', $this->category)->with('subCategories.products')->first();
            $subCatId = $category->subCategories()->select('id')->pluck('id');
            $products_id = \DB::table('product_sub_category')->whereIn('sub_category_id', $subCatId)->select('product_id')->pluck('product_id');
            $products = Product::query();
            $products = $products->whereIn('id',$products_id);
            // dd($products->groupBy('manufacturer')->select('manufacturer')->orderBy('manufacturer','asc')->get());
            $manufacturer = $products->groupBy('manufacturer')->select('manufacturer')->orderBy('manufacturer','asc')->get();
            $models = $products->groupBy('model')->select('model')->orderBy('model','asc')->get();
            $quantity = $products->groupBy('quantity')->select('quantity')->orderBy('quantity','asc')->get();
            $color_ids = $products->groupBy('color_id')->select('color_id')->pluck('color_id')->toArray();
            $color = Color::whereIn('id', $color_ids)->orderBy('name','asc')->get();
            $minprice = $products->min('price');
            $maxprice = $products->max('price');
       
        return view('components.cat-filter', compact('models','quantity','manufacturer','color', 'minprice', 'maxprice'));
    }
}
