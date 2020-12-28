@extends('system.master')

@section('content')
	<?php $order = session('order'); ?>
 <div class="auth-container">
    <section class="login secondary-auth-page">
      <div class="container">
        <div class="bread-crumbs"></div>
        <div class="login-content">
          <h1 class="main-title">
            Спасибо за заказ</h1>
          <div class="login-paragraph">
            <p>
              Мы отправили заказной лист на почту:  {{$order->email}}
            </p>
          </div>
          <div class="login-paragraph" style="text-align: center;">
              <h3>Детали заказа:</h3>
               <p>Номер заказа: {{$order->id}} </p>
               <p> Количество единиц товара: {{count($order->products)}}</p>
               <p> Доставка: {{$order->delivery}} - {{$order->delivery_address}}</p>
            </div>
          <form action="/" method="GET">	
          <button type="submit" class="submit-form default-button">
            OK
          </button>
          </form>
        </div>
      </div>
    </section>
  </div>
@endsection