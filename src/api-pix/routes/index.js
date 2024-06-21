const { MercadoPagoConfig, Payment } = require('mercadopago');
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// Step 2: Load environment variables from .env file
require('dotenv').config();
//console.log('MercadoPago Access Token:', process.env.MERCADOPAGO_ACCESS_TOKEN);

// Step 3: Initialize the client object
const client = new MercadoPagoConfig({
  //accessToken:,
  options: { timeout: 5000 }
});

// Step 4: Initialize the API object
const payment = new Payment(client);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express v0.0.1' });
});

/* POST to create a PIX QR Code */
router.post('/criar-pix', function (req, res, next) {
  console.log("REQUEST");
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

  // Gerar uma idempotencyKey única para cada requisição
  const idempotencyKey = uuidv4();

  const requestOptions = { idempotencyKey };

  payment.create({ body, requestOptions })
    .then((result) => {
      console.log("result");
      console.log(result);
      res.status(200).json(result);
    })
    .catch((error) => {
      console.error("error");
      console.error(error.response ? error.response.data : error);
      res.status(500).json(error.response ? error.response.data : error);
    });
});

module.exports = router;
