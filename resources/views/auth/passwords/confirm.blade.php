@extends('system.master')

@section('content')

  <div class="auth-container">
    <section class="login secondary-auth-page auth-reduced-width">
      <div class="container">
        <div class="bread-crumbs"></div>
        <div class="login-content">
          <h1 class="main-title">
            {{__("New password")}}
          </h1>
            <form method="POST" action="{{ route('password.confirm') }}">
                @csrf

            <label>
              <input class="auth_control @error('password') is-invalid @enderror" name="password" autocomplete="current-password" placeholder="{{__('Enter a new password')}}" type="password" >
            </label>
            <label>
               <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" autocomplete="current-password" placeholder="{{__('Enter the new password again')}}">

                @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </label>
            <button type="submit" class="submit-form default-button">
              ОК
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>

@endsection
