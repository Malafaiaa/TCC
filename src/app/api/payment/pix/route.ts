import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: 'APP_USR-236878317122707-062016-59edd63a68061ec432be0fa7c0804ba2-722424585',
  options: { timeout: 5000 },
});

export async function POST(request: NextRequest) {
  try {
    // Registrar a chegada da requisição
    console.log('Recebendo POST request para /api/payment/pix');

    // Analisar o corpo da requisição
    const req = await request.json();
    console.log('Corpo da requisição recebido:', req);

    const body = req.body;
    console.log('Dados do corpo extraídos:', body);

    const payment = new Payment(client);
    const idempotencyKey = uuidv4();
    const requestOptions = { idempotencyKey };

    console.log('REQUEST');

    const pixTransaction = {
      transaction_amount: body.transaction_amount,
      description: body.description,
      payment_method_id: 'pix',
      payer: {
        email: body.payer.email,
        identification: {
          type: body.payer.type,
          number: body.payer.number,
        },
      },
    };

    console.log('Dados da transação PIX preparados:', pixTransaction);

    // Realizar a criação do pagamento
    const result = await payment.create({
      body: pixTransaction,
      requestOptions,
    });

    console.log('Resultado da criação do pagamento:', result);

    // Verificar e registrar se o QR code foi gerado
    const ticket_url = result.point_of_interaction?.transaction_data?.ticket_url;
    console.log('QR code gerado:', ticket_url);

    // Retornar a resposta com o QR code
    const response = NextResponse.json({ ticket_url });

    // Adicionar cabeçalhos CORS para permitir todas as origens
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Erro ao criar Pix:', error);
      const response = NextResponse.json({ error: error.message, status: 500 });

      // Adicionar cabeçalhos CORS para permitir todas as origens
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

      return response;
    } else if (typeof error === 'string') {
      console.error('Erro inesperado ao criar Pix:', error);
      const response = NextResponse.json({ error, status: 500 });

      // Adicionar cabeçalhos CORS para permitir todas as origens
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

      return response;
    } else {
      console.error('Erro inesperado ao criar Pix:', error);
      const response = NextResponse.json({ error: 'Erro inesperado', status: 500 });

      // Adicionar cabeçalhos CORS para permitir todas as origens
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

      return response;
    }
  }
}

export async function OPTIONS(request: NextRequest) {
  // Lidar com requisições OPTIONS para CORS
  const response = NextResponse.json({ message: 'CORS preflight check' });

  // Adicionar cabeçalhos CORS para permitir todas as origens
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

  return response;
}
