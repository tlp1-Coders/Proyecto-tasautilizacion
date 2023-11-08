import React from 'react'
import { useForm } from 'react-hook-form';
import { LoginForm } from '../components/LoginForm';
import { useAuthContext} from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


export const LoginPage = () => {
    const navigate = useNavigate();
   const { loginUser } = useAuthContext();
    const {register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = handleSubmit(async (valor) => {
        const res = await loginUser(valor);
        if  (res) {
            navigate('/misVehiculos');
        }
    });

    return (
        <>
        <main className="container text-center d-flex flex-column justify-content-center align-items-center">
                <LoginForm onSubmit={onSubmit} register={register} errors={errors}/>
        </main>

    </>
    )
}
