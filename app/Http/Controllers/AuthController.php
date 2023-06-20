<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function login()
    {
        // dd(csrf_token());
        return Inertia::render('Auth/Login', [
            'csrf_token' => csrf_token()
        ]);
    }

    public function doLogin(Request $request)
    {
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required'],
        ]);

        // dd(Auth::attempt($credentials));

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->intended('/forum');
        }

        return Inertia::render('Auth/Login', [
            'csrf_token' => csrf_token(),
            'error' => 'Username atau password tidak sesuai, silahkan masukkan dengan benar'
        ]);
        // return back()->withErrors('test');
    }
}
