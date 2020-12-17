@extends('system.master')

@section('content')
    <main class="main">
        <div class="fixing-container">
            <a href="{{route('fixing-order-detail', [$model->manufacturer->fixingType->code, $model->manufacturer->code, $model->code])}}?id=1" data-link="{{Request::url()}}/order?id=" class="fixed-button js-order-link-creation-button">
                <div class="default-button-wrap">
                    <div class="default-button">
                        {{__("Order")}}
                    </div>
                </div>
            </a>
            <div class="container">
                <div class="row">

                    @include('components.fixing-sidebar')

                    <div class="col-lg-9">
                        <div class="brand-product">
                            <div class="brand-product-container">
                                {{ Breadcrumbs::render('fixing-type-with-brand-model', $model) }}
                                <h1 class="main-title">
                                    {{$model->title}}
                                </h1>


                            </div>

                            <h3 class="small-title">
                                {{__("Select the type of repair that interests you")}}:
                            </h3>

                            <div class="fixing-type-for-device-row not-colored making-active-row row">
                                @foreach($model->details as $detail)
                                    <div class="col-lg-4 col-md-4" data-id="{{$detail->id}}">
                                        @include('components.fixing.detail', $detail)
                                    </div>
                                @endforeach

                            </div>
                            <div class="brand-product-inquiry-button hidden-lg visible-md hidden-sm">
                                <a href="#" class="default-button">
                                    {{__("Order")}}
                                </a>
                            </div>
                            <div class="additional-commodities-wrapper">
                                <?php
                                $category = $model->details[0]->products[0]->subCategory[0]->category->category;
                                // $model->accessories = $model->model_name;
                                // dd($model->products($model->model_name));
                                ?>
                                <h3 class="small-title">
                                    {{$category->name}} для {{ $model->title }}
                                </h3>

                                <div class="row">
                                    @foreach($category->products($model) as $product)

                                        <div class="col-lg-4 col-md-4 col-6">
                                            @include('components.market.card', compact('product'))
                                        </div>
                                    @endforeach
                                </div>

                                <a href="#" class="additional-link">{{__("See all parts")}} </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </main>

@endsection
