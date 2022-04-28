import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';

import {useMutation} from '@apollo/client';
import loginQuery from "../../../GraphQL/Mutations/Auth/Login";


type loginInput = {
    email: string
    password: string
    confirmPassword: string

    remember?: boolean
}

const Login = () => {
    const {register, handleSubmit, watch} = useForm<loginInput>();

    const [loginFunc, {data, loading, error}] = useMutation(loginQuery);

    const onSubmit: SubmitHandler<loginInput> = (data) => {

        if (data.password == data.confirmPassword) {
            loginFunc({variables: {email: data.email, password: data.password}});
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('email', {
                    required: true
                })} type='email' placeholder='Email'/>

                <input {...register('password', {
                    required: true
                })} type='password' placeholder='Password'/>

                <input {...register('confirmPassword', {
                    required: true,
                    validate: (val: string) => {
                        if (watch('password') != val)
                        {
                            return 'Пароли не совпадают'
                        }
                    }
                })} type='password' placeholder='Confirm your password'/>
            </form>
        </div>
    )
}

export default Login;
