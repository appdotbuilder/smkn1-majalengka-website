import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Home, MessageSquare, Phone, Mail } from 'lucide-react';

export default function SuggestionSuccess() {
    return (
        <>
            <Head title="Saran Terkirim - SMKN 1 Majalengka" />
            
            <div className="min-h-screen bg-black text-white flex items-center justify-center py-8">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <Card className="bg-gray-900 border-green-500/30">
                            <CardHeader className="text-center pb-6">
                                <div className="flex justify-center mb-4">
                                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                                        <CheckCircle className="w-12 h-12 text-white" />
                                    </div>
                                </div>
                                <CardTitle className="text-3xl text-green-500">
                                    🎉 Saran Berhasil Terkirim!
                                </CardTitle>
                            </CardHeader>
                            
                            <CardContent className="text-center space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-white">
                                        Terima kasih atas saran dan masukan Anda!
                                    </h3>
                                    
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        Saran Anda sangat berharga untuk kemajuan SMKN 1 Majalengka. 
                                        Tim kami akan meninjau dan mempertimbangkan masukan Anda 
                                        untuk perbaikan berkelanjutan di masa depan.
                                    </p>
                                </div>

                                <div className="bg-black p-6 rounded-lg border border-yellow-500/30">
                                    <h4 className="text-lg font-semibold text-yellow-500 mb-4">
                                        📋 Apa yang Terjadi Selanjutnya:
                                    </h4>
                                    <ul className="text-left space-y-2 text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-yellow-500 mr-2">1.</span>
                                            Saran Anda akan dikaji oleh tim manajemen sekolah
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-yellow-500 mr-2">2.</span>
                                            Kami akan mengevaluasi kelayakan implementasi
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-yellow-500 mr-2">3.</span>
                                            Jika diperlukan, kami akan menghubungi Anda untuk diskusi lebih lanjut
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-yellow-500 mr-2">4.</span>
                                            Implementasi yang memungkinkan akan dilakukan secara bertahap
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/30">
                                    <h4 className="text-lg font-semibold text-blue-400 mb-4">
                                        💡 Ingin Memberikan Saran Lagi?
                                    </h4>
                                    <p className="text-gray-300 text-sm mb-4">
                                        Kami selalu terbuka untuk mendengar ide-ide kreatif dan masukan konstruktif 
                                        dari seluruh stakeholder sekolah.
                                    </p>
                                    <Link href="/kotak-saran">
                                        <Button className="bg-blue-500 text-white hover:bg-blue-600">
                                            <MessageSquare className="w-4 h-4 mr-2" />
                                            Kirim Saran Lagi
                                        </Button>
                                    </Link>
                                </div>

                                <div className="bg-gray-800 p-6 rounded-lg">
                                    <h4 className="text-lg font-semibold text-yellow-500 mb-4">
                                        📞 Kontak Langsung:
                                    </h4>
                                    <p className="text-gray-300 text-sm mb-3">
                                        Jika ada hal mendesak yang perlu segera ditangani, silakan hubungi kami:
                                    </p>
                                    <div className="space-y-2 text-gray-300">
                                        <div className="flex items-center justify-center space-x-2">
                                            <Phone className="w-4 h-4 text-yellow-500" />
                                            <span>0233-281234</span>
                                        </div>
                                        <div className="flex items-center justify-center space-x-2">
                                            <Mail className="w-4 h-4 text-yellow-500" />
                                            <span>info@smkn1majalengka.sch.id</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                                    <Link href="/">
                                        <Button className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold">
                                            <Home className="w-4 h-4 mr-2" />
                                            Kembali ke Beranda
                                        </Button>
                                    </Link>
                                    <Link href="/berita">
                                        <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                                            📰 Lihat Berita Sekolah
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}