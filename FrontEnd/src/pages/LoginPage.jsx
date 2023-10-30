import React, { useContext} from 'react'
import { useForm } from 'react-hook-form';

import { LoginForm } from '../components/LoginForm';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


export const LoginPage = () => {
    const navigate = useNavigate();
   const { loginUser } = useContext(AuthContext);
    const {register, handleSubmit} = useForm();
    const onSubmit = handleSubmit(async (valor) => {
        if(await loginUser(valor)){
            navigate('/misVehiculos');
        }
    });

    return (
        <>
        <main className="container text-center d-flex flex-column justify-content-center align-items-center my-5">
                <LoginForm onSubmit={onSubmit} register={register}/>
        </main>

    </>
    )
}
