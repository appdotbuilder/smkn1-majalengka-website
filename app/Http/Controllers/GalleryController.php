<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\GalleryItem;
use Inertia\Inertia;

class GalleryController extends Controller
{
    /**
     * Display the gallery.
     */
    public function index()
    {
        $galleryItems = GalleryItem::active()
            ->latest('taken_at')
            ->paginate(24);
        
        return Inertia::render('gallery', [
            'galleryItems' => $galleryItems
        ]);
    }
}