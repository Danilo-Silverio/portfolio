import React, { useContext, useEffect } from "react";
import { Page, Footer } from "../../assets/styles/Movies/MovieFeedStyle";
import GlobalStateContext from "../../global/GlobalStateContext";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Feed from "../../components/Feed/Feed";
import HeaderPage from "../../components/MoviePageHeader/MoviePageHeader";



const MovieFeedPage = () => {
  const { page, setPage, getGenres, getPopularMovies, getTrending, getTopRatedMovies, getTvSeries } =
    useContext(GlobalStateContext);

  useEffect(() => {
    getGenres();
    getPopularMovies(page);
    getTrending();
    getTopRatedMovies();
    getTvSeries(page);
  }, [page]);

  return (
    <Page>
      <HeaderPage/>
      <Feed/>
      <Footer>
        <CustomPagination setPage={setPage} />
      </Footer>
    </Page>
  );
};

export default MovieFeedPage;
