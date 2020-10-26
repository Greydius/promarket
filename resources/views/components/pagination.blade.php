@if ($paginator->hasPages())
<div class="pagination d-flex align-items-center justify-content-center">
   @if ($paginator->onFirstPage())
        <a href="#" class="get-back pagination-bullet">
            &lt;&lt;
        </a>
        @else
            <li><a href="{{ $paginator->previousPageUrl() }}"  class="get-back pagination-bullet" rel="prev"> &lt;&lt;</a></li>
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