import { Card, CardHeader, CardContent, Typography, Grid } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

export const NotUserVehicleConsult = ({ vehicle }) => {
  const hasDebt = vehicle.debts.some((element) => element.estadoDeuda === true);
  const theme = createTheme({
    palette: {
      primary: {
        main: hasDebt ? "#f44336" : "#4caf50",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          backgroundColor: "white",
          opacity: 0.9,
          borderRadius: "10px",
          boxShadow: 15,
          textAlign: "center",
        }}
      >
        <CardHeader title={vehicle.tipoVehiculo} subheader={vehicle.dominio} />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" component="h6" align="center">
                {hasDebt ? (
                  <strong>Posee deuda</strong>
                ) : (
                  <strong>No posee deuda</strong>
                )}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};
