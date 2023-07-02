<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

class RegisterController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Auth/Register', [
            'csrf_token' => csrf_token()
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validatedData = $request->validate([
            'username' => 'required|unique:users,username|max:25|alpha_num|lowercase',
            'email' => 'required|email:rfc,dns|unique:users,email',
            'password' => 'required|min:8'
        ]);

        $validatedData['password'] = Hash::make($validatedData['password']);

        User::create($validatedData);

        return redirect('/login')->with('success', 'Akun berhasil dibuat, silahkan login');
    }
}
