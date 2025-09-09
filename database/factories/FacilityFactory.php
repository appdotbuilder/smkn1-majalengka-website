<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Facility>
 */
class FacilityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $facilities = [
            'Perpustakaan', 'Lab Komputer', 'Lab Bahasa', 'Lab IPA', 'Lab Kimia', 
            'Lab Fisika', 'Workshop Otomotif', 'Studio Multimedia', 'Lapangan Basket', 
            'Lapangan Futsal', 'Aula', 'Kantin', 'Mushola', 'UKS', 'Parkir'
        ];
        
        $name = fake()->randomElement($facilities);
        
        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'description' => fake()->paragraph(2),
            'icon' => fake()->randomElement(['🏫', '💻', '🔬', '⚗️', '🏀', '⚽', '🎵', '📚', '🍽️', '🕌']),
            'images' => [fake()->imageUrl(600, 400, 'building'), fake()->imageUrl(600, 400, 'school')],
            'location' => fake()->randomElement(['Lantai 1', 'Lantai 2', 'Lantai 3', 'Gedung A', 'Gedung B', 'Area Outdoor']),
            'category' => fake()->randomElement(['academic', 'sport', 'support', 'recreation']),
            'status' => fake()->randomElement(['active', 'maintenance', 'inactive']),
        ];
    }
}