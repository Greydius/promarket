@extends('system.master')

@section('content')
    <main class="main">
        <div class="fixing-container">
            <div class="container">
                <div class="row">

                    @include('components.fixing-sidebar')

                    <div class="col-lg-9">
                        <div class="product-fixing-container brand-product service-inner-page">
                            {{ Breadcrumbs::render('fixing-order-detail', $details) }}

                            @foreach($details as $detail)


                                <div class="detail-block-wrapper"
                                     @if(count($detail->detailQuality) != 0)
                                     data-start-cost="{{$detail->detailQuality[0]->cost}}"
                                     data-cost="{{$detail->detailQuality[0]->cost}}"
                                     @else
                                     data-start-cost="{{$detail->price}}" data-cost="{{$detail->price}}"
                                     @endif
                                     data-id="{{$detail->id}}"
                                     @if(count($detail->detailColors) != 0)
                                     data-color="{{$detail->detailColors[0]->name}}"
                                    @endif
                                >
                                    <h1 class="main-title title-for-mobile">{{$detail->name}} {{$detail->manufacturerModel->name}}</h1>

                                    <div class="row top-card">
                                        <div class="col-lg-4 col-md-4 col-sm-5">
                                            <img src="{{$detail->products[0]->img}}" alt="" class="img-for-pc">
                                        </div>
                                        <div class="col-lg-8 col-md-7 col-sm-7">
                                            <h1 class="main-title title-for-pc">{{$detail->name}} {{$detail->manufacturerModel->name}} </h1>
                                            <h1 class="main-title title-for-tablet">{{$detail->name}} {{$detail->manufacturerModel->name}}</h1>
                                            <div>Ремонт iPhone 11 (A2221) в нашей мастерской это:</div>
                                            <div class="repair-list">
                                                {!! $detail->descirption !!}
                                            </div>
                                            <div class="description-for-pc"><strong>Время
                                                    ремонта:</strong> {{$detail->fixing_time}}</div>

                                            @if(count($detail->detailQuality) == 0)
                                                <div class="mt-2">
                                                    <strong>{{__("Price with work")}} : </strong>
                                                    <span class="commodity-card-price">
                                                         € {{$detail->price}}
                                                    </span>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="banner-categories-block banner-categories-block-phone11 mt-5">
                                        <h3 class="small-title">
                                            {{__("Choose a color")}} :
                                        </h3>
                                        <div class="row choosing-color-row main-banner-row">
                                            @foreach($detail->allColors as $detailColor)
                                                @if($detailColor->color)
                                                    <div class="col-lg-4 col-md-4 main-banner-col">

                                                        <div
                                                            data-route="{{route('get-detail-qualities', [$detail->id, $detailColor->color->id])}}"
                                                            data-color-name="{{$detailColor->color->name}}"
                                                            class="fixing-category-card color-changing-card">
                                                            <div class="color-to-choose"
                                                                 style="background: {{$detailColor->color->color_code}}"></div>
                                                            <span>{{$detailColor->color->name}}</span>
                                                        </div>
                                                    </div>
                                                @endif
                                            @endforeach

                                        </div>
                                    </div>


                                    <div class="commodity choose-quality">
                                        <h3 class="small-title">
                                            {{__("Choose quality")}}
                                        </h3>
                                        <div class="choose-quality-block">

                                        </div>
                                    </div>
                                </div>
                            @endforeach

                            <div class="d-flex justify-content-end">
                                <h3 class="d-flex align-content-center small-title my-5">
                                    {{__("repair cost")}}:  
                                    <span class="commodity-card-price commodity-card-old-price flex-row">

                                       € <span class="js-commodity-card-old-price-text"></span>

                                    </span>
                                    <span class="commodity-card-price flex-row">

                                        € <span class="js-commodity-card-price-text"></span>

                                    </span>
                                </h3>
                            </div>


                            {{--<h1 class="main-title title-for-mobile">замена дисплея iphone 11</h1>

                            <div class="row top-card mt-5">
                                <div class="col-lg-4 col-md-4">
                                    <img src="img/fixing/Rectangle 84.png" alt="" width="100" class="img-for-pc">
                                </div>
                                <div class="col-lg-8 col-md-8">
                                    <h1 class="main-title title-for-pc">замена дисплея iphone 11</h1>
                                    <h1 class="main-title title-for-tablet">замена дисплея iphone 11</h1>
                                    <div>Ремонт iPhone 11 (A2221) в нашей мастерской это:</div>
                                    <ul class="repair-list">
                                        <li>Деталь в наличии</li>
                                        <li>Замена дисплея в течении 1-2 часа</li>
                                        <li>Бесплатная диагностика перед ремонтом</li>
                                        <li>Гарантия на детали и проведенные работы</li>
                                        <li>Наличие детали на нашем складе</li>
                                    </ul>
                                    <div><strong>{{__("Repair time")}}:</strong> 1-3 часа</div>
                                    <div class="mt-2">
                                        <strong>{{__("Price with work")}} : </strong>
                                        <span class="commodity-card-price">
                    € 80
                  </span>
                                    </div>

                                </div>
                            </div>--}}

                            <div id="reservation-form" class="text-center">
                                <form novalidate method="POST" data-url="{{route('handle-fixing')}}"
                                      class="reservation-form">
                                    @csrf
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-lg-12">
                                                <h3 class="small-title mb-2">
                                                    {{__("reservation")}}
                                                </h3>
                                                <label>
                                                    <input type="text" placeholder="{{__('First Name, Last Name')}}"
                                                           class="form-control"
                                                           name="name">
                                                </label>
                                                <label>
                                                    <input type="text" placeholder="{{__('E-mail address')}}"
                                                           class="form-control"
                                                           name="email">
                                                </label>
                                                <input type="tel" class="form-control"
                                                       placeholder="Ваш номер телефона" name="tel">
                                                <textarea class="form-control" name="comment" rows="5"
                                                          placeholder="{{__('Comment')}} "></textarea>
                                                <h3 class="small-title my-4">
                                                    {{__("Branch")}}
                                                </h3>
                                            </div>
                                            <div
                                                class="d-flex radio-buttons-row align-items-center justify-content-center">
                                                <label class="radio-type">
                                                    <input type="radio" name="address"
                                                           value="{{__('Riga - Сenter')}} Ģertrūdes 77, Rīga">
                                                    <span>
                                                    {{__('Riga - Сenter')}}
                                                Ģertrūdes 77, Rīga
                                                </span>
                                                </label>
                                                <label class="radio-type">
                                                    <input type="radio" name="address"
                                                           value="{{__('Riga - Zolidude')}} IXO Centrs, Anniņmuižas iela 17">
                                                    <span>
                                                        {{__('Riga - Zolidude')}}
                                                        IXO Centrs,
                                                        Anniņmuižas iela 17
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="d-flex pickers-wrapper">
                                                <label class="picker-label-wrapper">
                                                    <span>Введите дату</span>
                                                    <input type="text" class="datepicker" placeholder="дд/мм/гггг"
                                                           name="date"/>
                                                </label>
                                                <label class="picker-label-wrapper">
                                                    <span>Введите время</span>
                                                    <input type="text" class="timepicker" placeholder="00:00"
                                                           name="time">
                                                </label>
                                            </div>

                                        </div>
                                        <button class="default-button mt-5" type="submit">
                                            {{__("confirm")}}
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <section class="additional-commodities-wrapper service-inner-commodity commodity mt-5">
                                <div class="">
                                    <h3 class="small-title">
                                        {{$details[0]->products[0]->subCategory[0]->category->category->name}}
                                    </h3>
                                    <div class="">
                                        <div class="row">
                                            @foreach($details[0]->products[0]->subCategory[0]->category->category->allProducts() as $product)
                                                <div class="col-lg-4 col-md-4 col-6">
                                                    @include('components.market.card', compact('product'))
                                                </div>
                                            @endforeach
                                        </div>
                                    </div>
                                </div>
                            </section>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

@endsection
