<?php

namespace App\Http\Controllers;

use App\Models\Major;
use App\Models\Question;
<<<<<<< HEAD
=======
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
>>>>>>> b212aa9 (resolve conflict)
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ForumController extends Controller
{
<<<<<<< HEAD
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
=======
    public function index(): Response
    {
        return Inertia::render('Forum', [
            // 'questions' => Question::with(['answers', 'user', 'university', 'major'])->get(),
            'majors' => Major::withCount('questions')->get()->sortByDesc('questions_count')->values()->all()
>>>>>>> b212aa9 (resolve conflict)
        ]);
    }

    public function search(Request $request)
    {
        $search = $request->input('search');
        return response()->json(Question::with(['answers', 'user', 'university', 'major'])->where('content', 'LIKE', '%' . $search . '%')->get());
        // return $search;
    }
}
