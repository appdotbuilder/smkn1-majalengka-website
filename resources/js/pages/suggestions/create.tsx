import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SuggestionFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    category: string;
    [key: string]: string;
}

export default function SuggestionCreate() {
    const { data, setData, post, processing, errors } = useForm<SuggestionFormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/kotak-saran');
    };

    const categories = [
        { value: 'academic', label: '📚 Akademik & Pembelajaran' },
        { value: 'facility', label: '🏢 Fasilitas Sekolah' },
        { value: 'service', label: '🤝 Layanan Sekolah' },
        { value: 'other', label: '💡 Lainnya' },
    ];

    return (
        <>
            <Head title="Kotak Saran - SMKN 1 Majalengka" />
            
            <div className="min-h-screen bg-black text-white py-8">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="flex justify-center items-center space-x-3 mb-4">
                            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">💬</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-yellow-500">SMKN 1 Majalengka</h1>
                                <p className="text-sm text-gray-300">Kotak Saran & Masukan</p>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">💡 Kotak Saran</h2>
                        <p className="text-lg text-gray-300">Sampaikan saran dan masukan Anda untuk kemajuan sekolah</p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <Card className="bg-gray-900 border-yellow-500/30">
                            <CardHeader>
                                <CardTitle className="text-2xl text-yellow-500 text-center">
                                    🗣️ Suara Anda Sangat Berharga
                                </CardTitle>
                                <p className="text-center text-gray-300">
                                    Bantuan Anda untuk terus memperbaiki dan mengembangkan kualitas pendidikan di SMKN 1 Majalengka
                                </p>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Personal Info */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-yellow-500 mb-4 border-b border-yellow-500/30 pb-2">
                                            👤 Data Pengirim
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="name" className="text-white">Nama Lengkap *</Label>
                                                <Input
                                                    id="name"
                                                    value={data.name}
                                                    onChange={(e) => setData('name', e.target.value)}
                                                    className="bg-black border-gray-600 text-white"
                                                    placeholder="Masukkan nama lengkap"
                                                />
                                                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="email" className="text-white">Email *</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={data.email}
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    className="bg-black border-gray-600 text-white"
                                                    placeholder="contoh@email.com"
                                                />
                                                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Suggestion Details */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-yellow-500 mb-4 border-b border-yellow-500/30 pb-2">
                                            💭 Detail Saran
                                        </h3>
                                        <div className="space-y-4">
                                            <div>
                                                <Label htmlFor="category" className="text-white">Kategori Saran *</Label>
                                                <Select value={data.category} onValueChange={(value) => setData('category', value)}>
                                                    <SelectTrigger className="bg-black border-gray-600 text-white">
                                                        <SelectValue placeholder="Pilih kategori saran" />
                                                    </SelectTrigger>
                                                    <SelectContent className="bg-gray-800 border-gray-600">
                                                        {categories.map((category) => (
                                                            <SelectItem key={category.value} value={category.value} className="text-white">
                                                                {category.label}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                {errors.category && <p className="text-red-400 text-sm mt-1">{errors.category}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="subject" className="text-white">Judul Saran *</Label>
                                                <Input
                                                    id="subject"
                                                    value={data.subject}
                                                    onChange={(e) => setData('subject', e.target.value)}
                                                    className="bg-black border-gray-600 text-white"
                                                    placeholder="Berikan judul singkat untuk saran Anda"
                                                />
                                                {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="message" className="text-white">Isi Saran *</Label>
                                                <Textarea
                                                    id="message"
                                                    value={data.message}
                                                    onChange={(e) => setData('message', e.target.value)}
                                                    className="bg-black border-gray-600 text-white"
                                                    placeholder="Sampaikan saran dan masukan Anda secara detail. Berikan konteks yang jelas agar kami dapat memahami dan menindaklanjuti dengan tepat."
                                                    rows={6}
                                                />
                                                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                                                <p className="text-xs text-gray-400 mt-1">
                                                    Minimal 10 karakter
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Guidelines */}
                                    <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                                        <h4 className="text-lg font-semibold text-blue-400 mb-2 flex items-center">
                                            📝 Tips Memberikan Saran yang Efektif:
                                        </h4>
                                        <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                                            <li>Berikan deskripsi yang jelas dan spesifik</li>
                                            <li>Sertakan contoh konkret jika memungkinkan</li>
                                            <li>Gunakan bahasa yang sopan dan konstruktif</li>
                                            <li>Fokus pada solusi, bukan hanya masalah</li>
                                        </ul>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="text-center pt-6 border-t border-yellow-500/30">
                                        <Button
                                            type="submit"
                                            disabled={processing}
                                            size="lg"
                                            className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold px-8 py-3 transform hover:scale-105 transition-all duration-300"
                                        >
                                            {processing ? (
                                                <>
                                                    <span className="animate-spin mr-2">⏳</span>
                                                    Mengirim Saran...
                                                </>
                                            ) : (
                                                <>
                                                    🚀 Kirim Saran
                                                </>
                                            )}
                                        </Button>
                                        <p className="text-sm text-gray-400 mt-3">
                                            * Wajib diisi. Saran Anda akan ditinjau dan ditindaklanjuti oleh tim kami.
                                        </p>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}