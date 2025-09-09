<?php

use App\Http\Controllers\AcademicsController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ExtracurricularController;
use App\Http\Controllers\FacilityController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\PpdbController;
use App\Http\Controllers\SchoolProfileController;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\SuggestionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Public routes
Route::get('/', [PublicController::class, 'index'])->name('home');
Route::get('/profil', [SchoolProfileController::class, 'show'])->name('school.profile');
Route::get('/akademik', [AcademicsController::class, 'show'])->name('academics');
Route::get('/berita', [NewsController::class, 'index'])->name('news.index');
Route::get('/berita/{slug}', [NewsController::class, 'show'])->name('news.show');
Route::get('/ekstrakurikuler', [ExtracurricularController::class, 'index'])->name('extracurriculars');
Route::get('/galeri', [GalleryController::class, 'index'])->name('gallery');
Route::get('/fasilitas', [FacilityController::class, 'index'])->name('facilities');
Route::get('/kontak', [ContactController::class, 'show'])->name('contact');

// PPDB routes
Route::controller(PpdbController::class)->group(function () {
    Route::get('/ppdb', 'create')->name('ppdb.create');
    Route::post('/ppdb', 'store')->name('ppdb.store');
});

// Suggestion routes
Route::controller(SuggestionController::class)->group(function () {
    Route::get('/kotak-saran', 'create')->name('suggestions.create');
    Route::post('/kotak-saran', 'store')->name('suggestions.store');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
