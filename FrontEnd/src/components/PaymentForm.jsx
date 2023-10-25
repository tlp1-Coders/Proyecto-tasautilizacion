import { useEffect, useState } from "react";
import {
  MPCreateOrderRequest,
  paymentGetRequest,
} from "../api/PaymentRequests";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

export const PaymentForm = () => {
  const { register, handleSubmit } = useForm();
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("TEST-6a196418-a291-4425-a670-7ca9b8606c37");
  const hanldeOnsubmit = async (data) => {
    const mpOrder = {
      title: debt.vehicle?.tipoVehiculo + debt.vehicle?.dominio,
      price: debt.montoDeuda / debt.periodoDeuda,
      quantity: data.periodo,
      id: debt.id,
    };
    if (window.localStorage.getItem("mpOrder")) {
       window.localStorage.removeItem("mpOrder");
    }
    window.localStorage.setItem("mpOrder", JSON.stringify(mpOrder));
    const pago = await MPCreateOrderRequest(mpOrder);
    setPreferenceId(pago.PaymentId);
  };
  const [debt, setDebt] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    paymentGetRequest(id).then((data) => setDebt(data.debt));
  }, [id]);

  return (
    <>
      <form
        id="form"
        className="d-flex flex-column justify-content-center align-items-center mt-5 border rounded bg-body-tertiary p-5 shadow"
        onSubmit={handleSubmit(hanldeOnsubmit)}
      >
        <h1 className="form-label">{debt.vehicle?.tipoVehiculo}</h1>
        <h2 className="form-label">{debt.vehicle?.dominio}</h2>
        <h4>Periodos Adeudados: {debt.periodoDeuda}</h4>
        <h4>Monto Total: {debt.montoDeuda}</h4>
        <label className="form-label" htmlFor="periodo">
          Periodos a pagar
        </label>
        <input
          type="text"
          className="form-control"
          name="periodo"
          required
          {...register("periodo", { min: 1, max: debt.periodoDeuda })}
        />
        
        <div>
          {preferenceId ? (
            <Wallet
              initialization={{
                customization: {
                  texts: {
                    action: 'buy',
                    valueProp: 'none',
                  }
                },
                preferenceId: preferenceId,
                redirectMode: "modal",
              }}
            />
          ):(
            <button className="btn btn-primary mt-3">Generar Pago</button>
          )}
        </div>
      </form>
    </>
  );
};
