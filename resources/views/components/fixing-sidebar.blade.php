<div class="col-lg-3 sidebar">
    <ul>
      <li class="sidebar-item">
        <a href="#">
          <img src="{{ asset('assets/img/common/menu.svg') }}" alt="">
          <span>
          все виды техники
        </span>
        </a>
      </li>
      <li class="sidebar-item">
        <a href="{{ route('fixing-type', 'mobile') }}">
          <img src="{{ asset('assets/img/fixing/phone.svg') }}" alt="">
          <span>
          телефоны
        </span>
        </a>
      </li>
      <li class="sidebar-item">
        <a href="{{ route('fixing-type', 'tablet') }}">
          <img src="{{ asset('assets/img/fixing/tablet.svg') }}" alt="">
          <span>
          плашеты
        </span>
        </a>
      </li>
      <li class="sidebar-item">
        <a href="{{ route('fixing-type', 'laptop') }}">
          <img src="{{ asset('assets/img/fixing/laptop.svg') }}" alt="">
          <span>
          ноутбуки
        </span>
        </a>
      </li>
    </ul>

  </div>