<?php

namespace App\Http\Controllers;

use App\Models\Pelanggan;
use App\Models\Penjualan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PenjualanController extends Controller
{
    public function index()
    {
        $Penjualan = Penjualan::with('pelanggans')->latest()->paginate(10);
        $Pelanggan = Pelanggan::all();
        return Inertia::render('Penjualan/index', [
            'penjualans' => $Penjualan,
            'pelanggans' => $Pelanggan,
            'title' => 'Halaman Penjualan'
        ]);
    }

    public function store(Request $request)
    {
        $request->merge(['tgl_penjualan' => date('Y-m-d'), 'total_harga' => 0]);
        Penjualan::create($request->all());
        return redirect()->route('penjualan.index')->with('message', 'Data Berhasil Ditambahkan');
    }
}
