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
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->string('school_name');
            $table->text('history');
            $table->text('vision');
            $table->text('mission');
            $table->string('address');
            $table->string('phone');
            $table->string('email');
            $table->string('website')->nullable();
            $table->text('map_embed')->nullable();
            $table->timestamps();
            
            // Indexes for performance
            $table->index(['created_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};