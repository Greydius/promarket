<p>
    {{__("hello")}} {{$order->name}}, <br>
    {{__("We wish to inform you that the following product that you were interested in, is now back in stock")}}.:<br>
    {{$order->product->name}}
    <br>
    <br>
    {{__("Please click this link to see product detailed information")}}: <br>
    <a href="{{route('shop-inner', [
    $order->product->subCategory[0]->category->code,
    $order->product->subCategory[0]->code,
    $order->product->code
])}}" class="commodity-card-title">
        URL
    </a><br>
    URL: www.promarket.lv
</p>
