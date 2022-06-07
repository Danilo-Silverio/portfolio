import axios from "axios";
import { API_KEY, movieUrl } from "../constants/urls";

export const getSimilar = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}/recommendations${API_KEY}&language=pt-BR`);
        
        return data.results;

    } catch (error) { }
}