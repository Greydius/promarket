<a href="@if(Route::currentRouteName() == 'fixing-service')
{{route('fixing-order-detail', [$detail->manufacturerModel->manufacturer->fixingType->code, $detail->manufacturerModel->manufacturer->code, $detail->manufacturerModel->code])}}?id={{$detail->id}}
@else javascript: ; @endif" class="fixing-detail-card">
    <img class="fixing-details-card-tick" src="img/common/fixing-check.svg" alt="">
    <div class="fixing-detail-img-wrap">
        <img src="img/fixing/c1.png" alt="">
    </div>
    <div class="fixing-detail-body">
        <h4 class="card-title">
            @if(Route::currentRouteName() == 'fixing-service') {{$detail->manufacturerModel->name}} @endif
            Замена корпуса
        </h4>
        <div class="fixing-detail-details">
            <p>
                <span class="middle-text">Время ремонта </span> 3-4 часа
            </p>
        </div>
        <div class="price">
            <p>
                70 €- 100 €
            </p>
        </div>
    </div>
</a>
