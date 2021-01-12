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
    <h3 style="font-weight:400;">Уважаемый(ая) <div class="big i">{{ $request_details->name }}</div>, Наш менеджер на данный момент проверяет ваш заказ и в ближайшее время
        вышлет вам счет-фактуру
    </h3>
    <h2> Детали заказа </h2>
   <div class="box" style="box-shadow: 0 0 20px 1px rgb(0 0 0 / 29%);">   
    @foreach($request_details['clientOrder'] as $detail)
        <div><div class="big">Название товара:</div> {{$detail->name}}</div> 
        <div><div class="big">Цена товара:</div> {{$detail->price}} €</div> 
        @isset($detail->color)
        <div><div class="big">Цвет товара:</div> {{$detail->color}}</div>
        @endisset
        <br>
    @endforeach
        <div><div class="big">Ваш комментарий:</div></div> 
        <div class="i">{{$request_details->comment}}</div>
    <br>
    <div><div class="big">Мы вас ждем в нашем филиале:</div> {{$request_details->address}}</div> 
    <div><div class="big">Дата:</div> {{$request_details->date}} </div>
    <div><div class="big">Время:</div> {{$request_details->time}}</div>
    <div>Спасибо,</div>
    <div>С уважением команда Promarket</div>
    </div>
</div>
