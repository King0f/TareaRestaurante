<?php

namespace App\Http\Controllers;

use App\Models\Reserva;
use App\Models\mesa;
use App\Models\Menu;
use App\Models\Tarjeta;
use App\Models\horario;
use App\Mail\ReservaMail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class FormularioController extends Controller
{
   /**
    * La función "mostrarFormulario" devuelve una vista llamada "formulario" con las variables "hora",
    * "hora_fin" y "fecha".
    * 
    * param fecha El parámetro "fecha" representa un valor de fecha. Se utiliza para pasar la fecha a
    * la vista.
    * param hora El parámetro "hora" es una variable que representa la hora de inicio de un evento o
    * cita. Podría ser una cadena o un objeto de fecha y hora, dependiendo de cómo se use en el código.
    * param hora_fin El parámetro "hora_fin" representa la hora de finalización de un evento o
    * actividad.
    * 
    * return una vista llamada 'formulario' y pasando las variables ,  y  a la
    * vista.
    */
    public function mostrarFormulario($fecha, $hora){
        $mesas = mesa::all(); // Asegúrate de que 'mesa' sea el nombre correcto del modelo
        $usuario = Auth::user();
        
        $reservaActiva = Reserva::where('id_cliente', $usuario->id)->first();

        if ($reservaActiva) {
        return redirect()->route('mostrar-calendario')->with('error', 'Ya tienes una reserva activa.');
        }
        
        $nmesas = 0;
        $nmesas2 = 0;
       /*  $nombre = '';
        $email = '';
        $apellidos = '';
        $telefono = '';
        $alergias = '';
        $tarjetas = []; */
        $nombre = $usuario->name;
        $email = $usuario->email;
        $apellidos = $usuario->apellido;
        $telefono = $usuario->telefono;
        $alergias = $usuario->alergias;
        $tarjetas = $usuario->tarjetas;
        foreach ($mesas as $mesa) {
                if ( $mesa->Capacidad == 4) {
                    $nmesas++;
                }
                if ($mesa->Capacidad == 8) {
                    $nmesas2++;
                }
        }
    
        return view('formulario', compact('hora', 'fecha', 'nmesas', 'nmesas2','nombre','email','tarjetas','apellidos','telefono','alergias'));
    }

    public function mostrarFormulario2($fecha, $hora){
        $mesas = mesa::all(); // Asegúrate de que 'mesa' sea el nombre correcto del modelo
        $usuario = Auth::user();
        $nmesas = 0;
        $nmesas2 = 0;
        foreach ($mesas as $mesa) {
                if ( $mesa->Capacidad == 4) {
                    $nmesas++;
                }
                if ($mesa->Capacidad == 8) {
                    $nmesas2++;
                }
        }
    
        return view('formulario', compact('hora', 'fecha', 'nmesas', 'nmesas2'));
    }
    /**
     * La función procesa el envío de un formulario, envía un correo electrónico con los datos del
     * formulario y redirige al usuario a la página principal con un mensaje de éxito.
     * 
     * Request request El parámetro  es una instancia de la clase Request, que
     * representa una solicitud HTTP realizada a su aplicación. Contiene todos los datos enviados con
     * la solicitud, como entradas de formulario, parámetros de consulta y encabezados.
     * 
     * return una vista llamada 'vistaprincipal' con un mensaje indicando que se ha enviado un email
     * con los datos de la reserva.
     */
    public function procesarReservaLogged(Request $request)
{
    $user = $request->user();
    $reserva = new Reserva();
    $validated = $request->validate([
        'fecha' => 'required|date',
        'hora' => 'required',
        'n_personas' => 'required|integer|min:1',
        'tarjeta' => 'required',
        'menu' => 'required', 
    ]);
    $reserva->Fecha = $validated['fecha'];
    $reserva->Hora = $validated['hora'];
    $reserva->Nº_Personas = $validated['n_personas'];

   

    // Asegúrate de reemplazar 'id' con el nombre real del campo en tu modelo de tarjeta
    $tarjeta = Tarjeta::find($validated['tarjeta']);

    // Verifica si la tarjeta existe
    if ($tarjeta) {
        $reserva->Nº_Tarjeta = $tarjeta->Nº_Tarjeta;
        $reserva->Fecha_Caducidad = $tarjeta->Fecha_Caducidad; 
        $reserva->CVV = $tarjeta->CVV;

    }
    $reserva->Estado = 'Ocupado'; 

    // Aquí obtienes los IDs de los modelos relacionados
    $cliente_id = $user->id; 
    $menu_id = Menu::where('Nombre', $request->input('menu'))->value('id');;
    $mesa_id = $request->input('n_personas') > 4 ? Mesa::where('Capacidad', 8)->value('id') : Mesa::where('Capacidad', 4)->value('id');
    $horario_id = Horario::where('Dias_Disponibles', $request->input('fecha'))->where('Horas_Disponibles', $request->input('hora'))->value('id');;

    // Asigna los IDs a la reserva
    $reserva->id_cliente = $cliente_id;
    $reserva->id_menu = $menu_id;
    $reserva->id_mesa = $mesa_id;
    $reserva->id_horario = $horario_id;


    // Guarda la reserva en la base de datos
    $reserva->save();

    return response()->json($reserva);
}
public function procesarReservaUnlogged(Request $request)
{
    $reserva = new Reserva();
    $reserva->Fecha = $request->input('fecha'); 
    $reserva->Hora = $request->input('hora'); 
    $reserva->Nº_Personas = $request->input('n_personas');
    $reserva->Nº_Tarjeta = $request->input('n_tarjeta');
    $reserva->Fecha_Caducidad = $request->input('fecha_caducidad'); 
    $reserva->CVV = $request->input('cvv');
    $reserva->Estado = 'Ocupado'; 

/*     $cliente_id = 0;  */
    $menu_id = Menu::where('Nombre', $request->input('menu'))->value('id');;
    $mesa_id = $request->input('n_personas') > 4 ? Mesa::where('Capacidad', 8)->value('id') : Mesa::where('Capacidad', 4)->value('id');
    $horario_id = Horario::where('Dias_Disponibles', $request->input('fecha'))->where('Horas_Disponibles', $request->input('hora'))->value('id');;

    // Asigna los IDs a la reserva
    /* $reserva->id_cliente = $cliente_id; */
    $reserva->id_menu = $menu_id;
    $reserva->id_mesa = $mesa_id;
    $reserva->id_horario = $horario_id;

    $informacionAdicional = [
        'nombre' => $request->input('nombre'),
        'apellidos' => $request->input('apellidos'),
        'email' => $request->input('email'),
        'telefono' => $request->input('telefono'),
        'alergias' => $request->input('alergias')
    ];

    $reserva->save();
    Mail::to($request->input('email'))->send(new ReservaMail($reserva, $informacionAdicional));
    
    return response()->json($reserva);
}
}
