<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'MainController@main')->name('main-page');

Route::get('/contacts', 'MainController@contacts')->name('contacts-page');

Route::get('/about', 'MainController@about')->name('about');

Route::get('/responsibility', 'MainController@responsibility')->name('responsibility');

Route::get('/guarantee', 'MainController@guarantee')->name('guarantee');

Route::get('/responsibility', 'MainController@responsibility')->name('responsibility');

Route::get('/delivery', 'MainController@delivery')->name('delivery');

Route::get('/fixing', 'FixingController@fixing')->name('fixing');

Route::get('/fixing/{type}', 'FixingController@fixingType')->name('fixing-type');

Route::get('/fixing-service/{type}/{service}', 'FixingController@fixingService')->name('fixing-service');

Route::get('/fixing-service/{type}/{service}/order', 'FixingController@fixingServiceDetails')->name('fixing-service-details');

Route::get('/fixing-brand/{type}/{brand}', 'FixingController@fixingBrand')->name('fixing-brand');

Route::get('/fixing-brand/{type}/{brand}/{model}', 'FixingController@fixingBrandModel')->name('fixing-brand-model');

/*Route::get('/fixing/{type}/{brand}/{model}/{detail}', 'FixingController@fixingModelDetail')->name('fixing-model-detail');*/

Route::get('/fixing-brand/{type}/{brand}/{model}/order', 'FixingController@fixingDetailOrder')->name('fixing-order-detail');

Route::post('/fixingOrder', 'FixingController@fixingDetailOrderRequest')->name('handle-fixing');

