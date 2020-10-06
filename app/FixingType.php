<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FixingType extends Model
{
    public function manufacturers() {
        return $this->hasMany(Manufacturer::class);
    }

    public function services() {
        return $this->hasMany(Service::class);
    }
}
