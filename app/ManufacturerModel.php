<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ManufacturerModel extends Model
{
    public function manufacturer() {
        return $this->belongsTo(Manufacturer::class);
    }

    public function details() {
        return $this->hasMany(FixingDetail::class);
    }
}
