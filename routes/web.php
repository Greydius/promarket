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
Route::post('/send-feedback', 'MainController@sendFeedback')->name('send-feedback');

Route::group([
    'prefix' => LaravelLocalization::setLocale(),
    'middleware' => ['localeSessionRedirect', 'localizationRedirect', 'localeViewPath']
], function () {


    Route::get('/', 'MainController@main')->name('main-page');

    Route::get('/contacts', 'MainController@contacts')->name('contacts-page');

    Route::get('/about', 'MainController@about')->name('about');

    Route::get('/responsibility', 'MainController@responsibility')->name('responsibility');

    Route::get('/guarantee', 'MainController@guarantee')->name('guarantee');

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


    Route::get('/market/{category}/{subcategory}', 'MarketController@shopMain')->name('shop-main');
    Route::post('/market/{category}/{subcategory}', 'MarketController@sortAjax')->name('sort-main');

    Route::get('/market/{category}/{subcategory}/{modelCode}', 'MarketController@shopInner')->name('shop-inner');

    Route::get('/cart', 'OrderController@cart')->name('cart');

    Route::post('/cart', 'OrderController@addToCart')->name('add-cart');

    Route::post('/cart/remove', 'OrderController@removeFromCart')->name('remove-cart');

    Route::get('/cart/clear', 'OrderController@removeAllProductsFromCart')->name('clear-cart');


    Auth::routes(['verify' => true]);

    Route::get('/login/{provider}', 'Auth\LoginController@redirectToProvider')
        ->name('social.login');
    Route::get('/login/{provider}/callback', 'Auth\LoginController@handleProviderCallback')
        ->name('social.callback');


    Route::get('/home', 'MainController@main')->name('home');

    Route::get('/email/verify', 'Auth\VerificationController@show')->name('verification.notice');
    Route::get('/profile', 'ProfileController@myprofile')->name('profile.index')->middleware('verified');
    Route::get('/profile/order/{id}', 'ProfileController@oneOrder')->name('user.order')->middleware('verified');
    Route::post('/profile/edit', 'ProfileController@edit')->name('profile.edit')->middleware('verified');
    Route::post('/profile/avatar', 'ProfileController@avatarStore')->name('avatarStore')->middleware('verified');

    Route::get('/reset-password', 'Auth\ResetPasswordController@resetPassword')->name('reset.password');

    Route::get('/checkout', 'OrderController@ckeckout')->name('checkout');
    Route::post('/confirm-order', 'OrderController@confirmOrder')->name('confirm.order');

    Route::get('/search', 'MainController@search')->name('search');
    Route::get('/search-ajax', 'MainController@searchAjax')->name('search.ajax');


    Route::post('/update-cart', 'OrderController@updateProductQuantity')->name('update-cart');
    Route::post('/commodity-quantity', 'OrderController@returnDataFromUpdatedProductQuantity')->name('update-cart-data');


    Route::get('/cart-state', 'OrderController@returnCartState')->name('cart-state');

    Route::get('/cart-data-remove/{id}', 'OrderController@returnDataFromRemovedProductInOrder')->name('remove-cart-data');

    Route::post('/registerOnlyEmail', 'Auth\RegisterController@regOnlyEmail')->name('regOnlyEmail');

    Route::get('/all-categories', 'MainController@getCategories')->name('lang-change');
});

Route::get('/cat', 'RemonlineController@uploadCategories')->name('uploadCategories');

Route::get('/sub', 'RemonlineController@uploadSubCategories')->name('upload-sub');

Route::get('/get-token', 'RemonlineController@getToken')->name('get-token');

Route::get('/upload-prod', 'RemonlineController@uploadProductsFromWarehouses')->name('upload-products');

Route::post('/detail/color', 'FixingController@createColorForCommodity')->name('detail-color');

Route::delete('/detail/color', 'FixingController@deleteColorForCommodity')->name('delete-detail-color');

Route::post('/detail/quality', 'FixingController@createQualityForCommodity')->name('detail-quality');

Route::delete('/detail/quality', 'FixingController@deleteQualityForCommodity')->name('delete-detail-quality');

Route::get('/detail/{detailId}/{colorId}', 'FixingController@fixingDetailOrderColor')->name('get-detail-qualities');


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
    Route::get('/empty-products','MainController@gravy');
});
