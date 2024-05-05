<?php

namespace App\Http\Controllers;

use App\Models\Pelanggan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PelangganController extends Controller
{
    public function index()
    {
        $pelanggan = Pelanggan::latest()->paginate(10);
        return Inertia::render('Pelanggan/index', [
            'pelanggans' => $pelanggan,
            'title' => 'Halaman Pelanggan'
        ]);
    }

    public function store(Request $request)
    {
        Pelanggan::create($request->all());
        return redirect()->route('pelanggan.index')->with('message', 'Data Berhasil Ditambahkan');
    }

    public function update(Request $request, string $id)
    {
        $pelanggan = Pelanggan::find($id)->update($request->all());
        if ($pelanggan) {
            return redirect()->route('pelanggan.index')->with('message', 'Data Berhasil Diubah');
        } else {
            return redirect()->route('pelanggan.index')->with('message', 'Data Gagal Diubah');
        }
    }

    public function destroy(string $id)
    {
        $pelanggan = Pelanggan::find($id)->delete();
        if ($pelanggan) {
            return redirect()->route('pelanggan.index')->with('message', 'Data Berhasil Dihapus');
        } else {
            return redirect()->route('pelanggan.index')->with('message', 'Data Gagal Dihapus');
        }
    }
}
