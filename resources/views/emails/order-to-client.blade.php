<div>
    <h3>{{__("Dear")}} {{ $order->fio }}, {{__("Our manager is currently checking your order and will send you an invoice shortly.")}}
    </h3>

    <h2>  {{__("Order details")}} </h2>
    @foreach($order->products as $detail)
        <span>{{__("Product name")}}: {{$detail->name}}</span> <br>
        <span>{{__("Price")}}: {{$detail->price}} €</span> <br>
        @isset($detail->color)
            <span>{{__("Color")}}: {{$detail->color['name']}}</span> <br>
        @endisset
        <br>
    @endforeach
    <br>
    <br>
        <span>{{__("comment")}}</span> <br>
        <span>{{$order->comment}}</span>
    <br>
    <br>
    <span>{{__("We are waiting for you in our branch")}}: {{$order->address}}</span> <br>
    <span>{{__("date")}}: {{$order->created_at}} </span><br>
    <span>{{__("total")}}: {{$order->total_amount}}</span><br>

    <span>{{__("THANK YOU FOR THE ORDER")}},</span> <br>
    <span>{{__("Best regards team")}} Promarket</span>
</div>
