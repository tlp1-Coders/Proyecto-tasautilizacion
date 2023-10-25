import React from 'react'
import { Link } from 'react-router-dom'


export const LoginForm = ( {register,onSubmit}) => {
    return (
        <form
            onSubmit={onSubmit}
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
                <Link to="/registro" className="form-control btn btn-primary rounded-5">
                    Registrarse
                </Link>
            </div>
            <div className="col-12">
                <Link to="/forgotPassword" className="icon-link icon-link-hover">
                    ¿Olvidaste tu contraseña?
                </Link>
            </div>
        </form>
    )
}
