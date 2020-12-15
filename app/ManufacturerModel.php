<?php

namespace App;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;

class ManufacturerModel extends Model
{
	use Translatable;
    protected $translatable = ['name'];
    
    public function manufacturer() {
        return $this->belongsTo(Manufacturer::class);
    }

    public function details() {
        return $this->hasMany(FixingDetail::class);
    }


  //   public function setAccessoriesAttribute($model)
  //   {
  //   	// dd($model);
  //       // return $this->hasMany(FixingDetail::class);

  // //   	$arr = explode(' ',trim($model));
		// // $model = $arr[0];
  //       $models = new Collection();
  //       $models = $this->where('model_name',$model)->get();
		// // dd($models);
        
  //       return $models;
  //   }
}
