import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, GraduationCap } from 'lucide-react';

interface News {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    published_at: string;
    featured_image?: string;
}

interface Profile {
    id: number;
    school_name: string;
    history: string;
    vision: string;
    mission: string;
    address: string;
    phone: string;
    email: string;
}

interface Props {
    profile?: Profile;
    latestNews?: News[];
    [key: string]: unknown;
}

export default function Welcome({ profile, latestNews }: Props) {
    const heroStyle = {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2344&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    };

    const getCategoryBadge = (category: string) => {
        const badges = {
            achievement: { label: '🏆 Prestasi', color: 'bg-yellow-500' },
            announcement: { label: '📢 Pengumuman', color: 'bg-blue-500' },
            event: { label: '🎉 Acara', color: 'bg-green-500' },
            academic: { label: '📚 Akademik', color: 'bg-purple-500' },
        };
        return badges[category as keyof typeof badges] || { label: category, color: 'bg-gray-500' };
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <Head title="SMKN 1 Majalengka - Berkarya Menuju Masa Depan Gemilang" />
            
            <div className="min-h-screen bg-black text-white">
                {/* Navigation */}
                <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-yellow-500/20">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                                    <GraduationCap className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <h1 className="text-lg font-bold text-yellow-500">SMKN 1</h1>
                                    <p className="text-xs text-gray-300">Majalengka</p>
                                </div>
                            </div>
                            
                            <div className="hidden md:flex items-center space-x-6">
                                <Link href="/" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                                    Beranda
                                </Link>
                                <Link href="/profil" className="text-white hover:text-yellow-500 transition-colors">
                                    Profil
                                </Link>
                                <Link href="/akademik" className="text-white hover:text-yellow-500 transition-colors">
                                    Akademik
                                </Link>
                                <Link href="/berita" className="text-white hover:text-yellow-500 transition-colors">
                                    Berita
                                </Link>
                                <Link href="/ekstrakurikuler" className="text-white hover:text-yellow-500 transition-colors">
                                    Ekstrakurikuler
                                </Link>
                                <Link href="/galeri" className="text-white hover:text-yellow-500 transition-colors">
                                    Galeri
                                </Link>
                                <Link href="/fasilitas" className="text-white hover:text-yellow-500 transition-colors">
                                    Fasilitas
                                </Link>
                                <Link href="/kontak" className="text-white hover:text-yellow-500 transition-colors">
                                    Kontak
                                </Link>
                            </div>

                            <div className="flex items-center space-x-4">
                                <Link href="/ppdb">
                                    <Button className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold">
                                        📝 Daftar PPDB
                                    </Button>
                                </Link>
                                <Link href="/login">
                                    <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                                        Login
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="min-h-screen flex items-center" style={heroStyle}>
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                <span className="text-yellow-500">SMKN 1</span>
                                <br />
                                <span className="text-white">Majalengka</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                                🎓 <strong className="text-yellow-500">Berkarya Menuju Masa Depan Gemilang</strong>
                                <br />
                                Membangun generasi yang berakhlak mulia, berkompetensi tinggi, dan siap menghadapi tantangan global
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link href="/ppdb">
                                    <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300">
                                        🚀 Daftar Sekarang
                                    </Button>
                                </Link>
                                <Link href="/profil">
                                    <Button size="lg" variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold text-lg px-8 py-4">
                                        📖 Pelajari Lebih Lanjut
                                    </Button>
                                </Link>
                            </div>

                            {/* Statistics */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-yellow-500">1500+</div>
                                    <div className="text-sm text-gray-300">Siswa Aktif</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-yellow-500">120+</div>
                                    <div className="text-sm text-gray-300">Tenaga Pendidik</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-yellow-500">6</div>
                                    <div className="text-sm text-gray-300">Program Keahlian</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-yellow-500">25+</div>
                                    <div className="text-sm text-gray-300">Tahun Berpengalaman</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Links */}
                <section className="py-20 bg-gray-900">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-yellow-500 mb-4">🎯 Layanan Unggulan</h2>
                            <p className="text-xl text-gray-300">Nikmati kemudahan akses informasi dan layanan sekolah</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Link href="/ppdb">
                                <Card className="bg-black border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 hover:scale-105 cursor-pointer">
                                    <CardContent className="p-6 text-center">
                                        <div className="text-4xl mb-4">📋</div>
                                        <h3 className="text-xl font-bold text-yellow-500 mb-2">PPDB Online</h3>
                                        <p className="text-gray-300">Pendaftaran peserta didik baru secara online</p>
                                    </CardContent>
                                </Card>
                            </Link>

                            <Link href="/akademik">
                                <Card className="bg-black border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 hover:scale-105 cursor-pointer">
                                    <CardContent className="p-6 text-center">
                                        <div className="text-4xl mb-4">📚</div>
                                        <h3 className="text-xl font-bold text-yellow-500 mb-2">Info Akademik</h3>
                                        <p className="text-gray-300">Informasi kurikulum dan jadwal pembelajaran</p>
                                    </CardContent>
                                </Card>
                            </Link>

                            <Link href="/galeri">
                                <Card className="bg-black border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 hover:scale-105 cursor-pointer">
                                    <CardContent className="p-6 text-center">
                                        <div className="text-4xl mb-4">📸</div>
                                        <h3 className="text-xl font-bold text-yellow-500 mb-2">Galeri Kegiatan</h3>
                                        <p className="text-gray-300">Dokumentasi kegiatan dan prestasi siswa</p>
                                    </CardContent>
                                </Card>
                            </Link>

                            <Link href="/kotak-saran">
                                <Card className="bg-black border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 hover:scale-105 cursor-pointer">
                                    <CardContent className="p-6 text-center">
                                        <div className="text-4xl mb-4">💬</div>
                                        <h3 className="text-xl font-bold text-yellow-500 mb-2">Kotak Saran</h3>
                                        <p className="text-gray-300">Sampaikan masukan untuk kemajuan sekolah</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Latest News */}
                {latestNews && latestNews.length > 0 && (
                    <section className="py-20 bg-black">
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold text-yellow-500 mb-4">📰 Berita Terkini</h2>
                                <p className="text-xl text-gray-300">Dapatkan informasi terbaru seputar kegiatan sekolah</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {latestNews.slice(0, 6).map((news) => (
                                    <Link key={news.id} href={`/berita/${news.slug}`}>
                                        <Card className="bg-gray-900 border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                                            {news.featured_image && (
                                                <div className="h-48 overflow-hidden rounded-t-lg">
                                                    <img 
                                                        src={news.featured_image} 
                                                        alt={news.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            )}
                                            <CardContent className="p-6">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryBadge(news.category).color}`}>
                                                        {getCategoryBadge(news.category).label}
                                                    </span>
                                                    <span className="text-xs text-gray-400">
                                                        {formatDate(news.published_at)}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                                                    {news.title}
                                                </h3>
                                                <p className="text-gray-300 text-sm line-clamp-3">
                                                    {news.excerpt}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                            </div>

                            <div className="text-center">
                                <Link href="/berita">
                                    <Button className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold">
                                        📚 Lihat Semua Berita
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                {/* School Info */}
                {profile && (
                    <section className="py-20 bg-gray-900">
                        <div className="container mx-auto px-4">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-4xl font-bold text-yellow-500 mb-6">🏫 Tentang Sekolah</h2>
                                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                        {profile.history}
                                    </p>
                                    
                                    <div className="mb-6">
                                        <h3 className="text-xl font-bold text-yellow-500 mb-3">🎯 Visi</h3>
                                        <p className="text-gray-300">{profile.vision}</p>
                                    </div>

                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold text-yellow-500 mb-3">🚀 Misi</h3>
                                        <p className="text-gray-300">{profile.mission}</p>
                                    </div>

                                    <Link href="/profil">
                                        <Button className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold">
                                            📖 Pelajari Lebih Lanjut
                                        </Button>
                                    </Link>
                                </div>

                                <div className="space-y-4">
                                    <Card className="bg-black border-yellow-500/30">
                                        <CardContent className="p-6">
                                            <div className="flex items-start space-x-4">
                                                <MapPin className="w-6 h-6 text-yellow-500 mt-1" />
                                                <div>
                                                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">📍 Alamat</h4>
                                                    <p className="text-gray-300">{profile.address}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-black border-yellow-500/30">
                                        <CardContent className="p-6">
                                            <div className="flex items-start space-x-4">
                                                <Phone className="w-6 h-6 text-yellow-500 mt-1" />
                                                <div>
                                                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">📞 Telepon</h4>
                                                    <p className="text-gray-300">{profile.phone}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-black border-yellow-500/30">
                                        <CardContent className="p-6">
                                            <div className="flex items-start space-x-4">
                                                <Mail className="w-6 h-6 text-yellow-500 mt-1" />
                                                <div>
                                                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">✉️ Email</h4>
                                                    <p className="text-gray-300">{profile.email}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Footer */}
                <footer className="bg-black border-t border-yellow-500/20 py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                                        <GraduationCap className="w-6 h-6 text-black" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-yellow-500">SMKN 1</h3>
                                        <p className="text-xs text-gray-300">Majalengka</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    Membangun generasi yang berakhlak mulia dan siap menghadapi masa depan.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-yellow-500 mb-4">📝 Layanan</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="/ppdb" className="text-gray-300 hover:text-yellow-500">PPDB Online</Link></li>
                                    <li><Link href="/akademik" className="text-gray-300 hover:text-yellow-500">Info Akademik</Link></li>
                                    <li><Link href="/ekstrakurikuler" className="text-gray-300 hover:text-yellow-500">Ekstrakurikuler</Link></li>
                                    <li><Link href="/kotak-saran" className="text-gray-300 hover:text-yellow-500">Kotak Saran</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-yellow-500 mb-4">🏫 Informasi</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="/profil" className="text-gray-300 hover:text-yellow-500">Profil Sekolah</Link></li>
                                    <li><Link href="/berita" className="text-gray-300 hover:text-yellow-500">Berita</Link></li>
                                    <li><Link href="/galeri" className="text-gray-300 hover:text-yellow-500">Galeri</Link></li>
                                    <li><Link href="/fasilitas" className="text-gray-300 hover:text-yellow-500">Fasilitas</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-yellow-500 mb-4">📞 Kontak</h4>
                                <div className="space-y-2 text-sm text-gray-300">
                                    {profile && (
                                        <>
                                            <p>📍 {profile.address}</p>
                                            <p>📞 {profile.phone}</p>
                                            <p>✉️ {profile.email}</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-yellow-500/20 mt-8 pt-8 text-center">
                            <p className="text-gray-300 text-sm">
                                © 2024 SMKN 1 Majalengka. All rights reserved. 🎓 Built with ❤️ for education.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}