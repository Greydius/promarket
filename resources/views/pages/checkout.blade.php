@extends('system.master')

@section('content')

    <main class="main">

        <section class="cart-content pt-4">
            @include('components.market.cart-inner', compact('order'))

        </section>

        <section class="authorization-content mb-5">
            <div class="container">

                @if (!Auth::check())

                    <div class="small-title text-center my-4 hide-for-mobile">
                        Авторизуйтесь для совершения заказа
                    </div>
                    <div class="row justify-content-center hide-for-mobile">
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <button class="enter-via-facebook">Войти через Facebook</button>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <button class="enter-via-gmail">Войти через Google</button>
                        </div>
                    </div>
                    <div class="row  my-5">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 buy-with-registration p-5">
                            <div class="small-title mb-4">войдите в аккаунт</div>
                            <button class="enter-via-facebook show-for-mobile">Войти через Facebook</button>
                            <button class="enter-via-gmail show-for-mobile">Войти через Google</button>
                            <form method="POST" class="order-login">
                                @csrf
                                @if ($errors->has('email'))
                                    <span class="error">{{ $errors->first('email') }}</span>
                                @endif
                                <input type="email" placeholder="{{__('Email')}}" name="email" name="email">
                                @if ($errors->has('password'))
                                    <span class="error">{{ $errors->first('password') }}</span>
                                @endif
                                <input type="password" placeholder="Пароль" name="password">
                                <p class="my-3">Я забыл пароль! <a href="#"> Восстановить его скорее</a></p>
                                <p class="my-3">Нет аккаунта? <a href="#"> Зарегистрироваться</a></p>
                                <button type="submit" class="default-button mt-4 order-login-btn">
                                    войти
                                </button>
                            </form>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 buy-without-registration p-5">
                            <div class="small-title mb-4">купите без регистрации</div>
                            <form action="{{route('regOnlyEmail')}}" method="POST" class="order-no-registration">
                                @csrf
                                @if ($errors->has('email'))
                                    <span class="error">{{ $errors->first('email') }}</span>
                                @endif
                                <input type="email" placeholder="{{__('Email')}}" name="email" name="email">

                                <p class="my-3">Сможете зарегистрироваться и после
                                    совершения покупки.</p>
                                <button type="submit" class="default-button mt-4">
                                    войти
                                </button>
                            </form>
                        </div>
                    </div>
                @endif
                <div class="small-title text-center mb-4">ДОСТАВКА</div>
                <div class="delivery-tabs">
                    <div class="row delivery-blocks">
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 active">
                            <div class="delivery-block p-5">
                                <div class="text-center">
                                    Забрать из сервис центра
                                    на Ģertrūdes 77.
                                    Товар к получению готов.
                                </div>
                                <div class="commodity-card-price mt-3">
                                    Бесплатно
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div class="delivery-block p-5">
                                <div class="text-center">
                                    Забрать в выбранном почтомате
                                    Доставим в почтомат
                                    в течение 1 р.д.
                                </div>
                                <div class="commodity-card-price mt-3">
                                    3.95 €
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div class="delivery-block p-5">
                                <div class="text-center">
                                    Доставить по
                                    указанному адресу.
                                    Доставим в течение 1 р. д.
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
                                    <div class="small-title text-center mb-4 mt-5">ДАННЫЕ ПОКУПАТЕЛЯ</div>
                                    <form action="{{ route('confirm.order') }}" method="POST"
                                          class="user-data user-data-self">
                                        @csrf
                                        <input type="hidden" name="delivery" value="Самовывоз">
                                        <div class="d-flex radio-buttons-row align-items-center justify-content-center">
                                            <label class="radio-type">
                                                <input type="radio" name="identification-type"
                                                       value=" {{__('Individual')}} ">
                                                <span>
                                            {{__('Individual')}}
                                        </span>
                                            </label>
                                            <label class="radio-type">
                                                <input type="radio" name="identification-type"
                                                       value=" {{__('legal entity')}} ">
                                                <span>
                                            {{__('legal entity')}}
                                        </span>
                                            </label>
                                        </div>
                                        <input type="text" placeholder="{{__('First Name')}} " name="name">
                                        <input type="text" placeholder="{{__('Last Name')}} " name="firstname">
                                        <input type="email" placeholder="{{__('Email')}}" name="email">
                                        <input type="tel" placeholder="{{__('Phone Number')}} " name="telephone">
                                        <textarea name="comment" id="comment" class="" cols="30" rows="10"
                                                  placeholder="{{__('order comment')}} "></textarea>

                                        <div class="small-title text-center mb-4 mt-5">Способ оплаты</div>
                                        <select class="js-selectric" name="payment_method" id="">
                                            <option value="cash">Наличкой</option>
                                            <option value="card">Картой</option>
                                        </select>
                                        {{--<div class="payment-drop-down-wrapper">
                                            <div class="payment-drop-down-trigger">
                                                <div class="changing">Выберите метод оплаты</div>
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
                                            ОБЩАЯ СУММА ЗАКАЗА: &ensp; <span class="commodity-card-price"> {{$order->getFullPrice()}} €
                                            <span
                                                class="commodity-card-price-muted">{{number_format($order->getFullPrice() * $nds, 2, '.', '')}} € {{__("ex VAT")}}</span></span>
                                        </div>
                                        <button type="submit" class="default-button mt-5">
                                            Сделать заказ
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
                                        <input type="hidden" name="delivery" value="Забрать почтомате">
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
                                        <div class="small-title text-center mb-4 mt-5">ДАННЫЕ ПОКУПАТЕЛЯ</div>
                                        <div class="d-flex radio-buttons-row align-items-center justify-content-center">
                                            <label class="radio-type">
                                                <input type="radio" name="identification-type"
                                                       value=" {{__('Individual')}} ">
                                                <span>
                                            {{__('Individual')}}
                                        </span>
                                            </label>
                                            <label class="radio-type">
                                                <input type="radio" name="identification-type"
                                                       value=" {{__('legal entity')}} ">
                                                <span>
                                            {{__('legal entity')}}
                                        </span>
                                            </label>
                                        </div>
                                        <input type="text" placeholder="{{__('First Name')}} " name="name">
                                        <input type="text" placeholder="{{__('Last Name')}} " name="firstname">
                                        <input type="email" placeholder="{{__('Email')}}" name="email">
                                        <input type="tel" placeholder="{{__('Phone Number')}} " name="telephone">
                                        <textarea name="comment" id="comment" cols="30" rows="10"
                                                  placeholder="{{__('order comment')}} "></textarea>

                                        <div class="small-title text-center mb-4 mt-5">Способ оплаты</div>
                                        <select class="js-selectric" name="payment_method" id="">
                                            <option value="cash">Наличкой</option>
                                            <option value="card">Картой</option>
                                        </select>
                                        {{--<div class="payment-drop-down-wrapper">
                                            <div class="payment-drop-down-trigger">
                                                <div class="changing">Выберите метод оплаты</div>
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
                                            ОБЩАЯ СУММА ЗАКАЗА: &ensp; <span class="commodity-card-price"> {{$order->getFullPrice()}} €
                                            <span
                                                class="commodity-card-price-muted">39.99 € {{__("ex VAT")}}</span></span>
                                        </div>
                                        <button type="submit" class="default-button mt-5">
                                            Сделать заказ
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="delivery-tab-content">
                            <form action="{{ route('confirm.order') }}" method="POST"
                                  class="user-data user-data-delivery">
                                @csrf
                                <input type="hidden" name="delivery" value="Доставить по указанному адресу">
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
                                        <select name="delivery" class="js-selectric">
                                            <option value="city1">{{__('City')}} </option>
                                            <option value="city2">{{__('City')}} </option>
                                            <option value="city3">{{__('City')}} </option>
                                        </select>
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
                                        <div class="small-title text-center mb-4 mt-5">ДАННЫЕ ПОКУПАТЕЛЯ</div>
                                        <div class="d-flex radio-buttons-row align-items-center justify-content-center">
                                            <label class="radio-type">
                                                <input type="radio" name="identification-type"
                                                       value="{{__('Individual')}} ">
                                                <span>
                                            {{__('Individual')}}
                                        </span>
                                            </label>
                                            <label class="radio-type">
                                                <input type="radio" name="identification-type"
                                                       value=" {{__('legal entity')}} ">
                                                <span>
                                            {{__('legal entity')}}
                                        </span>
                                            </label>
                                        </div>
                                        <input type="text" placeholder="{{__('First Name')}} " name="name">
                                        <input type="text" placeholder="{{__('Last Name')}} " name="firstname">
                                        <input type="email" placeholder="{{__('Email')}}" name="email">
                                        <input type="tel" placeholder="{{__('Phone Number')}} " name="telephone">
                                        <textarea name="comment" id="comment" cols="30" rows="10"
                                                  placeholder="{{__('order comment')}} "></textarea>

                                        <div class="small-title text-center mb-4 mt-5">Способ оплаты</div>
                                        <select class="js-selectric" name="payment_method" id="">
                                            <option value="cash">Наличкой</option>
                                            <option value="card">Картой</option>
                                        </select>
                                        {{--<div class="payment-drop-down-wrapper">
                                            <select name="payment_method"></select>
                                            <div class="payment-drop-down-trigger">
                                                <div class="changing">Выберите метод оплаты</div>
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
                                            ОБЩАЯ СУММА ЗАКАЗА: &ensp; <span class="commodity-card-price">  {{$order->getFullPrice()}} €
                                            <span
                                                class="commodity-card-price-muted">39.99 € {{__("ex VAT")}}</span></span>
                                        </div>
                                        <button type="submit" class="default-button mt-5">
                                            Сделать заказ
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
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
            // $('.order-no-registration button').click(function(e){

            //     var data = $('form.order-no-registration').serialize();

            //     e.preventDefault();
            //     $.ajax({
            //         type: 'POST',
            //         url : "{{ route('regOnlyEmail') }}",
            //         data : data

            //     }).done(function(res){
            //         console.log(res);
            //         location.reload();
            //     }).fail(function(res){
            //         console.log(res);
            //     });
            // });

        });

    </script>
@endsection
