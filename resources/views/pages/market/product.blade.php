@extends('system.master')

@section('content')

    <main class="main">
        <section class="display-content">
            <div class="container">
                <div class="bread-crumbs">
                    <ul class="d-flex">
                        <li class="bread-crumb-link">
                            <a href="#">
                                Магазин
                            </a>
                        </li>
                        <li class="bread-crumb-link bread-crumb-link-prev">
                            <a href="#">
                                Комп. моб. телефонов
                            </a>
                        </li>
                        <li class="bread-crumb-link">
                            <a href="#">
                                Дисплеи
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="row mt-4">
                    <div class="col-lg-12 row center-mobile-margins">
                        <div class="col-md-4 center-mobile-paddings">
                            <h1 class="main-title hidden-for-tablet">
                                {{$product->name}}
                            </h1>
                            <div class="swiper-container product-top-slider ">
                                <div class="swiper-wrapper">

                                    <a href="{{asset('assets/img/market/slide.svg')}}" data-fslightbox="displays">
                                        <img class="swiper-slide" src="{{asset('assets/img/market/slide.svg')}}"
                                             data-large="{{asset('assets/img/market/slide.svg')}}" alt="alt"
                                             title="Фото">
                                    </a>
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>

                            {{--<div class="swiper-container product-thumb-slider ">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide" style="background-image:url(img/market/slide.svg)"></div>
                                </div>

                            </div>--}}
                        </div>
                        <div class="col-md-8">
                            <h1 class="main-title hidden-for-mobile">
                                {{$product->name}}
                            </h1>
                            <div class="row align-items-end additional-product-parameters">
                                <div class="col-xl-6 col-lg-6 col-md-12 delivery-conditions-list">
                                    <div class="delivery-conditions mb-3">
                                        <img src="{{asset('assets/img/market/truck-delivery-outline 1.svg')}}"
                                             alt="icon">
                                        Услуга курьера начиная от 4,99 €*. Предполагаемая доставка 15 мая
                                    </div>
                                    <div class="delivery-conditions  mb-3">
                                        <img src="{{asset('assets/img/market/store 1.svg')}}" alt="icon">
                                        Заберите бесплатно. Заказ будет выполнен предположительно 14 мая
                                    </div>
                                    <div class="delivery-conditions">
                                        <img src="{{asset('assets/img/market/grid 1.svg')}}" alt="icon">
                                        Доставка в почтовый автомат 3,95 €. Предполагаемая доставка 15 мая
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12 ">
                                    <div class="row align-items-end">
                                        <div class="col-6">
                                            <div class="commodity-card-parameter commodity-card-inner-parameter">
                                                @include('components.common.in-stock', ['quantity' => $product->quantity])
                                            </div>
                                            <div class="commodity-card-price mb-2">
                                                {{$product->price}} €
                                            </div>
                                            <span class="commodity-card-price commodity-card-price-ex-vat">
                                    <span class="ex-vat-text-price">{{$product->price * $nds}} € </span> <span
                                                    class="ex-vat-text">ex.VAT</span>
                                </span>

                                        </div>
                                        <div class="col-6">
                                            <form method="post" action="{{route('add-cart')}}"
                                                  class="add-to-cart-form-submittion">
                                                <div class="quantity-drop product-inner-page-quantity-drop">
                                                    @csrf
                                                    <div class="quantity-view-wrapper align-items-center d-flex">
                                                        <div class="quantity-input-wrapper">
                                                            <label>
                                                                <input name="quantity" value="1" type="text" class="quantity-input">
                                                            </label>
                                                            <input type="hidden" name="product_id" value="{{$product->id}}">
                                                        </div>
                                                        <div class="quantity-trigger-wrapper">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <g opacity="0.54">
                                                                    <path d="M7 10L12 15L17 10H7Z"
                                                                          fill="#202020"></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="{{route('add-cart', $product)}}"
                                                   class="submit-form default-button add-to-cart">
                                                    в корзину
                                                </a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 offset-lg-4">

                        <div>
                            <div class="container">
                                <div class="row inner-product-description-wrapper align-items-end">
                                    <div class="description-wrap">
                                        <div class=" buy-with-installation">
                                            <div class="row align-items-end">
                                                <div class="col-md-6 col-lg-6">
                                                    <div class="small-title mb-2">
                                                        КУПИТЬ С УСТАНОВКОЙ
                                                    </div>
                                                    <ul>
                                                        {{$product->installation->description}}
                                                    </ul>
                                                </div>
                                                <div class="col-lg-3 col-md-6 md-text-center col-5">
                                                    <div class="commodity-card-price">
                                                        {{$product->installation->price}} €
                                                    </div>
                                                </div>
                                                <div class=" col-lg-3 col-md-12 col-7">
                                                    <a href="{{route('fixing-order-detail', [
