<div class="row additional-commodities-wrapper">
    @foreach($products as $product)
	    <div class="col-lg-4 col-md-4 col-6">
	        @include('components.market.card', compact('product'))    	
	    </div>
    @endforeach
</div>


{{$products->links('components.pagination')}}
   