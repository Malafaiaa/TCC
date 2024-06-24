import axios from 'axios';

const BASE_PATH = 'http://localhost:3000'; // Verifique se está correto para o ambiente de desenvolvimento

export async function postCriarPix(body: any) {
  try {
    const response = await axios.post(`${BASE_PATH}/api/payment/pix`, body);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar Pix:', error);
    throw error;
  }
}
