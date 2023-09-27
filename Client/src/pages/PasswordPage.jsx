import React from 'react'
import { useForm } from 'react-hook-form';


export const PasswordPage = () => {
    const {register, handleSubmit} = useForm();
    const onsubmit =  async(valor) => {
        const response = await fetch(`http://localhost:4000/auth/forgotPassword`,{
            method: 'POST',
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
        }
    
    }
    return (
            <main className="container text-center d-flex flex-column justify-content-center align-items-center mt-5">
                <form 
                onSubmit={handleSubmit(onsubmit)}
                className="row bg-body-tertiary g-3 border rounded mt-1 p-5 h-50 w-50 needs-validation shadow justify-content-center align-items-center">
                    <h1>Recuperar contraseña</h1>
                    <div className="col-12 w-50">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control rounded-5"
                            name="email"
                            id="email"
                            required=""
                            {...register('email')}
                        />
                    </div>
                    <div className="col-12 w-50">
                        <label htmlFor="dni" className="form-label">
                            DNI
                        </label>
                        <input
                            type="text"
                            className="form-control  rounded-5"
                            name="dni"
                            id="dni"
                            required=""
                            {...register('dni')}
                        />
                    </div>
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
