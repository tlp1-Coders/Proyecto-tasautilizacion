import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
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

export const UpdatePasswordPage = () => {
  const { register, handleSubmit, formState:{errors}, getValues  } = useForm();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const onsubmit = async (valor) => {
    await resetPassword(valor, token);
  };
  const defaultTheme = createTheme();
  return (
    <main className="container text-center d-flex flex-column justify-content-center align-items-center mt-5">
      {/* <form 
                onSubmit={handleSubmit(onsubmit)}
                className="row bg-body-tertiary g-3 border rounded mt-1 p-5  w-50 needs-validation shadow justify-content-center align-items-center">
                    <h1>Recuperar contraseña</h1>
                    <div className="col-12 w-50">
                        <label htmlFor="password" className="form-label">
                            Nueva Contraseña
                        </label>
                        <input
                            type="password"
                            className="form-control rounded-5"
                            name="password"
                            id="password"
                            required=""
                            {...register('password')}
                        />
                    </div>
                    <div className="col-12 w-50">
                        <label htmlFor="RepetirNuevaContraseña" className="form-label">
                            Repetir Nueva Contraseña
                        </label>
                        <input
                            type="text"
                            className="form-control  rounded-5"
                            name="RepetirNuevaContraseña"
                            id="RepetirNuevaContraseña"
                            required=""
                            {...register('RepetirNuevaContraseña')}
                        />
                    </div>
                    <div className="col-12 w-75 ">
                        <button
                            type="submit"
                            id="btnSubmit"
                            className="form-control  btn btn-primary  rounded-5"
                        >
                            Recuperar contraseña
                        </button>
                    </div>
                </form> */}
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
    </main>
  );
};
