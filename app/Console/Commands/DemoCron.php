<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\FixingOrderProduct;
use App\UnderOrderProduct;
use App\FixingOrder;
use Illuminate\Support\Facades\Mail;
use App\Product;

use App\Mail\UnderProductToClient;
use App\Mail\UnderOrderMail;

class DemoCron extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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

        $underOrderProducts = UnderOrderProduct::where('is_sent', 0)->get();

        foreach($underOrderProducts as $orderProduct) {
            $product = Product::find($orderProduct->product_id);
            if ($product->quantity > 0) {
                $order = clone $orderProduct;
                $order->product = $product;
                Mail::to($orderProduct->email)->send(new UnderOrderMail($order));
                $orderProduct->is_sent = 1;
                $orderProduct->save();
            }

        }
         \Log::info($underOrderProducts);


        // $fixingOrders = UnderOrderProduct::all();
        // $orders_products = $fixingOrders->pluck('product_id')->toArray();
        // // $products_id = $fixingOrders->toArray();
        // $products = Product::whereIn('id', [$orders_products])->get()->toArray();
        // foreach($products as $product){
        //     if($product['quantity'] !='0') {
        //         // $fixing_order_products = FixingOrderProduct::where('product_id', $product['id']);
        //         // // dd($fixing_order_products->get());
        //         // foreach($fixing_order_products->get() as $check_send){
        //         //     if($check_send->message_sending == '0'){

        //         //         $order_ids = $fixing_order_products->pluck('fixing_order_id')->toArray();
        //         //         $fixing_orders = FixingOrder::where('id', '=', $order_ids)->where('id','=',$check_send->fixing_order_id)->pluck('email')->toArray();
        //         //             \Log::info($check_send);
        //         //         \DB::table('fixing_order_product')->where('id', $check_send->id)->update(['message_sending' => '1']);
        //         //         foreach($fixing_orders as $order){

        //         //              $name = 'Promarket.lv';
        //         //              $send = Mail::to($order)->send(new UnderProductToClient($name));
        //         //             \Log::info($fixing_order_products->get('message_sending'));
        //         //         }
        //         //     }
        //         // }
        //     }else{
        //          \Log::info('Product - '.$product['id']. ' quantity='.$product['quantity']);
        //         }
        // }

     
        /*
           Write your database logic we bellow:
           Item::create(['name'=>'hello new']);
        */
      
        $this->info('test Cummand Run successfully!');
    }
}
