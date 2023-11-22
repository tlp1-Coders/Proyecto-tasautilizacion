import { Routes, Route } from "react-router-dom";
import "../src/css/index.css";
import { HomePage } from "./pages/HomePage.jsx";
import { ConsultPage } from "./pages/ConsultPage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { PaymentPage } from "./pages/PaymentPage.jsx";
import NavBar from "./components/Navbar.jsx";
import { PasswordPage } from "./pages/PasswordPage.jsx";
import { UpdatePasswordPage } from "./pages/UpdatePasswordPage.jsx";
import { Footer } from "./components/Footer.jsx";
import { PaymentAprovedPage } from "./pages/PaymentAprovedPage";
import { MyVheiclesPage } from "./pages/MyVheiclesPage";
import { TestNavBar } from "./components/NavBar/TestNavBar.jsx";
import { PrivateRoute } from "../src/router/PrivateRoutes.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { CommentsPages } from "./pages/CommentsPages.jsx";
import { useAuthContext } from "./context/AuthContext.jsx";

function App() {
  const {isLoading}=useAuthContext();
  return (
    <>
      <TestNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/consultas" element={<ConsultPage />} />
        <Route path="/ingresar" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/forgotPassword" element={<PasswordPage />} />
        <Route path="/updatePassword" element={<UpdatePasswordPage />} />4
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/comentarios" element={<CommentsPages />} />
          <Route path="/cambiarContraseña" element={<UpdatePasswordPage />} />
          <Route path="/misVehiculos" element={<MyVheiclesPage />} />
          <Route path="/pagos/:id" element={<PaymentPage />} />
          <Route path="/mp/success" element={<PaymentAprovedPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
