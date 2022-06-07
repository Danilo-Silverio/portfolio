import React from "react";
import MovieInformation from "../../components/MovieInformation/MovieInformation";
import MovieCast from "../../components/MovieInformation/MovieCast";
import RecommendedMovie from "../../components/MovieInformation/RecommendedMovie";
import { Page } from "../../assets/styles/MovieInfo/DetailsPage";
import HeaderDetailsPage from "../../components/HeaderDetailsPage.js/HeaderDetailsPage";

const MoviesDetailsPage = () => {

  return (
    <Page>
      <HeaderDetailsPage/>
        <main>
          <MovieInformation/>
          <MovieCast/>
          <RecommendedMovie/>
        </main>
    </Page>
  );
};

export default MoviesDetailsPage;
