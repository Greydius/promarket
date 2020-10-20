<div class="header__cart__inner dropping__element__wrapper">
    @if(isset($order->products))
        <h3 class="inner__cart__title">
            продуктов в корзине: {{count($order->products)}}
        </h3>
        <div class="header__cart_commodities">
            @foreach($order->products as $product)
                <div class="d-flex header_cart_commodity">
                    <div class="header__cart_img">
                        <img src="{{ asset('assets/img/cart-img.png') }}" alt="">
                    </div>
                    <div class="header__cart_body">
                        <div class="header__cart_second_col">
                            <div class="header__cart_commodity-title">
                                {{$product->name}}
                            </div>
                            <div class="header__cart_params">
                                <label>
                                    <input type="number" value="{{$product->pivot->count}}">
                                </label>
                                <img src="{{ asset('assets/img/common/drop.svg') }}" alt="">
                                <a href="#" class="commodity_reset_btn">
                                    Обновить
                                </a>
                            </div>
                        </div>
                        <div class="header__cart_third_col">
                            <a href="#" class="delete-button">
                                <img src="{{ asset('assets/img/common/close.svg') }}" alt="">
                            </a>
                            <div class="header__cart_price">
                                {{$product->price * $product->pivot->count}} €
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    @endif
    <div class="d-flex align-items-center justify-content-between">
        <div class="cart__price__wrapper">
            <p>
                Итого:
                <b>
                    {{$order->getFullPrice()}} €
                </b>
            </p>
        </div>
        <a href="{{route('cart')}}" class="default-button">
            перейти в корзину
        </a>
    </div>
</div>
