<?php

namespace App\Providers;

use App\Category;
use App\FixingType;
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
        });

        View::composer('system.master', function ($view) {
            $view->with('categories', Category::get());
        });

    }
}
