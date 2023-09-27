import React from 'react'
import { useForm } from 'react-hook-form';

export const LoginPage = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit =  async(valor) => {
            const response = await fetch('http://localhost:4000/auth/login',{
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
                window.localStorage.setItem('token', data.token);
                window.location.href = '/consultas';
            }
            
            // data.errors.map(e => console.log(e.msg));
            console.log(data);
            console.log(data.token);
    }
    return (
        <>
        <main className="container text-center d-flex flex-column justify-content-center align-items-center my-5">
            <form 
                onSubmit={handleSubmit(onSubmit)}
                id="form"
                className="row bg-body-tertiary g-3 border rounded p-5 w-50 needs-validation shadow"
            >
                <h1>Iniciar Sesión</h1>
                <div className="col-12">
                    <label htmlFor="usuario" className="form-label">
                        Usuario
                    </label>
                    <input
                        type="text"
                        className="form-control rounded-5"
                        name="usuario"
                        id="usuario"
                        required=""
                        {...register('usuario')}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="password" className="form-label">
                        Contraseña
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
                <div className="col-6">
                    <button
                        type="submit"
                        id="btnSubmit"
                        className="form-control  btn btn-primary rounded-5"
                    >
                        Ingresar
                    </button>
                </div>
                <div className='col-6 '>
                    <a href="/registro" className="form-control btn btn-primary rounded-5">
                        Registrarse
                    </a>
                </div>
                <div className="col-12">
                    <a href="/forgotPassword"  className="icon-link icon-link-hover">
                        ¿Olvidaste tu contraseña?
                        <svg class="bi" aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>
                    </a>
                </div>
            </form>
        </main>

    </>
    )
}
