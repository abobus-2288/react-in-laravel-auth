import React from 'react';

import {TextField} from '@mui/material';

import {useForm, useController, UseControllerProps} from 'react-hook-form';

interface LoginInputProps extends UseControllerProps<any> {
    label: string
}

const LoginInput = (props: LoginInputProps) => {


    const {field, fieldState} = useController(props);

    return (
        <TextField
            {...field}
            value={field.name}
        />
    )
}

export default LoginInput;
