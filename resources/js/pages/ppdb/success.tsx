import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Home, Phone, Mail } from 'lucide-react';

export default function PpdbSuccess() {
    return (
        <>
            <Head title="Pendaftaran Berhasil - PPDB SMKN 1 Majalengka" />
            
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
                                    🎉 Pendaftaran Berhasil!
                                </CardTitle>
                            </CardHeader>
                            
                            <CardContent className="text-center space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-white">
                                        Terima kasih telah mendaftar di SMKN 1 Majalengka!
                                    </h3>
                                    
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        Pendaftaran Anda telah berhasil dikirim dan akan segera kami proses. 
                                        Tim kami akan menghubungi Anda dalam waktu 1-3 hari kerja untuk konfirmasi 
                                        dan memberikan informasi selanjutnya.
                                    </p>
                                </div>

                                <div className="bg-black p-6 rounded-lg border border-yellow-500/30">
                                    <h4 className="text-lg font-semibold text-yellow-500 mb-4">
                                        📋 Langkah Selanjutnya:
                                    </h4>
                                    <ul className="text-left space-y-2 text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-yellow-500 mr-2">1.</span>
                                            Tunggu konfirmasi dari pihak sekolah melalui telepon atau email
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-yellow-500 mr-2">2.</span>
                                            Siapkan dokumen-dokumen yang diperlukan untuk verifikasi
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-yellow-500 mr-2">3.</span>
                                            Ikuti tes masuk sesuai jadwal yang akan diberikan
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-yellow-500 mr-2">4.</span>
                                            Tunggu pengumuman hasil seleksi
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gray-800 p-6 rounded-lg">
                                    <h4 className="text-lg font-semibold text-yellow-500 mb-4">
                                        📞 Kontak Informasi:
                                    </h4>
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
                                    <Link href="/kontak">
                                        <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                                            <Phone className="w-4 h-4 mr-2" />
                                            Hubungi Kami
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