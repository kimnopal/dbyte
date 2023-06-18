<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Answer;
use App\Models\Badge;
use App\Models\Major;
use App\Models\Question;
use App\Models\University;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $majors = ['Teknik Elektro', 'Teknik Sipil', 'Teknik Geologi', 'Teknik Industri', 'Informatika'];
        $universities = ['Universitas Jenderal Soedirman', 'Institut Teknologi Bandung', 'Universitas Indonesia', 'Universitas Gadjah Mada', 'Universitas Diponegoro'];


        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        foreach ($majors as $major) {
            Major::create([
                'name' => $major,
                'slug' => Str::slug($major)
            ]);
        }

        foreach ($universities as $university) {
            University::create([
                'name' => $university,
                'slug' => Str::slug($university)
            ]);
        }

        $majors = Major::all();
        $universities = University::all();
        $universities->each(function ($university) use ($majors) {
            $university->majors()->attach(
                $majors->random(rand(1, count($majors)))->pluck('id')->toArray()
            );
        });

        User::factory(5)->create();

        Badge::create([
            'name' => 'Newbie',
            'slug' => 'newbie',
            'icon' => '/images/bagdes/newbie.png'
        ]);

        Badge::create([
            'name' => 'Intermediate',
            'slug' => 'intermediate',
            'icon' => '/images/bagdes/intermediate.png'
        ]);

        Badge::create([
            'name' => 'Pro',
            'slug' => 'pro',
            'icon' => '/images/bagdes/pro.png'
        ]);

        $badges = Badge::all();
        $users = User::all();
        $users->each(function ($user) use ($badges) {
            $user->badges()->attach(
                $badges->random(rand(0, count($badges)))->pluck('id')->toArray()
            );
        });

        for ($i = 0; $i < 5; $i++) {
            $content = fake()->text();
            $question = Question::create([
                'content' => $content,
                'slug' => Str::slug(Str::words($content, 10, '')),
                'user_id' => rand($users->first()->id, $users->last()->id),
                'university_id' => rand($universities->first()->id, $universities->last()->id),
                'major_id' => rand($majors->first()->id, $majors->last()->id)
            ]);

            for ($j = 1; $j < rand(1, 5); $j++) {
                Answer::create([
                    'content' => fake()->paragraphs(rand(3, 5), true),
                    'user_id' => rand($users->first()->id, $users->last()->id),
                    'question_id' => $question->id,
                ]);
            }
        }

        Answer::all()->each(function ($answer) use ($users) {
            $answer->voters()->attach(
                $users->random(rand(0, count($users)))->pluck('id')->toArray()
            );
        });
    }
}
