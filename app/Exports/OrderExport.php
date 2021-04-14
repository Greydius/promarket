<?php

namespace App\Exports;

use App\Order;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class OrderExport implements FromQuery, WithMapping, WithHeadings,ShouldAutoSize
{
	protected $date;

	public function __construct($date)
	{
		$this->date = $date;
	}

    /**
    * @return \Illuminate\Support\Collection
    */
    public function headings(): array
    {
        return [
        	// '№',
            'Id',
            'Date',
            'Name',
            'Name company',
            'Order status',
            'Total amout',
            'Номер авансового счета',
            'Номер накладной',
        ];
    }
    public function query()
    {
    	// dd($this->date);
        return Order::query()->select('updated_at','id','fio','name_company','order_status_id' ,'total_amout','created_at','date_send')->with(['orderStatus' => function($query) {
			    $query->select('id', 'name');
			}])->where('order_status_id','=', '3')->whereMonth('updated_at', '=', $this->date);
        /*you can use condition in query to get required result
         return Bulk::query()->whereRaw('id > 5');*/
    }
    public function map($order) :array
    {
    	$order['number'] = 1;
    	// dd($order['number']);
        return [
			// $order['number']+1,
			$order->id,
			$order->updated_at,
			$order->fio,
			$order->name_company,
			$order->orderStatus->name,
			$order->total_amout,
            $order->updated_at->format("dmy").$order->id,
            $order->date_send,
            // Date::dateTimeToExcel($bulk->created_at),
            // Date::dateTimeToExcel($bulk->updated_at),
        ];
    }
    public function collection()
    {
    	$dateS = Carbon::now()->startOfMonth()->subMonth(1);
		$dateE = Carbon::now()->startOfMonth(); 
        return Order::query()->select('updated_at','id','fio','name_company','order_status_id' ,'total_amout')->with(['orderStatus' => function($query) {
			    $query->select('id', 'name');
			}])->where('order_status_id','!=', '0')->whereBetween('updated_at', [$dateS, $dateE]);
    }

    public function array()
    {
    	return [
            'Id',
            'date',
            'fio',
            'name_company',
            'order_status',
            'total_amout',
    	];
    }
}
