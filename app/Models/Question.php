<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Question extends Model
{
    use HasFactory;

    protected $with = ['answers' => ['user' => ['major', 'university']], 'user' => ['major', 'university'], 'university', 'major'];

    protected $fillable = ['content', 'slug', 'user_id', 'university_id', 'major_id'];

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

    protected function createdAt(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => Carbon::parse($value)->diffForHumans(),
        );
    }

    function getRouteKeyName(): string
    {
        return 'slug';
    }
}
