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
        Schema::create('reserva', function (Blueprint $table) {
            $table->id()->primaryKey();
            $table->date("Fecha");
            $table->string("Hora");
            $table->integer("Nº_Personas");
            $table->string("Nº_Tarjeta");
            $table->string("Fecha_Caducidad");
            $table->string("CVV");
            $table->string("Estado");
            $table->unsignedBigInteger('id_cliente');
            $table->unsignedBigInteger('id_menu');
            $table->unsignedBigInteger('id_horario');
            $table->unsignedBigInteger('id_mesa');
            $table->foreign('id_cliente')->references('id')->on('users');
            $table->foreign('id_menu')->references('id')->on('menu');
            $table->foreign('id_horario')->references('id')->on('horarios');
            $table->foreign('id_mesa')->references('id')->on('mesa');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reserva');
    }
};
