@extends('system.master')

@section('content')

    <section class="main-banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="main-title">
                        {{__("start to repair your device right now")}}
                    </h1>
                    <div class="main_page_banner_text">
                        <p>{{__("we are professionally engaged in the repair of electronic equipment more than 15 years, providing quality service at a reasonable price")}}
                        </p>
                    </div>
                    <div class="banner-categories-block">
                        <h3 class="small-title">
                            {{__("CHOOSE CATEGORIES")}}:
                        </h3>
                        <div class="row main-banner-row">
                            <div class="col-lg-4 main-banner-col">
                                <a href="{{ route('fixing-type', 'mobilo_telefonu_detalas') }}"
                                   class="fixing-category-card">
                                    <img src="{{ asset('assets/img/common/smartphone.svg') }}" alt="">
                                    <span>{{__("Phone Repair")}}</span>
                                </a>
                            </div>
                            <div class="col-lg-4 main-banner-col">
                                <a href="{{ route('fixing-type', 'planšetdatoru_detaļas') }}"
                                   class="fixing-category-card">
                                    <img src="{{ asset('assets/img/common/tablet.svg') }}" alt="">
                                    <span>{{__("Tablet Repair")}}</span>
                                </a>
                            </div>
                            <div class="col-lg-4 main-banner-col">
                                <a href="{{ route('fixing-type', 'gudro_pulksteņu_detaļas') }}"
                                   class="fixing-category-card">
                                    <img src="{{ asset('assets/img/common/laptop.svg') }}" alt="">
                                    <span>{{__("Laptop Repair")}}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    @foreach($popularCategories as $category)
        @php
            if (count($category->allProducts()->toArray()) > 4) {
                $products = $category->allProducts()->random(4);
            } else {
                $products = $category->allProducts();
            }
        @endphp
        <section
            class="commodity commodity-slider commodity-slider-{{$loop->index + 1}} commodity-{{$loop->index + 1}}">
            <div class="container">
                <h3 class="small-title">
                    {{__("Top")}} {{$category->name}}
                </h3>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        @foreach($products as $product)
                            <div class="swiper-slide">
                                @include('components.market.card', compact('product'))
                            </div>
                        @endforeach
                    </div>
                </div>
                <div class="commodity-pagination-{{$loop->index + 1}} swiper-pagination"></div>

            </div>
        </section>
        <section class="commodity commodity-no-slider">
            <div class="container">
                <h3 class="small-title">
                    {{$category->name}}
                </h3>
                <div class="">
                    <div class="row market-detail-card-row fixing-type-for-device-row">
                        @foreach($products as $product)
                            <div class="col-6">
                                @include('components.market.card', compact('product'))
                            </div>
                        @endforeach
                    </div>
                </div>
                <div class="commodity-pagination-1 swiper-pagination"></div>

            </div>
        </section>
    @endforeach

@endsection
