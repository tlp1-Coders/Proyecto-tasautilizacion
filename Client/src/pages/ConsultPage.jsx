import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { VehiclesConsult } from '../components/VehiclesConsult';
export const ConsultPage = () => {
    const { register, handleSubmit } = useForm();
    const [vehicle, setVehicle] = useState(null);
    const onSubmit = async (valor) => {
        const authorization = window.localStorage.getItem('token');
        const response = await fetch('http://localhost:4000/vehicles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: authorization ?? ''
            },
            body: JSON.stringify(valor)
        })
        const data = await response.json();
        if (response.status !== 200) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: data.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
        else {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: data.message,
                showConfirmButton: false,
                timer: 500
            });
        }
        setVehicle(data.vehicle);
    }

    return (
        <>
            {vehicle ?
                <div className="container bg-body-secondary">
                    <div className="row justify-content-center aling-items-center " >
                        <main className=' col-8'>
                            {vehicle ? <VehiclesConsult vehicle={vehicle} /> : ''}

                        </main>
                        <aside className=' col-4'>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                action=""
                                id="form"
                                className="d-flex flex-column justify-content-center align-items-center mt-5 border rounded p-5 shadow "
                            >
                                <div className="mb-3">
                                    <label htmlFor="valor" className="form-label">
                                        Patente o DNI
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="valor"
                                        id="valor"
                                        {...register("valor")}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Buscar
                                </button>
                            </form>



                        </aside>


                    </div>
                </div>

                :
                <main className='container d-flex flex-column justify-content-center align-items-center text-center '>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        action=""
                        id="form"
                        className="d-flex flex-column justify-content-center align-items-center border rounded p-5 shadow bg-body-tertiary"
                    >
                        <div className="mb-3">
                            <label htmlFor="valor" className="form-label">
                                Patente o DNI
                            </label>
                            <input
                                type="text"
                                className="form-control rounded-4"
                                name="valor"
                                id="valor"
                                {...register("valor")}
                            />
                        </div>
                        <div className=''>
                            <button type="submit" className="btn btn-primary rounded-5 px-5">
                                Consultar
                            </button>

                        </div>
                    </form>



                </main>

            }
        </>

    )
}
