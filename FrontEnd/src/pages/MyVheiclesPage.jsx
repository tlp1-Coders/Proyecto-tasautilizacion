import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { VehiclesConsult } from "../components/VehiclesConsult";
import { getvehicleRequest } from "../api/vehiclesRequests";
import { Box, Container, Typography } from "@mui/material";
import Loading from "../components/Loading";
import { useAuthContext } from "../context/AuthContext";

export const MyVheiclesPage = () => {
  const navigate = useNavigate();
  const {isLoading} = useAuthContext();
  const [vehicle, setVehicle] = useState([]);
  useEffect(() => {
    getvehicleRequest().then((vehicle) => {
      vehicle ? setVehicle(vehicle) : navigate("/ingresar");
    });
  }, []);
  return (

    isLoading? (<Loading/>) : (
    <Box sx={{ flexGrow: 1,  marginBottom:1}}>
      <Container maxWidth="md">
        {vehicle.length > 0 ? (
          <VehiclesConsult vehicle={vehicle} />
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid black",
              borderRadius: "8px",
              mt: 2,
              p: 2,
              boxShadow: 2,
              height: "75%",
              width: "75%",
            }}
          >
            <Typography variant="h4" component="h1">
              No tienes vehiculos
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  )
  );
};
