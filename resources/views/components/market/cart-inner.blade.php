@section('pageClass', 'active-cart')
<div class="container" id="cart">
    <div class="small-title">
        {{__("BASKET")}} ({{__("products")}} @{{productQuantity}} )
    </div>
    <div class="row justify-content-end">
        <div @click="clearCart" class="clean-cart">
                <span>
                    <img src="{{asset('assets/img/cart/Vector.svg')}}" alt="icon">
                </span>
            {{__("Empty trash")}}
        </div>
        <div class="col-xl-12">
            <div v-for="myProduct in orderProducts" :key="myProduct.id"
                 class="cart-item d-flex align-items-center justify-content-between my-3">
                <img :src="myProduct.img" class="cart-item-img" alt="">
                <div class="remove-cart-item-tablet"><a href="#" @click="removeFromCart(myProduct.id)"
                                                        class="remove-cart-item"><img
                            src="{{asset('assets/img/cart/Vector.svg')}}" alt="icon"></a></div>
                <div class="cart-changing">
                    <div>@{{myProduct.name}}
                        <div><a href="#" @click="removeFromCart(myProduct.id)"
                                class="remove-cart-item remove-cart-item-pc">{{__("Remove")}}</a></div>
                    </div>
                    <div class="quantity-drop quantity-selection-drop-down">
                        <div class="quantity-view-wrapper align-items-center d-flex">
                            <div class="quantity-input-wrapper">
                                <label>
                                    <input @change="changeCartState(myProduct.id, $event)"
                                           :value="myProduct.pivot.count" type="text" class="quantity-input">
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
                        @{{myProduct.price * myProduct.pivot.count}} €
                        <div class="commodity-card-additional-price">
                            <span>@{{(myProduct.price * myProduct.pivot.count * nds).toFixed(2)}} € {{__("ex VAT")}}</span>
                        </div>
                    </div>
                </div>
                <div class="commodity-card-price commodity-card-price-pc">
                    @{{myProduct.price * myProduct.pivot.count}} €
                    <div class="commodity-card-additional-price">
                        <span>@{{(myProduct.price * myProduct.pivot.count * nds).toFixed(2)}} € {{__("ex VAT")}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-12 d-flex justify-content-between pt-3">
            <a href="{{route('main-page')}}" class="small-title small-title-pc">
                    <span>
                        <img src="{{asset('assets/img/cart/arrow_back-24px 1.svg')}}" alt="icon">
                    </span>
                {{__("CONTINUE SHOPPING")}}
            </a>
            <div class="small-title d-flex">
                {{__("THE TOTAL AMOUNT OF THE ORDER")}}: &ensp; <span class="commodity-card-price">
                    @{{fullPrice}}
                    €
                        <span class="commodity-card-price-muted">
                            @{{ (fullPrice * nds).toFixed(2) }}
                            € {{__("ex VAT")}}</span>
                    </span>
            </div>
        </div>
        <div class="col-xl-12 text-center">
            <a href="{{route('checkout')}}">
                <button type="submit" class="submit-form default-button">
                    {{__("CHECKOUT")}}
                </button>
            </a>
        </div>
    </div>
</div>
{{config('app.path')}}
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
<script>
    var cartApp = new Vue({
        el: '#cart',
        data: {
            orderProducts: {!! $order->products !!},
            appUrl: '{!! config('app.url') !!}',
            nds: {!! $nds !!},
            clearCartUrl: '{!! route('clear-cart') !!}',
            updateCartQuantityUrl: '{!! route('update-cart-data') !!}',
            removeFromCartUrl: '{!! config('app.url') . 'cart-data-remove' !!}',
        },
        computed: {
            fullPrice: function () {
                return this.orderProducts.reduce((acc, res) => {
                    return +acc + (+res.price * +res.pivot.count)
                }, 0)
            },
            productQuantity: function () {
                return this.orderProducts.length
            },
        },
        methods: {
            clearCart: function () {
                axios
                    .get(this.clearCartUrl)
                    .then(res => {
                        this.orderProducts = [];
                        document.location = this.appUrl
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            changeCartState: function (id, $event) {
                const commodityData = {
                    product_id: id,
                    quantity: $event.target.value
                }
                axios
                    .post(this.updateCartQuantityUrl, commodityData)
                    .then(res => {
                        this.orderProducts = res.data.products;
                    })
            },
            removeFromCart(id) {
                axios
                    .get(`${this.removeFromCartUrl}/${id}`)
                    .then(res => {
                        if (res.data.products.length == 0) {
                            document.location = this.appUrl
                        }
                        this.orderProducts = res.data.products;
                    })
            }
        }
    })
</script>
