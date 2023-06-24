<?php

namespace App\Http\Controllers;

use App\Models\Major;
use App\Models\Question;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ForumController extends Controller
{
    public function index(Request $request, Major $major): Response
    {
        return Inertia::render('Forum', [
            'majors' => Major::withCount('questions')->get()->sortByDesc('questions_count')->values()->all(),
            'questions' => Question::with(['answers', 'user', 'university', 'major'])
                ->when($request->input('search'), function ($query, $search) {
                    $query->where('content', 'like', '%' . $search . '%');
                })->when($major->id, function ($query) use ($major) {
                    $query->where('major_id', $major->id);
                })->paginate(1)->withQueryString()
        ]);
    }
}
