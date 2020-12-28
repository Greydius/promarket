<div>
    <h1>Поступила новая заявка</h1>
    <h2> Детали заказа </h2>
    <span>Имя клента: {{ $request_details->name }}</span>
    <span>Email клента: {{ $request_details->email }}</span>
    <span>Телефон клента: {{ $request_details->tel }}</span>
    <h4>Продукт</h4>
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
    <span>Комментарий комментарий</span> <br>
    <span>{{$request_details->comment}}</span>
    <br>
    <br>
    <span>Филиал: {{$request_details->address}}</span> <br>
    <span>Дата: {{$request_details->date}} </span><br>
    <span>Время: {{$request_details->time}}</span><br>
</div>
