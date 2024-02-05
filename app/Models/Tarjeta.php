<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tarjeta extends Model
{
    use HasFactory;
    protected $table = 'tarjetacredito';

    //Primary key

    protected $primaryKey = 'id';

    public $timestamps = false;

    //campos

    protected $fillable = ['Nº_Tarjeta','Fecha_Caducidad','CVV','id_cliente'];

    public function cliente()
    {
        return $this->belongsTo(Cliente::class,'id');
    }
}
