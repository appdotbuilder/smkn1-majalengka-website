<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSuggestionRequest;
use App\Models\Suggestion;
use Inertia\Inertia;

class SuggestionController extends Controller
{
    /**
     * Show the suggestion form.
     */
    public function create()
    {
        return Inertia::render('suggestions/create');
    }

    /**
     * Store a new suggestion.
     */
    public function store(StoreSuggestionRequest $request)
    {
        Suggestion::create($request->validated());

        return Inertia::render('suggestions/success')
            ->with('success', 'Saran Anda telah berhasil dikirim. Terima kasih atas masukan Anda!');
    }
}