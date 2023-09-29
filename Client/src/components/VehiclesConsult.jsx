import React from 'react'

export const VehiclesConsult = ({ vehicle }) => {
    console.log(vehicle);
    return (
        <>
            <section className="container text-center border rounded mt-5 p-5 shadow bg-body-tertiary bg-opacity-75">
                <h1>Tus Vehiculos</h1>
                {vehicle.map((vehicle) => (
                    <div key={vehicle.id} className="card ">
                        <div className="card-body">
                            <table className="table ">
                                <thead>
                                    <tr>
                                        <th>Dominio</th>
                                        <th>Tipo de vehículo</th>
                                        <th>Deudas pendientes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{vehicle?.dominio ?? ''}</td>
                                        <td>{vehicle?.tipoVehiculo ?? ''}</td>
                                        <td>
                                            {vehicle.debts.length > 0 ?
                                                vehicle.debts.map((deuda, index) => (
                                                    <li key={deuda.id}>
                                                        <strong>Deuda número:</strong> {index + 1}
                                                        <br />
                                                        <strong>Período de deuda:</strong> {deuda.periodoDeuda}
                                                        <br />
                                                        <strong>Año:</strong> {deuda.year}
                                                        <br />
                                                        <strong>Monto de la deuda:</strong> ${deuda.montoDeuda}
                                                        <br />
                                                        <strong>Estado de la deuda:</strong> {deuda.estadoDeuda ? 'Pendiente' : 'Cancelada'}
                                                    </li>
                                                )) : 'No hay deudas pendientes'}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </section>

        </>
    )
}
