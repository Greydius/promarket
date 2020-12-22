<?php

namespace App\View\Components;

use Illuminate\View\Component;
use App\Category;
use App\Product;
use App\Color;

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
       
        $models = $category->products()->groupBy('model')->select('model')->orderBy('model','asc')->get();
        $quantity = $category->products()->groupBy('quantity')->select('quantity')->orderBy('quantity','asc')->get();
        $manufacturer = $category->products()->groupBy('manufacturer')->select('manufacturer')->orderBy('manufacturer','asc')->get();
        $color_ids = $category->products()->groupBy('color_id')->select('color_id')->pluck('color_id')->toArray();
        $color = Color::whereIn('id', $color_ids)->orderBy('name','asc')->get();
        $minprice = $category->products()->min('price');
        $maxprice = $category->products()->max('price');

        return view('components.filter', compact('models','quantity','manufacturer','color', 'minprice', 'maxprice'));
    }
}
