<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Suggestion
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $subject
 * @property string $message
 * @property string $category
 * @property string $status
 * @property string|null $admin_response
 * @property \Illuminate\Support\Carbon|null $responded_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Suggestion newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Suggestion newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Suggestion query()
 * @method static \Illuminate\Database\Eloquent\Builder|Suggestion whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Suggestion whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Suggestion whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Suggestion whereSubject($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Suggestion whereMessage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Suggestion whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Suggestion whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Suggestion whereAdminResponse($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Suggestion whereRespondedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Suggestion whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Suggestion whereUpdatedAt($value)
 * @method static \Database\Factories\SuggestionFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Suggestion extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'subject',
        'message',
        'category',
        'status',
        'admin_response',
        'responded_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'responded_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}