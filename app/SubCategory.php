<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;


class SubCategory extends Model
{
	use Translatable;
    protected $translatable = ['name','title','breadcrumbs'];
    protected $fillable = ['name', 'code', 'title', 'breadcrumbs', 'old_id', 'category_id'];

    public function category() {
        return $this->belongsTo(Category::class);
    }
    public function products() {
        return $this->belongsToMany(Product::class);
    }
}