$product->installation->manufacturerModel->manufacturer->fixingType->code,
$product->installation->manufacturerModel->manufacturer->code,
$product->installation->manufacturerModel->code])}}?id={{$product->installation->id}}" type="submit"
                                                       class="submit-form default-button">
                                                        Заявка
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row product-inner-table">
                                        <div class="col-md-6">
                                            <table>
                                                <tr>
                                                    <td>Тип продукта</td>
                                                    <td>Качели</td>
                                                </tr>
                                                <tr>
                                                    <td>Длина</td>
                                                    <td>167 мм</td>
                                                </tr>
                                                <tr>
                                                    <td>Ширина</td>
                                                    <td>425 мм</td>
                                                </tr>
                                                <tr>
                                                    <td>высота</td>
                                                    <td>55 мм</td>
                                                </tr>
                                                <tr>
                                                    <td>цвет</td>
                                                    <td>Желтый</td>
                                                </tr>
                                                <tr>
                                                    <td>материал</td>
                                                    <td>Пластик</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div class="col-md-6">
                                            <table>
                                                <tr>
                                                    <td>максимальный вес тела ползователя/-ей</td>
                                                    <td>25 кг</td>
                                                </tr>
                                                <tr>
                                                    <td>С перекладинами</td>
                                                    <td>Нет</td>
                                                </tr>
                                                <tr>
                                                    <td>предупреждение!</td>
                                                    <td>Может содержать мелкие детали</td>
                                                </tr>
                                                <tr>
                                                    <td>гарантия</td>
                                                    <td>24 месяц</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>

                                    {{$product->installation_description}}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section class="commodity commodity-slider commodity-slider-2 commodity-2">
            <div class="container">
                <h3 class="small-title">
                    запчасти для Apple iphone 6s
                </h3>

                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="commodity-default-card">
                                <div class="commodity-image-wrapper">
                                    <img src="img/common/card.png" alt="">
                                </div>
                                <div class="commodity-card-body">
                                    <h4 class="commodity-card-title">
                                        Дисплей iPhone X с Тачскрином, стеклом и рамкой, чёрный
                                        восстановленный.
                                    </h4>
                                    <div class="commodity-card-parameter">
                                        <img src="img/common/tick.svg" alt="">
                                        <span>
                                       В наличии
                                    </span>
                                    </div>
                                    <div class="commodity-card-price-row">
                                        <div class="commodity-card-price">
                                            € 250
                                        </div>
                                    </div>
                                    <div class="commodity-card-additional-price">
                                        <span>39.99 € excl.VAT</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="quantity-drop">
                                            <div class="quantity-view-wrapper align-items-center d-flex">
                                                <div class="quantity-input-wrapper">
                                                    <label>
                                                        <input value="1" type="text" class="quantity-input">
                                                    </label>
                                                </div>
                                                <div class="quantity-trigger-wrapper">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.54">
                                                            <path d="M7 10L12 15L17 10H7Z" fill="#202020"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" class="default-button">
                                            в корзину
                                        </a>
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="commodity-default-card">
                                <div class="commodity-image-wrapper">
                                    <img src="img/common/card.png" alt="">
                                </div>
                                <div class="commodity-card-body">
                                    <h4 class="commodity-card-title">
                                        Дисплей iPhone X с Тачскрином, стеклом и рамкой, чёрный
                                        восстановленный.
                                    </h4>
                                    <div class="commodity-card-parameter">
                                        <img src="img/common/low.svg" alt="">
                                        <span>
                    1  в наличии
                  </span>
                                    </div>
                                    <div class="commodity-card-price-row">
                                        <div class="commodity-card-price">
                                            € 250
                                        </div>
                                    </div>
                                    <div class="commodity-card-additional-price">
                                        <span>39.99 € excl.VAT</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="quantity-drop">
                                            <div class="quantity-view-wrapper align-items-center d-flex">
                                                <div class="quantity-input-wrapper">
                                                    <label>
                                                        <input value="1" type="text" class="quantity-input">
                                                    </label>
                                                </div>
                                                <div class="quantity-trigger-wrapper">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.54">
                                                            <path d="M7 10L12 15L17 10H7Z" fill="#202020"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" class="default-button">
                                            в корзину
                                        </a>
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="commodity-default-card">
                                <div class="commodity-image-wrapper">
                                    <img src="img/common/card.png" alt="">
                                </div>
                                <div class="commodity-card-body">
                                    <h4 class="commodity-card-title">
                                        Дисплей iPhone X с Тачскрином, стеклом и рамкой, чёрный
                                        восстановленный.
                                    </h4>
                                    <div class="commodity-card-parameter">
                                        <img src="img/common/order.svg" alt="">
                                        <span>
                    Под заказ
                  </span>
                                    </div>
                                    <div class="commodity-card-price-row">
                                        <div class="commodity-card-price">
                                            € 250
                                        </div>
                                    </div>
                                    <div class="commodity-card-additional-price">
                                        <span>39.99 € excl.VAT</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="quantity-drop">
                                            <div class="quantity-view-wrapper align-items-center d-flex">
                                                <div class="quantity-input-wrapper">
                                                    <label>
                                                        <input value="1" type="text" class="quantity-input">
                                                    </label>
                                                </div>
                                                <div class="quantity-trigger-wrapper">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.54">
                                                            <path d="M7 10L12 15L17 10H7Z" fill="#202020"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" class="default-button">
                                            Заказать
                                        </a>
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="commodity-default-card">
                                <div class="commodity-image-wrapper">
                                    <img src="img/common/card.png" alt="">
                                </div>
                                <div class="commodity-card-body">
                                    <h4 class="commodity-card-title">
                                        Дисплей iPhone X с Тачскрином, стеклом и рамкой, чёрный
                                        восстановленный.
                                    </h4>
                                    <div class="commodity-card-parameter">
                                        <img src="img/common/tick.svg" alt="">
                                        <span>
                                       В наличии
                                    </span>
                                    </div>
                                    <div class="commodity-card-price-row">
                                        <div class="commodity-card-price">
                                            € 250
                                        </div>
                                    </div>
                                    <div class="commodity-card-additional-price">
                                        <span>39.99 € excl.VAT</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="quantity-drop">
                                            <div class="quantity-view-wrapper align-items-center d-flex">
                                                <div class="quantity-input-wrapper">
                                                    <label>
                                                        <input value="1" type="text" class="quantity-input">
                                                    </label>
                                                </div>
                                                <div class="quantity-trigger-wrapper">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.54">
                                                            <path d="M7 10L12 15L17 10H7Z" fill="#202020"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" class="default-button">
                                            в корзину
                                        </a>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div class="commodity-pagination-2 swiper-pagination"></div>
            </div>
        </section>
        <section class="commodity commodity-no-slider">
            <div class="container">
                <h3 class="small-title">
                    запчасти для Apple iphone 6s
                </h3>
                <div class="">
                    <div class="row market-detail-card-row fixing-type-for-device-row">
                        <div class="col-6">
                            <div class="commodity-default-card">
                                <div class="commodity-image-wrapper">
                                    <img src="img/common/card.png" alt="">
                                </div>
                                <div class="commodity-card-body">
                                    <h4 class="commodity-card-title">
                                        Дисплей iPhone X с Тачскрином, стеклом и рамкой, чёрный
                                        восстановленный.
                                    </h4>
                                    <div class="commodity-card-parameter">
                                        <img src="img/common/tick.svg" alt="">
                                        <span>
                                       В наличии
                                    </span>
                                    </div>
                                    <div class="commodity-card-price-row">
                                        <div class="commodity-card-price">
                                            € 250
                                        </div>
                                    </div>
                                    <div class="commodity-card-additional-price">
                                        <span>39.99 € excl.VAT</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="quantity-drop">
                                            <div class="quantity-view-wrapper align-items-center d-flex">
                                                <div class="quantity-input-wrapper">
                                                    <label>
                                                        <input value="1" type="text" class="quantity-input">
                                                    </label>
                                                </div>
                                                <div class="quantity-trigger-wrapper">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.54">
                                                            <path d="M7 10L12 15L17 10H7Z" fill="#202020"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" class="default-button">
                                            в корзину
                                        </a>
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div class="col-6">
                            <div class="commodity-default-card">
                                <div class="commodity-image-wrapper">
                                    <img src="img/common/card.png" alt="">
                                </div>
                                <div class="commodity-card-body">
                                    <h4 class="commodity-card-title">
                                        Дисплей iPhone X с Тачскрином, стеклом и рамкой, чёрный
                                        восстановленный.
                                    </h4>
                                    <div class="commodity-card-parameter">
                                        <img src="img/common/low.svg" alt="">
                                        <span>
                    1  в наличии
                  </span>
                                    </div>
                                    <div class="commodity-card-price-row">
                                        <div class="commodity-card-price">
                                            € 250
                                        </div>
                                    </div>
                                    <div class="commodity-card-additional-price">
                                        <span>39.99 € excl.VAT</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="quantity-drop">
                                            <div class="quantity-view-wrapper align-items-center d-flex">
                                                <div class="quantity-input-wrapper">
                                                    <label>
                                                        <input value="1" type="text" class="quantity-input">
                                                    </label>
                                                </div>
                                                <div class="quantity-trigger-wrapper">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.54">
                                                            <path d="M7 10L12 15L17 10H7Z" fill="#202020"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" class="default-button">
                                            в корзину
                                        </a>
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div class="col-6">
                            <div class="commodity-default-card">
                                <div class="commodity-image-wrapper">
                                    <img src="img/common/card.png" alt="">
                                </div>
                                <div class="commodity-card-body">
                                    <h4 class="commodity-card-title">
                                        Дисплей iPhone X с Тачскрином, стеклом и рамкой, чёрный
                                        восстановленный.
                                    </h4>
                                    <div class="commodity-card-parameter">
                                        <img src="img/common/order.svg" alt="">
                                        <span>
                    Под заказ
                  </span>
                                    </div>
                                    <div class="commodity-card-price-row">
                                        <div class="commodity-card-price">
                                            € 250
                                        </div>
                                    </div>
                                    <div class="commodity-card-additional-price">
                                        <span>39.99 € excl.VAT</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="quantity-drop">
                                            <div class="quantity-view-wrapper align-items-center d-flex">
                                                <div class="quantity-input-wrapper">
                                                    <label>
                                                        <input value="1" type="text" class="quantity-input">
                                                    </label>
                                                </div>
                                                <div class="quantity-trigger-wrapper">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.54">
                                                            <path d="M7 10L12 15L17 10H7Z" fill="#202020"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" class="default-button">
                                            Заказать
                                        </a>
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div class="col-6">
                            <div class="commodity-default-card">
                                <div class="commodity-image-wrapper">
                                    <img src="img/common/card.png" alt="">
                                </div>
                                <div class="commodity-card-body">
                                    <h4 class="commodity-card-title">
                                        Дисплей iPhone X с Тачскрином, стеклом и рамкой, чёрный
                                        восстановленный.
                                    </h4>
                                    <div class="commodity-card-parameter">
                                        <img src="img/common/tick.svg" alt="">
                                        <span>
                                       В наличии
                                    </span>
                                    </div>
                                    <div class="commodity-card-price-row">
                                        <div class="commodity-card-price">
                                            € 250
                                        </div>
                                    </div>
                                    <div class="commodity-card-additional-price">
                                        <span>39.99 € excl.VAT</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="quantity-drop">
                                            <div class="quantity-view-wrapper align-items-center d-flex">
                                                <div class="quantity-input-wrapper">
                                                    <label>
                                                        <input value="1" type="text" class="quantity-input">
                                                    </label>
                                                </div>
                                                <div class="quantity-trigger-wrapper">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.54">
                                                            <path d="M7 10L12 15L17 10H7Z" fill="#202020"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" class="default-button">
                                            в корзину
                                        </a>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="commodity-pagination-1 swiper-pagination"></div>

            </div>
        </section>
        <section class="commodity commodity-slider commodity-slider-2 commodity-2">
            <div class="container">
                <h3 class="small-title">
                    аксессуары для Apple iphone 6s
                </h3>

                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="commodity-default-card">
                                <div class="commodity-image-wrapper">
                                    <img src="img/common/card.png" alt="">
                                </div>
                                <div class="commodity-card-body">
                                    <h4 class="commodity-card-title">
                                        Дисплей iPhone X с Тачскрином, стеклом и рамкой, чёрный
                                        восстановленный.
                                    </h4>
                                    <div class="commodity-card-parameter">
                                        <img src="img/common/tick.svg" alt="">
                                        <span>
                                       В наличии
                                    </span>
                                    </div>
                                    <div class="commodity-card-price-row">
                                        <div class="commodity-card-price">
                                            € 250
                                        </div>
                                    </div>
                                    <div class="commodity-card-additional-price">
                                        <span>39.99 € excl.VAT</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="quantity-drop">
                                            <div class="quantity-view-wrapper align-items-center d-flex">
                                                <div class="quantity-input-wrapper">
                                                    <label>
                                                        <input value="1" type="text" class="quantity-input">
                                                    </label>
                                                </div>
                                                <div class="quantity-trigger-wrapper">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.54">
                                                            <path d="M7 10L12 15L17 10H7Z" fill="#202020"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" class="default-button">
                                            в корзину
                                        </a>
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="commodity-default-card">
                                <div class="commodity-image-wrapper">
                                    <img src="img/common/card.png" alt="">
                                </div>
                                <div class="commodity-card-body">
                                    <h4 class="commodity-card-title">
                                        Дисплей iPhone X с Тачскрином, стеклом и рамкой, чёрный
                                        восстановленный.
                                    </h4>
                                    <div class="commodity-card-parameter">
                                        <img src="img/common/low.svg" alt="">
                                        <span>
                    1  в наличии
                  </span>
                                    </div>
                                    <div class="commodity-card-price-row">
                                        <div class="commodity-card-price">
                                            € 250
                                        </div>
                                    </div>
                                    <div class="commodity-card-additional-price">
                                        <span>39.99 € excl.VAT</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="quantity-drop">
                                            <div class="quantity-view-wrapper align-items-center d-flex">
                                                <div class="quantity-input-wrapper">
                                                    <label>
                                                        <input value="1" type="text" class="quantity-input">
                                                    </label>
                                                </div>
                                                <div class="quantity-trigger-wrapper">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.54">
                                                            <path d="M7 10L12 15L17 10H7Z" fill="#202020"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" class="default-button">
                                            в корзину
                                        </a>
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="commodity-default-card">
                                <div class="commodity-image-wrapper">
                                    <img src="img/common/card.png" alt="">
                                </div>
                                <div class="commodity-card-body">
                                    <h4 class="commodity-card-title">
                                        Дисплей iPhone X с Тачскрином, стеклом и рамкой, чёрный
                                        восстановленный.
                                    </h4>
                                    <div class="commodity-card-parameter">
                                        <img src="img/common/order.svg" alt="">
                                        <span>
                    Под заказ
                  </span>
                                    </div>
                                    <div class="commodity-card-price-row">
                                        <div class="commodity-card-price">
                                            € 250
                                        </div>
                                    </div>
                                    <div class="commodity-card-additional-price">
                                        <span>39.99 € excl.VAT</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="quantity-drop">
                                            <div class="quantity-view-wrapper align-items-center d-flex">
                                                <div class="quantity-input-wrapper">
                                                    <label>
                                                        <input value="1" type="text" class="quantity-input">
                                                    </label>
                                                </div>
                                                <div class="quantity-trigger-wrapper">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.54">
                                                            <path d="M7 10L12 15L17 10H7Z" fill="#202020"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" class="default-button">
                                            Заказать
                                        </a>
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="commodity-default-card">
                                <div class="commodity-image-wrapper">
                                    <img src="img/common/card.png" alt="">
                                </div>
                                <div class="commodity-card-body">
                                    <h4 class="commodity-card-title">
                                        Дисплей iPhone X с Тачскрином, стеклом и рамкой, чёрный
                                        восстановленный.
                                    </h4>
                                    <div class="commodity-card-parameter">
                                        <img src="img/common/tick.svg" alt="">
                                        <span>
                                       В наличии
                                    </span>
                                    </div>
                                    <div class="commodity-card-price-row">
                                        <div class="commodity-card-price">
                                            € 250
                                        </div>
                                    </div>
                                    <div class="commodity-card-additional-price">
                                        <span>39.99 € excl.VAT</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="quantity-drop">
                                            <div class="quantity-view-wrapper align-items-center d-flex">
                                                <div class="quantity-input-wrapper">
                                                    <label>
                                                        <input value="1" type="text" class="quantity-input">
                                                    </label>
                                                </div>
                                                <div class="quantity-trigger-wrapper">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.54">
                                                            <path d="M7 10L12 15L17 10H7Z" fill="#202020"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" class="default-button">
                                            в корзину
                                        </a>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div class="commodity-pagination-2 swiper-pagination"></div>
            </div>
        </section>
        <section class="commodity commodity-no-slider">
            <div class="container">
                <h3 class="small-title">
                    аксессуары для Apple iphone 6s
                </h3>
                <div class="">
                    <div class="row market-detail-card-row fixing-type-for-device-row">
                        <div class="col-6">
                            <div class="commodity-default-card">
                                <div class="commodity-image-wrapper">
                                    <img src="img/common/card.png" alt="">
                                </div>
                                <div class="commodity-card-body">
                                    <h4 class="commodity-card-title">
                                        Дисплей iPhone X с Тачскрином, стеклом и рамкой, чёрный
                                        восстановленный.
                                    </h4>
                                    <div class="commodity-card-parameter">
                                        <img src="img/common/tick.svg" alt="">
                                        <span>
                                       В наличии
                                    </span>
                                    </div>
                                    <div class="commodity-card-price-row">
                                        <div class="commodity-card-price">
                                            € 250
                                        </div>
                                    </div>
                                    <div class="commodity-card-additional-price">
                                        <span>39.99 € excl.VAT</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="quantity-drop">
                                            <div class="quantity-view-wrapper align-items-center d-flex">
                                                <div class="quantity-input-wrapper">
                                                    <label>
                                                        <input value="1" type="text" class="quantity-input">
                                                    </label>
                                                </div>
                                                <div class="quantity-trigger-wrapper">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.54">
                                                            <path d="M7 10L12 15L17 10H7Z" fill="#202020"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" class="default-button">
                                            в корзину
                                        </a>
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div class="col-6">
                            <div class="commodity-default-card">
                                <div class="commodity-image-wrapper">
                                    <img src="img/common/card.png" alt="">
                                </div>
                                <div class="commodity-card-body">
                                    <h4 class="commodity-card-title">
                                        Дисплей iPhone X с Тачскрином, стеклом и рамкой, чёрный
                                        восстановленный.
                                    </h4>
                                    <div class="commodity-card-parameter">
                                        <img src="img/common/low.svg" alt="">
                                        <span>
                    1  в наличии
                  </span>
                                    </div>
                                    <div class="commodity-card-price-row">
                                        <div class="commodity-card-price">
                                            € 250
                                        </div>
                                    </div>
                                    <div class="commodity-card-additional-price">
                                        <span>39.99 € excl.VAT</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="quantity-drop">
                                            <div class="quantity-view-wrapper align-items-center d-flex">
                                                <div class="quantity-input-wrapper">
                                                    <label>
                                                        <input value="1" type="text" class="quantity-input">
                                                    </label>
                                                </div>
                                                <div class="quantity-trigger-wrapper">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.54">
                                                            <path d="M7 10L12 15L17 10H7Z" fill="#202020"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" class="default-button">
                                            в корзину
                                        </a>
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div class="col-6">
                            <div class="commodity-default-card">
                                <div class="commodity-image-wrapper">
                                    <img src="img/common/card.png" alt="">
                                </div>
                                <div class="commodity-card-body">
                                    <h4 class="commodity-card-title">
                                        Дисплей iPhone X с Тачскрином, стеклом и рамкой, чёрный
                                        восстановленный.
                                    </h4>
                                    <div class="commodity-card-parameter">
                                        <img src="img/common/order.svg" alt="">
                                        <span>
                    Под заказ
                  </span>
                                    </div>
                                    <div class="commodity-card-price-row">
                                        <div class="commodity-card-price">
                                            € 250
                                        </div>
                                    </div>
                                    <div class="commodity-card-additional-price">
                                        <span>39.99 € excl.VAT</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="quantity-drop">
                                            <div class="quantity-view-wrapper align-items-center d-flex">
                                                <div class="quantity-input-wrapper">
                                                    <label>
                                                        <input value="1" type="text" class="quantity-input">
                                                    </label>
                                                </div>
                                                <div class="quantity-trigger-wrapper">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.54">
                                                            <path d="M7 10L12 15L17 10H7Z" fill="#202020"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" class="default-button">
                                            Заказать
                                        </a>
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div class="col-6">
                            <div class="commodity-default-card">
                                <div class="commodity-image-wrapper">
                                    <img src="img/common/card.png" alt="">
                                </div>
                                <div class="commodity-card-body">
                                    <h4 class="commodity-card-title">
                                        Дисплей iPhone X с Тачскрином, стеклом и рамкой, чёрный
                                        восстановленный.
                                    </h4>
                                    <div class="commodity-card-parameter">
                                        <img src="img/common/tick.svg" alt="">
                                        <span>
                                       В наличии
                                    </span>
                                    </div>
                                    <div class="commodity-card-price-row">
                                        <div class="commodity-card-price">
                                            € 250
                                        </div>
                                    </div>
                                    <div class="commodity-card-additional-price">
                                        <span>39.99 € excl.VAT</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="quantity-drop">
                                            <div class="quantity-view-wrapper align-items-center d-flex">
                                                <div class="quantity-input-wrapper">
                                                    <label>
                                                        <input value="1" type="text" class="quantity-input">
                                                    </label>
                                                </div>
                                                <div class="quantity-trigger-wrapper">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.54">
                                                            <path d="M7 10L12 15L17 10H7Z" fill="#202020"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" class="default-button">
                                            в корзину
                                        </a>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="commodity-pagination-1 swiper-pagination"></div>

            </div>
        </section>
    </main>

@endsection
