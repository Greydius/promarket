<div class="shop-sidebar-inner-wrap">
	@csrf
<div class="cancel-filters">
    <span>Отменить все</span>
    <svg class="close-shop-sidebar" width="24" height="24" viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.54">
            <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="#CC2830"/>
        </g>
    </svg>
</div>

<form class="sidebar-search" action="{{ route('search') }}" method="POST" >
    <label class="position-relative">
        <input type="text" placeholder="{{__('search')}}" class="auth_control"  name="query" id="search_text2">
        <button type="button" class="search_form_submit">
            <img src="{{ asset('/assets/img/common/search.svg') }}" alt="">
        </button>
    </label>
</form>
<div class="cost-filter filter-el">
    <div class="cost-filter-trigger justify-content-between d-flex align-items-center">
        <p>
            {{__("Price")}} €
        </p>
        <img src="{{asset('assets/img/common/chevron-down.svg')}}" alt="">
    </div>
    <div class="filter-content">
        <div class="cost-slider">
            <div data-min="{{$minprice}}" data-max="{{$maxprice}}" id="cost_slider"></div>
        </div>

        <div
            class="d-flex justify-content-between align-items-center range-inputs-wrapper">
            <label class="d-flex align-items-center">
                <span>
                    {{__("from")}}
                </span>
                <input class="starting-value" placeholder="0" type="text"
                       name="min_price">
            </label>
            <label class="d-flex align-items-center">
                <span>
                    {{__("till")}}
                </span>
                <input class="ending-value" placeholder="300" type="text"
                       name="max_price">
            </label>
        </div>

    </div>
</div>

<div class="filter-el checkbox-filter">
    <div class="cost-filter-trigger justify-content-between d-flex align-items-center">
        <p>
            {{__("Availability")}}
        </p>
        <img src="{{asset('assets/img/common/chevron-down.svg')}}" alt="">
    </div>
    <div class="filter-content">
    	   <!-- @ foreach($quantity as $quantity) -->
        <label class="checkbox-label">
            <input type="checkbox" name="quantity" value="0">
            <span>
            		{{__("On order")}}
			</span>
        </label>
        <label class="checkbox-label">
            <input type="checkbox" name="quantity" value="1">
            <span>
                    {{__("available")}}
            </span>
        </label>
        <!-- @ endforeach -->
    </div>
</div>
<input type="hidden" name="hidden_page" id="hidden_page" value="1" />
<!-- <div class="filter-el checkbox-filter">
    <div class="cost-filter-trigger justify-content-between d-flex align-items-center">
        <p>
            устройство
        </p>
        <img src="{{asset('assets/img/common/chevron-down.svg')}}" alt="">
    </div>
    <div class="filter-content">
        <label class="checkbox-label">
            <input type="checkbox" name="device" value="phone">
            <span>
   				Телефоны
			</span>
        </label>
        <label class="checkbox-label">
            <input type="checkbox" name="device" value="tablet">
            <span>
               Планшеты
            </span>
        </label>
        <label class="checkbox-label">
            <input type="checkbox" name="device" value="notebook">
            <span>
               Ноутбуки
            </span>
        </label>
    </div>
</div> -->

<div class="filter-el checkbox-filter">
    <div class="cost-filter-trigger justify-content-between d-flex align-items-center">
        <p>
            {{__("brand")}}
        </p>
        <img src="{{asset('assets/img/common/chevron-down.svg')}}" alt="">
    </div>
    <div class="filter-content">
        <div class="pol_content">
        @foreach($manufacturer as $manufacturer)
        <label class="checkbox-label">
            <input type="checkbox" name="manufacturer" value="{{$manufacturer->manufacturer}}">
            <span>
			   {{$manufacturer->manufacturer}}
			</span>
        </label>
        @endforeach
        </div>
        <button class="view_all">Еше</button>
    </div>
</div>

<div class="filter-el checkbox-filter">
    <div class="cost-filter-trigger justify-content-between d-flex align-items-center">
        <p>
            модель
        </p>
        <img src="{{asset('assets/img/common/chevron-down.svg')}}" alt="">
    </div>
    <div class="filter-content">
    <div class="pol_content">
       @foreach($models as $model)
        <label class="checkbox-label">
            <input type="checkbox" name="model" value="{{$model->model}}">
            <span>
			   {{$model->model}}
			</span>
        </label>
        @endforeach
    </div>
        <button class="view_all">Еше</button>

    </div>
</div>

<div class="filter-el checkbox-filter">
    <div class="cost-filter-trigger justify-content-between d-flex align-items-center">
        <p>
            цвет
        </p>
        <img src="{{asset('/assets/img/common/chevron-down.svg')}}" alt="">
    </div>
    <div class="filter-content">
    	@foreach($color as $color)
        <label class="checkbox-label">
            <input type="checkbox" name="color" value="{{$color->id}}">
            <span>
               {{$color->name}}
            </span>
        </label>
        @endforeach
    </div>
</div>

</div>
	
    <script type="text/javascript">
        
$(document).ready(function() {

        function ajaxSort(url){

            var query = $('#search_text2').val();
            var min_price = $('input[name="min_price"]').val();
            var max_price = $('input[name="max_price"]').val();
            var order = $('#order').children("option:selected").val();
            var per_page = $('#per_page').children("option:selected").val();
            var quantity = [];
            var manufacturer = [];
            var model = [];
            var color = [];
            $.each($(".filter-el input[name='quantity']:checked"), function () {
                quantity.push($(this).val());
            });
            $.each($(".filter-el input[name='manufacturer']:checked"), function () {
                manufacturer.push($(this).val());
            });
            $.each($(".filter-el input[name='model']:checked"), function () {
                model.push($(this).val());
            });
            $.each($(".filter-el input[name='color']:checked"), function () {
                color.push($(this).val());
            });

            data = {
                'filter': '1',
                'min_price': min_price,
                'max_price': max_price,
                'order': order,
                'per_page': per_page,
                'quantity': quantity,
                'color': color,
                'query2': query,
                'attrs': {
                    'manufacturer': manufacturer,
                    'model': model,
                }
            };
            // console.log(data);

            $.ajax({
                type: 'POST',
                url: url,
                data: data
            }).done(function (data) {
                $('#sort').html(data);
            });
        };



        $('.filter-el input').change(function () {
            var url = '<?= Request::url(); ?>';

            ajaxSort(url);
        });
        $('#search_text2').on('keyup',function() {
            var url = '<?= Request::url(); ?>';
            ajaxSort(url);
        });

        $(".sidebar-search").submit(function(e){
            return false;
        });

        $('button.view_all').click(function(e){
            $(this).prev('.pol_content').toggleClass('full');
        })


});

</script>
<style type="text/css">
    .filter-content .pol_content {
    height: 340px;
}
button.view_all {
    background: none;
    border: none;
    float: right;
    padding-top: 21px;
}
.pol_content.full {
    height: 100%;
}
</style>