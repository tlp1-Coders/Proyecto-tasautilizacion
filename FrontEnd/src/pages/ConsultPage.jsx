import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormConsult } from "../components/FormConsult";
import { getvehicleNotUserRequest } from "../api/vehiclesRequests";
import { NotUserVehicleConsult } from "../components/NotUserVehicleConsult";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useAuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";

export const ConsultPage = () => {
  const {isLoading}=useAuthContext();
  const { register, handleSubmit, formState:{errors} } = useForm();
  const [vehicle, setVehicle] = useState(null);
  const onSubmit = handleSubmit(async (valor) =>{
    const vehicleData = await getvehicleNotUserRequest(valor)
    setVehicle(vehicleData)
  });

  return (
    isLoading? <Loading/>:
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Container maxWidth='sm'>
        <Grid container spacing={2}  >
            {vehicle ? (
              <>
            <Grid item xs={12} md={12} >
              <FormConsult onSubmit={onSubmit} register={register} errors={errors} />
            </Grid>
            <Grid item xs={12} md={12}>
              <NotUserVehicleConsult vehicle={vehicle} />
            </Grid>
              </>
            ) : (
              <FormConsult onSubmit={onSubmit} register={register} errors={errors} />
            )}
          </Grid>
      </Container>
    </Box>
  );
};
