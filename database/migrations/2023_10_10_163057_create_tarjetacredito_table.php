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
        Schema::create('tarjetacredito', function (Blueprint $table) {
            $table->id()->primaryKey();
            $table->string("Nº_Tarjeta");
            $table->string("Fecha_Caducidad");
            $table->string("CVV");
            $table->unsignedBigInteger('id_cliente');
            $table->foreign('id_cliente')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tarjetacredito');
    }
};
