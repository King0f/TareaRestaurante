<?php

namespace App\Http\Controllers;
use App\Models\Reserva;
use Illuminate\Http\Request;

class ReservaController extends Controller
{
    public function mostrarMisReservas()
    {
        $user_id = auth()->user()->id;
        $reservas = Reserva::where('id_cliente', $user_id)->get();
        return view('misReservas', compact('reservas'));
    }
}
