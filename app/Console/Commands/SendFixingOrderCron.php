<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\FixingOrder;
use App\Mail\FixingOrderDayMail;
use Illuminate\Support\Facades\Mail;

class SendFixingOrderCron extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fixing:order';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Remont day';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $date = date('Y-m-d');
        $fixingOrders = FixingOrder::all();
        foreach($fixingOrders as $order){
            $today = date('Y-m-d', strtotime($date));
            $tomorrow = date('Y-m-d', strtotime($date .' +1 day'));
            $remont_date = date('Y-m-d', strtotime($order->date));
            if($order->send_message =='0'){
                if($today == $remont_date || $tomorrow == $remont_date) {
                    Mail::to($order->email)->send(new FixingOrderDayMail($order));
                    // $update = FixingOrder::where('id',$order->id)->update(['send_message'=>1]);
                    $order->send_message = '1';
                    $update= $order->save();
                     // \Log::info($update);

                }else{
                     // \Log::info('Remont kuni hali kemagan yoki o`tib ketgan');
                     // dump('Remont kuni hali kemagan yoki o`tib ketgan');
                }
            }
        }
        // return 0;
    }
}
