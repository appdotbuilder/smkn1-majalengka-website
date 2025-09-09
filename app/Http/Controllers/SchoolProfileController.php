<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use App\Models\Teacher;
use Inertia\Inertia;

class SchoolProfileController extends Controller
{
    /**
     * Display the school profile page.
     */
    public function show()
    {
        $profile = Profile::first();
        $teachers = Teacher::active()->get();
        
        return Inertia::render('profile', [
            'profile' => $profile,
            'teachers' => $teachers
        ]);
    }
}