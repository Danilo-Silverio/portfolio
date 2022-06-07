import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../../services/getMovieCast";
import { CastCard, CastContent } from "../../assets/styles/MovieInfo/CastInfo";
import { IMG_API } from "../../constants/urls";
import GlobalStateContext from "../../global/GlobalStateContext";

const MovieCast = () => {

    const {cast, setCast} = useContext(GlobalStateContext);
    
    let params = useParams();

    useEffect(() => {
        const getApiDetail = async () => {
          setCast(await getCast(params.id));
        };
    
        getApiDetail();
      }, [params.id]);

      const castFilm = cast.slice(0, 8).map((c, i) => {
        return (
          <CastCard key={i}>
            <img src={IMG_API + c.profile_path} alt={c.name} />
            <h2>{c.name}</h2>
            <h3>{c.character}</h3>
          </CastCard>
        )
      });
    
    return (
        <CastContent>
          <div><h1>Elenco</h1></div>
          <div>{castFilm}</div>
        </CastContent>
    )
};

export default MovieCast;