@if ($paginator->hasPages())
<div class="pagination d-flex align-items-center justify-content-center">
   @if ($paginator->onFirstPage())
        <a href="#" class="get-back pagination-bullet">
            &lt;&lt;
        </a>
        @else
        <a href="{{ $paginator->previousPageUrl() }}"  class="get-back pagination-bullet" rel="prev"> &lt;&lt;</a>
        @endif
          
        @foreach ($elements as $element)
           
            @if (is_string($element))
                <a hre="#" class="pagination-bullet"><span>{{ $element }}</span></a>
            @endif
           
            @if (is_array($element))
                @foreach ($element as $page => $url)
                    @if ($page == $paginator->currentPage())
                        <a href="#" class="pagination-bullet active"><span>{{ $page }}</span></a>
                    @else
                        <a href="{{ $url }}"  class="pagination-bullet">{{ $page }}</a>
                    @endif
                @endforeach
            @endif
        @endforeach
        @if ($paginator->hasMorePages())
            <a href="{{ $paginator->nextPageUrl() }}" rel="next" class="pagination-bullet get-next">
                  &gt;&gt;
            </a>
        @else
            <a href="#" class="pagination-bullet get-next">
                  &gt;&gt;
            </a>
        @endif      
</div>  

@endif

<script type="text/javascript">
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
    

    $('.pagination a').on('click', function(e) {
        e.preventDefault();
        alert(this);
        var url = $(this).attr('href');
        ajaxSort(url);

    });
</script>