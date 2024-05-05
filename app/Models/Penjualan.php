<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Penjualan extends Model
{
    use HasFactory;

    protected $fillable = [
        'tgl_penjualan',
        'total_harga',
        'pelanggan_id',
    ];

    public function pelanggans()
    {
        return $this->belongsTo(Pelanggan::class, 'pelanggan_id', 'id');
    }

    // protected $dates = [
    //     'tgl_penjualan',
    // ];
}
