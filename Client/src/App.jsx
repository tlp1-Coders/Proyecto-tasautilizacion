import { Routes, Route } from 'react-router-dom';
import '../src/css/index.css'
import { HomePage } from './pages/HomePage.jsx';
import { ConsultPage } from './pages/ConsultPage.jsx';
import { LoginPage } from './pages/LoginPage.jsx';
import { RegisterPage } from './pages/RegisterPage.jsx';
import { PaymentPage } from './pages/PaymentPage.jsx';
import NavBar from './components/Navbar.jsx';
import { PasswordPage } from './pages/PasswordPage.jsx';
import { UpdatePasswordPage } from './pages/UpdatePasswordPage.jsx';
import { Footer } from './components/Footer.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/consultas' element={< ConsultPage />} />
        <Route path='/ingresar' element={<LoginPage />} />
        <Route path='/registro' element={<RegisterPage />} />
        <Route path='/pagos/:id' element={<PaymentPage />} />
        <Route path='/forgotPassword' element={<PasswordPage />} />
        <Route path='/updatePassword' element={<UpdatePasswordPage />} />
      </Routes>
      <Footer />
    </>
  )

}

export default App
