@extends('system.master')

@section('content')

<main class="main lk-main">
    <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-4 sidebar lk-sidebar">
                    <div class="sidebar-profile-overview">
                        <div class="d-flex align-items-center profile-overview justify-content-between">
                            <div class="profile-photo">
                                <img src="{{ asset('/uploads/avatar/') }}/{{Auth::user()->avatar}}" alt="">
                            </div>
                            <div class="profile-name">                                
                                {{ Auth::user()->username }}
                                {{ Auth::user()->firstname }}
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
                    <div class="alert">
                         @if(session()->has('success'))
                            <p class="alert alert-success text-center">{{session()->get('success')}}</p>
                        @endif
                        @if(session()->has('error'))
                        <p class="alert alert-error alert-danger text-center">{{session()->get('error')}}</p>
                        @endif
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
                                    <?php $orders = Auth::user()->orders; ?>
                                    @foreach($orders as $order)                                    
                                    <a href="/profile/order/{{$order->id}}" class="lk-row d-flex">
                                        <div class="lk-first-col">
                                            {{ date('d.m.Y', strtotime($order->created_at)) }}
                                        </div>
                                        <div class="lk-second-col">
                                           {{ $order->id}}
                                        </div>
                                        <div class="lk-third-col">
                                            {{ $order->total_amout }} €
                                        </div>
                                        <div class="lk-fourth-col">
                                            @if($order->status == 1)
                                                Обрабатывается
                                            @endif
                                            @if($order->status == 2)
                                                Завершено
                                            @endif
                                        </div>
                                    </a>
                                    @endforeach
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
                                            <img src="{{ asset('/uploads/avatar/') }}/{{Auth::user()->avatar}}" class="user_avatar" alt="" style="width: auto; height: inherit;">

                                        <label for="avatar">
                                            <div class="profile-change-photo-icon">
                                                    
                                           <input id="avatar" type="file" name="file" style="z-index: -1;opacity: 0;width: 0;" />
                                             <img src="{{ asset('assets/img/lk/change-photo') }}.svg" class="" alt="" >
                                              
                                            </div>
                                                </label>
                                        </div>
                                        <div class="profile-details-name">
                                            {{ Auth::user()->username }}
                                            {{ Auth::user()->firstname }}
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
                                    <form action="{{ route('profile.edit') }}" method="POST">
                                     <!-- 
                                        <input type="file" id="avatar" name="avatar" style="width: 0;height: 0;opacity: 0;"> -->
                                        <div class="d-flex radio-buttons-row align-items-center justify-content-center">
                                            <label class="radio-type">
                                                <input type="radio" name="identification_type" value="0" @if(Auth::user()->identification_type == 0) checked="checked" @endif >
                                                <span>
                                                    Физическое лицо
                                                </span>
                                            </label>
                                            <label class="radio-type">
                                                <input  type="radio" name="identification_type" value="1" @if(Auth::user()->identification_type == 1) checked="checked" @endif>
                                                <span>
                                                    Юридическое лицо
                                                </span>
                                            </label>
                                        </div>
                                        <div class="profile-data-controls-wrapper">
                                            <div class="profile-data-item">
                                                <label>
                                                    <input type="text" name="username" placeholder="Имя" class="auth_control" value="{{ Auth::user()->username }}">
                                                </label>
                                                <label>
                                                    <input type="text" name="firstname" placeholder="Фамилия" class="auth_control" value="{{ Auth::user()->firstname }}">
                                                </label>
                                                <label>
                                                    <input type="email" name="email" placeholder="Электронная почта" value="{{ Auth::user()->email }}" class="auth_control">
                                                </label>
                                                <label>
                                                    <input type="number" name="phone" placeholder="Ваш телефон" class="auth_control"  value="{{ Auth::user()->phone }}">
                                                </label>
                                     <!--            <label class="textarea-label">
                                                    <textarea placeholder="Комментарий к заказу"
                                                              class="auth_control"></textarea>
                                                </label> -->
                                            </div>
                                            <h3 class="small-title">
                                                АДРЕС ДОСТАВКИ
                                            </h3>
                                            <div class="profile-data-item">
                                                <div class="address-drop-down-wrapper">
                                                    <div class="address-drop-down-trigger">
                                                        <input type="hidden" id="region" name="region" value="{{ Auth::user()->region }}">
                                                        <div class="changing">{{ Auth::user()->region }}</div>
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
                                                    <input type="text" name="city" placeholder="Город" class="auth_control" value="{{ Auth::user()->city }}">
                                                </label>
                                                <label>
                                                    <input type="text" name="delivery_address" placeholder="Адрес доставки" class="auth_control" value="{{ Auth::user()->delivery_address }}">
                                                </label>
                                                <label>
                                                    <input type="number" name="postcode" placeholder="Почтовый индекс" class="auth_control"  value="{{ Auth::user()->postcode }}">
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
</main>
<script type="text/javascript">
$('#avatar').change(function(){    
    //on change event  
    formdata = new FormData();
    if($(this).prop('files').length > 0)
    {
        file =$(this).prop('files')[0];
        formdata.append("file", file);
    }
    // alert(formdata);
    jQuery.ajax({
    url: '/profile/avatar',
    type: "POST",
    data: formdata,
    processData: false,
    contentType: false,
    success: function (result) {
         console.log(result);
         $(".user_avatar").attr("src","uploads/avatar/" + result);
         // play the audio file
    }
});
});
</script>

@endsection
