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
          <form method="POST" action="{{ route('password.email') }}" class="reset_pass">
                        @csrf
            <label>
            <span class="error help-block">{{ $errors->first('email') }}</span>

              <input id="email" type="email" class="auth_control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" placeholder="{{__('Email')}}" autocomplete="email" autofocus>
            </label>
            <button type="submit" class="submit-form default-button">
             {{__("Send")}}
            </button>
          </form>
            @endif
        </div>
      </div>
    </section>
  </div>
<script>
$(document).ready(function(){

  $.extend($.validator.messages, {
      required: "<?php __("This field is required") ?>",   
      email: "Пожалуйста, введите действительный адрес электронной почты."
});

$("form.reset_pass").validate({
    rules: {

      email: {
        required: true,
        email: true
      }
    }, 
    ignore: [],
    errorPlacement: function (error, element) {
               $(error).insertAfter(element.prev(".error"));
           },
    // submitHandler: function(form) {
    //   // do other things for a valid form
    //   $(form).submit();
    // }
});
    
});

</script>


@endsection
