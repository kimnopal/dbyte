<?php

namespace App\Http\Controllers;

use App\Models\Major;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Home', [
            'majors' => Major::withCount('questions')->get()->sortByDesc('questions_count')->values()->all(),
        ]);
    }
}
