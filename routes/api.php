<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ReservasController;
use App\Http\Controllers\ControladorGeneral;
use App\Http\Controllers\FormularioController;
use App\Http\Controllers\MiCuentaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/reservas', [ReservasController::class, 'mostrarReservas'])->middleware('auth:sanctum');
Route::post('/reservas', [ReservasController::class, 'crearReserva'])->middleware('auth:sanctum'); 
Route::put('/reservas/{id}', [ReservasController::class, 'actualizarReserva']);
Route::delete('/reservas/{id}', [ReservasController::class, 'borrarReserva'])->middleware('auth:sanctum');
Route::post('/register', [AuthController::class, 'createUser']);
Route::post('/login', [AuthController::class, 'loginUser']);

Route::get('/eventosCalendario', [ControladorGeneral::class, 'mostrarCalendario']);
Route::get('/obtenerDatosUsuario', [ReservasController::class, 'obtenerDatosUsuario'])->middleware('auth:sanctum');
Route::get('/obtenerTarjetas', [MiCuentaController::class, 'index'])->middleware('auth:sanctum');
Route::post('/procesarReservaLogged', [FormularioController::class, 'procesarReservaLogged'])->middleware('auth:sanctum');
Route::get('/obtenerReservasUsuario', [ReservasController::class, 'mostrarReservas'])->middleware('auth:sanctum');
Route::post('/borrarReserva', [ReservasController::class, 'borrarReserva'])->middleware('auth:sanctum');
Route::post('/addTarjeta', [MiCuentaController::class, 'guardarTarjeta'])->middleware('auth:sanctum');