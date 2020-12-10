<?php

namespace App\Providers;

use App\Category;
use App\DetailColor;
use App\DetailQuality;
use App\FixingType;
use App\Order;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        View::composer('*', function ($view) {
           $view->with('fixingTypes', FixingType::get());
           $view->with('nds', 0.79);
        });

        View::composer('system.master', function ($view) {
            $view->with('categories', Category::get());
            $view->with('order', Order::find(session('orderId')));
        });

        /*View::composer('vendor\voyager\Fixing-details\edit-add', function ($view) {
            $view->with('colors', DetailColor::get());
            $view->with('qualities', DetailQuality::get());
        });*/

    }
}
