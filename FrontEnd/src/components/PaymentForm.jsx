import { useEffect, useState } from "react";
import {
  MPCreateOrderRequest,
  paymentGetRequest,
} from "../api/PaymentRequests";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { TextField, Button, Typography, Box, Container } from "@mui/material";

export const PaymentForm = () => {
  const { register, handleSubmit } = useForm();
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago(import.meta.env.VITE_publicKeyMP);
  const hanldeOnsubmit = async (data) => {
    const mpOrder = {
      title: debt.vehicle?.tipoVehiculo + debt.vehicle?.dominio,
      price: debt.montoDeuda / debt.periodoDeuda,
      quantity: data.periodo,
      id: debt.id,
    };
    if (window.localStorage.getItem("mpOrder")) {
       window.localStorage.removeItem("mpOrder");
    }
    window.localStorage.setItem("mpOrder", JSON.stringify(mpOrder));
    const pago = await MPCreateOrderRequest(mpOrder);
    setPreferenceId(pago.PaymentId);
  };
  const [debt, setDebt] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    paymentGetRequest(id).then((data) => setDebt(data.debt));
  }, [id]);

  return (
    <Container maxWidth="sm" >
      <Box
        component="form"
        id="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: 0.9,
          borderRadius: "10px",
          boxShadow:15,
          mt: 5,
          border: 1,
          bgcolor: "background.paper",
          p: 5,
        }}
        container="true"
        onSubmit={handleSubmit(hanldeOnsubmit)}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          {debt.vehicle?.tipoVehiculo}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {debt.vehicle?.dominio}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Periodos Adeudados: {debt.periodoDeuda}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Monto Total: {debt.montoDeuda}
        </Typography>
        <TextField
          label="Periodos a pagar"
          type="text"
          name="periodo"
          inputProps={{ required: true, min: 1, max: debt.periodoDeuda }}
          {...register("periodo")}
        />
        <Box sx={{ mt: 3 }}>
          {preferenceId ? (
            <Wallet
              initialization={{
                customization: {
                  texts: {
                    action: 'buy',
                    valueProp: 'none',
                  }
                },
                preferenceId: preferenceId,
                redirectMode: "modal",
              }}
            />
          ) : (
            <Button variant="contained" type="submit" >
              Generar Pago
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};
