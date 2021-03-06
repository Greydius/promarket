<?php

namespace App;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;

class Category extends Model
{
    use Translatable;

    protected $translatable = ['name', 'title', 'breadcrumbs'];
    protected $fillable = ['name', 'code', 'title', 'breadcrumbs', 'old_id'];

    public function subCategories()
    {
        return $this->hasMany(SubCategory::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function products($model)
    {
        $products = new Collection();
        foreach ($this->subCategories as $subCategory) {
            $products = $products->merge($subCategory->products->where('model', $model));
        }
        return $products;
    }

    public function allProducts()
    {
        $products = new Collection();
        foreach ($this->subCategories as $subCategory) {
            $products = $products->merge($subCategory->products);
        }
        return $products;
    }
}
