<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Profile>
 */
class ProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'school_name' => 'SMK Negeri 1 Majalengka',
            'history' => 'SMK Negeri 1 Majalengka didirikan pada tahun 1999 sebagai lembaga pendidikan menengah kejuruan yang bertujuan mempersiapkan siswa untuk memasuki dunia kerja atau melanjutkan pendidikan ke jenjang yang lebih tinggi. Sekolah ini telah berkembang pesat dan menjadi salah satu SMK terbaik di Kabupaten Majalengka.',
            'vision' => 'Menjadi SMK yang unggul dalam menghasilkan lulusan yang berkarakter, kompeten, dan siap bersaing di era global.',
            'mission' => 'Menyelenggarakan pendidikan kejuruan berkualitas, mengembangkan karakter siswa yang berakhlak mulia, meningkatkan kompetensi siswa sesuai dengan perkembangan teknologi, dan menjalin kerjasama dengan dunia usaha dan industri.',
            'address' => 'Jl. Raya Rajagaluh-Majalengka KM. 2, Desa Sukahaji, Kec. Rajagaluh, Kabupaten Majalengka, Jawa Barat 45472',
            'phone' => '0233-281234',
            'email' => 'info@smkn1majalengka.sch.id',
            'website' => 'https://smkn1majalengka.sch.id',
            'map_embed' => '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.8234!2d108.2274!3d-6.8364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f2f!0x0!2zNsKwNTAnMTEuMCJTIDEwOMKwMTMnMzguNyJF!5e0!3m2!1sen!2sid!4v1234567890" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        ];
    }
}