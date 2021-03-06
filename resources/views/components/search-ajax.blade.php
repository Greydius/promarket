@if(!empty($data->toArray()))
<div class="search-result">
	  @foreach($data->groupByType() as $type => $modelSearchResults)
        <div class="results_{{$type}}">
        <h3>{{ ucfirst($type) }} {{ count($modelSearchResults)}}</h3>
        <ul>
            <?php $i = 1; ?>
	        @foreach($modelSearchResults as $result)
	           @if($i <= 3)
             <li class="result_item">
                 @if ($result->searchable->manufacturerModel == null)
                     <img src="{{$result->searchable->img}}">
                 @else
                     <img src="{{Voyager::image('public/'.$result->searchable->manufacturerModel->manufacturer->fixingType->small_img) }}">
                 @endif
                <p><a href="{{$result->url}}">{{$result->title}}</a>
                <span class="price">€ {{ $result->searchable->price }}</span></p>

             </li>
             @endif
             <?php $i++; ?>
             @endforeach
        </ul>
        </div>
    @endforeach
    <div class="link_all_result"><a class="all_results" href="#">+ {{__("See more")}}</a></div>
</div>
<script type="text/javascript">
    $(document).ready(function() {
        $('.all_results').click(function(){
            $('.search_form_submit').trigger('click');
        });
    });
</script>
@else
@endif
