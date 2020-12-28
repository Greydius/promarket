@extends('system.master')

@section('content')
<main class="main">
 <div class="auth-container">
        <section class="login login-secondary-page registration-primary-page auth-reduced-width">
            <div class="container">
                <div class="bread-crumbs"></div>
                <div class="login-content">
                    <h1 class="main-title">
                        {{__("registration")}}
                    </h1>
                      <form method="POST" class="registation-form" action="{{ route('register') }}" novalidate="novalidate">
                        @csrf
                        <label class="form-group">
                            <input class="auth_control" placeholder="{{__('First Name')}} " type="text" name="username" value="{{ old('username') }}">
                        </label>
                        <label class="form-group">
                            <input class="auth_control" placeholder="{{__('Email')}}" type="email" name="email" value="{{ old('email') }}" >
                        </label>
                        <label class="form-group">
                            <input class="auth_control" placeholder="Пароль" type="password" name="password" minlength="8" >
                        </label>
                        <label class="form-group">
                            <input class="auth_control" placeholder="Пароль ещё раз" id="password" type="password"  name="password_confirmation" minlength="8" >
                        </label>
                        <div class="auth-checkboxes-wrapper">

                            <label class="auth-checkbox checkbox-label">
                                <input type="checkbox" name="agreement" class="accepted" value="">
                                <span>{{__("I agree to the processing of my data by Promarket")}} </span>
                            </label>

                            <label class="auth-checkbox checkbox-label">
                                <input type="checkbox" name="agreement2" class="accepted" value="">
                                <span> {{__("I agree to the processing of my data by Promarket")}}  </span>
                            </label>
                        </div>
                        <button type="submit" class="submit-form default-button">
                           {{__("Register now")}}
                        </button>

                    </form>
                </div>
            </div>
        </section>
    </div>
</main>

<script>
    $(function() {
  $('.accepted').change(function() {
        console.log(this);
        if ($(this).is(':checked')) {
            $(this).val('1');
        }else{
            $(this).val('');
        }
    });
      /*  var app = {
            DOM: {},
            init: function () {

                // only applies to register form
                if (window.location.pathname == '/register') {

                    this.DOM.form = $('.login-content form');
                    this.DOM.form.username  = this.DOM.form.find('input[name="username"]');
                    this.DOM.form.email = this.DOM.form.find('input[name="email"]');
                    this.DOM.form.pwd   = this.DOM.form.find('input[name="password"]');
                    this.DOM.form.pwdc  = this.DOM.form.find('input[name="password_confirmation"]');
                    this.DOM.form.agreement  = this.DOM.form.find('input[name="agreement"]');
                    this.DOM.form.agreement2  = this.DOM.form.find('input[name="agreement2"]');

                    this.DOM.form.username.group = this.DOM.form.username.prev('span.error');
                    this.DOM.form.email.group = this.DOM.form.email.prev('span.error');
                    this.DOM.form.pwd.group = this.DOM.form.pwd.prev('span.error');
                    this.DOM.form.pwdc.group = this.DOM.form.pwdc.prev('span.error');
                    this.DOM.form.agreement.group = this.DOM.form.agreement.parent().prev('span.error');
                    this.DOM.form.agreement2.group = this.DOM.form.agreement2.parent().prev('span.error');
                    // console.log(this.DOM.form.email.prev('span.error'));
                    this.DOM.form.submit( function(e) {
                        e.preventDefault();

                        var self = this; // native form object

                        error = {};

                        app.DOM.form.username.group.find('strong').text('');
                        app.DOM.form.email.group.find('strong').text('');
                        app.DOM.form.pwd.group.find('strong').text('');
                        app.DOM.form.pwdc.group.find('strong').text('');
                        app.DOM.form.agreement.group.find('strong').text('');
                        app.DOM.form.agreement2.group.find('strong').text('');

                        app.DOM.form.username.group.removeClass('has-error');
                        app.DOM.form.email.group.removeClass('has-error');
                        app.DOM.form.pwd.group.removeClass('has-error');
                        app.DOM.form.pwdc.group.removeClass('has-error');
                        app.DOM.form.agreement.group.removeClass('has-error');
                        app.DOM.form.agreement2.group.removeClass('has-error');

                        var user = {};
                        user.username = app.DOM.form.username.val();
                        user.email = app.DOM.form.email.val();
                        user.password = app.DOM.form.pwd.val();
                        user.password_confirmation = app.DOM.form.pwdc.val();
                        user.agreement = app.DOM.form.agreement.val();
                        user.agreement2 = app.DOM.form.agreement2.val();

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
                            if (error.errors.password_confirmation) {
                                app.DOM.form.pwdc.group.find('strong').text(error.errors.password_confirmation[0]);
                                app.DOM.form.pwdc.group.addClass('has-error');
                            }
                            if (error.errors.agreement) {
                                app.DOM.form.agreement.group.find('strong').text(error.errors.agreement[0]);
                                app.DOM.form.agreement.group.addClass('has-error');
                            }
                            if (error.errors.agreement2) {
                                app.DOM.form.agreement2.group.find('strong').text(error.errors.agreement2[0]);
                                app.DOM.form.agreement2.group.addClass('has-error');
                            }

                        });

                    });
                }
            }
        }

        app.init();*/

    });
    </script>

@endsection
