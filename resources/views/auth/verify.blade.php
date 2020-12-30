@extends('system.master')

@section('content')
    <main class="main">
<div class="auth-container">
<section class="login secondary-auth-page">
  <div class="container">
    <div class="bread-crumbs"></div>
    <div class="login-content">
      <h1 class="main-title">
        {{__("A LINK WITH THE ACTIVATION OF YOUR ACCOUNT SENT TO YOUR MAILBOX")}}
      </h1>
       @if (session('resent'))
      <div class="login-paragraph">
        <p>
          {{__("Please open the email and follow the link to complete your account registration.")}}
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
</main>
@endsection
