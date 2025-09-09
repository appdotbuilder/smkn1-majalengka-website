<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\GalleryItem
 *
 * @property int $id
 * @property string $title
 * @property string|null $description
 * @property string $file_path
 * @property string $type
 * @property string $category
 * @property \Illuminate\Support\Carbon|null $taken_at
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem query()
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem whereFilePath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem whereTakenAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem active()
 * @method static \Database\Factories\GalleryItemFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class GalleryItem extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'description',
        'file_path',
        'type',
        'category',
        'taken_at',
        'status',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'taken_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include active gallery items.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }
}