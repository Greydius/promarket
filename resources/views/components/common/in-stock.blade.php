@if($quantity > 2)
    <img src="{{asset('assets/img/common/tick.svg')}}" alt="">
    <span>
                                                      {{__("in stock")}}
                                                    </span>
@elseif ($quantity > 0)
    <img src="{{asset('assets/img/common/low.svg')}}" alt="">
    <span>
                                                      {{__("in stock")}}
                                                            <!-- 1  в наличии -->
                                                        </span>
@else
    <img src="{{asset('assets/img/common/order.svg')}}" alt="">
    <span>
                                                            {{__("On order")}}
                                                        </span>
@endif
