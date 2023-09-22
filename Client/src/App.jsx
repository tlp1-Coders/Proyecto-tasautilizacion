import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage.jsx';
import { ConsultPage } from './pages/ConsultPage.jsx';
import { LoginPage } from './pages/LoginPage.jsx';
import { RegisterPage } from './pages/RegisterPage.jsx';
import { PaymentPage } from './pages/PaymentPage.jsx';
import NavBar from './components/Navbar.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/consultas' element={< ConsultPage />} />
        <Route path='/ingresar' element={<LoginPage />} />
        <Route path='/registro' element={<RegisterPage />} />
        <Route path='/pagos' element={<PaymentPage />} />
      </Routes>
    </>
  )

}

export default App
