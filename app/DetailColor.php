<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;

class DetailColor extends Model
{
    use Translatable;
    protected $translatable = ['name'];
    
    public function fixingDetail() {
        return $this->belongsTo(FixingDetail::class);
    }
}
