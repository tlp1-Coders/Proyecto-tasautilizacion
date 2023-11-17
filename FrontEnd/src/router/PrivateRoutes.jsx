import { Outlet,Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";


export const PrivateRoute = () => {
    const { authState } = useAuthContext();

    return (
        authState.token ?(
            <Outlet />
        ):(
            <Navigate to="/ingresar" />
        )
        
    );
};


