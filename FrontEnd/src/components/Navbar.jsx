import React from 'react';
import '../css/navbar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function NavBar() {
  const navigate = useNavigate();
  const token= window.localStorage.getItem('token');
  const handleLogOut = () => {
    window.localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <>
      <header className="">
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="../../public/muni2.jpeg" alt="" className="logo-nav me-2" />
                 Municipalidad Formosa
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Inicio
                  </Link>
                </li>
                {
                 token && (
                      <li className="nav-item">
                        <Link className="nav-link active" to="/consultas">
                          Consulta
                        </Link>
                      </li>
                  )
                }
                {/* <li className="nav-item">
                  <Link className="nav-link active" to="/pagos">
                    Pagar
                  </Link>
                </li> */}
            {
                  token?
                    <li className="nav-item">
                      <button className='nav-link active pointer-event' onClick={handleLogOut}>
                        Cerrar Sesión
                      </button>
                    </li>
                    :                      
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle active"
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Ingresar
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/ingresar">
                            Iniciar Sesión
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/registro">
                            Registro
                          </Link>
                        </li>
                      </ul>
                    </li>
                                }
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
