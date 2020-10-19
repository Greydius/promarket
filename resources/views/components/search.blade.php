@extends('system.master')

@section('content')
<main class="main">
    <div class="fixing-container">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                      <div class="card-header">Test</div>
                        <div class="card-body">
        		          <div class="card">
                            <div class="card-header"><b>по запросу '{{ request('query') }}' было найдено {{ $searchResults->count() }} результата</b></div>

                            <div class="card-body">

                                @foreach($searchResults->groupByType() as $type => $modelSearchResults)
                                    <h2>{{ ucfirst($type) }}</h2>

                                    @foreach($modelSearchResults as $searchResult)
                                        <ul>
                                            <li><a href="{{ $searchResult->url }}">{{ $searchResult->title }}</a></li>
                                        </ul>
                                    @endforeach
                                @endforeach

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>


@endsection
 