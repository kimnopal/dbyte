<?php

namespace App\Http\Controllers;

use App\Models\Major;
use App\Models\Question;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ForumController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Forum', [
            // 'questions' => Question::with(['answers', 'user', 'university', 'major'])->get(),
            'majors' => Major::withCount('questions')->get()->sortByDesc('questions_count')->values()->all()
        ]);
    }

    public function search(Request $request)
    {
        $search = $request->input('search');
        return response()->json(Question::with(['answers', 'user', 'university', 'major'])->where('content', 'LIKE', '%' . $search . '%')->get());
        // return $search;
    }
}
