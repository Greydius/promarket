@extends('system.master')

@section('content')

<div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-4 sidebar lk-sidebar">
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
                    <li class="sidebar-item lk-tabs-changer active">
                        <a href="#">
                            <img src="{{ asset('assets/img/lk/orders_icon.svg') }}" alt="">
                            <span>
                                Ваши заказы
                            </span>
                        </a>
                    </li>
                    <li class="sidebar-item lk-tabs-changer">
                        <a href="#">
                            <img src="{{ asset('assets/img/lk/account_icon.svg') }}" alt="">
                            <span>
                                Настройки аккаунта
                            </span>
                        </a>
                    </li>
                    <li class="sidebar-item">
                        <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                            <img src="{{ asset('assets/img/lk/quit_icon.svg') }}" alt="">
                            <span>
                                Выйти из системы
                            </span>
                        </a>

						<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
						    {{ csrf_field() }}
						</form>
                    </li>
                </ul>
            </div>

            <div class="col-lg-9 col-md-8 lk-container">
                <div class="lk-profile-bread-crumbs">
                    <div class="bread-crumbs">
                        <ul class="d-flex">
                            <li class="bread-crumb-link">
                                <a href="#">
                                    Магазин
                                </a>
                            </li>
                            <li class="bread-crumb-link bread-crumb-link-prev">
                                <a href="#">
                                    Мой аккаунт
                                </a>
                            </li>
                            <li class="bread-crumb-link ">
                                Список заказов
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="lk-tabs-wrapper">
                    <div class="lk-table-container active">
                        <div class="lk-arrow-back d-flex align-items-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.54">
                                    <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                                          fill="#202020"/>
                                </g>
                            </svg>
                            <span>
                                Назад
                            </span>
                        </div>
                        <div class="lk-table-wrapper">
                            <div class="lk-table">
                                <div class="lk-row lk-first-row d-flex">
                                    <div class="lk-first-col">
                                        Дата
                                    </div>
                                    <div class="lk-second-col">
                                        Номер заказа
                                    </div>
                                    <div class="lk-third-col">
                                        Сумма
                                    </div>
                                    <div class="lk-fourth-col">
                                        Статус заказа
                                    </div>
                                </div>
                                <a href="#" class="lk-row d-flex">
                                    <div class="lk-first-col">
                                        13.11.2019
                                    </div>
                                    <div class="lk-second-col">
                                        148931 PRO
                                    </div>
                                    <div class="lk-third-col">
                                        829.30 €
                                    </div>
                                    <div class="lk-fourth-col">
                                        Обрабатывается
                                    </div>
                                </a>
                                <a href="#" class="lk-row d-flex">
                                    <div class="lk-first-col">
                                        13.11.2019
                                    </div>
                                    <div class="lk-second-col">
                                        148931 PRO
                                    </div>
                                    <div class="lk-third-col">
                                        829.30 €
                                    </div>
                                    <div class="lk-fourth-col">
                                        Обрабатывается
                                    </div>
                                </a>
                                <a href="#" class="lk-row d-flex">
                                    <div class="lk-first-col">
                                        13.11.2019
                                    </div>
                                    <div class="lk-second-col">
                                        148931 PRO
                                    </div>
                                    <div class="lk-third-col">
                                        829.30 €
                                    </div>
                                    <div class="lk-fourth-col">
                                        Обрабатывается
                                    </div>
                                </a>
                                <a href="#" class="lk-row d-flex">
                                    <div class="lk-first-col">
                                        13.11.2019
                                    </div>
                                    <div class="lk-second-col">
                                        148931 PRO
                                    </div>
                                    <div class="lk-third-col">
                                        829.30 €
                                    </div>
                                    <div class="lk-fourth-col">
                                        Обрабатывается
                                    </div>
                                </a>
                                <a href="#" class="lk-row d-flex">
                                    <div class="lk-first-col">
                                        13.11.2019
                                    </div>
                                    <div class="lk-second-col">
                                        148931 PRO
                                    </div>
                                    <div class="lk-third-col">
                                        829.30 €
                                    </div>
                                    <div class="lk-fourth-col">
                                        Обрабатывается
                                    </div>
                                </a>
                                <a href="#" class="lk-row d-flex">
                                    <div class="lk-first-col">
                                        13.11.2019
                                    </div>
                                    <div class="lk-second-col">
                                        148931 PRO
                                    </div>
                                    <div class="lk-third-col">
                                        829.30 €
                                    </div>
                                    <div class="lk-fourth-col">
                                        Обрабатывается
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="lk-personal-data ">
                        <div class="lk-arrow-back d-flex align-items-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.54">
                                    <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                                          fill="#202020"/>
                                </g>
                            </svg>
                            <span>
                                Назад
                            </span>
                        </div>
                        <div class="profile-first-row">
                            <div class="d-flex align-items-center justify-content-between">

                                <div class="profile-details">
                                    <div class="profile-details-photo">
                                        <img src="" alt="">
                                        <div class="profile-change-photo-icon">
                                            <img src="{{ asset('assets/img/lk/change-photo') }}.svg" class="" alt="">
                                        </div>
                                    </div>
                                    <div class="profile-details-name">
                                        ВЛАДОК
                                        МИРОШНИЧЕНКО
                                    </div>
                                </div>
                                <div class="password-change">
                                    <div>
                                        замена пароля
                                    </div>
                                    <a href="#">
                                        Изменить пароль
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="profile-data">
                            <h3 class="small-title">
                                ДАННЫЕ ПОЛЬЗОВАТЕЛЯ
                            </h3>
                            <div class="profile-additional-data-form">
                                <form>
                                    <div class="d-flex radio-buttons-row align-items-center justify-content-center">
                                        <label class="radio-type">
                                            <input type="radio" name="identification-type">
                                            <span>
                                                Физическое лицо
                                            </span>
                                        </label>
                                        <label class="radio-type">
                                            <input type="radio" name="identification-type">
                                            <span>
                                                Юридическое лицо
                                            </span>
                                        </label>
                                    </div>
                                    <div class="profile-data-controls-wrapper">
                                        <div class="profile-data-item">
                                            <label>
                                                <input type="text" placeholder="Имя" class="auth_control">
                                            </label>
                                            <label>
                                                <input type="text" placeholder="Фамилия" class="auth_control">
                                            </label>
                                            <label>
                                                <input type="email" placeholder="Электронная почта"
                                                       class="auth_control">
                                            </label>
                                            <label>
                                                <input type="number" placeholder="Ваш телефон" class="auth_control">
                                            </label>
                                            <label class="textarea-label">
                                                <textarea placeholder="Комментарий к заказу"
                                                          class="auth_control"></textarea>
                                            </label>
                                        </div>
                                        <h3 class="small-title">
                                            АДРЕС ДОСТАВКИ
                                        </h3>
                                        <div class="profile-data-item">
                                            <div class="address-drop-down-wrapper">
                                                <div class="address-drop-down-trigger">
                                                    <div class="changing">Латвия</div>
                                                    <img src="{{ asset('assets/img/common/chevron-down.svg') }}" alt="">
                                                </div>
                                                <div class="address-drop-down">
                                                    <ul>
                                                        <li class="address-changer">Латвия</li>
                                                        <li class="address-changer">Латвия 2</li>
                                                        <li class="address-changer">Латвия 3</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <label>
                                                <input type="text" placeholder="Город" class="auth_control">
                                            </label>
                                            <label>
                                                <input type="email" placeholder="Адрес доставки"
                                                       class="auth_control">
                                            </label>
                                            <label>
                                                <input type="number" placeholder="Почтовый индекс" class="auth_control">
                                            </label>
                                        </div>
                                        <button class="default-button lk-submit-button" type="submit">
                                            сохранить
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div class="pagination d-flex align-items-center justify-content-center">
                            <a href="#" class="get-back pagination-bullet">
                                &lt;&lt;
                            </a>
                            <a href="#" class="pagination-bullet">
                                1
                            </a>
                            <a href="#" class="pagination-bullet active">
                                2
                            </a>
                            <a href="#" class="pagination-bullet">
                                3
                            </a>
                            <a href="#" class="pagination-bullet get-next">
                                &gt;&gt;
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
@endsection
