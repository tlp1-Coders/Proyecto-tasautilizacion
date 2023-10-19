import React from 'react'
import { useForm } from 'react-hook-form';
import { loginRequest } from '../api/LoginRequests';
import { LoginForm } from '../components/LoginForm';

export const LoginPage = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = handleSubmit(loginRequest)
    return (
        <>
        <main className="container text-center d-flex flex-column justify-content-center align-items-center my-5">
                <LoginForm onSubmit={onSubmit} register={register}/>
        </main>

    </>
    )
}
