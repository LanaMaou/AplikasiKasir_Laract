<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = [
            'name' => 'Ahmad Maulana Alaudin',
            'email' => 'lana@gmail.com',
            'password' => bcrypt('lana1234'),
            'email_verified_at' => Carbon::now(),
            'remember_token' => Str::random(10),
        ];

        User::create($user);
    }
}
