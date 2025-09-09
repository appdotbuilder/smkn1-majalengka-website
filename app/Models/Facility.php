<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Facility
 *
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property string $description
 * @property string|null $icon
 * @property array|null $images
 * @property string|null $location
 * @property string $category
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Facility newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Facility newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Facility query()
 * @method static \Illuminate\Database\Eloquent\Builder|Facility whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Facility whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Facility whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Facility whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Facility whereIcon($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Facility whereImages($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Facility whereLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Facility whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Facility whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Facility whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Facility whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Facility active()
 * @method static \Database\Factories\FacilityFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Facility extends Model
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
        'icon',
        'images',
        'location',
        'category',
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
     * Scope a query to only include active facilities.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }
}