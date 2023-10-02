import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { VehiclesConsult } from '../components/VehiclesConsult';
import { FormConsult } from '../components/FormConsult';
import { getvehicleRequest } from '../api/vehiclesRequests';
export const ConsultPage = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [vehicle, setVehicle] = useState(null);
    useEffect(() => {
        getvehicleRequest().then(vehicle => {
            vehicle ? setVehicle(vehicle):navigate('/ingresar')
        })
    }, [])
    const onSubmit = handleSubmit(async (valor) => setVehicle(await getvehicleRequest(valor)))

    return (
        <>
            {vehicle ?
                <div className="container text-center my-1 d-flex justify-content-center align-items-center ">
                    <div className="row justify-content-center aling-items-center " >
                        <main className=' col-8'>
                            {vehicle ? <VehiclesConsult vehicle={vehicle} /> : ''}
                        </main>
                        <aside className=' col-4'>
                        <FormConsult onSubmit={onSubmit} register={register} />
                        </aside>
                    </div>
                </div>
                :
                <main className='container d-flex flex-column justify-content-center align-items-center text-center '>
                    <FormConsult onSubmit={onSubmit} register={register} />
                </main>
            }
        </>

    )
}
