const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mercadopago = require('./mercadopago');

dotenv.config(); // Carregar variáveis de ambiente do arquivo .env

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json()); // Middleware para parsear JSON

// Importar rota para criar a preferência de pagamento
const createPreferenceRoute = require('./routes/createPreference');
app.use('/api', createPreferenceRoute);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
