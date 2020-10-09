@extends('system.master')

@section('content')
  <div class="auth-container">
    <section class="login secondary-auth-page">
      <div class="container">
        <div class="bread-crumbs"></div>
        <div class="login-content">
          
            @if (session('status'))
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
            @else
            <h1 class="main-title">
            Восстановление <br>
            пароля
          </h1>    
          <form method="POST" action="{{ route('password.email') }}">
                        @csrf
            <label>
              <input id="email" type="email" class="auth_control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" placeholder="Электронная почта" required autocomplete="email" autofocus>
                @error('email')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </label>
            <button type="submit" class="submit-form default-button">
              ОТПРАВИТЬ ССЫЛКУ
            </button>
          </form>
            @endif
        </div>
      </div>
    </section>
  </div>
@endsection
