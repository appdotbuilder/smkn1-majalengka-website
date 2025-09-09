<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Teacher>
 */
class TeacherFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $positions = ['Kepala Sekolah', 'Wakil Kepala Sekolah', 'Guru Produktif', 'Guru Normatif', 'Guru Adaptif', 'Guru BK'];
        $subjects = ['Teknik Komputer Jaringan', 'Rekayasa Perangkat Lunak', 'Multimedia', 'Teknik Kendaraan Ringan', 'Teknik Sepeda Motor', 'Teknik Audio Video', 'Bahasa Indonesia', 'Matematika', 'Bahasa Inggris', 'PKn'];
        
        return [
            'name' => fake()->name(),
            'position' => fake()->randomElement($positions),
            'subject' => fake()->randomElement($subjects),
            'email' => fake()->unique()->safeEmail(),
            'phone' => fake()->phoneNumber(),
            'photo' => fake()->imageUrl(300, 300, 'people'),
            'bio' => fake()->paragraph(3),
            'status' => 'active',
        ];
    }

    /**
     * Indicate that the teacher is the principal.
     */
    public function principal(): static
    {
        return $this->state(fn (array $attributes) => [
            'position' => 'Kepala Sekolah',
            'subject' => null,
        ]);
    }

    /**
     * Indicate that the teacher is inactive.
     */
    public function inactive(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'inactive',
        ]);
    }
}