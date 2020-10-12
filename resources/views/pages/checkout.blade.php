@extends('system.master')

@section('content')

    <main class="main">
       
        <section class="cart-content pt-4">
            <div class="container">
                <div class="alert">
                 @if(session()->has('success'))
                    <p class="alert alert-success text-center">{{session()->get('success')}}</p>
                @endif
                @if(session()->has('error'))
                <p class="alert alert-error alert-danger text-center">{{session()->get('error')}}</p>
                @endif
                </div>
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
                         <form method="POST" action="{{ route('login') }}">
                        @csrf
                            <input type="email" placeholder="Электронная почта" name="email" name="email">
                             @if ($errors->has('email'))
                                <span class="error">{{ $errors->first('email') }}</span>
                              @endif 
                            <input type="password" placeholder="Пароль" name="password" >
                            <p class="my-3">Я забыл пароль! <a href="#"> Восстановить его скорее</a></p>
                            <p class="my-3">Нет аккаунта? <a href="#"> Зарегистрироваться</a></p>
                            <button type="submit" class="default-button mt-4">
                                войти
                            </button>
                        </form>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 buy-without-registration p-5">
                        <div class="small-title mb-4">купите без регистрации</div>
                        <input type="email" placeholder="Электронная почта" name="email" name="email">
                        <form action="POST">
                            <p class="my-3">Сможете зарегистрироваться и после
                                совершения покупки.</p>
                            <a href="#" class="default-button mt-4">
                                войти
                            </a>
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
                                    <form action="{{ route('confirm.order') }}" method="POST" class="user-data">
                                        @csrf
                                        <input type="hidden" name="delivery" value="Самовывоз">
                                        <div class="d-flex radio-buttons-row align-items-center justify-content-center">
                                            <label class="radio-type">
                                                <input type="radio" name="identification-type" value=" Физическое лицо">
                                                <span>
                                            Физическое лицо
                                        </span>
                                            </label>
                                            <label class="radio-type">
                                                <input type="radio" name="identification-type" value=" Юридическое лицо">
                                                <span>
                                            Юридическое лицо
                                        </span>
                                            </label>
                                        </div>
                                        <input type="text" placeholder="Имя" name="name">
                                        <input type="text" placeholder="Фамилия" name="firstname">
                                        <input type="email" placeholder="Электронная почта" name="email">
                                        <input type="tel" placeholder="Ваш телефон" name="telephone">
                                        <textarea name="comment" id="comment" class="show-for-mobile" cols="30" rows="10" placeholder="Комментарий к заказу"></textarea>

                                        <div class="small-title text-center mb-4 mt-5">Способ оплаты</div>
                                        <div class="payment-drop-down-wrapper">
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
                                        </div>
                                        <div class="small-title justify-content-center d-flex">
                                            ОБЩАЯ СУММА ЗАКАЗА: &ensp; <span class="commodity-card-price"> 344.50 €
                                            <span class="commodity-card-price-muted">39.99 € excl.VAT</span></span>
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
                                    <div class="small-title text-center mb-4 mt-5">АДРЕС ДОСТАВКИ</div>
                                    <form action="{{ route('confirm.order') }}" method="POST" class="user-data">
                                        @csrf
                                         <input type="hidden" name="delivery" value="Забрать почтомате">
                                        <div class="city-drop-down-wrapper">
                                            <div class="city-drop-down-trigger">
                                                <div class="changing">Латвия</div>
                                                <img src="img/common/chevron-down.svg" alt="">
                                            </div>
                                            <div class="city-drop-down">
                                                <ul>
                                                    <li class="city-changer">город</li>
                                                    <li class="city-changer">город</li>
                                                    <li class="city-changer">город</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="small-title text-center mb-4 mt-5">ДАННЫЕ ПОКУПАТЕЛЯ</div>
                                        <div class="d-flex radio-buttons-row align-items-center justify-content-center">
                                            <label class="radio-type">
                                             <input type="radio" name="identification-type" value=" Физическое лицо">
                                                <span>
                                            Физическое лицо
                                        </span>
                                            </label>
                                            <label class="radio-type">
                                                <input type="radio" name="identification-type" value=" Юридическое лицо">
                                                <span>
                                            Юридическое лицо
                                        </span>
                                            </label>
                                        </div>
                                        <input type="text" placeholder="Имя" name="name">
                                        <input type="text" placeholder="Фамилия" name="firstname">
                                        <input type="email" placeholder="Электронная почта" name="email">
                                        <input type="tel" placeholder="Ваш телефон" name="telephone">
                                        <textarea name="comment" id="comment" class="show-for-mobile" cols="30" rows="10" placeholder="Комментарий к заказу"></textarea>

                                        <div class="small-title text-center mb-4 mt-5">Способ оплаты</div>
                                        <div class="payment-drop-down-wrapper">
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
                                        </div>
                                        <div class="small-title justify-content-center d-flex">
                                            ОБЩАЯ СУММА ЗАКАЗА: &ensp; <span class="commodity-card-price"> 344.50 €
                                            <span class="commodity-card-price-muted">39.99 € excl.VAT</span></span>
                                        </div>
                                       <button type="submit" class="default-button mt-5">
                                            Сделать заказ
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="delivery-tab-content">
                            <form action="{{ route('confirm.order') }}" method="POST" class="user-data">
                                @csrf
                                <input type="hidden" name="delivery" value="Доставить по указанному адресу">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-12 m-auto">
                                    <div class="small-title text-center mb-4 mt-5">АДРЕС ДОСТАВКИ</div>
                                        <div class="city-drop-down-wrapper">
                                            <div class="city-drop-down-trigger">
                                                <div class="changing">Латвия</div>
                                                <img src="img/common/chevron-down.svg" alt="">
                                            </div>
                                            <div class="city-drop-down">
                                                <ul>
                                                    <li class="city-changer">город</li>
                                                    <li class="city-changer">город</li>
                                                    <li class="city-changer">город</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <input type="text" placeholder="Город" name="city">
                                        <input type="text" placeholder="Адрес доставки" name="delivery_address">
                                        <input type="text" placeholder="Почтовый индекс" name="postcode">
                                        <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Комментарий к заказу"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-12 m-auto">
                                    <div class="small-title text-center mb-4 mt-5">ДАННЫЕ ПОКУПАТЕЛЯ</div>
                                        <div class="d-flex radio-buttons-row align-items-center justify-content-center">
                                            <label class="radio-type">
                                                <input type="radio" name="identification-type" value="Физическое лицо">
                                                <span>
                                            Физическое лицо
                                        </span>
                                            </label>
                                            <label class="radio-type">
                                                <input type="radio" name="identification-type" value=" Юридическое лицо">
                                                <span>
                                            Юридическое лицо
                                        </span>
                                            </label>
                                        </div>
                                        <input type="text" placeholder="Имя" name="name">
                                        <input type="text" placeholder="Фамилия" name="firstname">
                                        <input type="email" placeholder="Электронная почта" name="email">
                                        <input type="tel" placeholder="Ваш телефон" name="telephone">
                                        <textarea name="comment" id="comment" class="show-for-mobile" cols="30" rows="10" placeholder="Комментарий к заказу"></textarea>

                                        <div class="small-title text-center mb-4 mt-5">Способ оплаты</div>
                                        <div class="payment-drop-down-wrapper">
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
                                        </div>
                                        <div class="small-title justify-content-center d-flex">
                                            ОБЩАЯ СУММА ЗАКАЗА: &ensp; <span class="commodity-card-price"> 344.50 €
                                            <span class="commodity-card-price-muted">39.99 € excl.VAT</span></span>
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

@endsection
