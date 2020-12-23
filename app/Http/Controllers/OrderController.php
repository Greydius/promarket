<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function cart() {
        $orderId = session('orderId');
        if(is_null($orderId)){
            return redirect()->route('main-page');
        };
        $order = Order::find($orderId);
        if (count($order->products) == 0) {
            return redirect()->route('main-page');
        }
        $orderProducts = $order->products;
        return view('pages.cart', compact('order'));
    }

    public function ckeckout() {
        $orderId = session('orderId');

        if(is_null($orderId)){
            return redirect()->route('main-page');
        }
        $order = Order::find($orderId);
        // dd($order->getFullPrice());
        $orderProducts = $order->products;
        return view('pages.checkout', compact('order','orderProducts'));
    }

    public function updateProductQuantity(Request $request)
    {
        $product_id = $request->product_id;
        $quantity = $request->quantity;
        $orderId = session('orderId');
        $order = Order::find($orderId);
        $orderRow = $order->products()
            ->where('product_id', $product_id)->first()->pivot;
        $orderRow->count = intval($quantity);
        $orderRow->update();



        $order = Order::find($orderId);
        return view('components.common.cart-commodity', compact('order'));
    }

    public function addToCart(Request $request) {
        $product_id = $request->product_id;
        $quantity = $request->quantity;
        $orderId = session('orderId');
        if(is_null($orderId)){
            $order = Order::create();
            session(['orderId' => $order->id]);
            $orderId = $order->id;
        } else {
            $order = Order::find($orderId);
            if(is_null($order)){
                session()->forget('orderId');
                $this->addToCart($request);

            }
        }
        if($order->products->contains($product_id)){
            $orderRow = $order->products()
                ->where('product_id', $product_id)->first()->pivot;
            $orderRow->count += intval($quantity);
            $orderRow->update();
        } else {
            $order->products()->attach($product_id);
            $orderRow = $order->products()
                ->where('product_id', $product_id)->first()->pivot;
            $orderRow->count = intval($quantity);
            $orderRow->update();
        }

        $order = Order::find($orderId);

        return view('components.common.cart-commodity', compact('order'));
    }

    public function removeFromCart(Request $request)
    {
        $product_id = $request->product_id;
        $orderId = session('orderId');
        if(is_null($orderId)){
            return false;
        }
        $order = Order::find($orderId);
        $order->products()->detach($product_id);

        $order = Order::find($orderId);
        return view('components.common.cart-commodity', compact('order'));

    }

    public function removeAllProductsFromCart()
    {
        $orderId = session('orderId');
        if(is_null($orderId)){
            return false;
        }
        $order = Order::find($orderId);
        $allProducts = [];

        foreach ($order->products as $product) {
            array_push($allProducts, $product->id);
        }

        $order->products()->detach($allProducts);


        return 'decreased';
    }

    public function confirmOrder(Request $request)
    {
        $orderId = session('orderId');
        if(is_null($orderId)){
            return false;
        }
        if (Auth::check()) {
            $userid = Auth::id();
        }else{
            $userid = null;
        }
        $order = Order::find($orderId);
        $inputs = $request->all();
        $result = $order->update($inputs);
        $order->fio = $inputs['name'] .' '.$inputs['firstname'];
        $order->specification = $inputs['identification-type'];
        $order->status = '1';
        $order->total_amout = $order->getFullPrice();
        
        $order->user_id = $userid;
        $save = $order->save();
        if($save){
            $request->session()->forget('orderId');
            session()->flash('success','Ваш заказ принят в обработку!');
        }else{
            session()->flash('error','Случилос ошибка!');
        }

        return redirect()->route('checkout');
    }

    public function returnCartState() {
        $orderId = session('orderId');
        $order = Order::find($orderId);
        $orderProducts = $order->products;
        return $order;
    }

    public function returnDataFromUpdatedProductQuantity(Request $request) {
        $product_id = $request->product_id;
        $quantity = $request->quantity;
        $orderId = session('orderId');
        $order = Order::find($orderId);
        $orderRow = $order->products()
            ->where('product_id', $product_id)->first()->pivot;
        $orderRow->count = intval($quantity);
        $orderRow->update();



        $order = Order::find($orderId);
        $order->products;
        return $order;
    }

    public function returnDataFromRemovedProductInOrder($product_id) {
        $orderId = session('orderId');
        if(is_null($orderId)){
            return false;
        }
        $order = Order::find($orderId);
        $order->products()->detach($product_id);

        $order = Order::find($orderId);
        $order->products;
        return $order;
    }
}
