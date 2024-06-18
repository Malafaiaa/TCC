const mercadopago = require('mercadopago');

mercadopago.configurations.setAccessToken(process.env.MERCADOPAGO_ACCESS_TOKEN);

const createPreference = async (donationAmount, ongId) => {
    const preference = {
        items: [
            {
                title: 'Doação',
                unit_price: parseFloat(donationAmount),
                quantity: 1,
            }
        ],
        back_urls: {
            success: `${process.env.FRONTEND_URL}/pages/success`,
            failure: `${process.env.FRONTEND_URL}/pages/failure`,
            pending: `${process.env.FRONTEND_URL}/pages/pending`
        },
        auto_return: 'approved',
    };

    return await mercadopago.preferences.create(preference);
};

module.exports = { createPreference };
