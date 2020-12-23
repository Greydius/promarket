<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Auth;
use App\Order;
use App\User;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
    }

    public function myprofile()
    {
        return view('profile.index');
    }

    public function oneOrder()
    {
        $order = Order::find(request()->id);

        return view('profile.user-order', compact('order'));
    }

    public function edit(Request $request)
    {

        $user = Auth::user();
        // dd($user->avatar);
        $data = $request->all();
        $user->update($data);

        // $user->avatar = $filename;
        $save = $user->save();
        if ($save) {
            session()->flash('success', 'Успешно сохранено!');
        } else {
            session()->flash('error', 'Случилос ошибка!');
        }

        return redirect()->route('profile.index');
    }

    public function avatarStore(Request $request)
    {
        $user = Auth::user();
        $path = $request->file('file')->store('avatars');

        $save = $user->update([
            'avatar' => $path,
        ]);
        return Storage::url($path);
    }

    public function newPass()
    {
        if (request()->isMethod('post')) {
            request()->validate([
                'new_password' => ['required'],
                'password_confirmation' => ['same:new_password'],
            ]);

            User::find(auth()->user()->id)->update(['password' => Hash::make(request('new_password'))]);

            return redirect()->route('profile.index')->with('status', 'Успешно сохранено!');
        } else {
            return view('profile.new-password');
        }
    }
}
