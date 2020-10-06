<a href="{{route('fixing-brand-model', [$model->manufacturer->fixingType->code, $model->manufacturer->code, $model->code])}}" class="col-lg-4 col-md-4 col-6">
    <div class="fixing-brand-card">
        <p>
            {{$model->name}}
        </p>
    </div>
</a>
