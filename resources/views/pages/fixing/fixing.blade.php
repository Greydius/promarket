@extends('system.master')

@section('content')

<main class="main">
    <div class="fixing-container">
      <div class="container">
        <div class="row">
          @include('components.fixing-sidebar')

          <div class="col-lg-9">
            <div class="fixing-main-banner fixing-main-page-banner">
              <img src="{{ asset('assets/img/fixing/fix-banner.jpg') }}" class=" fixing-banner-background" alt="">
                {{ Breadcrumbs::render('fixing') }}
              <h1 class="main-title">
                {{__("we help our clients quickly and efficiently repair electronics more than 15 years")}}
              </h1>

            </div>
            <div class="main-fixing-page-wrapper brand-product">
              <h3 class="small-title">
                {{__("TOP SPARE PARTS")}}
              </h3>

              <div class="row main-banner-row">
                  <div class="col-lg-4 main-banner-col">
                      <a href="{{ route('fixing-type', 'mobilo_telefonu_detalas') }}" class="fixing-category-card">
                          <img src="{{ asset('assets/img/common/smartphone.svg') }}" alt="">
                          <span>{{__("Phone Repair")}}</span>
                      </a>
                  </div>
                  <div class="col-lg-4 main-banner-col">
                      <a href="{{ route('fixing-type', 'planšetdatoru_detaļas') }}" class="fixing-category-card">
                          <img src="{{ asset('assets/img/common/tablet.svg') }}" alt="">
                          <span>{{__("Tablet Repair")}}</span>
                      </a>
                  </div>
                  <div class="col-lg-4 main-banner-col">
                      <a href="{{ route('fixing-type', 'gudro_pulksteņu_detaļas') }}" class="fixing-category-card">
                          <img src="{{ asset('assets/img/common/laptop.svg') }}" alt="">
                          <span>{{__("Laptop Repair")}}</span>
                      </a>
                  </div>
              </div>
              <div class="fixing-text-content">
                <h3 class="small-title">
                  {{__("What if I can't find my device?")}}
                </h3>
                <p>
                  {{__("Don't be discouraged if a device isn't on our list, that doesn't mean we can't help you.")}}
                </p>
              </div>
              <div class="fixing-text-content">
                <h3 class="small-title">
                  {{__("You can")}}:
                </h3>
                <p class="fixing-links-wrapper">
                  <a href="#">
                    <img src="{{ asset('assets/img/common/chat.svg') }}" alt="">
                   {{__("Start a chat with a manager (chat us)")}} </a> {{__("or")}} <a href="tel:25519270">{{__("call us on")}}:
                  <img src="{{ asset('assets/img/common/phone.svg') }}" alt="">
                  25 51 92 70
                </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

@endsection
