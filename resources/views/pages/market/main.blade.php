@extends('system.master')

@section('content')

    <main class="main">
        <div class="fixing-container">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 shop-sidebar login-content sidebar">

                        <div class="shop-sidebar-wrapper">

                            <div class="shop-sidebar-inner-wrap">

                                <div class="cancel-filters">
                                    <span>Отменить все</span>
                                    <svg class="close-shop-sidebar" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.54">
                                            <path
                                                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                                                fill="#CC2830"/>
                                        </g>
                                    </svg>
                                </div>

                                <form class="sidebar-search">
                                    <label class="position-relative">
                                        <input type="text" placeholder="Поиск" class="auth_control">
                                        <button type="button" class="search_form_submit">
                                            <img src="{{ asset('/assets/img/common/search.svg') }}" alt="">
                                        </button>
                                    </label>
                                </form>

                                <div class="cost-filter filter-el">
                                    <div class="cost-filter-trigger justify-content-between d-flex align-items-center">
                                        <p>
                                            цена €
                                        </p>
                                        <img src="{{asset('assets/img/common/chevron-down.svg')}}" alt="">
                                    </div>
                                    <div class="filter-content">
                                        <div class="cost-slider">
                                            <div data-min="0" data-max="100" id="cost_slider"></div>
                                        </div>

                                        <div
                                            class="d-flex justify-content-between align-items-center range-inputs-wrapper">
                                            <label class="d-flex align-items-center">
                                                <span>
                                                    От
                                                </span>
                                                <input class="starting-value" placeholder="0" type="text"
                                                       name="min_price">
                                            </label>
                                            <label class="d-flex align-items-center">
                                                <span>
                                                    До
                                                </span>
                                                <input class="ending-value" placeholder="300" type="text"
                                                       name="max_price">
                                            </label>
                                        </div>

                                    </div>
                                </div>

                                <div class="filter-el checkbox-filter">
                                    <div class="cost-filter-trigger justify-content-between d-flex align-items-center">
                                        <p>
                                            наличие
                                        </p>
                                        <img src="{{asset('assets/img/common/chevron-down.svg')}}" alt="">
                                    </div>
                                    <div class="filter-content">
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="availability" value="Есть в наличии">
                                            <span>
                                    Есть в наличии
                                </span>
                                        </label>
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="availability" value="Под заказ">
                                            <span>
                                   Под заказ
                                </span>
                                        </label>
                                    </div>
                                </div>

                                <div class="filter-el checkbox-filter">
                                    <div class="cost-filter-trigger justify-content-between d-flex align-items-center">
                                        <p>
                                            устройство
                                        </p>
                                        <img src="{{asset('assets/img/common/chevron-down.svg')}}" alt="">
                                    </div>
                                    <div class="filter-content">
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="device" value="phone">
                                            <span>
                                   Телефоны
                                </span>
                                        </label>
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="device" value="tablet">
                                            <span>
                                   Планшеты
                                </span>
                                        </label>
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="device" value="notebook">
                                            <span>
                                   Ноутбуки
                                </span>
                                        </label>
                                    </div>
                                </div>

                                <div class="filter-el checkbox-filter">
                                    <div class="cost-filter-trigger justify-content-between d-flex align-items-center">
                                        <p>
                                            марка
                                        </p>
                                        <img src="{{asset('assets/img/common/chevron-down.svg')}}" alt="">
                                    </div>
                                    <div class="filter-content">
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="manufacturer" value="apple">
                                            <span>
                                   Apple
                                </span>
                                        </label>
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="manufacturer" value="samsung">
                                            <span>
                                   Samsung
                                </span>
                                        </label>
                                    </div>
                                </div>

                                <div class="filter-el checkbox-filter">
                                    <div class="cost-filter-trigger justify-content-between d-flex align-items-center">
                                        <p>
                                            модель
                                        </p>
                                        <img src="{{asset('assets/img/common/chevron-down.svg')}}" alt="">
                                    </div>
                                    <div class="filter-content">
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="model" value="iphone 5">
                                            <span>
                                              iPhone 5
                                            </span>
                                        </label>
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="model" value="iphone 5s">
                                            <span>
                                               iPhone 5s
                                            </span>
                                        </label>

                                        <label class="checkbox-label">
                                            <input type="checkbox" name="model" value="iphone 6">
                                            <span>
                                               iPhone 6
                                            </span>
                                        </label>

                                        <label class="checkbox-label">
                                            <input type="checkbox" name="model" value="iphone 6s">
                                            <span>
                                               iPhone 6s
                                            </span>
                                        </label>

                                        <label class="checkbox-label">
                                            <input type="checkbox" name="model" value="iphone 6 plus">
                                            <span>
                                               iPhone 6 Plus
                                            </span>
                                        </label>

                                        <label class="checkbox-label">
                                            <input type="checkbox" name="model" value="iphone 6S">
                                            <span>
                                               iPhone 6S
                                            </span>
                                        </label>

                                        <label class="checkbox-label">
                                            <input type="checkbox" name="model" value="iphone 6S plus">
                                            <span>
                                               iPhone 6S Plus
                                            </span>
                                        </label>

                                        <label class="checkbox-label">
                                            <input type="checkbox" name="model" value="iphone 7">
                                            <span>
                                               iPhone 7
                                            </span>
                                        </label>

                                        <label class="checkbox-label">
                                            <input type="checkbox" name="model" value="iphone 8">
                                            <span>
                                               iPhone 8
                                            </span>
                                        </label>

                                        <label class="checkbox-label">
                                            <input type="checkbox" name="model" value="iphone 10">
                                            <span>
                                               iPhone 10
                                            </span>
                                        </label>

                                        <label class="checkbox-label">
                                            <input type="checkbox" name="model" value="iphone 11">
                                            <span>
                                               iPhone 11
                                            </span>
                                        </label>

                                    </div>
                                </div>

                                <div class="filter-el checkbox-filter">
                                    <div class="cost-filter-trigger justify-content-between d-flex align-items-center">
                                        <p>
                                            цвет
                                        </p>
                                        <img src="{{asset('/assets/img/common/chevron-down.svg')}}" alt="">
                                    </div>
                                    <div class="filter-content">
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="color" value="Белый">
                                            <span>
                                               Белый
                                            </span>
                                        </label>
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="color" value="Чёрный">
                                            <span>
                                               Чёрный
                                            </span>
                                        </label>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div class="col-lg-9 col-md-12">
                        <div class="shop-main-wrapper brand-product">
                            <div class="collapsing-control">
                                <div class="d-flex align-items-center justify-content-between">
                                    {{ Breadcrumbs::render('category', $category) }}
                                    <div class="market_sorting-wrapper">
                                        <div class="market_sorting d-flex align-items-center">
                                            <a href="#" class="market-sorting-trigger">
                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M3 17H9V15H3V17ZM3 5V7H21V5H3ZM3 12H15V10H3V12Z"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="24" height="24" fill="white"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span>Сортировать</span>
                                            </a>
                                            <a href="#" class="market-sorting-trigger market-filtering-trigger">
                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M3 17H9V15H3V17ZM3 5V7H21V5H3ZM3 12H15V10H3V12Z"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="24" height="24" fill="white"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span>Фильтры</span>
                                            </a>
                                            <a href="#" class="market-make-list">
                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path
                                                            d="M3 5V19H20V5H3ZM7 7V9H5V7H7ZM5 13V11H7V13H5ZM5 15H7V17H5V15ZM18 17H9V15H18V17ZM18 13H9V11H18V13ZM18 9H9V7H18V9Z"/>
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="sorting-controller">
                                    <div class="sorting-pages d-flex justify-content-between align-items-center">
                                        <div class="sorting-pagination">
                                    <span class="muted">
                                        1-12 из 1046
                                    </span>
                                        </div>
                                        <div class="d-flex align-items-center sorting-filter-row">
                                            <div class="sorting-filter select-drop-down drop-down-sorting sorting">
                                                <select name="order" id="order"
                                                        class="sorting_select sorting-filter-content dropping__element__wrapper1">
                                                    <option value="ASC" style="padding: 10px">Цена по возрастанию
                                                    </option>
                                                    <option value="DESC">Цена по убыванию</option>
                                                </select>
                                            </div>
                                            <div class="sorting-filter select-drop-down drop-down-sorting showing">
                                            <!--  <div class="sorting-filter-trigger">
                                                   <span class="muted changing">
                                                        Показать 24
                                                    </span>
                                                    <label for="cars">Показать 24</label>
                                                    <img src="{{asset('assets/img/common/chevron-down.svg')}}" alt="">
                                                </div> -->
                                                <select name="per_page" id="per_page"
                                                        class="sorting_select sorting-filter-content dropping__element__wrapper1">
                                                    <option value="24">Показать 24</option>
                                                    <option value="2">Показать 2</option>
                                                    <option value="3">Показать 3</option>
                                                    <option value="1">Показать 1</option>
                                                </select>
                                            @csrf
                                            <!-- < div class="sorting-filter-content dropping__element__wrapper">

                                                   <ul>
                                                        <li class="sorting-filter-content-changers">
                                                            <a href="#">
                                                                24
                                                            </a>
                                                        </li>
                                                        <li class="sorting-filter-content-changers">
                                                            <a href="#">
                                                                48
                                                            </a>
                                                        </li>
                                                        <li class="sorting-filter-content-changers">
                                                            <a href="#">
                                                                120
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 class="small-title">
                                {{ $category->name }}
                            </h3>
                            <div id="sort">
                                <div class="row additional-commodities-wrapper">
                                    @foreach($category->products as $product)
                                        <div class="col-lg-4 col-md-4 col-6">
                                            @include('components.market.card', compact('product'))
                                        </div>
                                    @endforeach
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
        </div>
    </main>
    <script type="text/javascript">
        var url = '<?= Request::url(); ?>';
        $('.sorting_select').change(function () {
            var token = $('input[name="_token"]').val();
            var order = $('#order').children("option:selected").val();
            var per_page = $('#per_page').children("option:selected").val();
            var data = {
                'sorting': '1',
                'order': order,
                'per_page': per_page,
                '_token': token
            };
            $.ajax({
                type: 'POST',
                url: url,
                data: data
            }).done(function (data) {
                $('#sort').html(data);
                // log data to the console so we can see
                // console.log(data);

                // here we will handle errors and validation messages
            });

        });
        $('.filter-el input').change(function () {
            var min_price = $('input[name="min_price"]').val();
            var max_price = $('input[name="max_price"]').val();

            var availability = [];
            var device = [];
            var manufacturer = [];
            var model = [];
            var color = [];
            $.each($(".filter-el input[name='availability']:checked"), function () {
                availability.push($(this).val());
            });
            $.each($(".filter-el input[name='device']:checked"), function () {
                device.push($(this).val());
            });
            $.each($(".filter-el input[name='manufacturer']:checked"), function () {
                manufacturer.push($(this).val());
            });
            $.each($(".filter-el input[name='model']:checked"), function () {
                model.push($(this).val());
            });
            $.each($(".filter-el input[name='color']:checked"), function () {
                color.push($(this).val());
            });
            // console.log(availability);
            // console.log(device);
            // console.log(manufacturer);
            // console.log(model);
            // console.log(color);

            data = {
                'filter': '1',
                'min_price': min_price,
                'max_price': max_price,
                'availability': availability,
                'device': device,
                'attrs': {
                    'manufacturer': manufacturer,
                    'model': model,
                    'color': color,
                }
            };
            console.log(data);

            $.ajax({
                type: 'POST',
                url: url,
                data: data
            }).done(function (data) {
                $('#sort').html(data);
                // log data to the console so we can see
                // console.log(data);

                // here we will handle errors and validation messages
            });
        });


    </script>
@endsection
