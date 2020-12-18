@extends('system.master')

@section('content')

    <main class="main contacts-page">
        <div class="container">
            {{ Breadcrumbs::render('responsibility') }}
            <div class="text-page-styling">
                <h1>О компании</h1>

                Текстовая страница "{{__("Limitation of Liability")}} "
            </div>
        </div>
    </main>

@endsection
