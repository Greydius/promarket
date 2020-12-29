<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FixingOrder extends Model
{
    public function products() {
        return $this->belongsToMany(Product::class);
    }
    public function orderStatus() {
        return $this->belongsTo(OrderStatus::class);
    }
}
