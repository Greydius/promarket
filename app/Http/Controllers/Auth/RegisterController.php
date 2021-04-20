<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Validator;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use App\User;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    // protected $redirectTo = '/email/verify';
    
    protected function redirectPath()
    {
      return '/email/verify';
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
        'username' => 'string|min:3',
        'email' => 'required|string|email|max:255|unique:users,email',
        'password' => 'required|string|min:8|confirmed',
        'password_confirmation' => 'required|min:8',
        'agreement' => 'accepted',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'username' => $data['username'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }

    public function regOnlyEmail()
    {
        $email = request()->email;
        $password = Str::random(8);

        $validatedData = request()->validate([
            'email' => 'required|string|email|max:255|unique:users,email,NULL,id,deleted_at,NULL',
        ]);
        // dd($validatedData);
        $user = User::create([
            'username' => ' ',
            'email' => $email,
            'password' => Hash::make($password),
        ]);
        // $send_verify = ;   
        // if($send_verify){
        \Mail::to($email)->send(new \App\Mail\WelcomeNewUser($password));
        $user->sendEmailVerificationNotification();
        // $regOnlyEmail = Session::put('regOnlyEmail', 'regOnlyEmail');
        $regOnlyEmail = request()->session()->put(['regOnlyEmail' => '1']);
        // dd($regOnlyEmail);
         // return redirect()->route('checkout',[$regOnlyEmail]);
        // }
        // return 'error';
    }
}
