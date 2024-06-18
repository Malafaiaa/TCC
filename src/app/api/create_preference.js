const express = require('express');
const mercadopago = require('../mercadopago');
const router = express.Router();

// Rota para criar a preferência de pagamento
router.post('/create_preference', async (req, res) => {
    const { donationAmount, ongId } = req.body;
    console.log('Received donationAmount:', donationAmount);
    console.log('Received ongId:', ongId);

    try {
        const response = await mercadopago.createPreference(donationAmount, ongId);
        const qrCodeURL = response.body.init_point; // URL do QR Code
        console.log('Created preference:', response.body);

        res.json({
            qrCodeURL
        });
    } catch (error) {
        console.error('Erro ao criar a preferência de pagamento:', error);
        res.status(500).send('Erro ao criar a preferência de pagamento');
    }
});

module.exports = router;
