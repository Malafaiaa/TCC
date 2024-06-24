import axios from "axios";

const BASE_PATH = "http://localhost:3000";

export async function postCriarPix(body: any) {
    return await axios.post(`${BASE_PATH}/api/payment/pix`,
        { body }
    )
}