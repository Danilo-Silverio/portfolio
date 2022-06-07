import React from "react";
import  { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/Error/ErrorPage";
import HomePage from "../pages/Home/HomePage";
import MoviesDetailsPage from "../pages/Movies/MovieDetailsPage";
import MovieFeedPage from "../pages/Movies/MovieFeedPage";
import TvSeriesDetailsPage from "../pages/Series/TvSeriesDetailsPage";

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/movie/feed" element={<MovieFeedPage/>}/>
            <Route path="/movie/:id" element={<MoviesDetailsPage/>}/>
            <Route path="/tv/:id" element={<TvSeriesDetailsPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    )
};

export default Router;