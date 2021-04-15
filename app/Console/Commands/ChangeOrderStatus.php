<?php

namespace App\Console\Commands;

use SMSGatewayMe\Client\Model\SendMessageRequest;
use Illuminate\Support\Facades\Mail;
use Illuminate\Console\Command;
use App\Mail\SendOrderToClent;
use Softon\Sms\Facades\Sms;
use App\Order;

class ChangeOrderStatus extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'change_order_status';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Chack order status';

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
           // return view('sms.to-client');
        $orders = Order::all();
        foreach($orders as $o_order) {
            $order = Order::where('id',$o_order->id)->first();
            if($order->order_status_id == 3){
            // \Log::info($order->id);
            // dd();
                $products = $order->products;
                if(is_null($order->date_send)){
                    if($order->payment_method == 'cash'){
                        $sms = Sms::gateway('nexmo')->send($order->telephone,'sms.to-client',['from'=>'Promarket.lv']);
                        // dd($sms);
                        // \Log::info($sms);
                        $order->updated_at = $order->updated_at;
                        $order->date_send = 'AV'.date("dmy").$order->id;
                        $order->save();
                    }elseif($order->payment_method == 'card'){
                        $email = $order->email;
                        $pdf = \PDF::loadView('sms.pdf2', ['order' => $order, 'products' => $products])->setOptions(['defaultFont' => 'sans-serif']);
                        // dd($pdf->stream());
                        $send = Mail::send(['sms.pdf2' => 'sms.pdf2'], ['order' => $order], function($message)use($order,$email, $pdf)
                            {
                                     $message->to($email);
                                     $message->subject('PAVADZĪME');
                                     $message->attachData($pdf->output(), "pavadzime.pdf");
                            });
                        // dd($send);
                        // $sms = Sms::gateway('nexmo')->send($order->telephone,'sms.to-client',['from'=>'Promarket.lv']);

                        $order->updated_at = $order->updated_at;
                        $order->date_send = 'AV'.date("dmy").$order->id;
                        $save = $order->save();
                        // dd($sms);
                    // \Log::info($save);
                    \Log::info($order->date_send);
                    }
                }{
                    \Log::info('Not changed orders!');
                }
            }
        }
    }
}
