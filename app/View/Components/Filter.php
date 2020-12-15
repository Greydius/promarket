<?php

namespace App\View\Components;

use Illuminate\View\Component;
use App\Category;
use App\Product;

class Filter extends Component
{
    public $category;
    public $subcategory;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($category, $subcategory)
    {
        $this->category = $category;
        $this->subcategory = $subcategory;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        // dd($this->category);
        // $category = '';
        // $products = '';
        $mainCategory = Category::where('code', $this->category)->first();
        foreach ($mainCategory->subCategories as $sub) {
        // dd($sub->code);
           if ($sub->code == $this->subcategory){
               $category = $sub;
           }
        }
        // dd($category->with('products.color')->get());
        // // $color = '';
        // foreach($category->products as $product){
        //     dd($product->color()->get());
        //     $color = $product->color();
        // }
        // dd($color);
        // dd($category);
        // $models = $category->products()->orderBy('model')->pluck('model');
        // $quantity = $category->products()->orderBy('quantity')->pluck('quantity');
        // $manufacturer = $category->products()->orderBy('manufacturer')->pluck('manufacturer');
        // $color = $category->products()->orderBy('color_id')->select('color_id')->get();
        // dd($color[0]);
        // $models = $category->products->sortByDesc('model')->pluck('model');
        // dd($models);
        // dd($category->with('products', Product::groupBy('model')->select('model')));
        // dd($models->pluck('model'));
        $models = $category->products()->groupBy('model')->select('model')->get();
        $quantity = $category->products()->groupBy('quantity')->select('quantity')->get();
        $manufacturer = $category->products()->groupBy('manufacturer')->select('manufacturer')->get();
        $color = $category->products()->groupBy('color_id')->select('color_id')->get();
        $minprice = $category->products()->min('price');
        $maxprice = $category->products()->max('price');
        // dd($quantity);
        // dd($products->select('quantity','manufacturer','model','color')->get());
        return view('components.filter',compact('models','quantity','manufacturer','color', 'minprice', 'maxprice'));
    }
}
