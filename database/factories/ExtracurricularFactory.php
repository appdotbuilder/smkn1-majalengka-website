<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Extracurricular>
 */
class ExtracurricularFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $activities = [
            'Pramuka', 'Basket', 'Futsal', 'Volley', 'Badminton', 'Taekwondo', 
            'Karate', 'Pencak Silat', 'PMR', 'Rohis', 'English Club', 
            'Robotika', 'Programming Club', 'Fotografi', 'Jurnalistik',
            'Seni Musik', 'Seni Tari', 'Teater'
        ];
        
        $name = fake()->randomElement($activities);
        
        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'description' => fake()->paragraph(3),
            'coach' => fake()->name(),
            'schedule' => fake()->randomElement(['Senin 15:00-17:00', 'Selasa 14:00-16:00', 'Rabu 15:30-17:30', 'Kamis 14:30-16:30', 'Jumat 13:00-15:00']),
            'location' => fake()->randomElement(['Lapangan Sekolah', 'Aula', 'Lab Komputer', 'Ruang Kelas', 'Studio Musik', 'Dojo']),
            'images' => [fake()->imageUrl(400, 300, 'sports'), fake()->imageUrl(400, 300, 'activities')],
            'status' => fake()->randomElement(['active', 'inactive']),
        ];
    }
}