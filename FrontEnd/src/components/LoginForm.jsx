import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export const LoginForm = ({ register, onSubmit }) => {
  return (
    <>
      <Box
        className="bg-body-secondary d-flex flex-column justify-content-center align-items-center p-4 g-3 border rounded shadow"
        // sx={{
        //     marginTop: 8,
        //     display: 'flex',
        //     flexDirection: 'column',
        //     alignItems: 'center',
        //     background: '#f8f9fa',
        //     opacity: 0.8,
        //     borderRadius: 1,
        //     padding: 2,
        // }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        <Box
          component="form"
          autoComplete="off"
          onSubmit={onSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                name="usuario"
                required
                fullWidth
                id="usuario"
                label="Usuario"
                autoFocus
                {...register("usuario")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="new-password"
                {...register("password")}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Ingresar
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/registro" variant="body2">
                Registrarse
              </Link>
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/forgotPassword" variant="body2">
                ¿Olvidaste tu contraseña?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/*                 
        <form
            onSubmit={onSubmit}
            id="form"
            className="row bg-body-tertiary g-3 border rounded p-5 w-50 needs-validation shadow"
        >
            <h1>Iniciar Sesión</h1>
            <div className="col-12">
                <label htmlFor="usuario" className="form-label" >
                    Usuario
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="usuario"
                    id="usuario"
                    required=""
                    placeholder='Ingresa tu usuario'
                    {...register('usuario')}
                />
            </div>
            <div className="col-12">
                <label htmlFor="password" className="form-label">
                    Contraseña
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
            <div className="col-6">
                <button
                    type="submit"
                    id="btnSubmit"
                    className="form-control  btn btn-primary rounded-5"
                >
                    Ingresar
                </button>
            </div>
            <div className='col-6 '>
                <a href="/registro" className="form-control btn btn-primary rounded-5">
                    Registrarse
                </a>
            </div>
            <div className="col-12">
                <a href="/forgotPassword" className="icon-link icon-link-hover">
                    ¿Olvidaste tu contraseña?
                </a>
            </div>
        </form> */}
    </>
  );
};
