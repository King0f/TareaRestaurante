<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;

    //Tabla
    protected $tabla = 'cliente';

    //Primary key

    protected $primaryKey = 'id';

    //campos

    protected $fillable = ['Nombre','Apellidos','Email','Telefono','Alergias','Es_Admin'];

    public function tarjetas()
    {
        return $this->hasMany(Tarjeta::class,'id_cliente');
    }
}
