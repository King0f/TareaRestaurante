<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Token extends Model
{
    use HasFactory;

    protected $table = 'personal_access_tokens';

    //Primary key

    protected $primaryKey = 'id';

    //campos

    protected $fillable = ['tokenable_type','tokenable_id','name','token','abilities','last_used_at','expires_at'];

}
