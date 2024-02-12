<?php

namespace App\Http\Controllers;

use App\Models\horario;
use Illuminate\Http\Request;
use App\Models\Reserva;
use App\Models\Tarjeta;

class ControladorGeneral extends Controller
{
    /**
 * Muestra el calendario con eventos disponibles.
 *
 * Este método recupera todos los horarios que no están asociados a una reserva en la base de datos
 * y los pasa a la vista del calendario para ser mostrados. Esto permite visualizar aquellos horarios
 * disponibles para nuevas reservas.
 *
 * @return \Illuminate\Contracts\View\View Retorna la vista del calendario junto con los eventos (horarios disponibles) para mostrar.
 */
public function mostrarCalendario()
{
    // Obtiene todos los horarios que no tienen una reserva asociada
    $event = Horario::whereNotIn('id', function ($query) {
        // Subconsulta para excluir los ids de horarios ya reservados
        $query->select('id_horario')->from('reserva');
    })->get();

    // Retorna la vista del calendario, pasando los eventos disponibles
    return view('calendario', compact('event'));
}
}
