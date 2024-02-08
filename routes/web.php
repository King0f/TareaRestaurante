<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReservaController;
use App\Http\Controllers\ControladorGeneral;
use App\Http\Controllers\MiCuentaController;
use App\Http\Controllers\ReservasController;
use App\Http\Controllers\FormularioController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Auth::routes();
Route::post('/funcionTarjetas', [ControladorGeneral::class, 'funcionTarjetas'])->name("funcionTarjetas");

/* El fragmento de código define rutas para una aplicación web que utiliza el marco Laravel. */
Route::get('/', function () {

    return view('welcome');
});

Route::get('principal', function () {

    return view('vistaprincipal');
});

Route::get('confirmacion', function () {

    return view('reserva');
});

Route::get('calendario', function () {

    return view('calendario');
});

Route::get('formulario/{fecha}/{hora}', [FormularioController::class, 'mostrarFormulario'])->name("mostrar-formulario");
Route::get('formulario2/{fecha}/{hora}', [FormularioController::class, 'mostrarFormulario2'])->name("mostrar-formulario2");
Route::post('procesar-formulario', [FormularioController::class, 'procesarFormulario'])->name("procesar-formulario");
Route::get('/mostrar-calendario', [ControladorGeneral::class, 'mostrarCalendario'])->name('mostrar-calendario');
Route::get('/mi-cuenta', [MiCuentaController::class, 'index'])->name('mi-cuenta');
Route::get('/añadir-tarjeta', [MiCuentaController::class, 'mostrarFormularioTarjeta'])->name('añadir-tarjeta');
Route::post('/guardar-tarjeta', [MiCuentaController::class, 'guardarTarjeta'])->name('guardar-tarjeta');
Route::get('/mis-reservas', [ReservaController::class, 'mostrarMisReservas'])->name('mis-reservas');



