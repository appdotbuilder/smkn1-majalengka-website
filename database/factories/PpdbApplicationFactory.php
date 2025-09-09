<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PpdbApplication>
 */
class PpdbApplicationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $majors = ['TKJ', 'RPL', 'MM', 'TKR', 'TSM', 'TAV'];
        $religions = ['Islam', 'Kristen', 'Katolik', 'Hindu', 'Buddha', 'Konghucu'];
        
        return [
            'full_name' => fake()->name(),
            'nisn' => fake()->unique()->numerify('##########'),
            'nik' => fake()->unique()->numerify('################'),
            'email' => fake()->unique()->safeEmail(),
            'phone' => fake()->phoneNumber(),
            'gender' => fake()->randomElement(['male', 'female']),
            'place_of_birth' => fake()->city(),
            'date_of_birth' => fake()->dateTimeBetween('-18 years', '-15 years'),
            'religion' => fake()->randomElement($religions),
            'address' => fake()->address(),
            'previous_school' => fake()->company() . ' Junior High School',
            'father_name' => fake()->name('male'),
            'mother_name' => fake()->name('female'),
            'parent_phone' => fake()->phoneNumber(),
            'parent_occupation' => fake()->jobTitle(),
            'chosen_major' => fake()->randomElement($majors),
            'status' => fake()->randomElement(['pending', 'approved', 'rejected']),
            'notes' => fake()->optional()->paragraph(),
        ];
    }
}