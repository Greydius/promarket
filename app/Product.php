<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;
use Spatie\Searchable\SearchResult;
use Spatie\Searchable\Searchable;

class Product extends Model  implements Searchable
{
    use Translatable;
    protected $translatable = ['name','installation_description','color'];
    
    public $searchableType = 'Магазин';

    public function subCategory() {
        return $this->belongsTo(SubCategory::class);
    }


    public function getSearchResult(): SearchResult
    {
        $url = route('shop-inner', [$this->subCategory->category->code, $this->subCategory->code, $this->code]);

        return new SearchResult(
            $this,
            $this->name,
            $url
        );
    }
}
