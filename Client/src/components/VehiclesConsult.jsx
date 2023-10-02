import React from 'react'

export const VehiclesConsult = ({ vehicle }) => {
    console.log(vehicle);
    return (
        <>
            {/* <section className="container text-center border rounded mt-5 p-5 shadow bg-body-tertiary bg-opacity-75">
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
            </section> */}
            <section className="row justify-content-center text-center border rounded mt-2 p-2 shadow bg-body-tertiary bg-opacity-75">
                <h3>Tus Vehiculos</h3>
                {vehicle.map((vehicle) => (
                    <div key={vehicle.id} className="card col-12">
                        <div className="card-header bg-transparent">
                            <h5 className="card-title">{vehicle.tipoVehiculo}</h5>
                            <h6 className="card-subtitle">{vehicle.dominio}</h6>
                        </div>
                        <div className="card-body row justify-content-center">
                            {vehicle.debts.length > 0 ?
                                vehicle.debts.map((deuda, index) => (
                                    <ul  key={deuda.id} className=' col-6 list-group'>
                                        <li className='list-group-item'>
                                            <strong>Deuda número:</strong> {index + 1}
                                        </li >
                                        <li className='list-group-item'>
                                            <strong>Períodos de deuda:</strong> {deuda.periodoDeuda}
                                        </li>
                                        <li className='list-group-item'>
                                            <strong>Año:</strong> {deuda.year}
                                        </li>
                                        <li className='list-group-item'>
                                            <strong>Monto de la deuda:</strong> ${deuda.montoDeuda}
                                        </li>
                                        <div className="card-footer list-group-item">
                                            <button id={deuda.id} className='btn btn-primary'>Pagar deuda</button>
                                        </div>
                                    </ul>
                                )) : <div>
                                    <p><strong>No hay deudas</strong></p>
                                </div>}
                        </div>
                    </div>

                ))}

            </section>


        </>
    )
}
