<style>
.box{
    background: #fff;
    padding: 0 25px;
    border-radius: 10px;
}
.big{
    font-weight: 700;
    display: inline-block;
}
.i{
    font-style: italic;
}
</style>

<div>
    <h3 style="font-weight:400;">{{__("Dear")}} <div class="big i">{{ $request_details->name }}</div>, {{__("Our manager is currently checking your order and will send you an invoice shortly.")}}
    </h3>
    <h2> {{__("Order details")}} </h2>
   <div class="box" style="box-shadow: 0 0 20px 1px rgb(0 0 0 / 29%);">   
    @foreach($request_details['clientOrder'] as $detail)
        <div><div class="big">{{__("Product name")}}:</div> {{$detail->name}}</div> 
        <div><div class="big">{{__("Price")}}:</div> {{$detail->price}} €</div> 
        @isset($detail->color)
        <div><div class="big">{{__("Color")}}:</div> {{$detail->color}}</div>
        @endisset
        <br>
    @endforeach
        <div><div class="big">{{__("your comment")}}:</div></div> 
        <div class="i">{{$request_details->comment}}</div>
    <br>
    <div><div class="big">{{__("We are waiting for you in our branch")}}:</div> {{$request_details->address}}</div> 
    <div><div class="big">{{__("Date")}}:</div> {{$request_details->date}} </div>
    <div><div class="big">{{__("Repair time")}}:</div> {{$request_details->time}}</div>
    <div>{{__("THANK YOU FOR THE ORDER")}},</div>
    <div>{{__("Best regards team")}} Promarket</div>
    </div>
</div>
