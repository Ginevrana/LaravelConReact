<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    // Hacemos que estos campos puedan completarse
    protected $fillable = ['description', 'price', 'stock'];
}
