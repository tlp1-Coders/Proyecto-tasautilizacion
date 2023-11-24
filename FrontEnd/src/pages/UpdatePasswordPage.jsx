import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { resetPassword } from "../api/PasswordRequests";
import { useAuthContext } from "../context/AuthContext";

export const UpdatePasswordPage = () => {
  const { register, handleSubmit, formState:{errors}, getValues  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const {authState, logout}= useAuthContext();
  const token = searchParams.get("token") || authState.token ;
  const onsubmit = async (valor) => {
   const data = await resetPassword(valor, token);
   if(data){
    logout();
    navigate("/ingresar");
    
   }
  };
  const defaultTheme = createTheme();
  return (
    <Container component="main" className="container text-center d-flex flex-column justify-content-center align-items-center mt-5">
      <ThemeProvider theme={defaultTheme}>
        <Container
          component="section"
          maxWidth="sm"
          sx={{
            backgroundColor: "white",
            opacity: 0.9,
            borderRadius: "10px",
            boxShadow: 15,

          }}
        >
          <CssBaseline />
          <Box
            sx={{
              margin: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Cambiar Contraseña
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onsubmit)} sx={{ mt: 1 }}>

              <TextField
                variant="filled"
                margin="normal"
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                helperText={
                  errors.password && (
                    <p className="text-danger">La contraseña es obligatoria</p>
                  )
                }
                autoComplete="current-password"
                {...register("password", {
                  required: true,
                })}
              />
              <TextField
                variant="filled"
                margin="normal"
                fullWidth
                name="confirmPassword"
                label="Confirmar Contraseña"
                type="password"
                id="confirmPassword"
                helperText={
                  errors.confirmPassword && (
                    <p className="text-danger">Las contraseñas no coinciden</p>
                  )
                }
                autoComplete="confirmPassword"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => value === getValues("password"),
                })}
              />
              <Button type="submit" variant="outlined" sx={{ mt: 3, mb: 2 }}>
                Cambiar Contraseña
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Container>
  );
};
