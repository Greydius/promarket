<?php

namespace App\View\Components;

use Illuminate\View\Component;
use App\Category;
use App\Product;
use App\Color;

class SearchFilter extends Component
{
    public $search;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($search)
    {
        $this->search = $search;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        $models = Product::groupBy('model')->select('model')->orderBy('model','asc')->get();
        $quantity = Product::groupBy('quantity')->select('quantity')->orderBy('quantity','asc')->get();
        $manufacturer = Product::groupBy('manufacturer')->select('manufacturer')->orderBy('manufacturer','asc')->get();
        $color = Color::orderBy('name','asc')->get();
        $minprice = Product::min('price');
        $maxprice = Product::max('price');

        return view('components.search-filter',compact('models','quantity','manufacturer','color', 'minprice', 'maxprice'));
    }
}
