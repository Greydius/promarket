<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FixingDetail extends Model
{
    public function manufacturerModel() {
        return $this->belongsTo(ManufacturerModel::class);
    }
    public function detailColors() {
        return $this->hasMany(DetailColor::class);
    }
    public function detailQuality() {
        return $this->hasMany(DetailQuality::class);
    }
}
