<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\GalleryItem>
 */
class GalleryItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $titles = [
            'Upacara Bendera', 'Lomba Sains', 'Pertandingan Olahraga', 'Festival Seni',
            'Kunjungan Industri', 'Prakerin Siswa', 'Wisuda Siswa', 'Pameran Karya',
            'Seminar Teknologi', 'Pelatihan Siswa'
        ];
        
        return [
            'title' => fake()->randomElement($titles),
            'description' => fake()->sentence(10),
            'file_path' => fake()->imageUrl(800, 600, 'school'),
            'type' => fake()->randomElement(['image', 'video']),
            'category' => fake()->randomElement(['event', 'academic', 'sport', 'extracurricular', 'facility']),
            'taken_at' => fake()->dateTimeBetween('-1 year', 'now'),
            'status' => 'active',
        ];
    }
}