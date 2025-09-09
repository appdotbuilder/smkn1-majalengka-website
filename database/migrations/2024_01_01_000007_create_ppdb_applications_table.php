<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ppdb_applications', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('nisn')->unique();
            $table->string('nik')->unique();
            $table->string('email');
            $table->string('phone');
            $table->enum('gender', ['male', 'female']);
            $table->string('place_of_birth');
            $table->date('date_of_birth');
            $table->string('religion');
            $table->text('address');
            $table->string('previous_school');
            $table->string('father_name');
            $table->string('mother_name');
            $table->string('parent_phone');
            $table->string('parent_occupation');
            $table->string('chosen_major');
            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');
            $table->text('notes')->nullable();
            $table->timestamps();
            
            // Indexes for performance
            $table->index(['status']);
            $table->index(['chosen_major']);
            $table->index(['created_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ppdb_applications');
    }
};