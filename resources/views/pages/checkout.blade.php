@extends('system.master')

@section('content')

    <main class="main">

        <section class="cart-content pt-4">
            @include('components.market.cart-inner', compact('order'))

        </section>

        <section class="authorization-content mb-5">
            <div class="container">

                @if (!Auth::check() && session('regOnlyEmail') != '1')
                    <div class="small-title text-center my-4 hide-for-mobile">
                        {{__("Log in to place an order")}}
                    </div>
                    <div class="row justify-content-center hide-for-mobile">
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <button class="enter-via-facebook">{{__("Login with")}} Facebook</button>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <button class="enter-via-gmail">{{__("Login with")}} Google</button>
                        </div>
                    </div>
                    <div class="row  my-5">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 buy-with-registration p-5">
                            <div class="small-title mb-4">{{__("log into your account")}} </div>
                            <button class="enter-via-facebook show-for-mobile">{{__("Login with")}} Facebook</button>
                            <button class="enter-via-gmail show-for-mobile">{{__("Login with")}} Google</button>
                            <form method="POST" class="order-login">
                                @csrf
                                @if ($errors->has('email'))
                                    <span class="error">{{ $errors->first('email') }}</span>
                                @endif
                                <input type="email" placeholder="{{__('Email')}}" name="email" name="email">
                                @if ($errors->has('password'))
                                    <span class="error">{{ $errors->first('password') }}</span>
                                @endif
                                <input type="password" placeholder="{{__('Password')}}" name="password">
                                <p class="my-3">{{__("I forgot password!")}} <a href="#">{{__("Rebuild it soon")}} </a></p>
                                <p class="my-3"> {{__("Don't have an account?")}}<a href="#"> {{__("Register now")}}</a></p>
                                <button type="submit" class="default-button mt-4 order-login-btn">
                                    {{__("Login")}}
                                </button>
                            </form>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 buy-without-registration p-5">
                            <div class="small-title mb-4">{{__("buy without registration")}} </div>
                            <form action="{{route('regOnlyEmail')}}" method="POST" class="order-no-registration">
                                @csrf
                                @if ($errors->has('email'))
                                    <span class="error">{{ $errors->first('email') }}</span>
                                @endif
                                <input type="email" placeholder="{{__('Email')}}" name="email" name="email">

                                <p class="my-3">{{__("You will be able to register after making a purchase.")}}</p>
                                <button type="submit" class="default-button mt-4">
                                    {{__("Login")}}
                                </button>
                            </form>
                        </div>
                    </div>
                @endif
                @if (Auth::check())
                <div class="small-title text-center mb-4">{{__("delivery")}} </div>
                <div class="delivery-tabs">
                    <div class="row delivery-blocks">
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 active">
                            <div class="delivery-block p-5">
                                <div class="text-center">
                                   {{__("Pick up from the service center at Ģertrūdes 77. The goods are ready to receive.", ['center' => "Ģertrūdes 77"])}}
                                </div>
                                <div class="commodity-card-price mt-3">
                                    {{__("Is free")}}
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div class="delivery-block p-5">
                                <div class="text-center">
                                    {{__("Pick up from the selected parcel machine We will deliver to the parcel machine within 1 business day.")}}
                                </div>
                                <div class="commodity-card-price mt-3">
                                    3.95 €
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div class="delivery-block p-5">
                                <div class="text-center">
                                   {{__("Deliver to the specified address. We will deliver within 1 r. etc.")}}
                                </div>
                                <div class="commodity-card-price mt-3">
                                    5.99 €
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div class="delivery-content-wrapper">
                        <div class="delivery-tab-content active">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-12 m-auto">
                                    <div class="small-title text-center mb-4 mt-5">{{__("BUYER DATA")}} </div>
                                    <form action="{{ route('confirm.order') }}" method="POST"
                                          class="user-data user-data-self">
                                        @csrf
                                        <input type="hidden" name="delivery" value="Pacelt"><!-- Самовывоз -->
                                        <div class="d-flex radio-buttons-row align-items-center justify-content-center">
                                            <label class="radio-type">
                                                <input type="radio" @if(Auth::user()->identification_type == 0) checked @endif name="identification-type"
                                                       value=" {{__('Individual')}} ">
                                                <span>
                                            {{__('Individual')}}
                                        </span>
                                            </label>
                                            <label class="radio-type">
                                                <input type="radio" @if(Auth::user()->identification_type == 1) checked @endif class="legal_entity" name="identification-type"
                                                       value=" {{__('legal entity')}} ">
                                                <span>
                                            {{__('legal entity')}}
                                        </span>
                                            </label>
                                        </div>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="text" placeholder="{{__('First Name')}} " name="name" value="{{Auth::user()->username}}">
                                        </label>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="text" placeholder="{{__('Last Name')}} " name="firstname" value="{{Auth::user()->firstname}}">
                                        </label>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="email" placeholder="{{__('Email')}}" name="email" value="{{Auth::user()->email}}">
                                        </label>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="tel" placeholder="{{__('Phone Number')}} " name="telephone" value="{{Auth::user()->phone}}">
                                        </label>
                                        <textarea name="comment" id="comment" class="" cols="30" rows="10"
                                                  placeholder="{{__('order comment')}} "></textarea>
                                        <div class="for_legal_entity" style="display: none;">
                                            <div class="small-title text-center mb-4 mt-5">{{__("Company details")}} </div>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('registration code')}} " name="register_code"  value="{{Auth::user()->register_code}}">
                                            </label>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('Company name')}} " name="name_company" value="{{Auth::user()->name_company}}">
                                            </label>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('VAT payer code')}} " name="code_nds_pay" value="{{Auth::user()->code_nds_pay}}">
                                            </label>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('Company address')}} " name="address_company" value="{{Auth::user()->address_company}}">
                                            </label>
                                        </div>
                                        <div class="small-title text-center mb-4 mt-5">{{__("PAYMENT METHOD")}}</div>
                                        <select class="js-selectric" name="payment_method" id="">
                                            <option value="cash">{{__("Cash")}} </option>
                                            <option value="card">{{__("By card")}} </option>
                                        </select>
                                        {{--<div class="payment-drop-down-wrapper">
                                            <div class="payment-drop-down-trigger">
                                                <div class="changing">{{__("Select a Payment Method")}} </div>
                                                <img src="img/common/chevron-down.svg" alt="">
                                            </div>
                                            <div class="payment-drop-down">
                                                <ul>
                                                    <li class="payment-changer">наличные</li>
                                                    <li class="payment-changer">карта</li>
                                                </ul>
                                            </div>
                                        </div>--}}
                                        <div class="small-title justify-content-center d-flex">
                                            {{__("THE TOTAL AMOUNT OF THE ORDER")}}: &ensp; <span class="commodity-card-price"> {{$order->getFullPrice()}} €
                                            <span
                                                class="commodity-card-price-muted">{{number_format($order->getFullPrice() * $nds, 2, '.', '')}} € {{__("ex VAT")}}</span></span>
                                        </div>
                                        <button type="submit" class="default-button mt-5">
                                            {{__("Make an order")}}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="delivery-tab-content">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-12 m-auto">
                                    <div class="small-title text-center mb-4 mt-5">{{__('DELIVERY ADDRESS')}} </div>
                                    <form action="{{ route('confirm.order') }}" method="POST"
                                          class="user-data user-data-omniva">
                                        @csrf
                                        <input type="hidden" name="delivery" value="Paņemiet pakomātu, Omniva"><!-- Забрать почтомате, Omniva -->
                                        <select name="city" class="js-selectric">
                                            <option value="city1">{{__('City')}} </option>
                                            <option value="city2">{{__('City')}} </option>
                                            <option value="city3">{{__('City')}} </option>
                                        </select>
                                        {{--<div class="city-drop-down-wrapper">
                                            <div class="city-drop-down-trigger">
                                                <div class="changing">Латвия</div>
                                                <img src="img/common/chevron-down.svg" alt="">
                                            </div>
                                            <div class="city-drop-down">
                                                <ul>

                                                </ul>
                                            </div>
                                        </div>--}}
                                        <div class="small-title text-center mb-4 mt-5">{{__("BUYER DATA")}} </div>
                                        <div class="d-flex radio-buttons-row align-items-center justify-content-center">
                                            <label class="radio-type">
                                                <input type="radio" name="identification-type" @if(Auth::user()->identification_type == 0) checked @endif
                                                       value=" {{__('Individual')}} ">
                                                <span>
                                            {{__('Individual')}}
                                        </span>
                                            </label>
                                            <label class="radio-type">
                                                <input type="radio" name="identification-type" class="legal_entity"  @if(Auth::user()->identification_type == 1) checked @endif
                                                       value=" {{__('legal entity')}} ">
                                                <span>
                                            {{__('legal entity')}}
                                        </span>
                                            </label>
                                        </div>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="text" placeholder="{{__('First Name')}} " name="name" value="{{Auth::user()->username}}">
                                        </label>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="text" placeholder="{{__('Last Name')}} " name="firstname" value="{{Auth::user()->firstname}}">
                                        </label>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="email" placeholder="{{__('Email')}}" name="email" value="{{Auth::user()->email}}">
                                        </label>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="tel" placeholder="{{__('Phone Number')}} " name="telephone" value="{{Auth::user()->phone}}">
                                        </label>
                                        
                                        <textarea name="comment" id="comment" cols="30" rows="10"
                                                  placeholder="{{__('order comment')}} "></textarea>
                                        <div class="for_legal_entity" style="display: none;">
                                            <div class="small-title text-center mb-4 mt-5">{{__("Company details")}} </div>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('registration code')}} " name="register_code">
                                            </label>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('Company name')}} " name="name_company">
                                            </label>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('VAT payer code')}} " name="code_nds_pay">
                                            </label>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('Company address')}} " name="address_company">
                                            </label>
                                        </div>
                                        <div class="small-title text-center mb-4 mt-5">{{__("PAYMENT METHOD")}}</div>
                                        <select class="js-selectric" name="payment_method" id="">
                                            <option value="cash">{{__("Cash")}} </option>
                                            <option value="card">{{__("By card")}} </option>
                                        </select>
                                        {{--<div class="payment-drop-down-wrapper">
                                            <div class="payment-drop-down-trigger">
                                                <div class="changing">{{__("Select a Payment Method")}} </div>
                                                <img src="img/common/chevron-down.svg" alt="">
                                            </div>
                                            <div class="payment-drop-down">
                                                <ul>
                                                    <li class="payment-changer">наличные</li>
                                                    <li class="payment-changer">карта</li>
                                                </ul>
                                            </div>
                                        </div>--}}
                                        <div class="small-title justify-content-center d-flex">
                                            {{__("THE TOTAL AMOUNT OF THE ORDER")}}: &ensp; <span class="commodity-card-price"> {{$order->getFullPrice()}} €
                                            <span
                                                class="commodity-card-price-muted">39.99 € {{__("ex VAT")}}</span></span>
                                        </div>
                                        <button type="submit" class="default-button mt-5">
                                            {{__("Make an order")}}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="delivery-tab-content">
                            <form action="{{ route('confirm.order') }}" method="POST"
                                  class="user-data user-data-delivery">
                                @csrf
                                <input type="hidden" name="delivery" value="Piegāde uz norādīto adresi"><!-- Доставить по указанному адресу -->
                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-12 m-auto">
                                        <div class="small-title text-center mb-4 mt-5">{{__('DELIVERY ADDRESS')}} </div>
                                       {{-- <div class="city-drop-down-wrapper">
                                            <div class="city-drop-down-trigger">
                                                <div class="changing">Латвия</div>
                                                <img src="img/common/chevron-down.svg" alt="">
                                            </div>
                                            <div class="city-drop-down">
                                                <ul>
                                                    <li class="city-changer">{{__('City')}} </li>
                                                    <li class="city-changer">{{__('City')}} </li>
                                                    <li class="city-changer">{{__('City')}} </li>
                                                </ul>
                                            </div>
                                        </div>--}}
                                        <!-- <select name="city" class="js-selectric">
                                            <option value="city1">{{__('City')}} </option>
                                            <option value="city2">{{__('City')}} </option>
                                            <option value="city3">{{__('City')}} </option>
                                        </select> -->
                                        <input type="text" placeholder="{{__('City')}} " name="city">
                                        <input type="text" placeholder="{{__('DELIVERY ADDRESS')}} "
                                               name="delivery_address">
                                        <input type="text" placeholder="{{__('Postcode')}} " name="postcode">
                                        <textarea name="comment" id="comment" cols="30" rows="10"
                                                  placeholder="{{__('order comment')}} "></textarea>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-12 m-auto">
                                        <div class="small-title text-center mb-4 mt-5">{{__("BUYER DATA")}} </div>
                                        <div class="d-flex radio-buttons-row align-items-center justify-content-center">
                                            <label class="radio-type">
                                                <input type="radio" name="identification-type"  @if(Auth::user()->identification_type == 0) checked @endif
                                                       value="{{__('Individual')}} ">
                                                <span>
                                            {{__('Individual')}}
                                        </span>
                                            </label>
                                            <label class="radio-type">
                                                <input type="radio" name="identification-type" class="legal_entity"  @if(Auth::user()->identification_type == 0) checked @endif
                                                       value=" {{__('legal entity')}} ">
                                                <span>
                                            {{__('legal entity')}}
                                        </span>
                                            </label>
                                        </div>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="text" placeholder="{{__('First Name')}} " name="name" value="{{Auth::user()->username}}">
                                        </label>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="text" placeholder="{{__('Last Name')}} " name="firstname" value="{{Auth::user()->firstname}}">
                                        </label>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="email" placeholder="{{__('Email')}}" name="email" value="{{Auth::user()->email}}">
                                        </label>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="tel" placeholder="{{__('Phone Number')}} " name="telephone" value="{{Auth::user()->phone}}">
                                        </label>
                                        <textarea name="comment" id="comment" cols="30" rows="10"
                                                  placeholder="{{__('order comment')}} "></textarea>
                                        
                                          <div class="for_legal_entity" style="display: none;">
                                            <div class="small-title text-center mb-4 mt-5">{{__("Company details")}} </div>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('registration code')}} " name="register_code">
                                            </label>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('Company name')}} " name="name_company">
                                            </label>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('VAT payer code')}} " name="code_nds_pay">
                                            </label>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('Company address')}} " name="address_company">
                                            </label>
                                        </div>
                                        <div class="small-title text-center mb-4 mt-5">{{__("PAYMENT METHOD")}}</div>
                                        <select class="js-selectric" name="payment_method" id="">
                                            <option value="cash">{{__("Cash")}} </option>
                                            <option value="card">{{__("By card")}} </option>
                                        </select>
                                        {{--<div class="payment-drop-down-wrapper">
                                            <select name="payment_method"></select>
                                            <div class="payment-drop-down-trigger">
                                                <div class="changing">{{__("Select a Payment Method")}} </div>
                                                <img src="img/common/chevron-down.svg" alt="">
                                            </div>
                                            <div class="payment-drop-down">
                                                <ul>
                                                    <li class="payment-changer">наличные</li>
                                                    <li class="payment-changer">карта</li>
                                                </ul>
                                            </div>
                                        </div>--}}
                                        <div class="small-title justify-content-center d-flex">
                                            {{__("THE TOTAL AMOUNT OF THE ORDER")}}: &ensp; <span class="commodity-card-price">  {{$order->getFullPrice()}} €
                                            <span
                                                class="commodity-card-price-muted">39.99 € {{__("ex VAT")}}</span></span>
                                        </div>
                                        <button type="submit" class="default-button mt-5">
                                            {{__("Make an order")}}
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                @endif
                @if(!Auth::check() && session('regOnlyEmail') == '1')
                <div class="small-title text-center mb-4">{{__("delivery")}} </div>
                <div class="delivery-tabs">
                    <div class="row delivery-blocks">
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 active">
                            <div class="delivery-block p-5">
                                <div class="text-center">
                                   {{__("Pick up from the service center at Ģertrūdes 77. The goods are ready to receive.", ['center' => "Ģertrūdes 77"])}}
                                </div>
                                <div class="commodity-card-price mt-3">
                                    {{__("Is free")}}
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div class="delivery-block p-5">
                                <div class="text-center">
                                    {{__("Pick up from the selected parcel machine We will deliver to the parcel machine within 1 business day.")}}
                                </div>
                                <div class="commodity-card-price mt-3">
                                    3.95 €
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div class="delivery-block p-5">
                                <div class="text-center">
                                   {{__("Deliver to the specified address. We will deliver within 1 r. etc.")}}
                                </div>
                                <div class="commodity-card-price mt-3">
                                    5.99 €
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div class="delivery-content-wrapper">
                        <div class="delivery-tab-content active">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-12 m-auto">
                                    <div class="small-title text-center mb-4 mt-5">{{__("BUYER DATA")}} </div>
                                    <form action="{{ route('confirm.order') }}" method="POST"
                                          class="user-data user-data-self">
                                        @csrf
                                        <input type="hidden" name="delivery" value="Pacelt"><!-- Самовывоз -->
                                        <div class="d-flex radio-buttons-row align-items-center justify-content-center">
                                            <label class="radio-type">
                                                <input type="radio" name="identification-type"
                                                       value=" {{__('Individual')}} ">
                                                <span>
                                            {{__('Individual')}}
                                        </span>
                                            </label>
                                            <label class="radio-type">
                                                <input type="radio" class="legal_entity" name="identification-type"
                                                       value=" {{__('legal entity')}} ">
                                                <span>
                                            {{__('legal entity')}}
                                        </span>
                                            </label>
                                        </div>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="text" placeholder="{{__('First Name')}} " name="name" value="">
                                        </label>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="text" placeholder="{{__('Last Name')}} " name="firstname" value="">
                                        </label>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="email" placeholder="{{__('Email')}}" name="email" value="">
                                        </label>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="tel" placeholder="{{__('Phone Number')}} " name="telephone" value="">
                                        </label>
                                        <textarea name="comment" id="comment" class="" cols="30" rows="10"
                                                  placeholder="{{__('order comment')}} "></textarea>
                                        <div class="for_legal_entity" style="display: none;">
                                            <div class="small-title text-center mb-4 mt-5">{{__("Company details")}} </div>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('registration code')}} " name="register_code"  value="">
                                            </label>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('Company name')}} " name="name_company" value="">
                                            </label>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('VAT payer code')}} " name="code_nds_pay" value="">
                                            </label>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('Company address')}} " name="address_company" value="">
                                            </label>
                                        </div>
                                        <div class="small-title text-center mb-4 mt-5">{{__("PAYMENT METHOD")}}</div>
                                        <select class="js-selectric" name="payment_method" id="">
                                            <option value="cash">{{__("Cash")}} </option>
                                            <option value="card">{{__("By card")}} </option>
                                        </select>
                                        {{--<div class="payment-drop-down-wrapper">
                                            <div class="payment-drop-down-trigger">
                                                <div class="changing">{{__("Select a Payment Method")}} </div>
                                                <img src="img/common/chevron-down.svg" alt="">
                                            </div>
                                            <div class="payment-drop-down">
                                                <ul>
                                                    <li class="payment-changer">наличные</li>
                                                    <li class="payment-changer">карта</li>
                                                </ul>
                                            </div>
                                        </div>--}}
                                        <div class="small-title justify-content-center d-flex">
                                            {{__("THE TOTAL AMOUNT OF THE ORDER")}}: &ensp; <span class="commodity-card-price"> {{$order->getFullPrice()}} €
                                            <span
                                                class="commodity-card-price-muted">{{number_format($order->getFullPrice() * $nds, 2, '.', '')}} € {{__("ex VAT")}}</span></span>
                                        </div>
                                        <button type="submit" class="default-button mt-5">
                                            {{__("Make an order")}}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="delivery-tab-content">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-12 m-auto">
                                    <div class="small-title text-center mb-4 mt-5">{{__('DELIVERY ADDRESS')}} </div>
                                    <form action="{{ route('confirm.order') }}" method="POST"
                                          class="user-data user-data-omniva">
                                        @csrf
                                        <input type="hidden" name="delivery" value="Paņemiet pakomātu, Omniva"><!-- Забрать почтомате, Omniva -->
                                        <select name="delivery" class="js-selectric">
                                            <option value="city1">{{__('City')}} </option>
                                            <option value="city2">{{__('City')}} </option>
                                            <option value="city3">{{__('City')}} </option>
                                        </select>
                                        {{--<div class="city-drop-down-wrapper">
                                            <div class="city-drop-down-trigger">
                                                <div class="changing">Латвия</div>
                                                <img src="img/common/chevron-down.svg" alt="">
                                            </div>
                                            <div class="city-drop-down">
                                                <ul>

                                                </ul>
                                            </div>
                                        </div>--}}
                                        <div class="small-title text-center mb-4 mt-5">{{__("BUYER DATA")}} </div>
                                        <div class="d-flex radio-buttons-row align-items-center justify-content-center">
                                            <label class="radio-type">
                                                <input type="radio" name="identification-type"
                                                       value=" {{__('Individual')}} ">
                                                <span>
                                            {{__('Individual')}}
                                        </span>
                                            </label>
                                            <label class="radio-type">
                                                <input type="radio" name="identification-type" class="legal_entity" 
                                                       value=" {{__('legal entity')}} ">
                                                <span>
                                            {{__('legal entity')}}
                                        </span>
                                            </label>
                                        </div>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="text" placeholder="{{__('First Name')}} " name="name">
                                        </label>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="text" placeholder="{{__('Last Name')}} " name="firstname">
                                        </label>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="email" placeholder="{{__('Email')}}" name="email">
                                        </label>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="tel" placeholder="{{__('Phone Number')}} " name="telephone">
                                        </label>
                                        
                                        <textarea name="comment" id="comment" cols="30" rows="10"
                                                  placeholder="{{__('order comment')}} "></textarea>
                                        <div class="for_legal_entity" style="display: none;">
                                            <div class="small-title text-center mb-4 mt-5">{{__("Company details")}} </div>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('registration code')}} " name="register_code">
                                            </label>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('Company name')}} " name="name_company">
                                            </label>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('VAT payer code')}} " name="code_nds_pay">
                                            </label>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('Company address')}} " name="address_company">
                                            </label>
                                        </div>
                                        <div class="small-title text-center mb-4 mt-5">{{__("PAYMENT METHOD")}}</div>
                                        <select class="js-selectric" name="payment_method" id="">
                                            <option value="cash">{{__("Cash")}} </option>
                                            <option value="card">{{__("By card")}} </option>
                                        </select>
                                        {{--<div class="payment-drop-down-wrapper">
                                            <div class="payment-drop-down-trigger">
                                                <div class="changing">{{__("Select a Payment Method")}} </div>
                                                <img src="img/common/chevron-down.svg" alt="">
                                            </div>
                                            <div class="payment-drop-down">
                                                <ul>
                                                    <li class="payment-changer">наличные</li>
                                                    <li class="payment-changer">карта</li>
                                                </ul>
                                            </div>
                                        </div>--}}
                                        <div class="small-title justify-content-center d-flex">
                                            {{__("THE TOTAL AMOUNT OF THE ORDER")}}: &ensp; <span class="commodity-card-price"> {{$order->getFullPrice()}} €
                                            <span
                                                class="commodity-card-price-muted">39.99 € {{__("ex VAT")}}</span></span>
                                        </div>
                                        <button type="submit" class="default-button mt-5">
                                            {{__("Make an order")}}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="delivery-tab-content">
                            <form action="{{ route('confirm.order') }}" method="POST"
                                  class="user-data user-data-delivery">
                                @csrf
                                <input type="hidden" name="delivery" value="Piegāde uz norādīto adresi"><!-- Доставить по указанному адресу -->
                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-12 m-auto">
                                        <div class="small-title text-center mb-4 mt-5">{{__('DELIVERY ADDRESS')}} </div>
                                       {{-- <div class="city-drop-down-wrapper">
                                            <div class="city-drop-down-trigger">
                                                <div class="changing">Латвия</div>
                                                <img src="img/common/chevron-down.svg" alt="">
                                            </div>
                                            <div class="city-drop-down">
                                                <ul>
                                                    <li class="city-changer">{{__('City')}} </li>
                                                    <li class="city-changer">{{__('City')}} </li>
                                                    <li class="city-changer">{{__('City')}} </li>
                                                </ul>
                                            </div>
                                        </div>--}}
                                        <!-- <select name="city" class="js-selectric">
                                            <option value="city1">{{__('City')}} </option>
                                            <option value="city2">{{__('City')}} </option>
                                            <option value="city3">{{__('City')}} </option>
                                        </select> -->
                                        <input type="text" placeholder="{{__('City')}} " name="city">
                                        <input type="text" placeholder="{{__('DELIVERY ADDRESS')}} "
                                               name="delivery_address">
                                        <input type="text" placeholder="{{__('Postcode')}} " name="postcode">
                                        <textarea name="comment" id="comment" cols="30" rows="10"
                                                  placeholder="{{__('order comment')}} "></textarea>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-12 m-auto">
                                        <div class="small-title text-center mb-4 mt-5">{{__("BUYER DATA")}} </div>
                                        <div class="d-flex radio-buttons-row align-items-center justify-content-center">
                                            <label class="radio-type">
                                                <input type="radio" name="identification-type"
                                                       value="{{__('Individual')}} ">
                                                <span>
                                            {{__('Individual')}}
                                        </span>
                                            </label>
                                            <label class="radio-type">
                                                <input type="radio" name="identification-type" class="legal_entity" 
                                                       value=" {{__('legal entity')}} ">
                                                <span>
                                            {{__('legal entity')}}
                                        </span>
                                            </label>
                                        </div>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="text" placeholder="{{__('First Name')}} " name="name">
                                        </label>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="text" placeholder="{{__('Last Name')}} " name="firstname">
                                        </label>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="email" placeholder="{{__('Email')}}" name="email">
                                        </label>
                                        <label>
                                            <span class="errormessage"></span>   
                                            <input type="tel" placeholder="{{__('Phone Number')}} " name="telephone">
                                        </label>
                                        <textarea name="comment" id="comment" cols="30" rows="10"
                                                  placeholder="{{__('order comment')}} "></textarea>
                                        
                                          <div class="for_legal_entity" style="display: none;">
                                            <div class="small-title text-center mb-4 mt-5">{{__("Company details")}} </div>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('registration code')}} " name="register_code">
                                            </label>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('Company name')}} " name="name_company">
                                            </label>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('VAT payer code')}} " name="code_nds_pay">
                                            </label>
                                            <label>
                                                <span class="errormessage"></span>   
                                                <input type="text" placeholder="{{__('Company address')}} " name="address_company">
                                            </label>
                                        </div>
                                        <div class="small-title text-center mb-4 mt-5">{{__("PAYMENT METHOD")}}</div>
                                        <select class="js-selectric" name="payment_method" id="">
                                            <option value="cash">{{__("Cash")}} </option>
                                            <option value="card">{{__("By card")}} </option>
                                        </select>
                                        {{--<div class="payment-drop-down-wrapper">
                                            <select name="payment_method"></select>
                                            <div class="payment-drop-down-trigger">
                                                <div class="changing">{{__("Select a Payment Method")}} </div>
                                                <img src="img/common/chevron-down.svg" alt="">
                                            </div>
                                            <div class="payment-drop-down">
                                                <ul>
                                                    <li class="payment-changer">наличные</li>
                                                    <li class="payment-changer">карта</li>
                                                </ul>
                                            </div>
                                        </div>--}}
                                        <div class="small-title justify-content-center d-flex">
                                            {{__("THE TOTAL AMOUNT OF THE ORDER")}}: &ensp; <span class="commodity-card-price">  {{$order->getFullPrice()}} €
                                            <span
                                                class="commodity-card-price-muted">39.99 € {{__("ex VAT")}}</span></span>
                                        </div>
                                        <button type="submit" class="default-button mt-5">
                                            {{__("Make an order")}}
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                @endif
            </div>
        </section>

    </main>
    <script type="text/javascript">
        $(document).ready(function () {
            $('.order-login .order-login-btn').click(function (e) {

                var data = $('form.order-login').serialize();

                e.preventDefault();
                $.ajax({
                    type: 'POST',
                    url: "{{ route('login') }}",
                    data: data

                }).done(function (res) {
                    console.log(res);
                    location.reload();
                }).fail(function (res) {
                    console.log(res);
                });
            });
            $('input[name="identification-type"]').change(function(){
                if($('input.legal_entity').is(':checked')){
                    $('.for_legal_entity').show();
                }else{
                    $('.for_legal_entity').hide();
                }
            });
        });

    </script>
@endsection
