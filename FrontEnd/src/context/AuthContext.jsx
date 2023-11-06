import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest } from "../api/LoginRequests";
import { registerRequest } from "../api/RegisterRequests";
import { getUserInfoByToken } from "../api/UserTokenRequests";

export const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    if (token) {
      getUserInfoByToken(token).then((data) => {
        if (!data) {
          localStorage.removeItem("token");
          setToken(null);
          setUser(null);
        }
        setUser(data.user.nombreApellido);
      });
    };
    
    
  }, [token]);
  const loginUser = async (valor) => {
    const res = await loginRequest(valor);
    if (res.token) {
      localStorage.setItem("token", res.token);
      setToken(res.token);
      setUser(res.user.nombreApellido);
      return true;
    }
  };
  const RegisterUser = async (valor) => {
    const res = await registerRequest(valor);
    if (res.token) {
      localStorage.setItem("token", res.token);
      setToken(res.token);
      setUser(res.user.nombreApellido);
      return true;
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ loginUser, RegisterUser, logout, user, token, useAuthContext }}
    >
      {children}
    </AuthContext.Provider>
  );
};
