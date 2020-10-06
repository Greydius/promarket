<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Manufacturer extends Model
{
    public function fixingType() {
        return $this->belongsTo(FixingType::class);
    }

    public function models() {
        return $this->hasMany(ManufacturerModel::class);
    }
}
