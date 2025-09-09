<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AcademicsController extends Controller
{
    /**
     * Display the academics page.
     */
    public function show()
    {
        return Inertia::render('academics');
    }
}