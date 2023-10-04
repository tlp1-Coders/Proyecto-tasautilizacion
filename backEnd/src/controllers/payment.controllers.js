import mercadopago from 'mercadopago';
export const createOrder = async (req, res) => {
    mercadopago.configure({
        access_token: process.env.ACCESS_TOKEN_MP
    });
    
   const response = await mercadopago.preferences.create({
        items: [{
            id: 1,
            title: 'Deuda',
            unit_price: 1000,
            currency_id: "ARS",
            quantity: 1,

        }],
        back_urls: {
            success: "http://localhost:4000/mp/success",
            failure: "http://localhost:4000/mp/failure",
            pending: "http://localhost:4000/mp/pending",
        },
        notification_url: "https://zw044vqw-4000.brs.devtunnels.ms/",
    });
    res.send(response.body.init_point);
};

export const receiveWebhook = async (req, res) => {
    console.log(req.query);
}
export const success = async (req, res) => {
    res.send('success');
}
export const failure = async (req, res) => {
    res.send('failure');
}
export const pending = async (req, res) => {
    res.send('pending');
}