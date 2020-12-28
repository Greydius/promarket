@extends('system.master')

@section('content')
	<?php $order = session('order'); ?>
 <div class="auth-container">
    <section class="login secondary-auth-page">
      <div class="container">
        <div class="bread-crumbs"></div>
        <div class="login-content">
          <h1 class="main-title">
            {{__("THANK YOU FOR THE ORDER")}} </h1>
          <div class="login-paragraph">
            <p>
              {{__("We have sent a registered sheet by mail")}}:  {{$order->email}}
            </p>
          </div>
          <div class="login-paragraph" style="text-align: center;">
              <h3>{{__("Order details")}}:</h3>
               <p>{{__("Order number")}}}: {{$order->id}} </p>
               <p> {{__("Number of items")}}: {{count($order->products)}}</p>
               <p> {{__("delivery")}}: {{$order->delivery}} - {{$order->delivery_address}}</p>
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