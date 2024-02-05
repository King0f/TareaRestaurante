<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mesa extends Model
{
    use HasFactory;

    //Tabla
    protected $table = 'mesa';

    //Primary key

    protected $primaryKey = 'id';

    //campos

    protected $fillable = ['Numero','Capacidad'];


}
