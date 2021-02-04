
@extends('voyager::master')
@section('content')
    <div class="col-md-12">
        <div class="panel-body">
            <div class="table-responsive">

                <table id="dataTable" class="table table-hover dataTable no-footer" role="grid"
                       aria-describedby="dataTable_info">
                    <thead>
                    <tr role="row">

                        <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="
                                                                                                Name
                                                                                            : активировать для сортировки столбца по возрастанию"
                            style="width: 65.1389px;">
                            Address
                        </th>
                        <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="
                                                                                                colors
                                                                                            : активировать для сортировки столбца по возрастанию"
                            style="width: 39.5833px;">
                            Status
                        </th>
                        <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="
                                                                                                qualities
                                                                                            : активировать для сортировки столбца по возрастанию"
                            style="width: 55.1389px;">
                            Price
                        </th>
                        <th class="actions text-right sorting_disabled" rowspan="1" colspan="1"
                            aria-label="Доступные действия" style="width: 82.9167px;">Доступные действия
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($orders as $order)

                        <tr role="row" class="odd">
                            <td>
                                <input type="hidden" data-i18n="true" name="name132_i18n" id="name132_i18n"
                                       value="{&quot;en&quot;:&quot;Samsung Galaxy S9 SM-G960 LCD displejs ar skarienj\u016bt\u012bgo ekranu un r\u0101m\u012bti melns&quot;,&quot;ru&quot;:&quot;Samsung Galaxy S9 SM-G960 LCD displejs ar skarienj\u016bt\u012bgo ekranu un r\u0101m\u012bti melns&quot;,&quot;lv&quot;:&quot;Samsung Galaxy S9 SM-G960 LCD displejs ar skarienj\u016bt\u012bgo ekranu un r\u0101m\u012bti melns&quot;}">
                                <div>{{$order->address}}</div>
                            </td>
                            <td>
                                <div>{{$order->orderStatus->name}}</div>
                            </td>
                            <td>
                                <div>{{$order->getFullPrice()}}</div>
                            </td>
                            <td class="no-sort no-click bread-actions">
                               
                                {{--<a href="javascript:;" title="Удалить" class="btn btn-sm btn-danger pull-right delete"
                                   data-id="3" id="delete-3">
                                    <i class="voyager-trash"></i> <span class="hidden-xs hidden-sm">Удалить</span>
                                </a>--}}
                                <a href="/admin/orders/{{$order->id}}/edit" target="_blank" title="Изменить"
                                   class="btn btn-sm btn-primary pull-right edit">
                                    <i class="voyager-edit"></i> <span class="hidden-xs hidden-sm">Изменить</span>
                                </a>
                                <a href="/admin/orders/{{$order->id}}" target="_blank" title="Просмотр"
                                   class="btn btn-sm btn-warning pull-right view">
                                    <i class="voyager-eye"></i> <span class="hidden-xs hidden-sm">Просмотр</span>
                                </a>

                                @if($order->payment_method == "cash")
                                <a href="/message-to-client/cash/{{$order->id}}" title="отправить смс клиенту" class="btn btn-sm btn-success pull-right" style="margin-right: 5px;">
                                    <i class="voyager-message"></i> <span class="hidden-xs hidden-sm">отправить смс клиенту</span>
                                </a>
                                @endif
                                @if($order->payment_method == "card")
                                <a href="/message-to-client/card/{{$order->id}}" title="отправить счет фактура" class="btn btn-sm btn-success pull-right" style="margin-right: 5px;">
                                    <i class="voyager-message"></i> <span class="hidden-xs hidden-sm">отправить счет фактура</span>
                                </a>
                                @endif
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@stop
