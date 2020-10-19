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

Route::get('/market/{category}/{subcategory}/{modelCode}', 'MarketController@shopInner')->name('shop-inner');

Route::get('/cart', 'OrderController@cart')->name('cart');

Route::post('/cart', 'OrderController@addToCart')->name('add-cart');

Route::get('/cart/remove/{id}', 'OrderController@removeFromCart')->name('remove-cart');

Route::get('/cart/decrease/{id}', 'OrderController@decreaseFromCart')->name('decrease-from-cart');


Auth::routes(['verify' => true]);

Route::get('/login/{provider}', 'Auth\LoginController@redirectToProvider')
    ->name('social.login');
Route::get('/login/{provider}/callback', 'Auth\LoginController@handleProviderCallback')
    ->name('social.callback');



Route::get('/home', 'MainController@main')->name('home');

Route::get('/email/verify', 'Auth\VerificationController@show')->name('verification.notice');
Route::get('/profile', 'ProfileController@myprofile')->name('profile.index')->middleware('verified');
Route::get('/profile/order/{id}', 'ProfileController@oneOrder')->name('user.order')->middleware('verified');
Route::post('/profile/edit','ProfileController@edit')->name('profile.edit')->middleware('verified');
Route::post('/profile/avatar','ProfileController@avatarStore')->name('avatarStore')->middleware('verified');

Route::get('/reset-password', 'Auth\ResetPasswordController@resetPassword')->name('reset.password');

Route::get('/checkout', 'OrderController@ckeckout')->name('checkout');
Route::post('confirm-order','OrderController@confirmOrder')->name('confirm.order');

Route::post('/send-feedback', function () {
   
   // dd(request()->all());
    $details = request()->all();
   
    \Mail::to('giyosiddinmirzaboyev@gmail.com')->send(new \App\Mail\FeedbackMail($details));
   
    return 'Сообщение успешно отправлено.';
});
