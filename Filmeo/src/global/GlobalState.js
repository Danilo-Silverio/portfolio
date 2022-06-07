import React, { useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext";
import { BASE_URL, API_KEY, IMG_API } from "../constants/urls";
import { useNavigate } from "react-router-dom";
import { MovieCard, Votes } from "../assets/styles/Movies/Catalog";
import Likes from "../assets/images/like.png";

const GlobalState = (props) => {
    
    const navigate = useNavigate();

    // STATES
    const [genres, setGenres] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [trending, setTrending] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [tvSeries, setTvSeries] = useState([]);
    const [activeGenre, setActiveGenre] = useState();
    const [buttonCliked, setButtonClicked] = useState(false);
    const [page, setPage] = useState(1);
    const [cast, setCast] = useState([]);
    const [movieInfo, setMovieInfo] = useState([]);
    const [similarFilm, setSimiliarFilm] = useState([]);
    const [tvInfo, setTvInfo] = useState([]);

    // ENDPOINTS
    const getGenres = () => {
        axios
          .get(`${BASE_URL}genre/movie/list${API_KEY}&language=pt-BR`)
          .then((response) => {
            setGenres(response.data.genres);
            setActiveGenre(response.data.genres)
          })
          .catch((error) => {
            alert(error.message);
          });
      };

    const getTrending = () => {
        axios.get(`${BASE_URL}trending/all/week${API_KEY}`)
        .then((response) => {
          setTrending(response.data.results);
        })
        .catch((error) => {
          alert(error.message)
        })
      };

    const getPopularMovies = (page) => {
        axios.get(`${BASE_URL}movie/popular${API_KEY}&language=pt-BR&page=${page}`)
        .then((response) => {
          setPopularMovies(response.data.results);
        })
        .catch((error) => {
          alert(error.message)
        })
      };

    const getTopRatedMovies = () => {
        axios.get(`${BASE_URL}movie/top_rated${API_KEY}&language=pt-BR`)
        .then((response) => {
          setTopRatedMovies(response.data.results);
        })
        .catch((error) => {
          alert(error.message)
        })
      };

      const getTvSeries = (page) => {
        axios.get(`${BASE_URL}tv/popular${API_KEY}&language=pt-BR&page=${page}`)
        .then((response) => {
          setTvSeries(response.data.results);
        })
        .catch((error) => {
          alert(error.message)
        })
      };

      // FUNCTIONS (MAP)
    const movieGenres = genres.map((genre) => {

        const onClickCategory = () => {
          if (buttonCliked === false) {
            setButtonClicked(true);
            setActiveGenre(genre.id);
    
          } else if (buttonCliked === true) {
            setButtonClicked(false);
            setActiveGenre("");
          }
        };
    
        return <button key={genre.id} onClick={() => onClickCategory()}>{genre.name}</button>
      });

    const popularMovieCatalog = popularMovies.filter((movie) => {
        if (activeGenre > 0) {
          return movie.genre_ids.includes(activeGenre)
        } else {
          return movie
        }
      }).map((movie) => {
            
            return (
                <MovieCard key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)}>
                    <img src={IMG_API + movie.poster_path} alt={movie.title}/>
                    <p>{movie.vote_average}</p>
                    <h3>{movie.title}</h3>
                </MovieCard>
            )
        });
    
    const trendingCatalog = trending.map((trend) => {

        const onClickNavigate = () => {
            if(trend.media_type === "movie"){
              return navigate(`/movie/${trend.id}`)
            } else if(trend.media_type === "tv") {
                return navigate(`/tv/${trend.id}`)
            }
        }

        return (
          <MovieCard key={trend.id} onClick={() => onClickNavigate()}>
                  <img src={IMG_API + trend.poster_path} alt={trend.title}/>
                  <h3>{trend.title ? trend.title : trend.original_name}</h3>
                  <Votes>
                    <img src={Likes} alt="Votes icon" />
                    <h4>Votes: {trend.vote_count}</h4>
                  </Votes>
              </MovieCard>
          )
      });
    
    const topRatedCatalog = topRatedMovies.map((movie) => {
        return (
            <MovieCard key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)}>
                <img src={IMG_API + movie.poster_path} alt={movie.title}/>
                <p>{movie.vote_average}</p>
                <h3>{movie.title}</h3>
            </MovieCard>
        )
    });

    const tvSeriesCatalog = tvSeries.map((series) => {
      return (
          <MovieCard key={series.id} onClick={() => navigate(`/tv/${series.id}`)}>
              <img src={IMG_API + series.poster_path} alt={series.title}/>
              <p>{series.vote_average}</p>
              <h3>{series.original_name}</h3>
          </MovieCard>
      )
  });

    const data = {
        page,
        cast,
        movieInfo,
        similarFilm,
        tvInfo,
        setTvInfo,
        setSimiliarFilm,
        setMovieInfo,
        setCast,
        setPage,
        getGenres,
        getPopularMovies,
        getTopRatedMovies,
        getTvSeries,
        getTrending,
        movieGenres,
        popularMovieCatalog,
        topRatedCatalog,
        tvSeriesCatalog,
        tvSeries,
        trendingCatalog,
    };

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
};

export default GlobalState;

