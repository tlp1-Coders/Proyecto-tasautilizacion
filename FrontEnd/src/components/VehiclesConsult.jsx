import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardContent, CardActions, Button, Typography, List, ListItem, ListItemText } from '@mui/material';

export const VehiclesConsult = ({ vehicle }) => {
  const navigate = useNavigate();
  const handleOnClick = (e) => {
    const debtId = e.target.id;
    navigate(`/pagos/${debtId}`);
  };
  
  
  return (
    <>
      {vehicle.map((vehicle) => (
        <Card
          key={vehicle.id}
          className="mt-2 shadow"
          sx={{
            backgroundColor: "white",
            opacity: 0.9,
            borderRadius: "10px",
            boxShadow: 15,
            textAlign: "center",
          }}
        >
          <CardHeader
            title={vehicle.tipoVehiculo}
            subheader={vehicle.dominio}
          />
          <CardContent>
            {vehicle.debts.filter((debt)=>debt.estadoDeuda ).length > 0 ? (
              <List>
                {vehicle.debts.map((deuda, index) => (
                  deuda.estadoDeuda && (
                  <ListItem key={deuda.id}>
                    <ListItemText
                      primary={`Deuda número: ${index + 1}`}
                      secondary={`Períodos de deuda: ${deuda.periodoDeuda}`}
                    />
                    <ListItemText
                      primary={`Año: ${deuda.year}`}
                      secondary={`Monto de la deuda: $${deuda.montoDeuda}`}
                    />
                    <CardActions>
                      <Button
                        id={deuda.id}
                        variant="contained"
                        color="primary"
                        onClick={handleOnClick}
                      >
                        Pagar deuda
                      </Button>
                    </CardActions>
                  </ListItem>
                )
                )
                )}
              </List>
            ) : (
              <Typography variant="body1">
                <strong>No posee deudas</strong>
              </Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </>
  );
};

