<a href="@if(Route::currentRouteName() == 'fixing-service')
{{route('fixing-order-detail', [$detail->manufacturerModel->manufacturer->fixingType->code, $detail->manufacturerModel->manufacturer->code, $detail->manufacturerModel->code])}}?id={{$detail->id}}
@else javascript: ; @endif" class="fixing-detail-card">
    <img class="fixing-details-card-tick" src="{{asset('assets/img/common/fixing-check.svg')}}" alt="">
    <div class="fixing-detail-img-wrap">
        <img src="{{$detail->products[0]->img}}" alt="">
    </div>
    <div class="fixing-detail-body">
        <h4 class="card-title">
            @if(Route::currentRouteName() == 'fixing-service') {{$detail->manufacturerModel->name}} @endif
            {{$detail->name}}
        </h4>
        <div class="fixing-detail-details">
            <p>
                <span class="middle-text">Время ремонта </span> {{$detail->fixing_time}}
            </p>
        </div>
        <div class="price">
            <p>
                {{$detail->cheapest()}} € @if($detail->cheapest() != $detail->mostExpensive()) - {{$detail->mostExpensive()}} € @endif
            </p>
        </div>
    </div>
</a>
