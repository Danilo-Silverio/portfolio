import axios from "axios";
import { API_KEY } from "../constants/urls";

export const getTvDetails = async (id) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/tv/${id}${API_KEY}&language=pt-BR`);
        return [data];

    } catch (error) { }
}