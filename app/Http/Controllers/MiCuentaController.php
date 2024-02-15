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
    public function borrarTarjeta(Request $request)
    {
        $id = $request->input('idTarjeta');
        $tar = Tarjeta::where('id',$id);
        $tar->delete();
         return response()->json(["message" => "Tarjeta Borrada con exito"]);

    }
    public function mostrarFormularioTarjeta()
{
    return view('formulario-tarjeta');
}

public function guardarTarjeta(Request $request)
{
    $user = $request->user();

    $request->validate([
        'N_Tarjeta' => 'required',
        'fecha_caducidad' => 'required',
        'cvv' => 'required',
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
