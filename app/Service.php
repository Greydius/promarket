<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;

class Service extends Model
{
	use Translatable;
    protected $translatable = ['name','title','breadcrumbs','fixing_time'];
    
    public function fixingType() {
        return $this->belongsTo(FixingType::class);
    }
    public function details() {
        return $this->hasMany(FixingDetail::class);
    }

}
