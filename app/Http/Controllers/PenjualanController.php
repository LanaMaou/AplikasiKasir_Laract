<?php

namespace App\Http\Controllers;

use App\Models\DetailPenjualan;
use App\Models\Pelanggan;
use App\Models\Penjualan;
use App\Models\Produk;
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

    public function keranjang(string $id)
    {
        $DetailPenjualan = DetailPenjualan::with('produk', 'penjualan')->where('penjualan_id', $id)->latest()->paginate(10);
        $Penjualan = Penjualan::with('pelanggans')->find($id);
        $Produk = Produk::all();
        return Inertia::render(
            'Penjualan/Keranjang',
            [
                'title' => 'Halaman Keranjang',
                'detailpenjualans' => $DetailPenjualan,
                'penjualan' => $Penjualan,
                'produks' => $Produk
            ]
        );
    }
}
