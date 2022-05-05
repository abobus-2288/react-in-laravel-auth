import React, {useState} from 'react';

import {Box, Button, Container, Typography} from '@mui/material';

import {SubmitHandler, useForm} from 'react-hook-form';
import Yup from 'yup';

import {useMutation} from '@apollo/client';

import registerMutationGql from "../../../GraphQL/Mutations/Auth/Register";

import LoginInput from "../../Forms/LoginInput";

interface registerInput {
    email: string
    name: string
    password: string
    confirmPassword?: string
}

interface IFormStatus {
    message: string
    type: string
}

interface IFormStatusProps {
    [key: string]: IFormStatus
}

const formStatusProps: IFormStatusProps = {
    success: {
        message: 'Signed up successfully.',
        type: 'success',
    },
    duplicate: {
        message: 'Email-id already exist. Please use different email-id.',
        type: 'error',
    },
    error: {
        message: 'Something went wrong. Please try again.',
        type: 'error',
    },
}

// const validationSchema = Yup.object().shape({
//         email: Yup.string()
//             .email()
//             .required('Enter valid email')
//     })

const Register: React.FC = () => {

    const {register, handleSubmit, watch, reset, control, getValues} = useForm<registerInput>();

    const [displayFormStatus, setDisplayFormStatus] = useState(false)
    const [formStatus, setFormStatus] = useState<IFormStatus>({
        message: '',
        type: '',
    })

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');

    const [registerMutation, {data, loading, error}] = useMutation<registerInput>(registerMutationGql, {
        variables: {password, email, name}
    });

    const onSubmit: SubmitHandler<registerInput> = (data) => {
        // createNewUser(data, reset);
    }

    const test = () => {
        console.log(watch('email'));
    }

    return (
        <Container>
            <Typography component={'span'}>
                <h1>Register form</h1>
                <form>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {m: 1, width: '25ch'},
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <LoginInput name="email" label="Email" control={control} rules={{required: true}}/>
                        </div>
                        <div>
                            <LoginInput name="name" label={"Name"} control={control} rules={{required: true}}/>
                        </div>

                        <div>
                            <LoginInput name="password" label="Password" control={control} rules={{required: true}}/>
                        </div>

                        <div>
                            <LoginInput name="confirm_password" label="Confirm password" control={control}
                                        rules={{required: true}}/>
                        </div>

                        <div>
                            <Button onSubmit={handleSubmit(onSubmit)}>Register</Button>
                            <Button onClick={() => {
                                test()
                            }}>
                                Test
                            </Button>
                            <Button onClick={() => {
                                reset
                            }}>
                                Reset
                            </Button>
                        </div>
                    </Box>
                </form>
            </Typography>
        </Container>
    )
}

export default Register;
