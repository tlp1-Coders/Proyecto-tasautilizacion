import { Routes, Route } from 'react-router-dom';
import { PageInicio } from './pages/inicio.jsx';
import { PageConsultas } from './pages/consultas.jsx';
import { PageLogin } from './pages/Login.jsx';
import { PageRegistro } from './pages/registro.jsx';
import { PagePagos } from './pages/pagos.jsx';
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<PageInicio />} />
    <Route path='/consultas' element={< PageConsultas />} />
    <Route path='/ingresar' element={<PageLogin />} />
    <Route path='/registro' element={<PageRegistro />} />
    <Route path='/pagos' element={<PagePagos />} />
    </Routes>
    </>
  )
 
}

export default App
