@extends('system.master')

@section('content')
<main class="main">
    <div class="fixing-container">
        <div class="container">
            <div class="row">

                @include('components.fixing-sidebar')

                <div class="col-lg-9">
                    <div class="fixing-main-banner fixing-main-banner-inner">
                        <img src="{{$fixingType->background_image}}" class="fixing-banner-background" alt="">
                        <div class="bread-crumbs">
                            <ul class="d-flex">
                                <li class="bread-crumb-link bread-crumb-link-prev">
                                    <a href="#">
                                        Ремонт
                                    </a>
                                </li>
                                <li class="bread-crumb-link">
                                    {{$fixingType->breadcrumb}}
                                </li>
                            </ul>
                        </div>
                        <h1 class="main-title">
                            {{$fixingType->title}}
                        </h1>

                    </div>
                    <div class="brand-product">
                        <h3 class="small-title">
                            Выберите производителя вашего устройства
                        </h3>
                        <div class="row fixing-company-card-row">
                            @foreach($fixingType->manufacturers as $manufacturer)
                                @include('components.fixing.manufacturer-card', $manufacturer)
                            @endforeach
                        </div>

                        <div class="row fixing-detail-card-row">
                            @foreach($fixingType->services as $service)
                                @include('components.fixing.service', $service)
                            @endforeach
                        </div>


                        <div class="fixing-text-content fixing-inner-child-content">
                            <h3 class="small-title">
                                О ремонте телефонов
                            </h3>
                            <p>
                                {{ $fixingType->description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

@endsection
