import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { VehiclesConsult } from "../components/VehiclesConsult";
import { getvehicleRequest } from "../api/vehiclesRequests";
export const MyVheiclesPage = () => {
  const navigate = useNavigate();

  const [vehicle, setVehicle] = useState([]);
  useEffect(() => {
    getvehicleRequest().then((vehicle) => {
      vehicle ? setVehicle(vehicle) : navigate("/ingresar");
    });
  }, []);
  return (
    <>
      {
        <main className="w-100 p-3 container d-flex flex-column justify-content-center align-items-center ">
          {vehicle.length>0 ? (
            <VehiclesConsult vehicle={vehicle} />
          ) : (
            <h1 className="card-title">No tienes vehiculos</h1>
          )}
        </main>
      }
    </>
  );
};
