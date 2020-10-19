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

              <input id="email" type="email" class="auth_control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" placeholder="Электронная почта" autocomplete="email" autofocus>
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
<script>
    // $(function() {

    //     var app = {
    //         DOM: {},
    //         init: function () {

    //             // only applies to register form
    //             if (window.location.pathname == '/register') {

    //                 this.DOM.form = $('form');
    //                 this.DOM.form.email = this.DOM.form.find('input[name="email"]');

    //                 this.DOM.form.email.group = this.DOM.form.email.prev('span.error');
    //                 // console.log(this.DOM.form.email.prev('span.error'));
    //                 this.DOM.form.submit( function(e) {
    //                     e.preventDefault();

    //                     var self = this; // native form object

    //                     error = {};

    //                     app.DOM.form.email.group.find('strong').text('');

    //                     app.DOM.form.email.group.removeClass('has-error');

    //                     var user = {};
    //                     user.email = app.DOM.form.email.val();

    //                     var request = $.ajax({
    //                         headers: {
    //                             'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    //                         },
    //                         url: '/register',
    //                         type: 'POST',
    //                         contentType: 'application/json',
    //                         data: JSON.stringify(user)
    //                     });
    //                     request.done( function(data)
    //                     {
    //                         // native form submit
    //                         self.submit();
    //                     });
    //                     request.fail( function(jqXHR)
    //                     {
    //                         error = jqXHR.responseJSON;
    //                         // alert(error.errors.email);
    //                         console.log(error.errors);
    //                         if (error.errors.email) {
    //                             app.DOM.form.email.group.find('strong').text(error.errors.email[0]);
    //                             app.DOM.form.email.group.addClass('has-error');
    //                         }

    //                     });

    //                 });
    //             }
    //         }
    //     }

    //     app.init();

    // });

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
               $(error).insertAfter(element.prev(".error"));
           },
    submitHandler: function(form) {
      // do other things for a valid form
      $(form).submit();
    }
});
    
});

</script>


@endsection
