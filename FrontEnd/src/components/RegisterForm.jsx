import React from 'react'
import { Link } from 'react-router-dom';
export const RegisterForm = ({ register, onSubmit,errors,getValues }) => {
    return (
        <form

            onSubmit={onSubmit}
            action=""
            id="form"
            className="row bg-body-tertiary g-3  border rounded  p-5 w-50 shadow my-2"
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
                    {...register("nombreApellido",{
                        required: true
                    })}
                />
                {errors.nombreApellido && <p className="text-danger">El nombre es obligatorio</p>}
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
                    {...register("dni",{
                        required: true,
                        minLength: 8,
                        maxLength: 8,
                    })}
                />
                {errors.dni && <p className="text-danger">El dni debe ser de 8 digitos</p>}
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
                    {...register("usuario",{
                        required: true
                    })}
                />
                {errors.usuario && <p className="text-danger">El usuario es obligatorio</p>}
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
                    {...register("email",{
                        required: true
                    })}
                />
                {errors.email && <p className="text-danger">El email es obligatorio</p>}
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
                    {...register("password",{
                        minLength: 8,
                        required: true
                    })}
                />
                {errors.password && <p className="text-danger">La contraseña debe ser de minimo 8 digitos</p>}
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
                
                    {...register("confirmPassword",
                        {
                            required: true,
                            validate: (value) => value === getValues("password"),
                        })}
                />
                {errors.confirmPassword && <p className="text-danger">Las contraseñas no coinciden</p>}
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center gap-2 ">
                <button
                    type="submit"
                    id="btnSubmit"
                    className="form-control  btn btn-primary  rounded-5"
                >
                    Registrar
                </button>
                <Link to="/ingresar" className='form-control  btn btn-primary  rounded-5'>
                    Ingresar
                </Link>
            </div>
        </form>
    )
}
