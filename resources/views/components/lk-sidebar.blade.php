<div class="col-lg-3 col-md-4 sidebar lk-sidebar">
    <div class="sidebar-profile-overview">
        <div class="d-flex align-items-center profile-overview">
            <div class="profile-photo">
                <img
                    @if(Auth::user()->avatar == 'users/default.png')
                    src="{{asset('assets/img/dummy.png')}}"
                    @else
                    src="{{Storage::url(Auth::user()->avatar)}}"
                    @endif
                    alt="">
            </div>
            <div class="profile-name">
                {{ Auth::user()->username }}
                {{ Auth::user()->firstname }}
            </div>
        </div>
    </div>
    <ul class="lk-tabs-changers">
        <li class="sidebar-item lk-tabs-changer active">
            <a href="#">
                <img src="{{ asset('assets/img/lk/orders_icon.svg') }}" alt="">
                <span>
                                    {{__("Your orders")}}
                                </span>
            </a>
        </li>
        <li class="sidebar-item lk-tabs-changer">
            <a href="#">
                <img src="{{ asset('assets/img/lk/account_icon.svg') }}" alt="">
                <span>
                                    {{__("account settings")}}
                                </span>
            </a>
        </li>
        <li class="sidebar-item">
            <a href="{{  \LaravelLocalization::localizeURL('/logout') }}"
               onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                <img src="{{ asset('assets/img/lk/quit_icon.svg') }}" alt="">
                <span>
                                   {{__("Log out")}}
                                </span>
            </a>

            <form id="logout-form" action="{{  \LaravelLocalization::localizeURL('/logout') }}" method="POST" style="display: none;">
                {{ csrf_field() }}
            </form>
        </li>
    </ul>
</div>
