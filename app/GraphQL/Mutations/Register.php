<?php

namespace App\GraphQL\Mutations;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response;

class Register
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        $user = User::create([
            'name' => $args['name'],
            'password' => Hash::make($args['password']),
            'email' => $args['email']
        ]);

        $token = $user->createToken('test_token')->plainTextToken;

        return [
          'user' => $user,
          'token' => $token,
        ];
    }
}
