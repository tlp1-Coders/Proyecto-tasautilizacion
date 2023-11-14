import { Outlet,Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";


export const PrivateRoute = () => {
    const { authState } = useAuthContext();

    return (
        authState.isAuth ?(
            <Outlet />
        ):(
            <Navigate to="/ingresar" />
        )
        
    );
};


