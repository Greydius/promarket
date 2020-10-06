@extends('system.master')

@section('content')
    <main class="main">
        <div class="fixing-container">
            <a href="{{route('fixing-order-detail', [$model->manufacturer->fixingType->code, $model->manufacturer->code, $model->code])}}?id=1" data-link="{{Request::url()}}/order?id=" class="fixed-button js-order-link-creation-button">
                <div class="default-button-wrap">
                    <div class="default-button">
                        заявка
                    </div>
                </div>
            </a>
            <div class="container">
                <div class="row">

                    @include('components.fixing-sidebar')

                    <div class="col-lg-9">
                        <div class="brand-product">
                            <div class="brand-product-container">
                                <div class="bread-crumbs">
                                    <ul class="d-flex">
                                        <li class="bread-crumb-link">
                                            <a href="#">
                                                Магазин
                                            </a>
                                        </li>
                                        <li class="bread-crumb-link">
                                            <a href="#">
                                                Ремонт
                                            </a>
                                        </li>
                                        <li class="bread-crumb-link bread-crumb-link-prev">
                                            <a href="#">
                                                Ремонт мобильных телефонов
                                            </a>
                                        </li>
                                        <li class="bread-crumb-link-active">
                                            Apple
                                        </li>
                                    </ul>
                                </div>
                                <h1 class="main-title">
                                    {{$model->title}}
                                </h1>


                            </div>

                            <h3 class="small-title">
                                Выберите тип ремонта, который вас интересует:
                            </h3>

                            <div class="fixing-type-for-device-row not-colored making-active-row row">
                                @foreach($model->details as $detail)
                                    <div class="col-lg-4 col-md-4" data-id="{{$detail->id}}">
                                        @include('components.fixing.detail', $detail)
                                    </div>
                                @endforeach

                            </div>
                            <div class="brand-product-inquiry-button hidden-lg visible-md hidden-sm">
                                <a href="#" class="default-button">
                                    заявка
                                </a>
                            </div>
                            <div class="additional-commodities-wrapper">
                                <h3 class="small-title">
                                    аксессуары для Apple iPhone 11
                                </h3>

                                <div class="row">
                                    <div class="col-lg-4 col-6">
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
                                    <div class="col-lg-4 col-6">
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
                                    <div class="col-lg-4 col-6">
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
                                    <div class="col-lg-4 col-6">
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
                                    <div class="col-lg-4 col-6">
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
                                    <div class="col-lg-4 col-6">
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

                                <a href="#" class="additional-link">Смотреть все комплектующие</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </main>

@endsection
