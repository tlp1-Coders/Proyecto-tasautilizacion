import React from 'react'
import NavBar from '../components/Navbar.jsx'

export const PageConsultas = () => {
    return (
        <>
            <NavBar />;
            <main className='container'>
            <form
                action=""
                id="form"
                className="d-flex flex-column justify-content-center align-items-center mt-5 border rounded p-5 shadow "
            >
                <div className="mb-3">
                    <label htmlFor="patente" className="form-label">
                        Patente o DNI
                    </label>
                    <input type="text" className="form-control" name="patente" id="patente" />
                </div>
                <button type="submit" className="btn btn-primary">
                    Buscar
                </button>
            </form>
            <section className="container d-flex flex-column justify-content-center align-items-center ">
                <ol className="row mt-2 d-flex justify-content-center" id="vehiculoLista" />
            </section>

            </main>
        </>

    )
}
