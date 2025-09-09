<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->sentence(6, true);
        $categories = ['achievement', 'announcement', 'event', 'academic'];
        
        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'excerpt' => fake()->paragraph(2),
            'content' => fake()->paragraphs(5, true),
            'featured_image' => fake()->imageUrl(800, 600, 'school'),
            'status' => 'published',
            'category' => fake()->randomElement($categories),
            'user_id' => User::factory(),
            'published_at' => fake()->dateTimeBetween('-1 month', 'now'),
        ];
    }

    /**
     * Indicate that the news is a draft.
     */
    public function draft(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'draft',
            'published_at' => null,
        ]);
    }

    /**
     * Indicate that the news is an achievement.
     */
    public function achievement(): static
    {
        return $this->state(fn (array $attributes) => [
            'category' => 'achievement',
            'title' => 'Prestasi Membanggakan Siswa SMKN 1 Majalengka',
        ]);
    }
}