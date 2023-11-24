import React from "react";
import { useForm } from "react-hook-form";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { sendPasswordResetRequest } from "../api/PasswordRequests";


export const PasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const defaultTheme = createTheme();
  const onsubmit = async (valor) => {
       await sendPasswordResetRequest(valor);
  };
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
              Recuperar Contraseña
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onsubmit)}
              sx={{ mt: 1 }}
            >
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
                    <p className="text-danger">El dni debe ser de 8 digitos</p>
                  )
                }
                {...register("dni", {
                  required: true,
                  minLength: 8,
                  maxLength: 8,
                })}
              />
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
              <Button type="submit" variant="outlined" sx={{ mt: 3, mb: 2 }}>
                Recuperar Contraseña
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Container>
  );
};
