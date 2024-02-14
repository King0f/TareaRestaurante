<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Tarjeta;
use Illuminate\Validation\Rule;

class MiCuentaController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $tarjetas = $user->tarjetas;
        return response()->json($tarjetas);

    }
    public function mostrarFormularioTarjeta()
{
    return view('formulario-tarjeta');
}

public function guardarTarjeta(Request $request)
{
    $user = $request->user();

    $request->validate([
        'Nº_Tarjeta' => 'required',
        'Fecha_Caducidad' => 'required',
        'CVV' => 'required',
    ]);

    $tarjeta = new Tarjeta([
        'Nº_Tarjeta' => $request->N_Tarjeta,
        'Fecha_Caducidad' => $request->fecha_caducidad,
        'CVV' => $request->cvv,
        'id_cliente' => $user->id,
    ]);

    $tarjeta->save();

    return response()->json("success");
}
}
