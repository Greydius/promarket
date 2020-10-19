@extends('system.master')

@section('content')
 <div class="auth-container">
    <section class="login secondary-auth-page auth-reduced-width">
      <div class="container">
        <div class="bread-crumbs"></div>
        <div class="login-content">
          <h1 class="main-title">
            Новый пароль
          </h1>
            <form method="POST" action="{{ route('password.update') }}" class="reset_pass">
            @csrf

            <input type="hidden" name="token" value="{{ $token }}">


            <label>
               <input id="email" type="email" class="auth_control  @error('email') is-invalid @enderror" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>

                @error('email')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </label>

            <label>
             <input id="password" type="password" class="auth_control  @error('password') is-invalid @enderror" name="password" required autocomplete="new-password"  placeholder="Введите новый пароль">
            @error('password')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
            </label>
            <label>
                <input id="password-confirm" type="password" class="auth_control " name="password_confirmation" required autocomplete="new-password" placeholder="Введите новый пароль ещё раз">
            </label>
            <button type="submit" class="submit-form default-button">
              ОК
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>

<script type="text/javascript">
  $(document).ready(function(){

  $.extend($.validator.messages, {
      required: "Это поле обязательно для заполнения",   
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
               $(error).insertAfter(element.prev(".errormessage"));
           },
    submitHandler: function(form) {
      // do other things for a valid form
      $(form).submit();
    }
});
    
});
</script>
@endsection
