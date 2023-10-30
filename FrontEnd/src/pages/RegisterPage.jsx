import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { RegisterForm } from '../components/RegisterForm';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
    const navigate = useNavigate();
    const {RegisterUser}=useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = handleSubmit(async(valor)=>{
        const res=await RegisterUser(valor);
        if(res){
            navigate('/misVehiculos');
        }
    })
    return (
        <>
            <main className="container text-center d-flex justify-content-center aling-items-center">
                <RegisterForm onSubmit={onSubmit} register={register}/>
            </main>

        </>
    )
}
