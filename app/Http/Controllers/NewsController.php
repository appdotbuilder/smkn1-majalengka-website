<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\News;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display all news articles.
     */
    public function index()
    {
        $news = News::published()
            ->latest('published_at')
            ->paginate(12);
        
        return Inertia::render('news/index', [
            'news' => $news
        ]);
    }

    /**
     * Display a single news article.
     */
    public function show($slug)
    {
        $article = News::where('slug', $slug)
            ->where('status', 'published')
            ->firstOrFail();
        
        $relatedNews = News::published()
            ->where('id', '!=', $article->id)
            ->where('category', $article->category)
            ->take(3)
            ->get();
        
        return Inertia::render('news/show', [
            'article' => $article,
            'relatedNews' => $relatedNews
        ]);
    }
}