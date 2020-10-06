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
              <div class="bread-crumbs">
              <ul class="d-flex">
                <li class="bread-crumb-link bread-crumb-link-prev">
                  <a href="#">
                    Магазин
                  </a>
                </li>
                <li class="bread-crumb-link">
                  Ремонт
                </li>
              </ul>
            </div>
              <h1 class="main-title">
                Более 15 лет мы помогаем нашим клиентам, быстро и качественно ремонтировать бытовую и проф. электронику.
              </h1>
  
            </div>
            <div class="main-fixing-page-wrapper brand-product">
              <h3 class="small-title">
                Топовые запчасти
              </h3>
  
              <div class="row main-banner-row">
                <div class="col-lg-4 main-banner-col">
                  <a href="{{ route('fixing-type', 'mobile') }}" class="fixing-category-card">
                    <img src="{{ asset('assets/img/common/smartphone.svg') }}" alt="">
                    <span>Ремонт телефона</span>
                  </a>
                </div>
                <div class="col-lg-4 main-banner-col">
                  <a href="{{ route('fixing-type', 'tablet') }}" class="fixing-category-card">
                    <img src="{{ asset('assets/img/common/tablet.svg') }}" alt="">
                    <span>Ремонт планшета</span>
                  </a>
                </div>
                <div class="col-lg-4 main-banner-col">
                  <a href="{{ route('fixing-type', 'laptop') }}" class="fixing-category-card">
                    <img src="{{ asset('assets/img/common/laptop.svg') }}" alt="">
                    <span>Ремонт ноутбука</span>
                  </a>
                </div>
              </div>
              <div class="fixing-text-content">
                <h3 class="small-title">
                  Что если не удалось найти устройство?
                </h3>
                <p>
                  Не отчаивайтесь, если устройства нет в нашем списке, это не значит, что мы не можем вам помочь.
                </p>
              </div>
              <div class="fixing-text-content">
                <h3 class="small-title">
                  Вы можете:
                </h3>
                <p class="fixing-links-wrapper">
                  <a href="#">
                    <img src="{{ asset('assets/img/common/chat.svg') }}" alt="">
                    Начать чат с менеджером </a> или <a href="tel:25519270">позвонить нам на:
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