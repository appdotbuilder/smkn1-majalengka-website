import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, User, ArrowRight } from 'lucide-react';

interface News {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    published_at: string;
    featured_image?: string;
    user: {
        name: string;
    };
}

interface Props {
    news: {
        data: News[];
        links: Array<{
            url: string | null;
            label: string;
            active: boolean;
        }>;
        current_page: number;
        last_page: number;
        total: number;
    };
    [key: string]: unknown;
}

export default function NewsIndex({ news }: Props) {
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
            <Head title="Berita & Pengumuman - SMKN 1 Majalengka" />
            
            <div className="min-h-screen bg-black text-white">
                {/* Header */}
                <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
                            📰 Berita & Pengumuman
                        </h1>
                        <p className="text-xl text-black/80">
                            Dapatkan informasi terkini seputar kegiatan dan perkembangan SMKN 1 Majalengka
                        </p>
                    </div>
                </div>

                {/* Navigation Breadcrumb */}
                <div className="py-4 border-b border-gray-800">
                    <div className="container mx-auto px-4">
                        <nav className="flex items-center space-x-2 text-sm">
                            <Link href="/" className="text-yellow-500 hover:text-yellow-400">
                                🏠 Beranda
                            </Link>
                            <ArrowRight className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-300">Berita</span>
                        </nav>
                    </div>
                </div>

                {/* News Grid */}
                <div className="py-12">
                    <div className="container mx-auto px-4">
                        {news.data.length > 0 ? (
                            <>
                                {/* Stats */}
                                <div className="mb-8 text-center">
                                    <p className="text-gray-300">
                                        Menampilkan <span className="text-yellow-500 font-semibold">{news.data.length}</span> dari {' '}
                                        <span className="text-yellow-500 font-semibold">{news.total}</span> berita
                                    </p>
                                </div>

                                {/* Featured Article (First Article) */}
                                {news.data[0] && (
                                    <div className="mb-12">
                                        <h2 className="text-2xl font-bold text-yellow-500 mb-6 text-center">
                                            ⭐ Berita Utama
                                        </h2>
                                        <Link href={`/berita/${news.data[0].slug}`}>
                                            <Card className="bg-gray-900 border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden">
                                                <div className="md:flex">
                                                    {news.data[0].featured_image && (
                                                        <div className="md:w-1/2 h-64 md:h-auto">
                                                            <img 
                                                                src={news.data[0].featured_image} 
                                                                alt={news.data[0].title}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    )}
                                                    <div className={`p-8 ${news.data[0].featured_image ? 'md:w-1/2' : 'w-full'}`}>
                                                        <div className="flex items-center justify-between mb-4">
                                                            <Badge className={`${getCategoryBadge(news.data[0].category).color} text-white`}>
                                                                {getCategoryBadge(news.data[0].category).label}
                                                            </Badge>
                                                            <div className="flex items-center text-sm text-gray-400">
                                                                <CalendarDays className="w-4 h-4 mr-1" />
                                                                {formatDate(news.data[0].published_at)}
                                                            </div>
                                                        </div>
                                                        <h3 className="text-2xl font-bold text-white mb-4 hover:text-yellow-500 transition-colors">
                                                            {news.data[0].title}
                                                        </h3>
                                                        <p className="text-gray-300 text-lg mb-4 line-clamp-3">
                                                            {news.data[0].excerpt}
                                                        </p>
                                                        <div className="flex items-center text-sm text-gray-400">
                                                            <User className="w-4 h-4 mr-1" />
                                                            {news.data[0].user.name}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Link>
                                    </div>
                                )}

                                {/* News Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {news.data.slice(1).map((article) => (
                                        <Link key={article.id} href={`/berita/${article.slug}`}>
                                            <Card className="bg-gray-900 border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                                                {article.featured_image && (
                                                    <div className="h-48 overflow-hidden rounded-t-lg">
                                                        <img 
                                                            src={article.featured_image} 
                                                            alt={article.title}
                                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                                        />
                                                    </div>
                                                )}
                                                <CardContent className="p-6">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <Badge className={`${getCategoryBadge(article.category).color} text-white text-xs`}>
                                                            {getCategoryBadge(article.category).label}
                                                        </Badge>
                                                        <span className="text-xs text-gray-400">
                                                            {formatDate(article.published_at)}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 hover:text-yellow-500 transition-colors">
                                                        {article.title}
                                                    </h3>
                                                    <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                                                        {article.excerpt}
                                                    </p>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center text-xs text-gray-400">
                                                            <User className="w-3 h-3 mr-1" />
                                                            {article.user.name}
                                                        </div>
                                                        <span className="text-yellow-500 text-sm font-semibold">
                                                            Baca →
                                                        </span>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>

                                {/* Pagination */}
                                {news.last_page > 1 && (
                                    <div className="flex justify-center mt-12 space-x-2">
                                        {news.links.map((link, index) => {
                                            if (link.url === null) {
                                                return (
                                                    <span
                                                        key={index}
                                                        className="px-4 py-2 text-gray-500 cursor-not-allowed"
                                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                                    />
                                                );
                                            }

                                            return (
                                                <Link
                                                    key={index}
                                                    href={link.url}
                                                    className={`px-4 py-2 rounded transition-colors ${
                                                        link.active
                                                            ? 'bg-yellow-500 text-black font-semibold'
                                                            : 'bg-gray-800 text-white hover:bg-gray-700'
                                                    }`}
                                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                                />
                                            );
                                        })}
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-20">
                                <div className="text-6xl mb-4">📭</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Belum Ada Berita</h3>
                                <p className="text-gray-300">Berita dan pengumuman akan segera hadir di sini.</p>
                                <Link href="/" className="mt-6 inline-block">
                                    <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors">
                                        🏠 Kembali ke Beranda
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-yellow-500 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-black mb-4">
                            📧 Jangan Lewatkan Informasi Terbaru!
                        </h2>
                        <p className="text-black/80 text-lg mb-6">
                            Kunjungi website kami secara berkala untuk mendapatkan update terbaru
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/">
                                <button className="bg-black text-yellow-500 px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors font-semibold">
                                    🏠 Beranda
                                </button>
                            </Link>
                            <Link href="/kontak">
                                <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                                    📞 Hubungi Kami
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}