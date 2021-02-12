<?php

namespace App\Http\Controllers;


use SMSGatewayMe\Client\ApiClient;
use SMSGatewayMe\Client\Configuration;
use SMSGatewayMe\Client\Api\MessageApi;
use SMSGatewayMe\Client\Model\SendMessageRequest;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\SEOTools;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendOrderToClent;
use Spatie\Searchable\Search;
use Illuminate\Http\Request;
use App\Mail\UnderOrderMail;
use Illuminate\Support\Str;
use Softon\Sms\Facades\Sms;
use App\UnderOrderProduct;
use App\FixingDetail;
use App\SubCategory;
use App\FixingOrder;
use App\Category;
use App\Product;
use App\Order;
use PDF;


class MainController extends Controller
{
    public function main () {
        $popularCategories = Category::where('is_popular', 1)->get();

        // SEOMeta::setTitle($detail->name);
        SEOMeta::setDescription(__("we are professionally engaged in the repair of electronic equipment more than 15 years, providing quality service at a reasonable price"));
        SEOTools::setDescription(__("we are professionally engaged in the repair of electronic equipment more than 15 years, providing quality service at a reasonable price"));
        return view('pages.main', compact('popularCategories'));
    }
    public function contacts()
    {
        SEOMeta::setTitle();
        SEOMeta::setDescription(__("we are professionally engaged in the repair of electronic equipment more than 15 years, providing quality service at a reasonable price"));
        SEOMeta::setCanonical();
        $our_teams = \DB::table('our_team')->get();
        $service_centers = \DB::table('service_centers')->get();

        return view('pages.contacts', compact('our_teams','service_centers'));
    }
    public function about()
    {
        return view('pages.about');
    }
    public function delivery()
    {
        return view('pages.delivery');
    }
    public function responsibility()
    {
        return view('pages.responsibility');
    }
    public function guarantee()
    {
        return view('pages.guarantee');
    }

    public function search(Request $request)
    {
    if($request->ajax()){
        $query = request('query');
        $query2 = request('query2');
        $products = Product::query();
        $products = $products->where('name', 'LIKE', "%$query%");
        if(isset(request()->attrs)){
            foreach(request()->attrs as $key => $val){
               $products = $products->whereIn($key, $val);
            }

        }
        if(isset(request()->color)){
               $products = $products->whereIn('color_id', request()->color);
        }
        if(isset(request()->quantity)){
        $c=count(request()->quantity);
          if($c == 1){
            foreach(request()->quantity as $quantity){
              if($quantity == 0){
                $products = $products->where('quantity', 0);

              }else{
                // dd($quantity);
              $products = $products->where('quantity','>=', $quantity);
              }
            }
          }else{
              $products = $products->where('quantity','>=', 0);
          }
        }
        if(isset(request()->min_price) && isset(request()->max_price)){
          $products = $products->where('price','>=', request()->min_price);
          $products = $products->where('price','<=', request()->max_price);
        }
          $products = $products->where('name', 'LIKE', "%$query2%")->orderBy('price',request()->order)->paginate(request()->per_page)->onEachSide(2);
           return view('components.market.sort', compact('products'));
        }else{
           $searchResults = (new Search())
                ->registerModel(Product::class, 'name')
                ->registerModel(FixingDetail::class, 'name')
                ->perform($request->input('query'));
                $results = $searchResults;
            $search = $request->input('query');

            $results = Product::where('name', 'LIKE', '%' . $search . '%')->paginate(12);

            return view('components.search', compact('searchResults', 'results'));
        }
    }

    public function searchAjax(Request $request){
            // dd(request('query2'));
        if($request->ajax()) {
            if(request('query')){

            $data = (new Search())
            ->registerModel(FixingDetail::class, 'name')
            ->registerModel(Product::class, 'name')
            ->perform($request->input('query'));
            return view('components.search-ajax',compact('data'));
            }else {
                return false;
            }
        }
    }

