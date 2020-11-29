<?php

namespace App\View\Components;

use Illuminate\View\Component;
use App\Category;

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
           if ($sub->code == $this->subcategory){
               $category = $sub;
           }
        }
        $models = $category->products()->groupBy('model')->select('model')->get();
        $quantity = $category->products()->groupBy('quantity')->select('quantity')->get();
        $manufacturer = $category->products()->groupBy('manufacturer')->select('manufacturer')->get();
        $color = $category->products()->groupBy('color')->select('color')->get();
        $minprice = $category->products()->min('price');
        $maxprice = $category->products()->max('price');
        // dd($quantity);
        // dd($products->select('quantity','manufacturer','model','color')->get());
        return view('components.filter',compact('models','quantity','manufacturer','color', 'minprice', 'maxprice'));
    }
}
