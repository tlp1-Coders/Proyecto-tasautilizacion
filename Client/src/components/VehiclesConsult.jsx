import { useNavigate } from "react-router-dom";

export const VehiclesConsult = ({ vehicle }) => {
    const navigate = useNavigate();
    const handleOnClik = (e) => {
        const debtId=e.target.id;
        navigate(`/pagos/${debtId}`);
    }
    return (
        <>
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
                                    <ul key={deuda.id} className=' col-6 list-group'>
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
                                        <div
                                            onClick={handleOnClik}
                                            className="card-footer list-group-item">
                                            <button
                                                id={deuda.id} className='btn btn-primary'>
                                                Pagar deuda
                                            </button>
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
