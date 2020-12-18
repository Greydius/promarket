@extends('system.master')

@section('content')
	<main class="main lk-main">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-4 sidebar lk-sidebar lk-inner-sidebar">
                <div class="sidebar-profile-overview">
                    <div class="d-flex align-items-center profile-overview justify-content-between">
                        <div class="profile-photo">
                            <img src="" alt="">
                        </div>
                        <div class="profile-name">
                            ВЛАДОК МИРОШНИЧЕНКО
                        </div>
                    </div>
                </div>
                <ul class="lk-tabs-changers">
                    <li class="sidebar-item active">
                        <a href="#">
                            <img src="{{ asset('/assets/img/lk/orders_icon.svg') }}" alt="">
                            <span>
                                {{__("Your orders")}}
                            </span>
                        </a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#">
                            <img src="{{ asset('/assets/img/lk/account_icon.svg') }}" alt="">
                            <span>
                                {{__("account settings")}}
                            </span>
                        </a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#">
                            <img src="{{ asset('/assets/img/lk/quit_icon.svg') }}" alt="">
                            <span>
                                {{__("Log out")}}
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-9 lk-container lk-inner-container">
                <div class="lk-profile-bread-crumbs">
                    {{ Breadcrumbs::render('account') }}
                </div>
                <div class="lk-tabs-wrapper">
                    <div class="lk-table-container lk-inner-table-container active">
                        <div class="lk-order-arrow-back d-flex align-items-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.54">
                                    <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                                          fill="#202020"/>
                                </g>
                            </svg>
                            <a href="/profile">
                            <span>
                                {{__("Back")}}
                            </span>
                        </a>
                        </div>
                        <div class="lk-inner-row d-flex align-items-center">
                            <h3 class="small-title">
                               {{__("Order")}}: {{$order->id}} PRO
                            </h3>
                            <h3 class="small-title">
                               {{__("Order status")}}:  @if($order->status == 1)
                                                Обрабатывается
                                            @endif
                                            @if($order->status == 2)
                                                Завершено
                                            @endif
                            </h3>
                        </div>

                        <div class="lk-inner-cards-wrapper">
                        	@foreach($order->products as $product )
                            <div class="lk-inner-card d-flex">
                                <div class="lk-inner-card-image-wrap">
                                    <img src="{{ asset('assets/img/lk/ihpone.jpg') }}" alt="">
                                </div>
                                <div class="d-flex lk-innercard-wrap">
                                    <div class="lk-text-wrapper">
                                        <div class="lk-card-title">
                                        	{{$product->name}}, {{$product->color}}
                                        </div>
                                        <a href="#" class="lk-card-link">
                                            Удалить
                                        </a>
                                    </div>
                                    <div class="lk-input-wrapper">
                                        <div class="quantity-drop">
                                            <div class="quantity-view-wrapper align-items-center d-flex">
                                                <div class="quantity-input-wrapper">
                                                    <label>
                                                        <input value="{{$product->pivot->count}}" type="text" class="quantity-input">
                                                    </label>
                                                </div>
                                                <div class="quantity-trigger-wrapper">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.54">
                                                            <path d="M7 10L12 15L17 10H7Z" fill="#202020"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="lk-card-cost">
                                        {{$product->price}} €
                                        <span class="commodity-card-additional-price">{{ $product->price_with_installation }} € excl.VAT</span>
                                    </div>
                                </div>
                            </div>
                            @endforeach
                        </div>

                        <div class="d-flex lk-inner-additional-order-params">
                            <div class="lk-inner-additional-order-left">
                                <div>
                                    <p class="uppercase">
                                        СПОСОБ ОПЛАТЫ
                                    </p>
                                    <p>
                                        Перечисление
                                    </p>
                                </div>
                                <div>
                                    <p class="uppercase">
                                        {{__("DELIVERY ADDRESS")}}
                                    </p>
                                    <p>
                                        Prosadiga
                                        Vladslavs Mirošničenko
                                        Ģertrudes 77, LV-1011, Rīga, Latvija
                                    </p>
                                </div>
                            </div>
                            <div class="lk-inner-additional-order-right">
                                <div>
                                    <p>
                                        ОБЩАЯ СУММА ЗАКАЗА:
                                    </p>
                                    <div class="lk-inner-addditional-column lk-card-cost">
                                        344.50 €
                                        <span>
                                            39.99 € excl.VAT
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
@endsection
