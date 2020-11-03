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
