<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;

class Product extends Model  implements Searchable
{
    public function subCategory() {
        return $this->belongsTo(SubCategory::class);
    }


    public function getSearchResult(): SearchResult
    {
        $url = route('shop-inner', ['','', $this->code]);

        return new SearchResult(
            $this,
            $this->name,
            $url
        );
    }
}
