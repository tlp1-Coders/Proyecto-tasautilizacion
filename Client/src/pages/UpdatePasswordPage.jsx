import React from 'react'
import { useForm } from 'react-hook-form';
import {useLocation} from 'react-router-dom';

export const UpdatePasswordPage = () => {
    const { register, handleSubmit } = useForm();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');
    console.log(token);
    const onsubmit = async (valor) => {
        const response = await fetch(`http://localhost:4000/auth/resetPassword/${token}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
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
                timer: 1500
            });
            window.location.href = '/ingresar';

    }
    };
  return (

    <main className="container text-center d-flex flex-column justify-content-center align-items-center mt-5">
                <form 
                onSubmit={handleSubmit(onsubmit)}
                className="row bg-body-tertiary g-3 border rounded mt-1 p-5 h-50 w-50 needs-validation shadow justify-content-center align-items-center">
                    <h1>Recuperar contraseña</h1>
                    <div className="col-12 w-50">
                        <label htmlFor="password" className="form-label">
                            Nueva Contraseña
                        </label>
                        <input
                            type="password"
                            className="form-control rounded-5"
                            name="password"
                            id="password"
                            required=""
                            {...register('password')}
                        />
                    </div>
                    {/* <div className="col-12 w-50">
                        <label htmlFor="RepetirNuevaContraseña" className="form-label">
                            Repetir Nueva Contraseña
                        </label>
                        <input
                            type="text"
                            className="form-control  rounded-5"
                            name="RepetirNuevaContraseña"
                            id="RepetirNuevaContraseña"
                            required=""
                            {...register('RepetirNuevaContraseña')}
                        />
                    </div> */}
                    <div className="col-12 w-75 ">
                        <button
                            type="submit"
                            id="btnSubmit"
                            className="form-control  btn btn-primary  rounded-5"
                        >
                            Recuperar contraseña
                        </button>
                    </div>
                </form>
            </main>

  )
}
