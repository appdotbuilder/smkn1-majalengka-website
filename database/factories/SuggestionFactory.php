<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Suggestion>
 */
class SuggestionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = ['academic', 'facility', 'service', 'other'];
        $subjects = [
            'Saran Peningkatan Fasilitas Lab',
            'Usulan Program Ekstrakurikuler Baru',
            'Masukan untuk Sistem Pembelajaran',
            'Saran Perbaikan Kantin Sekolah',
            'Usulan Kegiatan Siswa',
            'Masukan Sistem Administrasi'
        ];
        
        return [
            'name' => fake()->name(),
            'email' => fake()->safeEmail(),
            'subject' => fake()->randomElement($subjects),
            'message' => fake()->paragraphs(3, true),
            'category' => fake()->randomElement($categories),
            'status' => fake()->randomElement(['pending', 'reviewed', 'responded']),
            'admin_response' => fake()->optional(0.3)->paragraph(),
            'responded_at' => fake()->optional(0.3)->dateTimeBetween('-1 month', 'now'),
        ];
    }
}