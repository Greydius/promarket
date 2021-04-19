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
      // function ajaxSort(url){
      //       $(document).on("submit", "form.add-to-cart-form-submittion", function(e){
      //           e.preventDefault();
      //           var form = $(this);
      //           var url = form.attr("action");
      //           var formData = $(form).serializeArray();
      //           $.post(url, formData).done(function (data) {
      //               var count = parseInt($('.header_cart_count').text());
      //               $('.header__cart_outer-wrapper').html(data);
      //               $('.header_cart_count').html(count +1)
      //               // alert();
      //               $.fancybox.open({
      //                   src: `#added_good`,
      //                   type: 'inline',
      //                   opts: {
      //                       afterShow: function (instance, current) {
      //                           setTimeout(() => {
      //                               $.fancybox.close(true);
      //                           }, 2000)
      //                       }
      //                   }
      //               });
      //           });
      //       });
            
      //       $(document).on("click", ".js-order-button", function(e){
      //            const productId = this.closest('.commodity-card-body').querySelector('[name="product_id"]').value
      //           document.querySelector('.hidden_product_id').value = productId;
      //           $.fancybox.open({
      //               src: `.order-modal`,
      //               type: 'inline',
      //           });
      //       });
      //       var query = $('#search_text2').val();
      //       var min_price = $('input[name="min_price"]').val();
      //       var max_price = $('input[name="max_price"]').val();
      //       var order = $('#order').children("option:selected").val();
      //       var per_page = $('#per_page').children("option:selected").val();
            
      //       var quantity = [];
      //       var manufacturer = [];
      //       var model = [];
      //       var color = [];
      //       $.each($(".filter-el input[name='quantity']:checked"), function () {
      //           quantity.push($(this).val());
      //       });
      //       $.each($(".filter-el input[name='manufacturer']:checked"), function () {
      //           manufacturer.push($(this).val());
      //       });
      //       $.each($(".filter-el input[name='model']:checked"), function () {
      //           model.push($(this).val());
      //       });
      //       $.each($(".filter-el input[name='color']:checked"), function () {
      //           color.push($(this).val());
      //       });

      //       data = {
      //           'filter': '1',
      //           'min_price': min_price,
      //           'max_price': max_price,
      //           'order': order,
      //           'per_page': per_page,
      //           'quantity': quantity,
      //           'color': color,
      //           'query2': query,
      //           'attrs': {
      //               'manufacturer': manufacturer,
      //               'model': model,
      //           }
      //       };

      //       $.ajax({
      //           type: 'POST',
      //           url: url,
      //           data: data
      //       }).done(function (data) {
      //           $('#sort').html(data);
                
      //       });
      //   };    
        
 
    $('.pagination a').on('click', function(e) {
        e.preventDefault();
        // alert(this);
        // document.head.querySelector('meta[name="description"]').content = 'sadasdasdas';
        var url = $(this).attr('href');
        ajaxSort(url);
        
          
        page_query.set('page', $(this).text()); // page queryga yangi value beradi
        // query.get('page'); // page queryni return qiladi


        // query.remove('page'); // page queryni o'chiradi
        setTimeout(function(){ 
            var per_page = $('#per_page').children("option:selected").val();
            var currentPage = $('a.pagination-bullet.active span').text();
            var countPage = per_page * currentPage;
            var currOtPage = countPage - per_page + 1;
            $('span.count_products').text(countPage);
            $('span.current_pagination').text(currOtPage);
        }, 1000);
        
    });
</script>