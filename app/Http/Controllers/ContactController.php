<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display the contact page.
     */
    public function show()
    {
        $profile = Profile::first();
        
        return Inertia::render('contact', [
            'profile' => $profile
        ]);
    }
}