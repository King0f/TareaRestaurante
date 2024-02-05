<?php

namespace App\Http\Controllers;

use App\Models\horario;
use Illuminate\Http\Request;
use App\Models\Reserva;
use App\Models\Tarjeta;

class ControladorGeneral extends Controller
{
    public function mostrarCalendario()
{
    $event = Horario::whereNotIn('id', function ($query) {
        $query->select('id_horario')->from('reserva');
    })->get();

    return view('calendario', compact('event'));
}
}
