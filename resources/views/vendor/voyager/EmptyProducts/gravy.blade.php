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
                            Name
                        </th>
                        <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="
                                                                                                Price
                                                                                            : активировать для сортировки столбца по возрастанию"
                            style="width: 32.9167px;">
                            Price
                        </th>

                        <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="
                                                                                                Quantity
                                                                                            : активировать для сортировки столбца по возрастанию"
                            style="width: 57.3611px;">
                            Quantity
                        </th>
                        <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="
                                                                                                Model
                                                                                            : активировать для сортировки столбца по возрастанию"
                            style="width: 41.8056px;">
                            Model
                        </th>
                        <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="
                                                                                                Price With Installation
                                                                                            : активировать для сортировки столбца по возрастанию"
                            style="width: 72.9167px;">
                            Price With Installation
                        </th>
                        <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="
                                                                                                Installation Description
                                                                                            : активировать для сортировки столбца по возрастанию"
                            style="width: 75.1389px;">
                            Installation Description
                        </th>
                        <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="
                                                                                                Manufacturer
                                                                                            : активировать для сортировки столбца по возрастанию"
                            style="width: 90.6945px;">
                            Manufacturer
                        </th>
                        <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="
                                                                                                Img
                                                                                            : активировать для сортировки столбца по возрастанию"
                            style="width: 626.25px;">
                            Img
                        </th>
                        <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="
                                                                                                colors
                                                                                            : активировать для сортировки столбца по возрастанию"
                            style="width: 39.5833px;">
                            colors
                        </th>
                        <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="
                                                                                                qualities
                                                                                            : активировать для сортировки столбца по возрастанию"
                            style="width: 55.1389px;">
                            qualities
                        </th>
                        <th class="actions text-right sorting_disabled" rowspan="1" colspan="1"
                            aria-label="Доступные действия" style="width: 82.9167px;">Доступные действия
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($products as $product)

                    <tr role="row" class="odd">
                        <td>
                            <input type="hidden" data-i18n="true" name="name132_i18n" id="name132_i18n"
                                   value="{&quot;en&quot;:&quot;Samsung Galaxy S9 SM-G960 LCD displejs ar skarienj\u016bt\u012bgo ekranu un r\u0101m\u012bti melns&quot;,&quot;ru&quot;:&quot;Samsung Galaxy S9 SM-G960 LCD displejs ar skarienj\u016bt\u012bgo ekranu un r\u0101m\u012bti melns&quot;,&quot;lv&quot;:&quot;Samsung Galaxy S9 SM-G960 LCD displejs ar skarienj\u016bt\u012bgo ekranu un r\u0101m\u012bti melns&quot;}">
                            <div>{{$product->name}}</div>
                        </td>
                        <td>
                            <div>{{$product->price}}</div>
                        </td>
                        <td>
                            <div>{{$product->quantity}}</div>
                        </td>
                        <td>
                            <div>{{$product->model}}</div>
                        </td>
                        <td>
                            <div>{{$product->price_with_installation}}</div>
                        </td>
                        <td>
                            <input type="hidden" data-i18n="true" name="installation_description139_i18n"
                                   id="installation_description139_i18n"
                                   value="{&quot;en&quot;:&quot;Description&quot;,&quot;ru&quot;:&quot;Description&quot;,&quot;lv&quot;:&quot;Description&quot;}">
                            <div>Description</div>
                        </td>
                        <td>
                            <div>{{$product->manufacturer}}</div>
                        </td>
                        <td>
                            <div>
                                <img width="200" height="200" src="{{$product->img}}" alt="">
                            </div>
                        </td>

                        <td>
                            <p>{{$product->color->name ?? 'Нет данных'}}</p>


                        </td>
                        <td>
                            <p>{{$product->quality->name ?? 'Нет данных'}}</p>


                        </td>
                        <td class="no-sort no-click bread-actions">
                            {{--<a href="javascript:;" title="Удалить" class="btn btn-sm btn-danger pull-right delete"
                               data-id="3" id="delete-3">
                                <i class="voyager-trash"></i> <span class="hidden-xs hidden-sm">Удалить</span>
                            </a>--}}
                            <a href="http://promarket.loc/admin/products/{{$product->id}}/edit" target="_blank" title="Изменить"
                               class="btn btn-sm btn-primary pull-right edit">
                                <i class="voyager-edit"></i> <span class="hidden-xs hidden-sm">Изменить</span>
                            </a>
                            <a href="http://promarket.loc/admin/products/{{$product->id}}" target="_blank" title="Просмотр"
                               class="btn btn-sm btn-warning pull-right view">
                                <i class="voyager-eye"></i> <span class="hidden-xs hidden-sm">Просмотр</span>
                            </a>
                        </td>
                    </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@stop
