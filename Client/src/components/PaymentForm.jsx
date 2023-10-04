import { useEffect, useState } from "react"
import { paymentGetRequest } from "../api/PaymentRequests"
import { useParams } from "react-router-dom"
import { useForm } from "react-hook-form";

export const PaymentForm = () => {
  const { register, handleSubmit } = useForm();
  const hanldeOnsubmit =(data) => {
    console.log(data);
    let costo= (debt.montoDeuda/debt.periodoDeuda)*data.periodo;
    const paraMP={
      price: costo,
      quantity: data.periodo
    }
    console.log(paraMP);
    if (data.periodo!=debt.periodoDeuda){
      const debtUpdate={
        periodoDeuda: debt.periodoDeuda-data.periodo,
        montoDeuda: debt.montoDeuda-costo,
        estadoDeuda: true
        
      };
      console.log(debtUpdate);
    }else{
      const debtUpdate={
        montoDeuda: debt.montoDeuda-costo,
        estadoDeuda: false
      };
      console.log(debtUpdate);
    }
    console.log(costo);
    
  }
  const [debt, setDebt] = useState([])
  const { id } = useParams();
  useEffect(() => {
    paymentGetRequest(id).then(data => setDebt(data.debt));
  }, [id]);

  return (
    <>
    <form
        id="form"
        className="d-flex flex-column justify-content-center align-items-center mt-5 border rounded bg-body-tertiary p-5 shadow"
        onSubmit={handleSubmit(hanldeOnsubmit)}
    >   
        <h1 className='form-label'>{debt.vehicle?.tipoVehiculo}</h1>
        <h2 className='form-label'>{debt.vehicle?.dominio}</h2>
        <h4>Periodos Adeudados: {debt.periodoDeuda}</h4>
        <h4>Monto Total: {debt.montoDeuda}</h4>
        <label className='form-label' htmlFor="periodo">Periodos a pagar</label>
        <input type="text" className="form-control"  name="periodo" required
        {...register("periodo", { min: 1, max: debt.periodoDeuda })}/>
        <button className='btn btn-primary mt-3'>Pagar</button>
    </form>
    
    </>
  )
}
