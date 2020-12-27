<div>
    <h3>Уважаемый {{ $order->fio }}, Наш менеджер на данный момент проверяет ваш заказ и в ближайшее время
        вышлет вам счет-фактуру
    </h3>

    <h2> Детали заказа </h2>
    @foreach($order->products as $detail)
        <span>Название товара: {{$detail->name}}</span> <br>
        <span>Цена товара: {{$detail->price}} €</span> <br>
        @isset($detail->color)
            <span>Цвет товара: {{$detail->color['name']}}</span> <br>
        @endisset
        <br>
    @endforeach
    <br>
    <br>
        <span>Ваш комментарий</span> <br>
        <span>{{$order->comment}}</span>
    <br>
    <br>
    <span>Мы вас ждем в нашем филиале: {{$order->address}}</span> <br>
    <span>Дата: {{$order->created_at}} </span><br>
    <span>Итого: {{$order->total_amount}}</span><br>

    <span>Спасибо,</span> <br>
    <span>С уважением команда Promarket</span>
</div>
