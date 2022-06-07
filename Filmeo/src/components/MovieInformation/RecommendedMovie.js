import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SimilarContainer, RecommendedMovieCard } from "../../assets/styles/MovieInfo/SimilarContent";
import { IMG_API } from "../../constants/urls";
import GlobalStateContext from "../../global/GlobalStateContext";
import { getSimilar } from "../../services/getSimilar";


const RecommendedMovie = () => {
  
  const {similarFilm, setSimiliarFilm} = useContext(GlobalStateContext);

  let params = useParams();

  useEffect(() => {
    const getApiDetail = async () => {
      setSimiliarFilm(await getSimilar(params.id));
    };

    getApiDetail();
  }, [params.id]);

  const filmRecomendation = similarFilm.slice(0, 8).map((film) => {
    
    const splitDate = film.release_date.split("-", 3);
    
    const year = splitDate[0];

    const mounth = splitDate[1];
    
    const day = splitDate[2];

    return (
      <RecommendedMovieCard key={film.id}>
        <img src={IMG_API + film.backdrop_path} alt="" />
        <h2>{film.title}</h2>
        <h3><strong>Lançamento:</strong> {day}/{mounth}/{year}</h3>
      </RecommendedMovieCard>
    )
  });

  return (
    <SimilarContainer>
      <div><h1>Recomendados</h1></div>
      <div>{filmRecomendation}</div>
    </SimilarContainer>
  );
};

export default RecommendedMovie;
