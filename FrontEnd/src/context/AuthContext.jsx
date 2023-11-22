import { createContext, useContext, useEffect, useState, useReducer } from "react";
import { loginRequest } from "../api/LoginRequests";
import { registerRequest } from "../api/RegisterRequests";
import { getUserInfoByToken } from "../api/UserTokenRequests";
import { authReducer } from '../reduces/AuthReducer';
import useLoader from "../hooks/useLoader";
export const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  // const [user, setUser] = useState(null);
  // const [token, setToken] = useState(localStorage.getItem("token"));
  const token = localStorage.getItem("token")
  const [authState, dispatch] = useReducer(authReducer,{token});
  const {   isLoading,showLoader,hideLoader,}=useLoader();
  useEffect(() => {
    showLoader();
    if (authState.token) {
      getUserInfoByToken(authState.token).then((data) => {
        if (!data) {
          localStorage.removeItem("token");
          // setToken(null);
          // setUser(null);
          dispatch({ type: "LOGOUT_USER"});
        }
        // setUser(data.user.nombreApellido);
        dispatch({ type: "LOGIN_USER", payload: { user: data.user, token: token} });
        hideLoader();
      });
    };
  }, [token]);

  const loginUser = async (valor) => {
    const res = await loginRequest(valor);
    if (res.token) {
      localStorage.setItem("token", res.token);
      // setToken(res.token);
      // setUser(res.user.nombreApellido);
      dispatch({ type: "LOGIN_USER", payload: { user: res.user.nombreApellido, token: res.token} });
      return true;
    }
  };
  const RegisterUser = async (valor) => {
    const res = await registerRequest(valor);
    if (res.token) {
      localStorage.setItem("token", res.token);
      // setToken(res.token);
      // setUser(res.user.nombreApellido);
      dispatch({ type: "LOGIN_USER", payload: { user: res.user.nombreApellido, token: res.token} });
      return true;
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    // setToken(null);
    // setUser(null);
    dispatch({ type: "LOGOUT_USER" });
  };


  return (
    <AuthContext.Provider
      value={{ loginUser, RegisterUser, logout,  useAuthContext, authState, dispatch, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
