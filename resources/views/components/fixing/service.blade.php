<div class="col-lg-4 col-md-4">
    <a href="{{
    route('fixing-service', [
        $service->fixingType->code,
        $service->code,
])

}}" class="fixing-detail-card">
        <div class="fixing-detail-img-wrap">
            <img src="{{ Voyager::image($service->img) }}" alt="">
        </div>
        <div class="fixing-detail-body">
            <h4 class="card-title">
                {{$service->name}}
            </h4>
            <div class="fixing-detail-details">
                <p>
                    <span class="middle-text">{{__("Repair time")}} </span> {{$service->fixing_time}}
                </p>
            </div>
            <div class="price">
                <p>
                    {{$service->price}}
                </p>
            </div>
        </div>
    </a>
</div>
