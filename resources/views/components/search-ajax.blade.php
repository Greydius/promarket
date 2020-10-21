@if(!empty($data->toArray()))
<div class="search-result">
	  @foreach($data->groupByType() as $type => $modelSearchResults)
        <div class="results_{{$type}}">
        <h3>{{ ucfirst($type) }}</h3>
        <ul>
	        @foreach($modelSearchResults as $result)
	         <li class=""><a href="{{$result->url}}">{{$result->title}}</a></li>   
	        @endforeach
        </ul>
        </div>
    @endforeach
</div>
@else
@endif