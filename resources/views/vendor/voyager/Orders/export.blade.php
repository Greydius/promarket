
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
                            Mouth
                        </th>
                        <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="
                                                                                                colors
                                                                                            : активировать для сортировки столбца по возрастанию"
                            style="width: 39.5833px;">
                            Year
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    <form action="{{route('exportOrder')}}" method="POST">
                    	@csrf
                    	<tr>
					     	<?php $period = \Carbon\CarbonPeriod::create('2018-01-01', '1 month', '2018-12-01');  ?>
                    			<td><select name = "month" id="m" class="form-control" value=""/>
								   <?php foreach ($period as $dt) { ?>
							            <option value = "{{ $dt->format('m') }}">{{ $dt->format("M") }}</option> 
						    		<?php };?>
								</select></td>	 
								<?php $years = range(\Carbon\Carbon::now()->year, 2019); ?>    
                    			<td><select name = "year" id="m" class="form-control" value=""/>
								   @foreach ($years as $year)                  
								     <option value = "{{ $year }}">{{ $year }}</option>                  
								  @endforeach
								</select></td>
                    	</tr>
                    	<tr>
                    		<td></td>
                    		<td style="text-align: right;"><button type="submit" class="btn btn-success">Export to excel</button></td>
                    	</tr>
                    </form>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@stop
