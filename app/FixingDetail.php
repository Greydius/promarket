<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;
use Spatie\Searchable\SearchResult;
use Spatie\Searchable\Searchable;

class FixingDetail extends Model implements Searchable
{
    use Translatable;
    protected $translatable = ['name'];

    public $searchableType = 'Ремонт';

    public function manufacturerModel() {
        return $this->belongsTo(ManufacturerModel::class);
    }
    public function detailColors() {
        return $this->hasMany(DetailColor::class);
    }
    public function detailQuality() {
        return $this->hasMany(DetailQuality::class);
    }
    public function products() {
        return $this->hasMany(Product::class);
    }
    public function cheapest() {
        $products = $this->products()->get();
        $prices = array();
        foreach ($products as $product) {
            $prices[] = $product->price_with_installation;
        }
        return min($prices);
    }
    public function mostExpensive() {
        $products = $this->products()->get();
        $prices = array();
        foreach ($products as $product) {
            $prices[] = $product->price_with_installation;
        }
        return max($prices);
    }

     public function getSearchResult(): SearchResult
    {


        $url = route('fixing-order-detail', [$this->manufacturerModel->manufacturer->fixingType->code, $this->manufacturerModel->manufacturer->code, $this->manufacturerModel->code]) .'?id='.$this->id;

        return new SearchResult(
            $this,
            $this->name,
            $url
         );
    }
}
