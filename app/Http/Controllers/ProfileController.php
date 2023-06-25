<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
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
}
