<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;

class FixingType extends Model
{
	use Translatable;
    protected $translatable = ['name', 'title', 'breadcrumb', 'description'];

    public function manufacturers() {
        return $this->hasMany(Manufacturer::class);
    }

    public function services() {
        return $this->hasMany(Service::class);
    }
}
