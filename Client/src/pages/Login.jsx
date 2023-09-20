import React from 'react'
import NavBar from '../components/Navbar.jsx'

export const PageLogin = () => {
    return (
        <>
            <NavBar />
            <main className="container text-center d-flex flex-column justify-content-center align-items-center mt-5">
                <form 
                    id="form"
                    className="row bg-body-tertiary g-3 border rounded mt-1 p-5 h-50 w-50 needs-validation shadow"
                >
                    <h1>Iniciar Sesión</h1>
                    <div className="col-12">
                        <label htmlFor="usuario" className="form-label">
                            Usuario
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="usuario"
                            id="usuario"
                            required=""
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            required=""
                        />
                    </div>
                    <div className="col-6">
                        <button
                            type="submit"
                            id="btnSubmit"
                            className="form-control  btn btn-primary"
                        >
                            Ingresar
                        </button>
                    </div>
                    <div className='col-6 '>
                        <a href="/registro" className="form-control btn btn-primary">
                            Registrarse
                        </a>
                    </div>
                </form>
            </main>

        </>
    )
}
