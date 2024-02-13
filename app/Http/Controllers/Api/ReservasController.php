<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\Reserva;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Token;
use Illuminate\Support\Facades\Auth;

class ReservasController extends Controller
{
    
    /**
     * La función "mostrarReservas" recupera todas las reservas asociadas a un usuario específico y las
     * devuelve como respuesta JSON.
     * 
     * @param request El parámetro  es una instancia de la clase Request, que representa una
     * solicitud HTTP realizada al servidor. Contiene información sobre la solicitud, como el método de
     * solicitud, los encabezados y los datos de la solicitud.
     * 
     * return una respuesta JSON que contiene todas las reservas asociadas con el usuario cuyo ID se
     * proporciona en la solicitud.
     */
    public function mostrarReservas(Request $request)
    {
        $id = $request->user()->id;
        $reservas = Reserva::all()->where('id_cliente', $id);
        return response()->json($reservas);
    }
   
   /**
    * La función crea una nueva reserva en la base de datos con la información proporcionada.
    * 
    * @param request El parámetro  es una instancia de la clase Request, que representa una
    * solicitud HTTP. Contiene todos los datos e información sobre la solicitud, como el método de
    * solicitud, encabezados, parámetros de consulta, datos del formulario y más.
    * 
    * return una respuesta JSON que contiene la reserva creada.
    */
    public function crearReserva(Request $request)
    {
        $reservas = Reserva::create([
            "Fecha" => $request->input("Fecha"),
            "Hora" => $request->input("Hora"),
            "Nº_Personas" => $request->input("Nº_Personas"),
            "Nº_Tarjeta" => $request->input("Nº_Tarjeta"),
            "Fecha_Caducidad" => $request->input("Fecha_Caducidad"),
            "CVV" => $request->input("CVV"),
            "Estado" => $request->input("Estado"),
            "id_cliente" =>  $request->user()->id,
            "id_menu" => $request->input("id_menu"),
            "id_mesa" => $request->input("id_mesa"),
            "id_horario" => $request->input("id_horario")

        ]);
        $reservas->save();
        return response()->json($reservas);
    }
    /**
     * La función "actualizarReserva" actualiza la fecha de una reserva y devuelve una respuesta JSON
     * con un mensaje de éxito.
     * 
     * param id El parámetro id es el identificador único de la reserva que debe actualizarse. Se
     * utiliza para encontrar la reserva específica en la base de datos.
     * param Request request El parámetro  es una instancia de la clase Request, que se
     * utiliza para recuperar datos de la solicitud HTTP. En este caso, se utiliza para recuperar el
     * valor "Fecha" de la entrada de la solicitud.
     * 
     * return una respuesta JSON con un mensaje indicando que la reserva se ha actualizado
     * correctamente.
     */
    public function actualizarReserva($id,Request $request)
    {
        $reserva = Reserva::findOrFail($id);
        $reserva->Fecha = $request->input("Fecha");
        $reserva->save();
        return response()->json(["message" => "Reserva Actualizada con exito"]);
    }

    
   /**
    * La función "borrarReserva" elimina una reserva en función del ID proporcionado y del ID del
    * usuario autenticado.
    * 
    * param id El parámetro id representa la identificación de la reserva que debe eliminarse.
    * @param request El parámetro  es una instancia de la clase Request, que se utiliza para
    * manejar solicitudes HTTP en Laravel. Contiene información sobre la solicitud actual, como el
    * método de solicitud, encabezados y datos de entrada. En este caso, se utiliza para recuperar la
    * identificación del usuario autenticado.
    * 
    * return una respuesta JSON con un mensaje indicando que la reserva se ha eliminado correctamente.
    */
    public function borrarReserva($id, Request $request)
    {
         $idUsuario = $request->user()->id;
         $reserva = Reserva::where('id',$id)->where('id_cliente',$idUsuario);
         $reserva->delete();
         return response()->json(["message" => "Reserva Borrada con exito"]);
    }

    public function authLogin(){
        $user = User::find(2);
        return $user->createToken("lsmfnlsmflmsf")->plainTextToken; 

    }

    public function obtenerDatosUsuario($id)
    {
         $token = Token::where('token',$id);
         $idUsuario = $token->tokenable_id;
         $usuario = User::where('id',$idUsuario);
         return response()->json($usuario);
    }

}
