<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Facility;
use Inertia\Inertia;

class FacilityController extends Controller
{
    /**
     * Display school facilities.
     */
    public function index()
    {
        $facilities = Facility::active()
            ->orderBy('category')
            ->get();
        
        return Inertia::render('facilities', [
            'facilities' => $facilities
        ]);
    }
}