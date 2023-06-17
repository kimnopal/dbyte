<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Badge;
use App\Models\Major;
use App\Models\University;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

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
                'name' => $major
            ]);
        }

        foreach ($universities as $university) {
            University::create([
                'name' => $university
            ]);
        }

        $majors = Major::all();
        University::all()->each(function ($university) use ($majors) {
            $university->majors()->attach(
                $majors->random(rand($majors->first()->id, $majors->last()->id))->pluck('id')->toArray()
            );
        });

        User::factory(5)->create();

        Badge::create([
            'name' => 'Newbie',
            'icon' => '/images/bagdes/newbie.png'
        ]);

        Badge::create([
            'name' => 'Intermediate',
            'icon' => '/images/bagdes/intermediate.png'
        ]);

        Badge::create([
            'name' => 'Pro',
            'icon' => '/images/bagdes/pro.png'
        ]);

        $badges = Badge::all();
        User::all()->each(function ($user) use ($badges) {
            $user->badges()->attach(
                $badges->random(rand($badges->first()->id, $badges->last()->id))->pluck('id')->toArray()
            );
        });
    }
}
