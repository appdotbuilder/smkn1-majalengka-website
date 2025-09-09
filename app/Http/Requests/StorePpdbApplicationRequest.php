<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePpdbApplicationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'full_name' => 'required|string|max:255',
            'nisn' => 'required|string|size:10|unique:ppdb_applications,nisn',
            'nik' => 'required|string|size:16|unique:ppdb_applications,nik',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'gender' => 'required|in:male,female',
            'place_of_birth' => 'required|string|max:255',
            'date_of_birth' => 'required|date|before:today',
            'religion' => 'required|string|max:255',
            'address' => 'required|string',
            'previous_school' => 'required|string|max:255',
            'father_name' => 'required|string|max:255',
            'mother_name' => 'required|string|max:255',
            'parent_phone' => 'required|string|max:20',
            'parent_occupation' => 'required|string|max:255',
            'chosen_major' => 'required|string|in:TKJ,RPL,MM,TKR,TSM,TAV',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'full_name.required' => 'Nama lengkap wajib diisi.',
            'nisn.required' => 'NISN wajib diisi.',
            'nisn.size' => 'NISN harus terdiri dari 10 digit.',
            'nisn.unique' => 'NISN ini sudah terdaftar.',
            'nik.required' => 'NIK wajib diisi.',
            'nik.size' => 'NIK harus terdiri dari 16 digit.',
            'nik.unique' => 'NIK ini sudah terdaftar.',
            'email.required' => 'Email wajib diisi.',
            'email.email' => 'Format email tidak valid.',
            'phone.required' => 'Nomor telepon wajib diisi.',
            'gender.required' => 'Jenis kelamin wajib dipilih.',
            'date_of_birth.required' => 'Tanggal lahir wajib diisi.',
            'date_of_birth.before' => 'Tanggal lahir harus sebelum hari ini.',
            'chosen_major.required' => 'Jurusan pilihan wajib dipilih.',
            'chosen_major.in' => 'Jurusan yang dipilih tidak valid.',
        ];
    }
}