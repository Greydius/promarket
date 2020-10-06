@extends('system.master')

@section('content')
    <main class="main">
        <div class="fixing-container">
            {{--<a href="{{route('fixing-order-detail', [$model->manufacturer->fixingType->code, $model->manufacturer->code, $model->code])}}?id=1" data-link="{{Request::url()}}/order?id=blabla" class="fixed-button js-order-link-creation-button">
                <div class="default-button-wrap">
                    <div class="default-button">
                        заявка
                    </div>
                </div>
            </a>--}}
            <div class="container">
                <div class="row">

                    @include('components.fixing-sidebar')

                    <div class="col-lg-9">
                        <div class="brand-product product-page">
                            <div class="product-fixing-container ">
                                <div class="bread-crumbs">
                                    <ul class="d-flex">
                                        <li class="bread-crumb-link">
                                            <a href="#">
                                                Магазин
                                            </a>
                                        </li>
                                        <li class="bread-crumb-link">
                                            <a href="#">
                                                Ремонт
                                            </a>
                                        </li>
                                        <li class="bread-crumb-link bread-crumb-link-prev">
                                            <a href="#">
                                                Ремонт мобильных телефонов
                                            </a>
                                        </li>

                                        <li class="bread-crumb-link-active">
                                            Apple
                                        </li>
                                    </ul>
                                </div>
                                <h1 class="main-title">
                                    {{$service->title}}
                                </h1>
                                <div class="fixing-text-wrapper">
                                    <p>
                                        {{$service->description}} <br>
                                    </p>
                                </div>

                                @include('components.common.inner-search', ['selector' => '.fixing-detail-card .card-title'])
                            </div>

                            <div class="row fixing-type-for-device-row fixing-detail-card-row not-colored fixing-details-row-inner">
                                @foreach($service->details as $detail)
                                    <div class="col-lg-4 col-md-4">
                                        @include('components.fixing.detail', $detail)
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
    </main>

@endsection
