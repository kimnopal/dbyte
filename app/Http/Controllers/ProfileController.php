<?php

namespace App\Http\Controllers;

use App\Models\University;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Profile', [
            'user' => User::with(['major', 'university', 'badges', 'answers' => function ($query) {
                $query->withCount(['voters']);
            }])->withCount(['questions'])->find(auth()->user()->id)
        ]);
    }

    public function edit(Request $request, User $user): Response
    {
        // Auth::check()
        return Inertia::render('Profile/ProfileEdit', [
            'user' => User::with(['major', 'university'])->find($user->id),
            'universities' => University::with('majors')->get()
        ]);
    }

    public function update(Request $request, User $user)
    {
        dd($request->all());
        // return json_encode([
        //     'user' => $user,
        //     'update' => $request->all()
        // ]);
    }
}
