import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormConsult } from "../components/FormConsult";
import { getvehicleNotUserRequest } from "../api/vehiclesRequests";
import { NotUserVehicleConsult } from "../components/NotUserVehicleConsult";
export const ConsultPage = () => {
  const { register, handleSubmit } = useForm();
  const [vehicle, setVehicle] = useState(null);
  const onSubmit = handleSubmit(async (valor) =>{
    const vehicleData = await getvehicleNotUserRequest(valor)
    setVehicle(vehicleData)
  }
  );
  console.log(vehicle);
  return (
    <>
      {vehicle ? (
        <div className="container text-center my-1 d-flex justify-content-center align-items-center ">
          <div className="row justify-content-center aling-items-center ">
            <main className=" col-8">
              { <NotUserVehicleConsult vehicle={vehicle} /> }
            </main>
            <aside className=" col-4">
              <FormConsult onSubmit={onSubmit} register={register} />
            </aside>
          </div>
        </div>
      ) : (
        <main className="container d-flex flex-column justify-content-center align-items-center text-center ">
          <FormConsult onSubmit={onSubmit} register={register} />
        </main>
      )}
    </>
  );
};
