<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\Profile;
use Inertia\Inertia;

class PublicController extends Controller
{
    /**
     * Display the homepage.
     */
    public function index()
    {
        $profile = Profile::first();
        $latestNews = News::published()->latest('published_at')->take(6)->get();
        
        return Inertia::render('welcome', [
            'profile' => $profile,
            'latestNews' => $latestNews
        ]);
    }
}