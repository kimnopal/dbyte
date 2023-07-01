<?php

namespace App\Http\Controllers;

use App\Models\Major;
use App\Models\Question;
use App\Models\University;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use illuminate\Support\Str;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $university = University::firstWhere('slug', $request->input('university'));
        $major = Major::firstWhere('slug', $request->input('major'));
        return Inertia::render('Forum', [
            'universities' => University::with('majors')->get(),
            'questions' => Question::when($request->input('search'), function ($query, $search) {
                $query->where('content', 'like', '%' . $search . '%');
            })->when($request->input('university'), function ($query) use ($university) {
                $query->where('university_id', $university?->id);
            })->when($request->input('major'), function ($query) use ($major) {
                $query->where('major_id', $major?->id);
            })->latest()->paginate(1)->withQueryString()
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
        if (!auth()->user()) {
            return to_route('login');
        }

        $validatedData = $request->validate([
            'university_id' => 'required|exists:universities,id',
            'major_id' => ['required', 'integer', Rule::exists('major_university')->where('university_id', $request->university_id)->where('major_id', $request->major_id)],
            'content' => 'required'
        ]);

        $validatedData['slug'] = Str::slug(Str::words($validatedData['content'], 20, ''));
        $validatedData['user_id'] = auth()->user()->id;

        Question::create($validatedData);

        return to_route('forum.index')->with('success', 'Berhasil membuat pertanyaan');
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
