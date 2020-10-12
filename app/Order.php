<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{	
	protected $fillable = ['id','status','fio','user_id','specification','email','telephone','comment','city','address','postcode','delivery','payment_method','total_amout','region','delivery_address'];  
	protected $guarded = [];  

    public function products() {
        return $this->belongsToMany(Product::class)->withPivot('count');
    }
}
