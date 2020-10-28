<div class="container">
    <div class="small-title">
        КОРЗИНА (продуктов {{count($order->products)}})
    </div>
    <div class="row justify-content-end">
        <div class="clean-cart">
                <span>
                    <img src="{{asset('assets/img/cart/Vector.svg')}}" alt="icon">
                </span>
            Очистить корзину
        </div>
        <div class="col-xl-12">
            @foreach($order->products as $product)
                <div class="cart-item d-flex align-items-center justify-content-between my-3">
                    <img src="{{Voyager::image($product->img)}}" class="cart-item-img"" alt="">
                    <div class="remove-cart-item-tablet"><a href="#" class="remove-cart-item"><img
                                src="{{asset('assets/img/cart/Vector.svg')}}" alt="icon"></a></div>
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
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.54">
                                            <path d="M7 10L12 15L17 10H7Z" fill="#202020"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="commodity-card-price commodity-card-price-mobile">
                            {{$product->price * $product->pivot->count}} €
                            <div class="commodity-card-additional-price">
                                <span>{{$product->price * $product->pivot->count * $nds}} € excl.VAT</span>
                            </div>
                        </div>
                    </div>
                    <div class="commodity-card-price commodity-card-price-pc">
                        {{$product->price * $product->pivot->count}} €
                        <div class="commodity-card-additional-price">
                            <span>{{$product->price * $product->pivot->count * $nds}} € excl.VAT</span>
                        </div>
                    </div>
                </div>

            @endforeach
        </div>
        <div class="col-xl-12 d-flex justify-content-between pt-3">
            <a href="{{route('main-page')}}" class="small-title small-title-pc">
                    <span>
                        <img src="{{asset('assets/img/cart/arrow_back-24px 1.svg')}}" alt="icon">
                    </span>
                ПРОДОЛЖИТЬ ПОКУПКИ
            </a>
            <div class="small-title d-flex">
                ОБЩАЯ СУММА ЗАКАЗА: &ensp; <span class="commodity-card-price"> {{$order->getFullPrice()}} €
                        <span class="commodity-card-price-muted">{{$order->getFullPrice() * $nds}} € excl.VAT</span>
                    </span>
            </div>
        </div>
        <div class="col-xl-12 text-center">
            <a href="{{route('checkout')}}">
                <button type="submit" class="submit-form default-button">
                    ОФОРМИТЬ ЗАКАЗ
                </button>
            </a>
        </div>
    </div>
</div>
