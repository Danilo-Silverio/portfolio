import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../../services/getMovieById";
import { IMG_API } from "../../constants/urls";
import GlobalStateContext from "../../global/GlobalStateContext";
import { Film, Infos } from "../../assets/styles/MovieInfo/MovieInfo";

const MovieInformation = () => {
    
    const {movieInfo, setMovieInfo} = useContext(GlobalStateContext);

    let params = useParams();

    useEffect(() => {
        const getApiDetail = async () => {
          setMovieInfo(await getMovieDetail(params.id));
        };
    
        getApiDetail();
      }, [params.id]);

      const information = movieInfo.map((item) => {
        const splitDate = item.release_date.split("-", 3);
    
        const year = splitDate[0];
    
        const mounth = splitDate[1];
    
        const day = splitDate[2];
    
        const genres = item.genres.map((gen) => {
          return <p key={gen.id}>{gen.name}</p>;
        });
    
        return (
          <div key={item.id}>
            <Film>
              <img src={IMG_API + item.poster_path} alt={item.title} />
              <Infos>
                <h1>{item.title} ({year})</h1>
                <p>{day}/{mounth}/{year} (BR){" "}</p>
                <div>{genres}</div>
                <p><span>{item.vote_average}</span> Avaliação dos usuários</p>
                <h2>Sinopse</h2>
                <p>{item.overview}</p>
              </Infos>
            </Film>
          </div>
        );
      });

    return information

};

export default MovieInformation;