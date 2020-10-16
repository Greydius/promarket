<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainController extends Controller
{
    public function main () {
        return view('pages.main');
    }
    public function contacts()
    {
        $our_teams = \DB::table('our_team')->get();

        return view('pages.contacts', compact('our_teams'));
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
}
