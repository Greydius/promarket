<div class="row additional-commodities-wrapper">
    @foreach($products as $product)
        @include('components.market.card', compact('product'))
    @endforeach
</div>


{{$products->links('components.pagination')}}
   