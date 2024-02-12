<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;
    protected $table = 'menu';

    //Primary key

    protected $primaryKey = 'id';

    //campos

    protected $fillable = ['Nombre','Precio'];
}
