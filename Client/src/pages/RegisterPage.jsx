import React from 'react'
import { useForm } from 'react-hook-form';
import { registerRequest } from '../api/RegisterRequests';
import { RegisterForm } from '../components/RegisterForm';

export const RegisterPage = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = handleSubmit(registerRequest)
    return (
        <>
            <main className="container text-center d-flex justify-content-center aling-items-center">
                <RegisterForm onSubmit={onSubmit} register={register}/>
            </main>

        </>
    )
}
