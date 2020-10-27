<div class="header__cart__inner dropping__element__wrapper">
    @if(isset($order->products) && count($order->products) != 0)
        <h3 class="inner__cart__title">
            продуктов в корзине: {{count($order->products)}}
        </h3>
        <div class="header__cart_commodities">
            @foreach($order->products as $product)
                <div class="d-flex header_cart_commodity">
                    <div class="header__cart_img">
                        <img src="{{Voyager::image($product->img)}}" alt="">
                    </div>
                    <div class="header__cart_body">
                        <div class="header__cart_second_col">
                            <div class="header__cart_commodity-title">
                                {{$product->name}}
                            </div>
                            <div class="header__cart_params">
                                <form method="POST" action="{{route('update-cart')}}"
                                      class="update-cart-form-submittion">
                                    @csrf
                                    <input name="product_id" type="hidden" value="{{$product->id}}">
                                    <label>
                                        <input name="quantity" type="number" value="{{$product->pivot->count}}">
                                    </label>
                                    <button type="submit" class="commodity_reset_btn">
                                        Обновить
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div class="header__cart_third_col">
                            <form action="{{route('remove-cart')}}" method="POST">
                                @csrf
                                <input type="hidden" name="product_id" value="{{$product->id}}">
                                <a href="#" class="delete-button header__cart__delete-button">
                                    <img src="{{ asset('assets/img/common/close.svg') }}" alt="">
                                </a>
                            </form>
                            <div class="header__cart_price">
                                {{$product->price * $product->pivot->count}} €
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>

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
    @else
        <h3 class="inner__cart__title">
            Ваша корзина пуста
        </h3>
    @endif
</div>
