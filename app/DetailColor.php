<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DetailColor extends Model
{
    public function fixingDetail() {
        return $this->belongsTo(FixingDetail::class);
    }
}
