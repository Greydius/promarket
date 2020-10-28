<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;

class Product extends Model  implements Searchable
{
    public $searchableType = 'Магазин';
    public function subCategory() {
        return $this->belongsTo(SubCategory::class);
    }


    public function getSearchResult(): SearchResult
    {
        $url = route('shop-inner', ['','', $this->code]);
        $price = $this->price;

        return new SearchResult(
            $this,
            $this->name,
            $url
        );
    }
}
