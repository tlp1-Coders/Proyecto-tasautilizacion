import React, { useEffect } from 'react'
import { paymentPutRequest } from '../api/PaymentRequests'


export const PaymentAprovedPage = () => {
    useEffect(() => {
        const upDatePayment=async()=>{
            const mpOrder= window.localStorage.getItem('mpOrder')
             console.log( mpOrder);
            const pago= await paymentPutRequest(mpOrder)

        }
        upDatePayment();
    })
  return (
    <main className='container d-flex flex-column justify-content-center align-items-center my-2 border rounded bg-body-tertiary p-5 shadow w-50 h-50'>
        <h1>PAGO EXITOSO</h1>

    </main>
  )
}
