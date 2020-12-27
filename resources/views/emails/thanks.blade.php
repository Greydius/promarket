@extends('system.master')

@section('content')
	
 <div class="auth-container">
    <section class="login secondary-auth-page">
      <div class="container">
        <div class="bread-crumbs"></div>
        <div class="login-content">
          <h1 class="main-title">
            Спасибо за заказ</h1>
          <div class="login-paragraph">
            <p>
              Ваш заказ принят в обработку!
            </p>
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