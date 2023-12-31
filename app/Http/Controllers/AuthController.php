<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
    public function login(): Response
    {
        return Inertia::render('Auth/Login', [
            'csrf_token' => csrf_token()
        ]);
    }

    public function doLogin(Request $request): Response|RedirectResponse
    {
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->intended('/forum');
        }

        return back()->with('error', 'Username atau password tidak sesuai, silahkan masukkan dengan benar');
    }

    public function logout(Request $request): RedirectResponse
    {
        Auth::logout();
        $request->session()->regenerate();
        $request->session()->regenerateToken();
        return redirect('/forum');
    }
}
