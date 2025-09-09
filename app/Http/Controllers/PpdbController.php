<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePpdbApplicationRequest;
use App\Models\PpdbApplication;
use Inertia\Inertia;

class PpdbController extends Controller
{
    /**
     * Show the PPDB registration form.
     */
    public function create()
    {
        return Inertia::render('ppdb/create');
    }

    /**
     * Store a new PPDB application.
     */
    public function store(StorePpdbApplicationRequest $request)
    {
        PpdbApplication::create($request->validated());

        return Inertia::render('ppdb/success')
            ->with('success', 'Pendaftaran berhasil! Kami akan menghubungi Anda segera.');
    }
}