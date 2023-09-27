import React from 'react'

export const VehiclesConsult = ({ vehicle }) => {
    console.log(vehicle);
    return (
        <>
            <section className="container d-flex flex-column justify-content-center align-items-center mt-5 border rounded p-5 shadow ">
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
                                {vehicle?.debts?.map((deuda,index) => (
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
                                ))}
                            </td>
                        </tr>
                    </tbody>
                </table>

            </section>
        </>
    )
}
