<?php

namespace App\Http\Controllers;

use App\Models\Major;
use App\Models\Question;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ForumController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('Forum', [
            'majors' => Major::withCount('questions')->get()->sortByDesc('questions_count')->values()->all(),
            'page' => $request->input('page')
        ]);
    }

    public function search(Request $request)
    {
        $search = $request->input('search');
        $filter = $request->input('filter');
        if ($filter) {
            return response()->json(Question::with(['answers', 'user', 'university', 'major'])->where('major_id', $filter)->where('content', 'LIKE', '%' . $search . '%')->paginate(1));
        }

        return response()->json(Question::with(['answers', 'user', 'university', 'major'])->where('content', 'LIKE', '%' . $search . '%')->paginate(2));
    }

    public function filter(Request $request, Major $major)
    {

        return Inertia::render('Forum', [
            'majors' => Major::withCount('questions')->get()->sortByDesc('questions_count')->values()->all(),
            'major' => $major
        ]);
    }
}
