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
    <h1>{{__("New application received")}}</h1>
    <h2> {{__("Order details")}} </h2>
    <div class="box">
        <div><div class="big">{{__("First Name")}}:</div> {{ $request_details->name }}</div>
        <div><div class="big">{{__("Email"}}:</div> {{ $request_details->email }}</div>
        <div><div class="big">{{__("Klent's phone")}}:</div> {{ $request_details->tel }}</div>
        <h4>{{__("products")}}</h4>
        @foreach($request_details['clientOrder'] as $detail)
            <div><div class="big">{{__("Product name")}}:</div> {{$detail->name}}</div> 
            <div><div class="big">{{__("Price")}}:</div> {{$detail->price}} €</div> 
            @isset($detail->color)
                <div><div class="big">{{__("Color")}}:</div> {{$detail->color}}</div> 
            @endisset
            <br>
        @endforeach
        <div><div class="big">{{__("Comment")}}:</div></div> <br>
        <div><div class="i">{{$request_details->comment}}</div></div><br>
        <div><div class="big">{{__("Branch")}}:</div> {{$request_details->address}}</div> 
        <div><div class="big">{{__("Date")}}:</div> {{$request_details->date}} </div>
        <div><div class="big">{{__("Repair time")}}:</div> {{$request_details->time}}</div>
    </div>
</div>
