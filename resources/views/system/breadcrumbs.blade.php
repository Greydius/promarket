<div class="bread-crumbs">
    <ul class="d-flex">
        @foreach ($breadcrumbs as $breadcrumb)
            @if ($breadcrumb->url && !$loop->last)
                <li class="bread-crumb-link @if($loop->count - $loop->index == 2) bread-crumb-link-prev @endif">
                    <a href="{{$breadcrumb->url}}">
                        {{ $breadcrumb->title }}
                    </a>
                </li>
            @else
                <li class="bread-crumb-link">
                    {{ $breadcrumb->title }}
                </li>
            @endif
        @endforeach
    </ul>

</div>

