<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\PpdbApplication
 *
 * @property int $id
 * @property string $full_name
 * @property string $nisn
 * @property string $nik
 * @property string $email
 * @property string $phone
 * @property string $gender
 * @property string $place_of_birth
 * @property \Illuminate\Support\Carbon $date_of_birth
 * @property string $religion
 * @property string $address
 * @property string $previous_school
 * @property string $father_name
 * @property string $mother_name
 * @property string $parent_phone
 * @property string $parent_occupation
 * @property string $chosen_major
 * @property string $status
 * @property string|null $notes
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication query()
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication whereFullName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication whereNisn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication whereNik($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication whereGender($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication wherePlaceOfBirth($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication whereDateOfBirth($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication whereReligion($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication wherePreviousSchool($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication whereFatherName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication whereMotherName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication whereParentPhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication whereParentOccupation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication whereChosenMajor($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbApplication whereUpdatedAt($value)
 * @method static \Database\Factories\PpdbApplicationFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class PpdbApplication extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'full_name',
        'nisn',
        'nik',
        'email',
        'phone',
        'gender',
        'place_of_birth',
        'date_of_birth',
        'religion',
        'address',
        'previous_school',
        'father_name',
        'mother_name',
        'parent_phone',
        'parent_occupation',
        'chosen_major',
        'status',
        'notes',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'date_of_birth' => 'date',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}