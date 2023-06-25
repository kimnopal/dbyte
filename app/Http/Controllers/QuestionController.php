<?php

namespace App\Http\Controllers;

use App\Models\Major;
use App\Models\Question;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $major = Major::firstWhere('slug', $request->input('major'));
        return Inertia::render('Forum', [
            'majors' => Major::withCount('questions')->get()->sortByDesc('questions_count')->values()->all(),
            'questions' => Question::when($request->input('search'), function ($query, $search) {
                $query->where('content', 'like', '%' . $search . '%');
            })->when($request->input('major'), function ($query) use ($major) {
                $query->where('major_id', $major->id);
            })->paginate(1)->withQueryString()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Question $question)
    {
        return Inertia::render('Task', [
            'question' => $question
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Question $question)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Question $question)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Question $question)
    {
        //
    }
}
