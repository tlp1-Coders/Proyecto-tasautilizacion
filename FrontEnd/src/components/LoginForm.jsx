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



export const LoginForm = ({ register, onSubmit, errors }) => {
  const defaultTheme = createTheme();

  return (
    // <form
    //     onSubmit={onSubmit}
    //     id="form"
    //     className="row bg-body-tertiary g-3 border rounded p-5 w-50 needs-validation shadow"
    // >
    //     <h1>Iniciar Sesión</h1>
    //     <div className="col-12">
    //         <label htmlFor="usuario" className="form-label">
    //             Usuario
    //         </label>
    //         <input
    //             type="text"
    //             className="form-control rounded-5"
    //             name="usuario"
    //             id="usuario"
    //             required=""
    //             {...register('usuario',{
    //                 required: true
    //             })}
    //             />
    //             {errors.usuario && <p className="text-danger">El usuario es obligatorio</p>}
    //     </div>
    //     <div className="col-12">
    //         <label htmlFor="password" className="form-label">
    //             Contraseña
    //         </label>
    //         <input
    //             type="password"
    //             className="form-control rounded-5"
    //             name="password"
    //             id="password"
    //             required=""
    //             {...register('password',
    //                 {
    //                     required: true
    //                 })}
    //         />
    //         {errors.password && <p className="text-danger">La contraseña es obligatoria</p>}
    //     </div>
    //     <div className="col-6">
    //         <button
    //             type="submit"
    //             id="btnSubmit"
    //             className="form-control  btn btn-primary rounded-5"
    //         >
    //             Ingresar
    //         </button>
    //     </div>
    //     <div className='col-6 '>
    //         <Link to="/registro" className="form-control btn btn-primary rounded-5">
    //             Registrarse
    //         </Link>
    //     </div>
    //     <div className="col-12">
    //         <Link to="/forgotPassword" className="icon-link icon-link-hover">
    //             ¿Olvidaste tu contraseña?
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
            boxShadow:15,
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
              Iniciar Sesión
            </Typography>
            <Box component="form" onSubmit={onSubmit}  sx={{ mt: 1 }}>
              <TextField
                variant="filled"
                margin="normal"
                fullWidth
                id="usuario"
                label="Usuario"
                name="usuario"
                autoComplete="usuario"
                autoFocus
                helperText=  {errors.usuario && (
                    <p className="text-danger">El usuario es obligatorio</p>
                  )}
                {...register("usuario", {
                  required: true,
                })}
              />
            
              <TextField
                variant="filled"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                helperText=  {errors.password && (  <p className="text-danger">La contraseña es obligatoria</p>)}
                autoComplete="current-password"
                {...register("password", {
                  required: true,
                })}
              />
          
              <Button
                type="submit"
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                Ingresar
              </Button>
              <Box container   sx={{display: "flex", justifyContent: "space-between"}}> 
                  <Link to="/forgotPassword" variant="body2">
                     ¿Olvidaste tu contraseña?
                  </Link>
                  <Link to="/registro" variant="body2">
                   {" Registrate"}
                  </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};
