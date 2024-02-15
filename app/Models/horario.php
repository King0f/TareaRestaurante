<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Horario extends Model
{
    use HasFactory;

    protected $table = 'horarios';

    //Primary key

    protected $primaryKey = 'id';

    //campos

    protected $fillable = ['Horas_Disponibles','Dias_Disponibles'];

}
