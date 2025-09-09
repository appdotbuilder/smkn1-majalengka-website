<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Profile
 *
 * @property int $id
 * @property string $school_name
 * @property string $history
 * @property string $vision
 * @property string $mission
 * @property string $address
 * @property string $phone
 * @property string $email
 * @property string|null $website
 * @property string|null $map_embed
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Profile newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Profile newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Profile query()
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereSchoolName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereHistory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereVision($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereMission($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereWebsite($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereMapEmbed($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profile whereUpdatedAt($value)
 * @method static \Database\Factories\ProfileFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Profile extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'school_name',
        'history',
        'vision',
        'mission',
        'address',
        'phone',
        'email',
        'website',
        'map_embed',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}