<?php

namespace App\Http\Controllers;

use App\DetailColor;
use App\DetailQuality;
use App\FixingDetail;
use App\FixingType;
use App\Manufacturer;
use App\ManufacturerModel;
use App\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\FixingMailInfoToClient;
use App\Mail\FixingMailInfoToManager;

class FixingController extends Controller
{
    public function fixing()
    {
        return view('pages.fixing.fixing');
    }

    public function fixingType($type)
    {
        $fixingType = FixingType::where('code', $type)->with('translations')->first();
        return view('pages.fixing.fixing-inner', compact('fixingType'));
    }

    public function fixingBrand($type, $brand)
    {
        $manufacturer = Manufacturer::where('code', $brand)->with('translations')->first();
        return view('pages.fixing.fixing-inner-brand', compact('manufacturer'));
    }

    public function fixingBrandModel($type, $brand, $modelName)
    {
        $model = ManufacturerModel::where('code', $modelName)->with('translations')->first();
        $accessories = ManufacturerModel::where('model_name',$model->model_name)->get();
        // dd($accessories);
        return view('pages.fixing.model', compact('model'));
    }

    public function fixingModelDetail($type, $brand, $modelName, $detailName)
    {
        $model = ManufacturerModel::where('code', $modelName)->with('translations')->first();
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
        return view('pages.fixing.details', compact('details'));
    }

    public function fixingDetailOrderColor($detail_id, $color_id)
    {
        $detail = FixingDetail::find($detail_id);
        $detail->products = $detail->products()->where('color_id', $color_id)->get();

        return view('components.fixing.detail_quality', compact('detail'));

    }

    public function fixingDetailOrderRequest(Request $request)
    {

        $details = json_decode($request->details);
        foreach ($details as $detail) {
            $detailObject = FixingDetail::find($detail->id);
            $detail->name = $detailObject->manufacturerModel->name . ' ' . $detailObject->name;
        }
        $request_details = $request;
        $request_details['clientOrder'] = $details;
        Mail::to('dierkholm@gmail.com')->send(new FixingMailInfoToManager($request_details));
        Mail::to('dierkholm@gmail.com')->send(new FixingMailInfoToClient($request_details));

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
