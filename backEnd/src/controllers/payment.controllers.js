import mercadopago from "mercadopago";
import { upDateDebt } from "../models/debts.model.js";
export const createOrder = async (req, res) => {
  mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_MP,
  });
  const {price, quantity} = req.body;
  const response = await mercadopago.preferences.create({
    items: [
      {
        title: "Deuda",
        unit_price: Number(price),
        currency_id: "ARS",
        quantity: Number(quantity),
      },
    ],
    back_urls: {
      success: "http://localhost:4000/mp/success",
      failure: "http://localhost:4000/mp/failure",
      pending: "http://localhost:4000/mp/pending",
    },
    auto_return: "approved",
  });
  if(!response.body.id){
    return res.status(500).json({
        message: "No se pudo crear la preferencia"
    });
  }
  return res.status(200).json({
      PaymentId: response.body.id
  });
};

export const receiveWebhook = async (req, res) => {
  console.log(req.query);
};
export const success = async (req, res) => {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
};
export const failure = async (req, res) => {
  res.send("failure");
};
export const pending = async (req, res) => {
  res.send("pending");
};
