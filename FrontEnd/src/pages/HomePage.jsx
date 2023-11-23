import React from 'react';
import { Container, Grid, Typography, Paper, Box } from '@mui/material';


export const HomePage = () => {
  return (
    <Container
      component="main"
      maxWidth="md"
    sx={{ 
      backgroundColor: "white",
      opacity: 0.9,
      borderRadius: "10px",
      boxShadow:15,
      textAlign: "center",
  }}
    >
      <Grid sx={{height:"80vh"}} container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h1">Bienvenidos a Fermosa</Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Paper elevation={5}>
              <Box p={2}>
                <Typography variant="body1">
                  Buscamos facilitarte tus trámites burocráticos asociados a la Municipalidad de Formosa.
                  Hoy en día ya está disponible la sección de consulta y pago de la tasa de utilización de la vía.
                  Registrate y comenzá a disfrutar de los beneficios!
                </Typography>
                <Typography variant="body1">
                  Próximamente estaremos agregando más servicios para que puedas realizar tus trámites de manera online.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={5}>
              <Box>
                <img src="../../public/pagatuscuentas.png" alt="paga tus cuentas" className='img-fluid' />
              </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
