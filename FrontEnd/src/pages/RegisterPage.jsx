import { useForm } from 'react-hook-form';
import { RegisterForm } from '../components/RegisterForm';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
    const navigate = useNavigate();
    const {RegisterUser}=useAuthContext();
    const { register, handleSubmit, formState: { errors },getValues } = useForm();
    const onSubmit = handleSubmit(async(valor)=>{
        const res=await RegisterUser(valor);
        if(res){
            navigate('/misVehiculos');
        }
    })
    return (
        <>
            <main className="container text-center d-flex flex-column justify-content-center align-items-center">
                <RegisterForm onSubmit={onSubmit} register={register} errors={errors} getValues={getValues}/>
            </main>

        </>
    )
}
