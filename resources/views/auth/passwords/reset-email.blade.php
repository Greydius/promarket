@extends('system.master')

@section('content')
	
 <div class="auth-container">
    <section class="login secondary-auth-page">
      <div class="container">
        <div class="bread-crumbs"></div>
        <div class="login-content">
          <h1 class="main-title">
            Мы отправили ссылку для восстановление пароля на ваш электронный ящик.           </h1>
          <div class="login-paragraph">
            <p>
              Пожалуйста откройте письмо и следуйте указаниям.
            </p>
          </div>
          <form action="/login" method="GET">	
          <button type="submit" class="submit-form default-button">
            OK
          </button>
          </form>
        </div>
      </div>
    </section>
  </div>
@endsection