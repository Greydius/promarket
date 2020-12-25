<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Support\Facades\Http;
use Spatie\Searchable\Search;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\FixingDetail;
use App\Category;
use App\SubCategory;
use App\Product;


class MainController extends Controller
{
    public function main () {
        $popularCategories = Category::where('is_popular', 1)->get();
        return view('pages.main', compact('popularCategories'));
    }
    public function contacts()
    {
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

        \Mail::to('promarket@hardweb.pro')->send(new \App\Mail\FeedbackMail($details));

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



}
