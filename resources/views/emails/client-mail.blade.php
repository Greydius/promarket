<div>
    <h3>Уважаемый {{ $request_details->name }}, Наш менеджер на данный момент проверяет ваш заказ и в ближайшее время
        вышлет вам счет-фактуру
    </h3>

    <h2> Детали заказа </h2>
    @foreach($request_details['clientOrder'] as $detail)
        <span>Название товара: {{$detail->name}}</span> <br>
        <span>Цена товара: {{$detail->price}} €</span> <br>
        @isset($detail->color)
            <span>Цвет товара: {{$detail->color}}</span> <br>
        @endisset
        <br>
    @endforeach
    <br>
    <br>
        <span>Ваш комментарий</span> <br>
        <span>{{$request_details->comment}}</span>
    <br>
    <br>
    <span>Мы вас ждем в нашем филиале: {{$request_details->address}}</span> <br>
    <span>Дата: {{$request_details->date}} </span><br>
    <span>Время: {{$request_details->time}}</span><br>

    <span>Спасибо,</span> <br>
    <span>С уважением команда Promarket</span>
</div>
