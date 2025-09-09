<?php

namespace Database\Seeders;

use App\Models\Profile;
use App\Models\News;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class SchoolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create admin user
        $admin = User::create([
            'name' => 'Administrator',
            'email' => 'admin@smkn1majalengka.sch.id',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
        ]);

        // Create school profile
        Profile::factory()->create();

        // Create teachers including principal
        Teacher::factory()->principal()->create([
            'name' => 'Dr. H. Ahmad Sudirman, M.Pd.',
            'bio' => 'Kepala Sekolah SMKN 1 Majalengka yang berpengalaman lebih dari 20 tahun dalam bidang pendidikan kejuruan. Memiliki visi untuk menjadikan SMKN 1 Majalengka sebagai sekolah kejuruan terdepan di Jawa Barat.',
        ]);

        Teacher::factory(15)->create();

        // Create news articles
        News::factory(10)->create([
            'user_id' => $admin->id,
        ]);

        // Create some specific news
        News::factory()->create([
            'title' => 'Penerimaan Peserta Didik Baru (PPDB) 2024/2025',
            'slug' => 'ppdb-2024-2025',
            'excerpt' => 'Pendaftaran siswa baru untuk tahun ajaran 2024/2025 telah dibuka. Dapatkan informasi lengkap tentang persyaratan dan jadwal pendaftaran.',
            'category' => 'announcement',
            'user_id' => $admin->id,
            'published_at' => now(),
        ]);

        News::factory()->achievement()->create([
            'slug' => 'juara-lomba-robotik-nasional',
            'excerpt' => 'Tim robotik SMKN 1 Majalengka berhasil meraih juara 1 dalam Lomba Robotik Nasional 2024 yang diselenggarakan di Jakarta.',
            'user_id' => $admin->id,
            'published_at' => now()->subDays(5),
        ]);

        News::factory()->create([
            'title' => 'Workshop Industri 4.0 untuk Siswa Jurusan TKJ',
            'slug' => 'workshop-industri-4-0-tkj',
            'excerpt' => 'Siswa jurusan Teknik Komputer dan Jaringan mengikuti workshop khusus tentang teknologi Industri 4.0 dan IoT.',
            'category' => 'academic',
            'user_id' => $admin->id,
            'published_at' => now()->subDays(2),
        ]);
    }
}