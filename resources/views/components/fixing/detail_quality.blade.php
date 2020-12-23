<div class="row choosing-detail-row">

    @foreach($detail->products as $quality)
        <div class="col-lg-4 col-md-4">
            <div
                data-cost="{{$quality->price_with_installation}}"
                data-id="{{$detail->id}}"
                class="commodity-default-card commodity-default-card-short">
                <div class="commodity-card-body">
                    <h4 class="commodity-card-title">
                        {{$quality->quality->full_name}}
                    </h4>
                    <div class="commodity-card-parameter">
                        @include('components.common.in-stock', ['quantity' => $quality->quantity])
                    </div>
                    <div
                        class="commodity-card-last-row d-flex align-items-center justify-content-between">
                        <div class="commodity-card-price">
                            € {{$quality->price_with_installation}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endforeach
</div>
