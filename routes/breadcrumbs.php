<?php
// Home
Breadcrumbs::for('home', function ($trail) {
    $trail->push(__("Main"), route('main-page'));
});

// Home > About
Breadcrumbs::for('fixing', function ($trail) {
    $trail->parent('home');
    $trail->push(__("repairs"), route('fixing'));
});

Breadcrumbs::for('fixing-type', function ($trail, $fixingType) {
    $trail->parent('fixing');
    $trail->push($fixingType->getTranslatedAttribute('name', app()->getLocale(), 'lv'), route('fixing-type', [$fixingType->code]));

});

// Home > Blog
Breadcrumbs::for('fixing-type-with-brand', function ($trail, $manufacturer) {
    $trail->parent('fixing-type', $manufacturer->fixingType);
    $trail->push($manufacturer->getTranslatedAttribute('name', app()->getLocale(), 'lv'), route('fixing-brand', [$manufacturer->fixingType->code, $manufacturer->code]));
});


Breadcrumbs::for('fixing-type-service', function ($trail, $service) {
    $trail->parent('fixing-type', $service->fixingType);
    $trail->push($service->getTranslatedAttribute('name', app()->getLocale(), 'lv'), route('fixing-service', [
        $service->fixingType->code,
        $service->code
    ]));
});

Breadcrumbs::for('fixing-type-with-brand-model', function ($trail, $model) {
    $trail->parent('fixing-type-with-brand', $model->manufacturer);
    $trail->push($model->getTranslatedAttribute('name', app()->getLocale(), 'lv'), route('fixing-brand-model', [
        $model->manufacturer->fixingType->code,
        $model->manufacturer->code,
        $model->code
    ]));
});


Breadcrumbs::for('fixing-order-detail', function ($trail, $details) {
    $trail->parent('fixing-type-with-brand-model', $details[0]->manufacturerModel);
    $name = __('Replacing components');
    if(count($details) == 1){
        $name = $details[0]->getTranslatedAttribute('name', app()->getLocale(), 'lv');
    }
    $trail->push($name, route('fixing-order-detail', [
        $details[0]->manufacturerModel->manufacturer->fixingType->code,
        $details[0]->manufacturerModel->manufacturer->code,
        $details[0]->manufacturerModel->code
    ]));
});


/*Breadcrumbs::for('shop', function ($trail, $category) {
    $trail->parent('home');
    $trail->push(__('store'), route('shop-main', [
        $category->category->code,
        $category->code
    ]));
});*/

Breadcrumbs::for('upper-category', function ($trail, $category) {
    $trail->parent('home');
    $trail->push($category->getTranslatedAttribute('name', app()->getLocale(), 'lv'), route('shop-main-cat', [
        $category->code
    ]));
});

Breadcrumbs::for('category', function ($trail, $category) {
    $trail->parent('upper-category', $category->category);
    $trail->push($category->getTranslatedAttribute('name', app()->getLocale(), 'lv'), route('shop-main', [
        $category->category->code,
        $category->code
    ]));
});

Breadcrumbs::for('product', function ($trail, $product) {
    $trail->parent('category', $product->subCategory[0]);
    $trail->push($product->getTranslatedAttribute('name', app()->getLocale(), 'lv'), route('shop-inner', [
        $product->subCategory[0]->category->code,
        $product->subCategory[0]->code,
        $product->code
    ]));
});

Breadcrumbs::for('responsibility', function ($trail) {
    $trail->parent('home');
    $trail->push(__('Limitation of Liability'), route('responsibility'));
});

Breadcrumbs::for('about', function ($trail) {
    $trail->parent('home');
    $trail->push(__('about_company'), route('about'));
});

Breadcrumbs::for('guarantee', function ($trail) {
    $trail->parent('home');
    $trail->push(__('Warranty'), route('guarantee'));
});

Breadcrumbs::for('delivery', function ($trail) {
    $trail->parent('home');
    $trail->push(__('delivery'), route('delivery'));
});

Breadcrumbs::for('auth', function ($trail) {
    $trail->parent('home');
    $trail->push(__('entrance'), route('login'));
});

Breadcrumbs::for('account', function ($trail) {
    $trail->parent('home');
    $trail->push(__('My profile'), route('profile.index'));
});
