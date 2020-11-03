<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;

class ManufacturerModel extends Model
{
	use Translatable;
    protected $translatable = ['name'];
    
    public function manufacturer() {
        return $this->belongsTo(Manufacturer::class);
    }

    public function details() {
        return $this->hasMany(FixingDetail::class);
    }
}
