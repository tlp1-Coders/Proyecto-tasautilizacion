import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const RegisterForm = ({ register, onSubmit, errors, getValues }) => {
  const defaultTheme = createTheme();
  return (
    // <form

    //     onSubmit={onSubmit}
    //     action=""
    //     id="form"
    //     className="row bg-body-tertiary g-3  border rounded  p-5 w-50 shadow my-2"
    // >
    //     <h1 className='mb-2 mt-0'>Registro</h1>
    //     <div className=" col-6">
    //         <label htmlFor="nombreApellido" className="form-label">
    //             Nombre y Apellido
    //         </label>
    //         <input
    //             type="text"
    //             className="form-control"
    //             name="nombreApellido"
    //             id="nombreApellido"
    //             {...register("nombreApellido",{
    //                 required: true
    //             })}
    //         />
    //         {errors.nombreApellido && <p className="text-danger">El nombre es obligatorio</p>}
    //     </div>
    //     <div className=" col-6">
    //         <label htmlFor="dni" className="form-label">
    //             Dni
    //         </label>
    //         <input
    //             type="text"
    //             className="form-control"
    //             name="dni"
    //             id="dni"
    //             {...register("dni",{
    //                 required: true,
    //                 minLength: 8,
    //                 maxLength: 8,
    //             })}
    //         />
    //         {errors.dni && <p className="text-danger">El dni debe ser de 8 digitos</p>}
    //     </div>
    //     <div className=" col-6">
    //         <label htmlFor="usuario" className="form-label">
    //             Usuario
    //         </label>
    //         <input
    //             type="text"
    //             className="form-control"
    //             name="usuario"
    //             id="usuario"
    //             {...register("usuario",{
    //                 required: true
    //             })}
    //         />
    //         {errors.usuario && <p className="text-danger">El usuario es obligatorio</p>}
    //     </div>
    //     <div className="col-6">
    //         <label htmlFor="email" className="form-label">
    //             Email
    //         </label>
    //         <input
    //             type="email"
    //             className="form-control"
    //             name="email"
    //             id="email"
    //             {...register("email",{
    //                 required: true
    //             })}
    //         />
    //         {errors.email && <p className="text-danger">El email es obligatorio</p>}
    //     </div>
    //     <div className="col-6">
    //         <label htmlFor="password" className="form-label">
    //             Password
    //         </label>
    //         <input
    //             type="password"
    //             className="form-control"
    //             name="password"
    //             id="password"
    //             {...register("password",{
    //                 minLength: 8,
    //                 required: true
    //             })}
    //         />
    //         {errors.password && <p className="text-danger">La contraseña debe ser de minimo 8 digitos</p>}
    //     </div>
    //     <div className="col-6">
    //         <label htmlFor="confirmPassword" className="form-label">
    //             Confirmar Password
    //         </label>
    //         <input
    //             type="password"
    //             className="form-control"
    //             name="confirmPassword"
    //             id="confirmPassword"

    //             {...register("confirmPassword",
    //                 {
    //                     required: true,
    //                     validate: (value) => value === getValues("password"),
    //                 })}
    //         />
    //         {errors.confirmPassword && <p className="text-danger">Las contraseñas no coinciden</p>}
    //     </div>
    //     <div className="col-12 d-flex justify-content-center align-items-center gap-2 ">
    //         <button
    //             type="submit"
    //             id="btnSubmit"
    //             className="form-control  btn btn-primary  rounded-5"
    //         >
    //             Registrar
    //         </button>
    //         <Link to="/ingresar" className='form-control  btn btn-primary  rounded-5'>
    //             Ingresar
    //         </Link>
    //     </div>
    // </form>
    <>
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
              Registrarse
            </Typography>
            {/* <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}> */}
              <Grid component="form" onSubmit={onSubmit} container spacing={1}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                  <TextField
                    variant="filled"
                    margin="normal"
                    fullWidth
                    id="nombreApellido"
                    label="Nombre y Apellido"
                    name="nombreApellido"
                    autoComplete="nombreApellido"
                    autoFocus
                    helperText={
                      errors.nombreApellido && (
                        <p className="text-danger">
                          El nombre y apellido es obligatorio
                        </p>
                      )
                    }
                    {...register("nombreApellido", {
                      required: true,
                    })}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                  <TextField
                    variant="filled"
                    margin="normal"
                    fullWidth
                    id="dni"
                    label="DNI"
                    name="dni"
                    autoComplete="dni"
                    autoFocus
                    helperText={
                      errors.dni && (
                        <p className="text-danger">
                          El dni debe ser de 8 digitos
                        </p>
                      )
                    }
                    {...register("dni", {
                      required: true,
                      minLength: 8,
                      maxLength: 8,
                    })}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                  <TextField
                    variant="filled"
                    margin="normal"
                    fullWidth
                    id="usuario"
                    label="Usuario"
                    name="usuario"
                    autoComplete="usuario"
                    autoFocus
                    helperText={
                      errors.usuario && (
                        <p className="text-danger">El usuario es obligatorio</p>
                      )
                    }
                    {...register("usuario", {
                      required: true,
                    })}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                  <TextField
                    variant="filled"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    autoFocus
                    helperText={
                      errors.email && (
                        <p className="text-danger">El email es obligatorio</p>
                      )
                    }
                    {...register("email", {
                      required: true,
                    })}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
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
                        <p className="text-danger">
                          La contraseña es obligatoria
                        </p>
                      )
                    }
                    autoComplete="current-password"
                    {...register("password", {
                      required: true,
                    })}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
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
                        <p className="text-danger">
                          Las contraseñas no coinciden
                        </p>
                      )
                    }
                    autoComplete="confirmPassword"
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) => value === getValues("password"),
                    })}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <Button type="submit" variant="outlined">
                    Registrarse
                  </Button>
                </Grid>
              </Grid>
            {/* </Box> */}
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};
