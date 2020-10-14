@extends('system.master')

@section('content')
<main class="main">
 <div class="auth-container">
    <section class="login login-primary-page">
      <div class="container">
        <div class="bread-crumbs">
          <ul class="d-flex">
            <li class="bread-crumb-link">
              <a href="#">
                Магазин
              </a>
            </li>
            <li class="bread-crumb-link">
              Вход
            </li>
          </ul>
        </div>
        <div class="login-content">
          <h1 class="main-title">
            Войти в систему
          </h1>
          <form method="POST" action="{{ route('login') }}">
            @csrf
            <div class="outer-service-auth-wrapper">
              @foreach(['facebook', 'google'] as $provider)
                  <a class="btn btn-link {{ $provider }}-auth outer-service-auth" href="{{ route('social.login', ['provider' => $provider]) }}">
                  <img src="{{ asset('assets/img/common/fb.svg') }}" alt="">
                <span>
                Войти через {{ ucwords($provider)}}
              </span></a>
              @endforeach
            </div>
            <label>
              <input class="auth_control" placeholder="Электронная почта" type="email" name="email"  required="required">
              @if ($errors->has('email'))
                <span class="error">{{ $errors->first('email') }}</span>
              @endif 
            </label>
            <label>
              <input class="auth_control" minlength="8" placeholder="Пароль" type="password" name="password" required="required">
              @if ($errors->has('password'))
                <span class="error">{{ $errors->first('password') }}</span>
              @endif
            </label>
            <button type="submit" class="submit-form default-button">
              OK
            </button>
            <div class="additional-auth-links">
              <div class="forgot-password">
                 @if (Route::has('password.request'))
                        <a class="btn btn-link" href="{{ route('password.request') }}">
                           Я забыл пароль! <span class="underlined"> Восстановить его скорее</span>
                        </a>
                @endif
              </div>
              <div class="account-registration">
                <a href="{{ route('register') }}">
                  Нет аккаунт? <span class="underlined"> Зарегистрироваться</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</main>
@endsection
