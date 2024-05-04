<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProdukController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $produks = Produk::latest()->paginate(10);
        return Inertia::render('Produk/index', [
            'produks' => $produks,
            'title' => 'Halaman Produk'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $produk = Produk::create($request->all());
        if ($produk) {
            return redirect()->route('produk.index')->with('message', 'Data Berhasil Ditambahkan');
        } else {
            return redirect()->route('produk.index')->with('message', 'Data Gagal Ditambahkan');
        }

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $produk = Produk::find($id)->update($request->all());
        if ($produk) {
            return redirect()->route('produk.index')->with('message', 'Data Berhasil Diubah');
        } else {
            return redirect()->route('produk.index')->with('message', 'Data Gagal Diubah');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $produk = Produk::find($id)->delete();
        if ($produk) {
            return redirect()->route('produk.index')->with('message', 'Data Berhasil Dihapus');
        } else {
            return redirect()->route('produk.index')->with('message', 'Data Gagal Dihapus');
        }
    }
}
