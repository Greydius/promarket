@extends('system.master')

@section('content')

<div class="auth-container">
<section class="login secondary-auth-page">
  <div class="container">
    <div class="bread-crumbs"></div>
    <div class="login-content">
      <h1 class="main-title">
        На ваш почтовый ящик выслана ссылка с активацией вашей учетной записи
      </h1>
       @if (session('resent'))
      <div class="login-paragraph">
        <p>
          Пожалуйста откройте письмо и пройдите по ссылке, чтобы завершить регистрацию аккаунта.
        </p>
      </div>
      @endif
      <form class="d-inline" method="POST" action="{{ route('verification.resend') }}">
        @csrf
          <button type="submit" class="submit-form default-button">
            OK
          </button>
      </form>
    </div>
  </div>
</section>
</div>
@endsection
