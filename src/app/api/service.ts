import axios from "axios";

const BASE_PATH = process.env.BASE_PATH || "https://tcc-etec-paulistano-6whgfb0w6.vercel.app"; // Usando a variável de ambiente ou localhost por padrão

export async function postCriarPix(body: any) {
    try {
        const response = await axios.post(`${BASE_PATH}/api/payment/pix`, body);
        return response.data;
    } catch (error) {
        console.error("Erro ao fazer requisição:", error);
        throw error;
    }
}
