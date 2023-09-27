import React from 'react'
import { useForm } from 'react-hook-form';
export const RegisterPage = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit =  async(valor) => {
        const response = await fetch('http://localhost:4000/auth/new', {
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
        
        console.log(data.token);
        window.localStorage.setItem('token', data.token);
        window.location.href = '/consultas';
    }
    return (
        <>
            <main className="container text-center d-flex justify-content-center aling-items-center">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    action=""
                    id="form"
                    className="row bg-body-tertiary g-3  border rounded  p-5 w-50 shadow my-2 "
                >
                    <h1 className='mb-2 mt-0'>Registro</h1>
                    <div className=" col-6">
                        <label htmlFor="nombreApellido" className="form-label">
                            Nombre y Apellido
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombreApellido"
                            id="nombreApellido"
                            requiere=""
                            {...register("nombreApellido")}
                        />
                    </div>
                    <div className=" col-6">
                        <label htmlFor="dni" className="form-label">
                            Dni
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="dni"
                            id="dni"
                            requiere=""
                            {...register("dni")}
                        />
                    </div>
                    <div className=" col-6">
                        <label htmlFor="usuario" className="form-label">
                            Usuario
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="usuario"
                            id="usuario"
                            requiere=""
                            {...register("usuario")}
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            requiere=""
                            {...register("email")}
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            requiere=""
                            {...register("password")}
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="confirmPassword" className="form-label">
                            Confirmar Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            name="confirmPassword"
                            id="confirmPassword"
                            requiere=""
                            {...register("confirmPassword")}
                        />
                    </div>
                    {/* <div className="col-6">
                        <label htmlFor="pin" className="form-label">
                            Pin
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            name="pin"
                            id="pin"
                            requiere=""
                            {...register("pin")}
                        />
                    </div>
                    <div className="col-8">
                        <label htmlFor="foto" className="form-label">
                            Foto
                        </label>
                        <input type="file" className="form-control" name="foto" id="foto" />
                    </div> */}
                    <div className="col-12 d-flex justify-content-center align-items-center gap-2 ">
                        <button
                            type="submit"
                            id="btnSubmit"
                            className="form-control  btn btn-primary  rounded-5"
                        >
                            Registrar
                        </button>
                        <a href="/ingresar" className='form-control  btn btn-primary  rounded-5'>
                            Ingresar
                        </a>
                    </div>
                </form>
            </main>

        </>
    )
}
