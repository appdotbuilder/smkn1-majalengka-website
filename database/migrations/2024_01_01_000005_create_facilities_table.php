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
        Schema::create('facilities', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description');
            $table->string('icon')->nullable();
            $table->json('images')->nullable();
            $table->string('location')->nullable();
            $table->enum('category', ['academic', 'sport', 'support', 'recreation'])->default('academic');
            $table->enum('status', ['active', 'maintenance', 'inactive'])->default('active');
            $table->timestamps();
            
            // Indexes for performance
            $table->index(['status']);
            $table->index(['category']);
            $table->index(['slug']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('facilities');
    }
};