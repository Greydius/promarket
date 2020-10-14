<div class="col-lg-4 col-md-4 col-6">
    <div class="commodity-default-card">
        <a href="{{route('shop-inner', [
    $product->subCategory->category->code,
    $product->subCategory->code,
    $product->code
])}}" class="commodity-image-wrapper">
            <img src="{{$product->img}}" alt="">
        </a>
        <div class="commodity-card-body">
            <a href="{{route('shop-inner', [
    $product->subCategory->category->code,
    $product->subCategory->code,
    $product->code
])}}" class="commodity-card-title">
                {{$product->name}}
            </a>
            <div class="commodity-card-parameter">
                   @include('components.common.in-stock', ['quantity' => $product->quantity])
            </div>
            <div class="commodity-card-price-row">
                <div class="commodity-card-price">
                    € {{$product->price}}
                </div>
            </div>
            <div class="commodity-card-additional-price">
                <span>{{$product->price * $nds}} € excl.VAT</span>
            </div>
            <div class="d-flex align-items-center justify-content-between">
                <div class="quantity-drop">
                    <div class="quantity-view-wrapper align-items-center d-flex">
                        <div class="quantity-input-wrapper">
                            <label>
                                <input value="1" type="text" class="quantity-input">
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
                <a href="{{route('add-cart', $product)}}" data-link="{{route('add-cart', $product)}}" class="default-button add-to-cart">
                    в корзину
                </a>
            </div>
        </div>

    </div>
</div>
