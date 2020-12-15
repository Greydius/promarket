<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;
use Spatie\Searchable\SearchResult;
use Spatie\Searchable\Searchable;

class Product extends Model  implements Searchable
{
    use Translatable;
    protected $translatable = ['name','installation_description'];

    public $searchableType = 'Магазин';

    public function subCategory() {
        return $this->belongsToMany(SubCategory::class);
    }

    public function color() {
        return $this->belongsTo(Color::class);
    }

    public function quality() {
        return $this->belongsTo(Quality::class);
    }

    public function fixingDetail() {
        return $this->belongsTo(FixingDetail::class);
    }


    public function getSearchResult(): SearchResult
    {
        $url = route('shop-inner', [$this->subCategory[0]->category->code, $this->subCategory[0]->code, $this->code]);

        return new SearchResult(
            $this,
            $this->name,
            $url
        );
    }
}
