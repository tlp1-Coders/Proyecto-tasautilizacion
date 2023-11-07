import React, { useState } from 'react'

export const NotUserVehicleConsult = ({vehicle}) => {
  const hasDebt = vehicle.debts.some(element => element.estadoDeuda === true);

  return (
    <section className="row justify-content-center aling-items-center bg-body-secondary bg-opacity-75 text-center border rounded mt-2 p-2 shadow">
      <div key={vehicle.id} className="card col-12 ">
        <div className="card-header bg-transparent">
          <h5 className="card-title">{vehicle.tipoVehiculo}</h5>
          <h6 className="card-subtitle">{vehicle.dominio}</h6>
        </div>
        <div className="card-body row justify-content-center">
          {hasDebt ? (
            <p>
              <strong>Posee una deuda</strong>
            </p>
          ) : (
            <p>
              <strong>No posee deudas</strong>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
