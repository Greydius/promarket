@extends('system.master')

@section('content')

    <section class="main-banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="main-title">
                        Начните ремонт своего устройства прямо сейчас.
                    </h1>
                    <div class="main_page_banner_text">
                        <p>
                            Более 10ти лет мы профессионально занимаемся ремонтом электронной техники, обеспечивая
                            качественную услугу
                            по
                            разумной цене.
                        </p>
                    </div>
                    <div class="banner-categories-block">
                        <h3 class="small-title">
                            Выберите категории:
                        </h3>
                        <div class="row main-banner-row">
                            <div class="col-lg-4 main-banner-col">
                                <a href="{{ route('fixing-type', 'mobile') }}" class="fixing-category-card">
                                    <img src="{{ asset('assets/img/common/smartphone.svg') }}" alt="">
                                    <span>Ремонт телефона</span>
                                </a>
                            </div>
                            <div class="col-lg-4 main-banner-col">
                                <a href="{{ route('fixing-type', 'tablet') }}" class="fixing-category-card">
                                    <img src="{{ asset('assets/img/common/tablet.svg') }}" alt="">
                                    <span>Ремонт планшета</span>
                                </a>
                            </div>
                            <div class="col-lg-4 main-banner-col">
                                <a href="{{ route('fixing-type', 'laptop') }}" class="fixing-category-card">
                                    <img src="{{ asset('assets/img/common/laptop.svg') }}" alt="">
                                    <span>Ремонт ноутбука</span>
                                </a>
                            </div>
                        </div>
                    </div>
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
                        @include('components.shopping-card')
                    </div>
                    <div class="swiper-slide">
                        @include('components.shopping-card')
                    </div>
                    <div class="swiper-slide">
                        @include('components.shopping-card')
                    </div>
                    <div class="swiper-slide">
                        @include('components.shopping-card')
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
                        @include('components.shopping-card')
                    </div>
                    <div class="col-6">
                        @include('components.shopping-card')
                    </div>
                    <div class="col-6">
                        @include('components.shopping-card')
                    </div>
                    <div class="col-6">
                        @include('components.shopping-card')
                    </div>
                </div>
            </div>
            <div class="commodity-pagination-1 swiper-pagination"></div>

        </div>
    </section>
    <section class="commodity commodity-slider commodity-slider-2 commodity-2">
        <div class="container">
            <h3 class="small-title">
                Топовые запчасти
            </h3>

            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        @include('components.shopping-card')
                    </div>
                    <div class="swiper-slide">
                        @include('components.shopping-card')
                    </div>
                    <div class="swiper-slide">
                        @include('components.shopping-card')
                    </div>
                    <div class="swiper-slide">
                        @include('components.shopping-card')
                    </div>
                </div>

            </div>

            <div class="commodity-pagination-2 swiper-pagination"></div>
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
                        @include('components.shopping-card')
                    </div>
                    <div class="col-6">
                        @include('components.shopping-card')
                    </div>
                    <div class="col-6">
                        @include('components.shopping-card')
                    </div>
                    <div class="col-6">
                        @include('components.shopping-card')
                    </div>

                </div>
                <div class="commodity-pagination-1 swiper-pagination"></div>

            </div>
    </section>

@endsection
