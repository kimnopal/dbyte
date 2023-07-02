<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class AnswerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        $validatedData = $request->validate([
            'content' => 'required',
            'question_id' => ['required', 'integer', Rule::exists('questions', 'id')]
        ]);

        $validatedData['user_id'] = auth()->user()->id;

        Answer::create($validatedData);

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Answer $answer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Answer $answer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Answer $answer)
    {
        if (!auth()->user()) {
            return to_route('login');
        }

        if (DB::table('votes')->where('user_id', auth()->user()->id)->where('answer_id', $answer->id)->get()->isNotEmpty()) {
            DB::table('votes')->where('user_id', auth()->user()->id)->where('answer_id', $answer->id)->delete();
        } else {
            DB::table('votes')->insert([
                'user_id' => auth()->user()->id,
                'answer_id' => $answer->id
            ]);
        }

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Answer $answer)
    {
        //
    }
}
