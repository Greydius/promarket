<?php

namespace App\Http\Controllers;

use App\DetailColor;
use App\DetailQuality;
use App\FixingDetail;
use App\FixingOrder;
use App\FixingType;
use App\Manufacturer;
use App\ManufacturerModel;
use App\Product;
use App\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Mail\FixingMailInfoToClient;
use App\Mail\FixingMailInfoToManager;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\SEOTools;

class FixingController extends Controller
{
    public function fixing()
    {
        return view('pages.fixing.fixing');
    }

    public function fixingType($type)
    {
        $fixingType = FixingType::where('code', $type)->with('translations')->first();
         SEOMeta::setTitle($fixingType->name);
        SEOMeta::setDescription($fixingType->description);
        SEOMeta::addMeta('article:published_time', $fixingType->updated_at->toW3CString(), 'property');
        SEOTools::setTitle($fixingType->name);
        SEOTools::setDescription($fixingType->description);
        return view('pages.fixing.fixing-inner', compact('fixingType'));
    }

    public function fixingBrand($type, $brand)
    {
        $fixingType = FixingType::where('code', $type)->with('translations')->first();
        $manufacturer = Manufacturer::where([['code', '=', $brand], ['fixing_type_id', '=', $fixingType->id]])->with('translations')->first();
        SEOMeta::setTitle($fixingType->name);
        SEOMeta::setDescription($fixingType->description);
        SEOMeta::addMeta('article:published_time', $fixingType->updated_at->toW3CString(), 'property');
        SEOTools::setTitle($fixingType->name);
        SEOTools::setDescription($fixingType->description);
        return view('pages.fixing.fixing-inner-brand', compact('manufacturer'));
    }

    public function fixingBrandModel($type, $brand, $modelName)
    {
        $model = ManufacturerModel::where('code', $modelName)->with('translations')->first();
        $accessories = ManufacturerModel::where('model_name',$model->model_name)->get();
        SEOMeta::setTitle($accessories->name);
        // SEOMeta::setDescription($accessories->description);
        SEOMeta::addMeta('article:published_time', $accessories->updated_at->toW3CString(), 'property');
        SEOTools::setTitle($accessories->name);
        // SEOTools::setDescription($accessories->description);
        return view('pages.fixing.model', compact('model'));
    }

    public function fixingModelDetail($type, $brand, $modelName, $detailName)
    {
        $model = ManufacturerModel::where('code', $modelName)->with('translations')->first();
        SEOMeta::setTitle($model->name);
        // SEOMeta::setDescription($model->description);
        SEOMeta::addMeta('article:published_time', $model->updated_at->toW3CString(), 'property');
        SEOTools::setTitle($model->name);
        // SEOTools::setDescription($model->description);
        return view('pages.fixing.model', compact('model'));
    }

    public function fixingDetailOrder(Request $request, $type, $brand, $model)
    {
        $details = FixingDetail::find(explode(',', $request->id));


        foreach ($details as $detail) {
            $has = array();
            $colors = array();
            foreach ($detail->products as $product) {
                if (!in_array($product['color'], $has)) {
                    $has[] = $product['color'];
                    $colors[] = $product;
                }
            }
            $detail->allColors = $colors;
            $detail->color;
        }
        // SEOMeta::setTitle($details->name);
        // SEOMeta::setDescription($details->description);
        // SEOMeta::addMeta('article:published_time', $details->updated_at->toW3CString(), 'property');
        // SEOTools::setTitle($details->name);
        // SEOTools::setDescription($details->description);
        return view('pages.fixing.details', compact('details'));
    }

    public function fixingDetailOrderColor($locale,$detail_id, $color_id)
    {
        $detail = FixingDetail::find($detail_id);
        $detail->products = $detail->products()->where('color_id', $color_id)->get();

        SEOMeta::setTitle($detail->name);
        SEOMeta::setDescription($detail->description);
        SEOMeta::addMeta('article:published_time', $detail->updated_at->toW3CString(), 'property');
        SEOTools::setTitle($detail->name);
        SEOTools::setDescription($detail->description);

        return view('components.fixing.detail_quality', compact('detail'));

    }

    public function fixingDetailOrderRequest(Request $request)
    {
        $details = json_decode($request->details);
        $requestedDetailsRow = [];
        foreach ($details as $detail) {
            $detailObject = FixingDetail::find($detail->id);
            array_push($requestedDetailsRow, $detail->id);
            $detail->name = $detailObject->manufacturerModel->name . ' ' . $detailObject->name;
        }
        $request_details = $request;
        $request_details['clientOrder'] = $details;


        $products = Product::find($requestedDetailsRow);

        $totalPrice = 0;

        foreach ($products as $product) {
            $totalPrice += $product->price_with_installation;
        }

        $newFixingOrder = new FixingOrder();

        $newFixingOrder->branch_name = $request_details->address;

        $newFixingOrder->name = $request_details->name;

        $newFixingOrder->email = $request_details->email;

        $newFixingOrder->phone = $request_details->tel;

        $newFixingOrder->comment = $request_details->comment;

        $newFixingOrder->date = $request_details->date;

        $newFixingOrder->time = $request_details->time;

        $newFixingOrder->total_amount = $totalPrice;

        $newFixingOrder->order_status_id = '1';

        if(Auth::check()) {
            $newFixingOrder->user_id = Auth::user()->id;
        }

        $newFixingOrder->save();

        $newFixingOrder->products()->attach($requestedDetailsRow);

        Mail::to('m1ckey94@yandex.ru')->send(new FixingMailInfoToManager($request_details));

        Mail::to($newFixingOrder->email)->send(new FixingMailInfoToClient($request_details));

        return $request_details;
    }

    public function fixingService($type, $serviceCode)
    {
        $service = Service::where('code', $serviceCode)->first();
        return view('pages.fixing.service-inner', compact('service'));
    }

    public function deleteColorForCommodity(Request $req)
    {
        $color = DetailColor::find($req->id);

        $color->delete();

        return back();
    }

    public function createColorForCommodity(Request $req)
    {
        $color = new DetailColor();

        $color->color = $req->color;
        $color->fixing_detail_id = $req->fixing_detail_id;
        $color->name = $req->name;
        $color->quantity = $req->quantity;
        $color->save();

        return back();

    }

    public function createQualityForCommodity(Request $req)
    {

        $quality = new DetailQuality();

        $quality->fixing_detail_id = $req->fixing_detail_id;
        $quality->name = $req->name;
        $quality->quantity = $req->quantity;
        $quality->cost = $req->cost;
        $quality->save();

        return back();
    }

    public function deleteQualityForCommodity(Request $req)
    {
        $quality = DetailQuality::find($req->id);

        $quality->delete();

        return back();
    }

}
