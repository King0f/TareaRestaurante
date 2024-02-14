<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reserva extends Model
{
    protected $table = 'reserva';
    protected $primaryKey = 'id';

    public $timestamps = false;

    protected $fillable = ['Fecha','Hora','Nº_Personas','Nº_Tarjeta','Fecha_Caducidad','CVV','Estado','id_cliente','id_menu','id_horario','id_mesa'];
    public function cliente()
    {
        return $this->belongsTo(User::class, 'id');
    }

    public function menu()
    {
        return $this->belongsTo(Menu::class, 'id_menu');
    }

    public function mesa()
    {
        return $this->belongsTo(Mesa::class, 'id_mesa');
    }

    public function horario()
    {
        return $this->belongsTo(Horario::class, 'id_horario');
    }
}
