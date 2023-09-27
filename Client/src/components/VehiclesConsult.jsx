import React from 'react'

export const VehiclesConsult = ({vehicle} ) => {
    console.log(vehicle);
    return (
        <>
    <table className="table">
    <thead>
        <tr>
          <th>Dominio</th>
          <th>Tipo de vehículo</th>
          <th>Propietario</th>
          <th>Deudas pendientes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{vehicle?.dominio ?? ''}</td>
          <td>{vehicle?.tipoVehiculo ?? ''}</td>
          <td>{vehicle?.user?.nombreApellido ?? ''}</td>
          <td>
            {vehicle?.debts?.map((deuda) => (
              <li key={deuda.id}>
                <strong>Deuda número:</strong> {deuda.id}
                <br />
                <strong>Período de deuda:</strong> {deuda.periodoDeuda}
                <br />
                <strong>Año:</strong> {deuda.year}
                <br />
                <strong>Monto de la deuda:</strong> ${deuda.montoDeuda}
                <br />
                <strong>Estado de la deuda:</strong> {deuda.estadoDeuda ? 'Pendiente' : 'Cancelada'}
              </li>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
        </>
  )
}
