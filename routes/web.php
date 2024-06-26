<?php

use App\Http\Controllers\PelangganController;
use App\Http\Controllers\PenjualanController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Homepage', ['title' => 'Homepage']);
});
Route::get('/home', function () {
    return Inertia::render('Homepage', ['title' => 'Homepage']);
})->name('home');
Route::get('/keranjang/{id}', [PenjualanController::class, 'keranjang'])->name('keranjang');
Route::post('/keranjang', [PenjualanController::class, 'keranjang'])->name('keranjang.store');

Route::resource('/produk', ProdukController::class);
Route::resource('/pelanggan', PelangganController::class);
Route::resource('/penjualan', PenjualanController::class);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
