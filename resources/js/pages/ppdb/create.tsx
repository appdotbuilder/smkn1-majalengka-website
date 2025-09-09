import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface PpdbFormData {
    full_name: string;
    nisn: string;
    nik: string;
    email: string;
    phone: string;
    gender: string;
    place_of_birth: string;
    date_of_birth: string;
    religion: string;
    address: string;
    previous_school: string;
    father_name: string;
    mother_name: string;
    parent_phone: string;
    parent_occupation: string;
    chosen_major: string;
    [key: string]: string;
}

export default function PpdbCreate() {
    const { data, setData, post, processing, errors } = useForm<PpdbFormData>({
        full_name: '',
        nisn: '',
        nik: '',
        email: '',
        phone: '',
        gender: '',
        place_of_birth: '',
        date_of_birth: '',
        religion: '',
        address: '',
        previous_school: '',
        father_name: '',
        mother_name: '',
        parent_phone: '',
        parent_occupation: '',
        chosen_major: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/ppdb');
    };

    const majors = [
        { value: 'TKJ', label: 'Teknik Komputer dan Jaringan (TKJ)' },
        { value: 'RPL', label: 'Rekayasa Perangkat Lunak (RPL)' },
        { value: 'MM', label: 'Multimedia (MM)' },
        { value: 'TKR', label: 'Teknik Kendaraan Ringan (TKR)' },
        { value: 'TSM', label: 'Teknik Sepeda Motor (TSM)' },
        { value: 'TAV', label: 'Teknik Audio Video (TAV)' },
    ];

    const religions = ['Islam', 'Kristen', 'Katolik', 'Hindu', 'Buddha', 'Konghucu'];

    return (
        <>
            <Head title="Pendaftaran PPDB - SMKN 1 Majalengka" />
            
            <div className="min-h-screen bg-black text-white py-8">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="flex justify-center items-center space-x-3 mb-4">
                            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">🎓</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-yellow-500">SMKN 1 Majalengka</h1>
                                <p className="text-sm text-gray-300">Pendaftaran Peserta Didik Baru</p>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">📝 Formulir Pendaftaran PPDB</h2>
                        <p className="text-lg text-gray-300">Tahun Ajaran 2024/2025</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <Card className="bg-gray-900 border-yellow-500/30">
                            <CardHeader>
                                <CardTitle className="text-2xl text-yellow-500 text-center">
                                    🚀 Formulir Pendaftaran Siswa Baru
                                </CardTitle>
                                <p className="text-center text-gray-300">
                                    Silakan lengkapi formulir di bawah ini dengan data yang benar dan lengkap
                                </p>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Data Siswa */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-yellow-500 mb-4 border-b border-yellow-500/30 pb-2">
                                            👤 Data Siswa
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="full_name" className="text-white">Nama Lengkap *</Label>
                                                <Input
                                                    id="full_name"
                                                    value={data.full_name}
                                                    onChange={(e) => setData('full_name', e.target.value)}
                                                    className="bg-black border-gray-600 text-white"
                                                    placeholder="Masukkan nama lengkap"
                                                />
                                                {errors.full_name && <p className="text-red-400 text-sm mt-1">{errors.full_name}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="nisn" className="text-white">NISN *</Label>
                                                <Input
                                                    id="nisn"
                                                    value={data.nisn}
                                                    onChange={(e) => setData('nisn', e.target.value)}
                                                    className="bg-black border-gray-600 text-white"
                                                    placeholder="Nomor Induk Siswa Nasional (10 digit)"
                                                    maxLength={10}
                                                />
                                                {errors.nisn && <p className="text-red-400 text-sm mt-1">{errors.nisn}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="nik" className="text-white">NIK *</Label>
                                                <Input
                                                    id="nik"
                                                    value={data.nik}
                                                    onChange={(e) => setData('nik', e.target.value)}
                                                    className="bg-black border-gray-600 text-white"
                                                    placeholder="Nomor Induk Kependudukan (16 digit)"
                                                    maxLength={16}
                                                />
                                                {errors.nik && <p className="text-red-400 text-sm mt-1">{errors.nik}</p>}
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

                                            <div>
                                                <Label htmlFor="phone" className="text-white">No. Telepon *</Label>
                                                <Input
                                                    id="phone"
                                                    value={data.phone}
                                                    onChange={(e) => setData('phone', e.target.value)}
                                                    className="bg-black border-gray-600 text-white"
                                                    placeholder="08xxxxxxxxxx"
                                                />
                                                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="gender" className="text-white">Jenis Kelamin *</Label>
                                                <Select value={data.gender} onValueChange={(value) => setData('gender', value)}>
                                                    <SelectTrigger className="bg-black border-gray-600 text-white">
                                                        <SelectValue placeholder="Pilih jenis kelamin" />
                                                    </SelectTrigger>
                                                    <SelectContent className="bg-gray-800 border-gray-600">
                                                        <SelectItem value="male" className="text-white">Laki-laki</SelectItem>
                                                        <SelectItem value="female" className="text-white">Perempuan</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                {errors.gender && <p className="text-red-400 text-sm mt-1">{errors.gender}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="place_of_birth" className="text-white">Tempat Lahir *</Label>
                                                <Input
                                                    id="place_of_birth"
                                                    value={data.place_of_birth}
                                                    onChange={(e) => setData('place_of_birth', e.target.value)}
                                                    className="bg-black border-gray-600 text-white"
                                                    placeholder="Kota/Kabupaten tempat lahir"
                                                />
                                                {errors.place_of_birth && <p className="text-red-400 text-sm mt-1">{errors.place_of_birth}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="date_of_birth" className="text-white">Tanggal Lahir *</Label>
                                                <Input
                                                    id="date_of_birth"
                                                    type="date"
                                                    value={data.date_of_birth}
                                                    onChange={(e) => setData('date_of_birth', e.target.value)}
                                                    className="bg-black border-gray-600 text-white"
                                                />
                                                {errors.date_of_birth && <p className="text-red-400 text-sm mt-1">{errors.date_of_birth}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="religion" className="text-white">Agama *</Label>
                                                <Select value={data.religion} onValueChange={(value) => setData('religion', value)}>
                                                    <SelectTrigger className="bg-black border-gray-600 text-white">
                                                        <SelectValue placeholder="Pilih agama" />
                                                    </SelectTrigger>
                                                    <SelectContent className="bg-gray-800 border-gray-600">
                                                        {religions.map((religion) => (
                                                            <SelectItem key={religion} value={religion} className="text-white">
                                                                {religion}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                {errors.religion && <p className="text-red-400 text-sm mt-1">{errors.religion}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="previous_school" className="text-white">Sekolah Asal *</Label>
                                                <Input
                                                    id="previous_school"
                                                    value={data.previous_school}
                                                    onChange={(e) => setData('previous_school', e.target.value)}
                                                    className="bg-black border-gray-600 text-white"
                                                    placeholder="Nama sekolah SMP/MTs asal"
                                                />
                                                {errors.previous_school && <p className="text-red-400 text-sm mt-1">{errors.previous_school}</p>}
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <Label htmlFor="address" className="text-white">Alamat Lengkap *</Label>
                                            <Textarea
                                                id="address"
                                                value={data.address}
                                                onChange={(e) => setData('address', e.target.value)}
                                                className="bg-black border-gray-600 text-white"
                                                placeholder="Alamat lengkap tempat tinggal"
                                                rows={3}
                                            />
                                            {errors.address && <p className="text-red-400 text-sm mt-1">{errors.address}</p>}
                                        </div>
                                    </div>

                                    {/* Data Orang Tua */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-yellow-500 mb-4 border-b border-yellow-500/30 pb-2">
                                            👨‍👩‍👧‍👦 Data Orang Tua/Wali
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="father_name" className="text-white">Nama Ayah *</Label>
                                                <Input
                                                    id="father_name"
                                                    value={data.father_name}
                                                    onChange={(e) => setData('father_name', e.target.value)}
                                                    className="bg-black border-gray-600 text-white"
                                                    placeholder="Nama lengkap ayah"
                                                />
                                                {errors.father_name && <p className="text-red-400 text-sm mt-1">{errors.father_name}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="mother_name" className="text-white">Nama Ibu *</Label>
                                                <Input
                                                    id="mother_name"
                                                    value={data.mother_name}
                                                    onChange={(e) => setData('mother_name', e.target.value)}
                                                    className="bg-black border-gray-600 text-white"
                                                    placeholder="Nama lengkap ibu"
                                                />
                                                {errors.mother_name && <p className="text-red-400 text-sm mt-1">{errors.mother_name}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="parent_phone" className="text-white">No. Telepon Orang Tua *</Label>
                                                <Input
                                                    id="parent_phone"
                                                    value={data.parent_phone}
                                                    onChange={(e) => setData('parent_phone', e.target.value)}
                                                    className="bg-black border-gray-600 text-white"
                                                    placeholder="08xxxxxxxxxx"
                                                />
                                                {errors.parent_phone && <p className="text-red-400 text-sm mt-1">{errors.parent_phone}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="parent_occupation" className="text-white">Pekerjaan Orang Tua *</Label>
                                                <Input
                                                    id="parent_occupation"
                                                    value={data.parent_occupation}
                                                    onChange={(e) => setData('parent_occupation', e.target.value)}
                                                    className="bg-black border-gray-600 text-white"
                                                    placeholder="Pekerjaan utama orang tua"
                                                />
                                                {errors.parent_occupation && <p className="text-red-400 text-sm mt-1">{errors.parent_occupation}</p>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Pilihan Jurusan */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-yellow-500 mb-4 border-b border-yellow-500/30 pb-2">
                                            🎯 Pilihan Program Keahlian
                                        </h3>
                                        <div>
                                            <Label htmlFor="chosen_major" className="text-white">Program Keahlian Pilihan *</Label>
                                            <Select value={data.chosen_major} onValueChange={(value) => setData('chosen_major', value)}>
                                                <SelectTrigger className="bg-black border-gray-600 text-white">
                                                    <SelectValue placeholder="Pilih program keahlian" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-gray-800 border-gray-600">
                                                    {majors.map((major) => (
                                                        <SelectItem key={major.value} value={major.value} className="text-white">
                                                            {major.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {errors.chosen_major && <p className="text-red-400 text-sm mt-1">{errors.chosen_major}</p>}
                                        </div>
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
                                                    Mengirim Pendaftaran...
                                                </>
                                            ) : (
                                                <>
                                                    🚀 Kirim Pendaftaran
                                                </>
                                            )}
                                        </Button>
                                        <p className="text-sm text-gray-400 mt-3">
                                            * Wajib diisi. Pastikan semua data sudah benar sebelum mengirim.
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