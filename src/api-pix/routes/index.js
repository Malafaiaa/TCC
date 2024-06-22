const express = require('express');
const { MercadoPagoConfig, Payment } = require('mercadopago');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

// Step 3: Initialize the client object
const client = new MercadoPagoConfig({
    //accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
    options: { timeout: 5000 }
});

// Step 4: Initialize the API object
const payment = new Payment(client);

/* POST to create a PIX QR Code */
router.post('/criar-pix', function (req, res, next) {
    console.log("REQUEST BODY:");
    console.log(req.body);

    const body = {
        transaction_amount: req.body.transaction_amount, 
        description: req.body.description,
        payment_method_id: "pix",
        payer: {
            email: req.body.email,
            identification: {
                type: req.body.identificationType,
                number: req.body.number.toString()
            }
        }
    };

    console.log(body);

    // Gerar uma idempotencyKey única para cada requisição
    const idempotencyKey = uuidv4();

    const requestOptions = { idempotencyKey };

    payment.create({ body, requestOptions })
        .then((result) => {
            console.log("Payment Result:", result);
            res.status(200).json(result);
        })
        .catch((error) => {
            console.error("Erro ao criar Pix:", error);
            res.status(500).json(error.response ? error.response.data : error);
        });
});

module.exports = router;
