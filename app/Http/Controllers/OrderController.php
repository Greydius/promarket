<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
class OrderController extends Controller
{
    public function cart() {
        $orderId = session('orderId');
        if(is_null($orderId)){
            return redirect()->route('main-page');
        };
        $order = Order::find($orderId);
        $orderProducts = $order->products;
        return view('pages.cart', compact('order'));
    }

    public function ckeckout() {
        $orderId = session('orderId');
        if(is_null($orderId)){
            return redirect()->route('main-page');
        }
        $order = Order::find($orderId);
        $orderProducts = $order->products;
        return view('pages.checkout', compact('order'));
    }

    public function addToCart($product_id) {
        $orderId = session('orderId');
        // dd($orderId);
        if(is_null($orderId)){
            $order = Order::create();
            session(['orderId' => $order->id]);
        } else {
            $order = Order::find($orderId);
            if(is_null($order)){
                session()->forget('orderId');
                $this->addToCart($product_id);
            }
        }
        if($order->products->contains($product_id)){
            $orderRow = $order->products()
                ->where('product_id', $product_id)->first()->pivot;
            $orderRow->count++;
            $orderRow->update();
        } else {
            $order->products()->attach($product_id);
        }
        return 'added_good';
    }

    public function removeFromCart($product_id)
    {
        $orderId = session('orderId');
        if(is_null($orderId)){
            return false;
        }
        $order = Order::find($orderId);
        $order->products()->detach($product_id);
        return true;
    }

    public function decreaseFromCart($product_id)
    {
        $orderId = session('orderId');
        if(is_null($orderId)){
            return false;
        }
        $order = Order::find($orderId);
        $orderRow = $order->products()->where('product_id', $product_id)->first()->pivot;
        $orderRow->count--;
        $orderRow->save();
        return 'decreased';
    }
}
