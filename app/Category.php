<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;

class Category extends Model
{
	use Translatable;
    protected $translatable = ['name','title','breadcrumbs'];

    public function subCategories () {
        return $this->hasMany(SubCategory::class);
    }

}
