<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\University;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
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
        return Inertia::render('Profile/ProfileEdit', [
            'user' => User::with(['major', 'university'])->find($user->id),
            'universities' => University::with('majors')->get()
        ]);
    }

    public function update(Request $request, User $user)
    {
        $rules = [
            'university_id' => 'integer|nullable|exists:universities,id',
            'major_id' => ['integer', 'nullable', Rule::exists('major_university')->where('university_id', $request->university_id)->where('major_id', $request->major_id)],
            'description' => 'nullable'
        ];

        if ($request->input('username') != $user->username) {
            $rules['username'] = 'required|unique:users,username|max:25|alpha_num|lowercase';
        }

        if ($request->file('photo')) {
            $rules['photo'] = 'image|file|max:2048';
        }

        $validatedData = $request->validate($rules);

        if ($request->file('photo')) {
            if ($user->photo) {
                Storage::delete($user->photo);
            }
            $validatedData['photo'] = $request->file('photo')->store('profiles');
        }

        User::where('id', $user->id)->update($validatedData);

        return redirect('/profile')->with('success', 'Profil berhasil diperbarui');
    }
}
