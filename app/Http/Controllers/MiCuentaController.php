<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Tarjeta;
use Illuminate\Validation\Rule;

class MiCuentaController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $tarjetas = $user->tarjetas;
        return view('mi-cuenta', compact('user', 'tarjetas'));

    }
    public function mostrarFormularioTarjeta()
{
    return view('formulario-tarjeta');
}

public function guardarTarjeta(Request $request)
{
    $user = Auth::user();

    $request->validate([
        'Nº_Tarjeta' => 'required',
        'Fecha_Caducidad' => 'required',
        'CVV' => 'required',
    ]);

    // Crea una nueva tarjeta de crédito
    $tarjeta = new Tarjeta([
        'Nº_Tarjeta' => $request->Nº_Tarjeta,
        'Fecha_Caducidad' => $request->Fecha_Caducidad,
        'CVV' => $request->CVV,
        'id_cliente' => $user->id,
    ]);

    $tarjeta->save();

    return redirect()->route('mi-cuenta')->with('success', 'Tarjeta de crédito guardada con éxito.');
}
}
