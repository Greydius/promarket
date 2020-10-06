<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    public function fixingType() {
        return $this->belongsTo(FixingType::class);
    }
    public function details() {
        return $this->hasMany(FixingDetail::class);
    }

}