    public function sendFeedback()
    {
        $details = request()->all();

        \Mail::to(config('params.emails'))->send(new \App\Mail\FeedbackMail($details));

        return 'Сообщение успешно отправлено.';
    }

    public function gravy()
    {
        $products = Product::where('color_id', null)->orWhere('quality_id', null)->get();
        return view('vendor.voyager.EmptyProducts.gravy', compact('products'));
    }
    public function OrderHandle()
    {
        $orders = Order::where('order_status_id', 1)->get();
        return view('vendor.voyager.Orders.gravy', compact('orders'));
    }
    public function OrderPayment()
    {
        $orders = Order::where('order_status_id', 2)->get();
        return view('vendor.voyager.Orders.gravypayment', compact('orders'));
    }

    public function FixingOrderHandle()
    {
        $orders = FixingOrder::where('order_status_id', 1)->get();
        return view('vendor.voyager.FixingOrders.gravy', compact('orders'));
    }

    public function FixingOrderPayment()
    {
        $orders = FixingOrder::where('order_status_id', 2)->get();
        return view('vendor.voyager.FixingOrders.gravypayment', compact('orders'));
    }

    public function thanks()
    {
        return view('emails.thanks');
    }

    public function sms()
    {
        // $sms = Sms::gateway('nexmo')->send('999163844','sms.test',['from'=>'Promarket.lv']);
        // dd($sms);
            $order = Order::where('id', 28)->first();
            $products = $order->products;
            // dd($order);
            // $order = $order->toArray();
            $pdf = \PDF::loadView('sms.pdf2', ['order' => $order, 'products' => $products]);
            // return $pdf->stream();
            // return view('sms.pdf2',['order' => $order, 'products' => $products]);
            return $pdf->stream();
    }

    public function smsToClient($type, $order_id)
    {

        // return view('sms.to-client');
        $order = Order::where('id',$order_id)->first();
        $products = $order->products;
        if($type == 'cash'){
               // Authorisation details.
    // $username = "promarket@hardweb.pro";
    // $hash = "e5b7040de288627a570814d15ff83e50888265a0d7feab8a71e9bb232f58cc53";

    // // Config variables. Consult http://api.txtlocal.com/docs for more info.
    // $test = "0";

    // // Data for text message. This is the text message data.
    // $sender = "promarket"; // This is who the message appears to be from.
    // $numbers = "998999163844"; // A single number or a comma-seperated list of numbers
    // $message = "This is a test message from the PHP API script. G'iyosiddin";
    // // 612 chars or less
    // // A single number or a comma-seperated list of numbers
    // $message = urlencode($message);
    // $data = "username=".$username."&hash=".$hash."&message=".$message."&sender=".$sender."&numbers=".$numbers."&test=".$test;
    // $ch = curl_init('http://api.txtlocal.com/send/?');
    // curl_setopt($ch, CURLOPT_POST, true);
    // curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    // $result = curl_exec($ch); // This is the result from the API
    // curl_close($ch);

    // echo($result);
            $sms = Sms::gateway('nexmo')->send([$order->telephone, '998999163844'],'sms.to-client',['from'=>'Promarket.lv']);
            dd($sms);
        }elseif($type == 'card'){
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
            $sms = Sms::gateway('nexmo')->send($order->telephone,'sms.to-client',['from'=>'Promarket.lv']);
            // return $pdf->download('pdf');

            // dd($sms);
        }
        return redirect()->back()->with('success', 'Message sent successfully!');
    }
    public function underOrder(Request $req)
    {
        $newUnderOrderProduct = new UnderOrderProduct();
        $newUnderOrderProduct->name = $req->name;
        $newUnderOrderProduct->product_id = $req->product_id;
        $newUnderOrderProduct->email = $req->email;
        $newUnderOrderProduct->is_sent = 0;
        $newUnderOrderProduct->save();
        return redirect()->back();
    }

    public function sendMessages() {
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


    }

}
