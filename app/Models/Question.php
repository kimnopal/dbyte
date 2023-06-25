<?php

namespace App\Models;

use Carbon\Carbon;
<<<<<<< HEAD
use Illuminate\Database\Eloquent\Casts\Attribute;
=======
>>>>>>> b212aa9 (resolve conflict)
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Question extends Model
{
    use HasFactory;

    public function answers(): HasMany
    {
        return $this->hasMany(Answer::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function university(): BelongsTo
    {
        return $this->belongsTo(University::class);
    }

    public function major(): BelongsTo
    {
        return $this->belongsTo(Major::class);
    }

<<<<<<< HEAD
    // public function getCreatedAtAttribute($value)
    // {
    //     return Carbon::parse($value)->diffForHumans();
    // }

    protected function createdAt(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => Carbon::parse($value)->diffForHumans(),
        );
=======
    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->diffForHumans();
>>>>>>> b212aa9 (resolve conflict)
    }
}
