import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Infos, Series } from "../../assets/styles/TV/TvInfo";
import TvHeader from "../../components/TvHeader/TvHeader";
import { IMG_API } from "../../constants/urls";
import GlobalStateContext from "../../global/GlobalStateContext";
import { getTvDetails } from "../../services/getTvDetails";

const TvDetailsPage = () => {
    
    const {tvInfo, setTvInfo} = useContext(GlobalStateContext);

    let params = useParams();

    useEffect(() => {
        const getApiDetail = async () => {
          setTvInfo(await getTvDetails(params.id));
        };
    
        getApiDetail();
      }, [params.id]);

      console.log(tvInfo)

      const information = tvInfo.map((item) => {
        const splitDate = item.first_air_date.split("-", 3);
    
        const year = splitDate[0];
    
        const mounth = splitDate[1];
    
        const day = splitDate[2];
    
        const genres = item.genres.map((gen) => {
          return <p key={gen.id}>{gen.name}</p>;
        });
    
        return (
          <div key={item.id}>
              <TvHeader/>
            <Series>
              <img src={IMG_API + item.poster_path} alt={item.original_name} />
              <Infos>
                <h1>{item.original_name} ({year})</h1>
                <p>{day}/{mounth}/{year} (BR){" "}</p>
                <div>{genres}</div>
                <p><span>{item.vote_average}</span> Avaliação dos usuários</p>
                <h2>Sinopse</h2>
                <p>{item.overview}</p>
                <div>
                    <p><strong>Episódios:</strong> {item.number_of_episodes}</p>
                    <p><strong>Temporadas:</strong> {item.number_of_seasons}</p>
                </div>
              </Infos>
            </Series>
          </div>
        );
      });

    return information 

};

export default TvDetailsPage;