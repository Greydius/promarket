@extends('system.master')

@section('content')

    <main class="main">
        <section class="cart-content pt-4">
            @include('components.market.cart-inner', compact('order'))
        </section>
        @isset($order->products[0])
            <section class="commodity commodity-slider commodity-slider-1 commodity-1">
                <div class="container">
                    <h3 class="small-title">
                        {{__("TOP SPARE PARTS")}}
                    </h3>
                    <div class="swiper-container">
                        <div class="swiper-wrapper">

                            @foreach($order->products[0]->subCategory[0]->products as $product)
                                <div class="swiper-slide">
                                    @include('components.market.card', compact('product'))
                                </div>
                            @endforeach
                        </div>
                    </div>
                    <div class="commodity-pagination-1 swiper-pagination"></div>

                </div>
            </section>
            <section class="commodity commodity-no-slider">
                <div class="container">
                    <h3 class="small-title">
                        {{__("TOP SPARE PARTS")}}
                    </h3>
                    <div class="">
                        <div class="row market-detail-card-row fixing-type-for-device-row">
                            @foreach($order->products[0]->subCategory[0]->products as $product)
                                <div class="col-6">
                                    @include('components.market.card', compact('product'))
                                </div>
                            @endforeach
                        </div>
                    </div>
                    <div class="commodity-pagination-1 swiper-pagination"></div>

                </div>
            </section>
        @endisset
    </main>
@endsection
