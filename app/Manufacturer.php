<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;

class Manufacturer extends Model
{
	use Translatable;
    protected $translatable = ['name','title'];
    
    public function fixingType() {
        return $this->belongsTo(FixingType::class);
    }

    public function models() {
        return $this->hasMany(ManufacturerModel::class);
    }
}
