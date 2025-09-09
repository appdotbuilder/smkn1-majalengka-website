<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Extracurricular;
use Inertia\Inertia;

class ExtracurricularController extends Controller
{
    /**
     * Display extracurricular activities.
     */
    public function index()
    {
        $extracurriculars = Extracurricular::active()->get();
        
        return Inertia::render('extracurriculars', [
            'extracurriculars' => $extracurriculars
        ]);
    }
}