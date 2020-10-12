@extends('system.master')

@section('content')

    <main class="main">
        <section class="cart-content pt-4">
            <div class="container">
                <div class="small-title">
                    КОРЗИНА (4 продукта)
                </div>
                <div class="row justify-content-end">
                    <div class="clean-cart">
                <span>
                    <img src="./img/cart/Vector.svg" alt="icon">
                </span>
                        Очистить корзину
                    </div>
                    <div class="col-xl-12">
                        @foreach($order->products as $product)
                            <div class="cart-item d-flex align-items-center justify-content-between my-3"
                                 style="background-image: url({{asset('assets/./img/cart/Rectangle\ 74.svg')}});">
                                <div class="remove-cart-item-tablet"><a href="#" class="remove-cart-item"><img
                                            src="./img/cart/Vector.svg" alt="icon"></a></div>
                                <div class="cart-changing">
                                    <div>{{$product->name}}
                                        <div><a href="#" class="remove-cart-item remove-cart-item-pc">Удалить</a></div>
                                    </div>
                                    <div class="quantity-drop quantity-selection-drop-down">
                                        <div class="quantity-view-wrapper align-items-center d-flex">
                                            <div class="quantity-input-wrapper">
                                                <label>

                                                    <input value="{{$product->pivot->count}}" type="text" class="quantity-input">
                                                </label>
                                            </div>
                                            <div class="quantity-trigger-wrapper">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.54">
                                                        <path d="M7 10L12 15L17 10H7Z" fill="#202020"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="commodity-card-price commodity-card-price-mobile">
                                        44.50 €
                                        <div class="commodity-card-additional-price">
                                            <span>39.99 € excl.VAT</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="commodity-card-price commodity-card-price-pc">
                                    44.50 €
                                    <div class="commodity-card-additional-price">
                                        <span>39.99 € excl.VAT</span>
                                    </div>
                                </div>
                            </div>

                        @endforeach
                    </div>
                    <div class="col-xl-12 d-flex justify-content-between pt-3">
                        <div class="small-title small-title-pc">
                    <span>
                        <img src="./img/cart/arrow_back-24px 1.svg" alt="icon">
                    </span>
                            ПРОДОЛЖИТЬ ПОКУПКИ
                        </div>
                        <div class="small-title d-flex">
                            ОБЩАЯ СУММА ЗАКАЗА: &ensp; <span class="commodity-card-price"> 344.50 €
                        <span class="commodity-card-price-muted">39.99 € excl.VAT</span>
                    </span>
                        </div>
                    </div>
                    <div class="col-xl-12 text-center">
                        <button type="submit" class="submit-form default-button">
                            ОФОРМИТЬ ЗАКАЗ
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <section class="commodity commodity-slider commodity-slider-1 commodity-1">
            <div class="container">
                <h3 class="small-title">
                    Топовые запчасти
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
                <div class="commodity-pagination-1 swiper-pagination"></div>

            </div>
        </section>
        <section class="commodity commodity-no-slider">
            <div class="container">
                <h3 class="small-title">
                    Топовые запчасти
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
