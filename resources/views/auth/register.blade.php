@extends('system.master')

@section('content')
<main class="main">
 <div class="auth-container">
        <section class="login login-secondary-page registration-primary-page auth-reduced-width">
            <div class="container">
                <div class="bread-crumbs"></div>
                <div class="login-content">
                    <h1 class="main-title">
                        Регистрация
                    </h1>
                      <form method="POST" action="{{ route('register') }}">
                        @csrf
                        <label class="form-group">                         
                              <span class="error help-block"><strong> {{ $errors->first('username') }}</strong></span>
                            <input class="auth_control" placeholder="Имя" type="text" name="username" value="{{ old('username') }}">
                        </label>
                        <label class="form-group">
                      <span class="error help-block"><strong>{{ $errors->first('email') }}</strong></span>
                           
                            <input class="auth_control" placeholder="Электронная почта" type="email" name="email" value="{{ old('email') }}" >
                        </label>
                        <label class="form-group">
                            <span class=" error help-block">
                                <strong>{{ $errors->first('password') }}</strong>
                            </span>
                            
                            <input class="auth_control" placeholder="Пароль" type="password" name="password" minlength="8" >
                        </label>
                        <label class="form-group">
                            <input class="auth_control" placeholder="Пароль ещё раз" type="password"  name="password_confirmation" minlength="8" >
                        </label>
                        <div class="auth-checkboxes-wrapper">
                            <label class="auth-checkbox checkbox-label">
                                <input type="checkbox" name="agreement">
                                <span>Я согласен на обработку моих данных компанией Promarket</span>
                            </label>
                            <label class="auth-checkbox checkbox-label">
                                <input type="checkbox" name="agreement">
                                <span> Я согласен на обработку моих данных компанией Promarket </span>
                            </label>
                        </div>
                        <button type="submit" class="submit-form default-button">
                            зарегистрироваться
                        </button>

                    </form>
                </div>
            </div>
        </section>
    </div>
</main>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
    $(function() {

        var app = {
            DOM: {},
            init: function () {

                // only applies to register form
                if (window.location.pathname == '/register') {

                    this.DOM.form = $('form');
                    this.DOM.form.username  = this.DOM.form.find('input[name="username"]');
                    this.DOM.form.email = this.DOM.form.find('input[name="email"]');
                    this.DOM.form.pwd   = this.DOM.form.find('input[name="password"]');
                    this.DOM.form.pwdc  = this.DOM.form.find('input[name="password_confirmation"]');

                    this.DOM.form.username.group = this.DOM.form.username.prev('span.error');
                    this.DOM.form.email.group = this.DOM.form.email.prev('span.error');
                    this.DOM.form.pwd.group = this.DOM.form.pwd.prev('span.error');
                    // console.log(this.DOM.form.email.prev('span.error'));
                    this.DOM.form.submit( function(e) {
                        e.preventDefault();

                        var self = this; // native form object

                        error = {};

                        app.DOM.form.username.group.find('strong').text('');
                        app.DOM.form.email.group.find('strong').text('');
                        app.DOM.form.pwd.group.find('strong').text('');

                        app.DOM.form.username.group.removeClass('has-error');
                        app.DOM.form.email.group.removeClass('has-error');
                        app.DOM.form.pwd.group.removeClass('has-error');

                        var user = {};
                        user.username = app.DOM.form.username.val();
                        user.email = app.DOM.form.email.val();
                        user.password = app.DOM.form.pwd.val();
                        user.password_confirmation = app.DOM.form.pwdc.val();

                        var request = $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            url: '/register',
                            type: 'POST',
                            contentType: 'application/json',
                            data: JSON.stringify(user)
                        });
                        request.done( function(data)
                        {
                            // native form submit
                            self.submit();
                            window.location.href = '/email/verify'; //relative to domain
                        });
                        request.fail( function(jqXHR)
                        {
                            error = jqXHR.responseJSON;
                            // alert(error.errors.email);
                            console.log(error.errors);
                            if (error.errors.username) {
                                app.DOM.form.username.group.find('strong').text(error.errors.username[0]);
                                // app.DOM.form.username.group.find('strong').text(error.errors.username);
                                app.DOM.form.username.group.addClass('has-error');
                            }
                            if (error.errors.email) {
                                app.DOM.form.email.group.find('strong').text(error.errors.email[0]);
                                app.DOM.form.email.group.addClass('has-error');
                            }
                            if (error.errors.password) {
                                app.DOM.form.pwd.group.find('strong').text(error.errors.password[0]);
                                app.DOM.form.pwd.group.addClass('has-error');
                            }

                        });

                    });
                }
            }
        }

        app.init();

    });
    </script>

@endsection
