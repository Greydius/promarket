@extends('system.master')

@section('content')
    <main class="main lk-main">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-4 sidebar lk-sidebar lk-inner-sidebar">
                <div class="sidebar-profile-overview">
                    <div class="d-flex align-items-center profile-overview justify-content-between">
                        <div class="profile-photo">
                            <img src="" alt="">
                        </div>
                        <div class="profile-name">
                            ВЛАДОК МИРОШНИЧЕНКО
                        </div>
                    </div>
                </div>
                <ul class="lk-tabs-changers">
                    <li class="sidebar-item ">
                        <a href="#">
                            <img src="{{ asset('/assets/img/lk/orders_icon.svg') }}" alt="">
                            <span>
                                Ваши заказы
                            </span>
                        </a>
                    </li>
                    <li class="sidebar-item active">
                        <a href="#">
                            <img src="{{ asset('/assets/img/lk/account_icon.svg') }}" alt="">
                            <span>
                                Настройки аккаунта
                            </span>
                        </a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#">
                            <img src="{{ asset('/assets/img/lk/quit_icon.svg') }}" alt="">
                            <span>
                                Выйти из системы
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-9 lk-container lk-inner-container">
                <div class="lk-profile-bread-crumbs">
                    {{ Breadcrumbs::render('account') }}
                </div>
                <div class="lk-tabs-wrapper">
                    <div class="lk-table-container lk-inner-table-container active">
                        <div class="lk-order-arrow-back d-flex align-items-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.54">
                                    <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                                          fill="#202020"/>
                                </g>
                            </svg>
                            <a href="/profile">
                            <span>
                                Назад
                            </span>
                        </a>
                        </div>
                      

                        <div class="lk-inner-cards-wrapper">
                           <form action="{{ route('profile.new-password') }}" method="POST">
                             {{ csrf_field() }}
                                        <div class="profile-data-controls-wrapper">
                                            <div class="profile-data-item">
                                               
                                                <label>
                                                 <input id="password" type="password" class="auth_control" name="new_password" required autocomplete="new-password"  placeholder="Введите новый пароль">
                                                </label>
                                                <label>
                                                    <input id="password-confirm" type="password" class="auth_control " name="password_confirmation" required autocomplete="new-password" placeholder="Введите новый пароль ещё раз">
                                                </label>
                                            </div>
                                            <button class="default-button lk-submit-button" type="submit">
                                                сохранить
                                            </button>
                                        </div>

                                    </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
@endsection
