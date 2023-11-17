
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";



export const FormConsult = ({register,onSubmit, errors}) => {
    const defaultTheme = createTheme();
    return (
        // <form
        //     onSubmit={onSubmit}
        //     action=""
        //     id="form"
        //     className="d-flex flex-column justify-content-center align-items-center mt-5 border rounded bg-body-tertiary p-5 shadow "
        // >
        //     <div className="mb-3">
        //         <label htmlFor="valor" className="form-label">
        //             Patente
        //         </label>
        //         <input
        //             type="text"
        //             className="form-control"
        //             name="valor"
        //             id="valor"
        //             {...register("valor")}
        //         />
        //     </div>
        //     <button type="submit" className="btn btn-primary">
        //         Buscar
        //     </button>
        // </form>
        <ThemeProvider theme={defaultTheme}>
        <Container
          component="section"
          maxWidth="sm"
          sx={{ 
            backgroundColor: "white",
            opacity: 0.9,
            borderRadius: "10px",
            boxShadow:15,
            textAlign: "center",
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
              <SearchSharpIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Busqueda
            </Typography>
            <Box component="form" onSubmit={onSubmit}  sx={{ mt: 1 }}>
              <TextField
                variant="filled"
                margin="normal"
                fullWidth
                id="valor"
                label="Patente"
                name="valor"
                autoComplete="valor"
                autoFocus
                type="text"
                helperText=  {errors.valor && (
                    <p className="text-danger"> La patente debe tener 6 o 7 caracteres </p>
                  )}
                {...register("valor", {
                    required: true,
                    minLength: 6,
                    maxLength: 7
                  })}
              />

          
              <Button
                type="submit"
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
               Buscar
              </Button>

            </Box>
          </Box>
        </Container>
      </ThemeProvider>
            )

}
