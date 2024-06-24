import axios from "axios";

const BASE_PATH = "https://tcc-etec-paulistano-k9m7korcf.vercel.app";

export async function postCriarPix(body: any) {
    return await axios.post(`${BASE_PATH}/api/payment/pix`,
        { body }
    )
}