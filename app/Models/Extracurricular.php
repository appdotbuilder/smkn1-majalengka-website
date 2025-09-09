<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Extracurricular
 *
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property string $description
 * @property string|null $coach
 * @property string|null $schedule
 * @property string|null $location
 * @property array|null $images
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular query()
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereCoach($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereSchedule($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereImages($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular active()
 * @method static \Database\Factories\ExtracurricularFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Extracurricular extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'slug',
        'description',
        'coach',
        'schedule',
        'location',
        'images',
        'status',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'images' => 'array',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include active extracurriculars.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }
}