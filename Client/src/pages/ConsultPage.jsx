import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { VehiclesConsult } from '../components/VehiclesConsult';
import { FormConsult } from '../components/FormConsult';
import { getvehicleRequest } from '../api/vehiclesRequests';
export const ConsultPage = () => {
    const { register, handleSubmit } = useForm();
    const [vehicle, setVehicle] = useState(null);
    useEffect(() => {
        getvehicleRequest().then(vehicle => setVehicle(vehicle));
    }, [])
    const onSubmit = handleSubmit(async (valor) => setVehicle(await getvehicleRequest(valor)))
    return (
        <>
            {vehicle ?
                <div className="container bg-body-tertiary">
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
