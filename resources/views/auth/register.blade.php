@extends('system.master')

@section('content')
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
                        <label>
                            <input class="auth_control" placeholder="Имя" type="text" name="username" value="{{ old('username') }}">
                        </label>
                        <label>
                            <input class="auth_control" placeholder="Электронная почта" type="email" name="email" value="{{ old('email') }}" >
                        </label>
                        <label>
                            <input class="auth_control" placeholder="Пароль" type="password" name="password" required>
                        </label>
                        <label>
                            <input class="auth_control" placeholder="Пароль ещё раз" type="password"  name="password_confirmation" required >
                        </label>
                        <div class="auth-checkboxes-wrapper">
                            <label class="auth-checkbox checkbox-label">
                                <input type="checkbox" name="agreement" required="required">
                                <span>Я согласен на обработку моих данных компанией Promarket</span>
                            </label>
                            <label class="auth-checkbox checkbox-label">
                                <input type="checkbox" name="agreement"  required="required">
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
@endsection
