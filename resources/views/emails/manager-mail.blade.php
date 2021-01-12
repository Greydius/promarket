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
    <h1>Поступила новая заявка</h1>
    <h2> Детали заказа </h2>
    <div class="box">
        <div><div class="big">Имя клента:</div> {{ $request_details->name }}</div>
        <div><div class="big">Email клента:</div> {{ $request_details->email }}</div>
        <div><div class="big">Телефон клента:</div> {{ $request_details->tel }}</div>
        <h4>Продукт</h4>
        @foreach($request_details['clientOrder'] as $detail)
            <div><div class="big">Название товара:</div> {{$detail->name}}</div> 
            <div><div class="big">Цена товара:</div> {{$detail->price}} €</div> 
            @isset($detail->color)
                <div><div class="big">Цвет товара:</div> {{$detail->color}}</div> 
            @endisset
            <br>
        @endforeach
        <div><div class="big">Комментарий комментарий:</div></div> <br>
        <div><div class="i">{{$request_details->comment}}</div></div><br>
        <div><div class="big">Филиал:</div> {{$request_details->address}}</div> 
        <div><div class="big">Дата:</div> {{$request_details->date}} </div>
        <div><div class="big">Время:</div> {{$request_details->time}}</div>
    </div>
</div>
