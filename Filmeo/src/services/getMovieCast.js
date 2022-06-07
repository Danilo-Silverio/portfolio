import axios from "axios";
import { API_KEY, movieUrl } from "../constants/urls";

export const getCast = async (id) => {
    try {
        const {data} = await axios.get(`${movieUrl}/${id}/credits${API_KEY}&language=pt-BR`)
        
        return data.cast

    } catch (error) {
        alert(error.message)
    }
};