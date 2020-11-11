<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Foundation\Auth\ResetsPasswords;
use App\Providers\RouteServiceProvider;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\User;

class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * Where to redirect users after resetting their password.
     *
     * @var string
     */
    protected $redirectTo = '/email/verify';
     /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,NULL,id,deleted_at,NULL']
        ]);
    }

    public function reset(Request $request)
    {
        // dd('test');
      $this->validate($request, [
        'new_password'     => 'required|min:6',
        'password_confirmation' => 'required|same:new_password',
        ]);
        $data = $request->all();
        $user = User::where('email', $data['email'])->first();
        if(Hash::check($data['new_password'], $user->password)){
             return back()
                        ->with('error','Указанный пароль совпадает старый пароль, надо заменить на другой пароль!');
        }else{
           $update = $user->update([
            'password' => Hash::make($data['new_password']),
           ]);
           if($update == true){
               return redirect()
                ->route('login')
                ->with(['success' => 'Пароль успешно изменён!']);
           }
        }
    }

    public function resetPassword()
    {
        return view('auth.passwords.reset-email');
    }
}
