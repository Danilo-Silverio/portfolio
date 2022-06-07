import axios from "axios";
import { API_KEY, movieUrl } from "../constants/urls";

export const getMovieDetail = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}${API_KEY}&language=pt-BR`);
        return [data];

    } catch (error) { }
}