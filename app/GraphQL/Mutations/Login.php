<?php

namespace App\GraphQL\Mutations;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class Login
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        $user = User::query()->where('email', $args['email'])->first();

        if (!$user || !Hash::check($args['password'], $user->password))
        {
            $message = 'Bad credentails';
            return [
                'message' => $message,
            ];
        }

        elseif (Hash::check($args['password'], $user->password))
        {
            $message = 'Ok';
            $token = $user->createToken('test_token')->plainTextToken;
            return [
              'user' => $user,
              'message' => $message,
              'token' => $token,
            ];
        }
    }
}
