<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Major extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function universities(): BelongsToMany
    {
        return $this->belongsToMany(University::class);
    }

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }

    public function questions(): HasMany
    {
        return $this->hasMany(Question::class);
    }
}
