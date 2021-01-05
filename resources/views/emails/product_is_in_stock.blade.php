<p>
    Hello {{$order->name}},
    We wish to inform you that the following product that you were interested in, is now back in stock.:
    {{$order->product->name}}

    Please click this link to see product detailed information:
    <a href="{{route('shop-inner', [
    $order->product->subCategory[0]->category->code,
    $order->product->subCategory[0]->code,
    $order->product->code
])}}" class="commodity-card-title">
        URL
    </a>
    URL: www.promarket.lv
</p>
