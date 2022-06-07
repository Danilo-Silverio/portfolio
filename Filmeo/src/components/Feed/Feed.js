import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { CatalogContent, GenreContent, GenreList, FeedPoster } from "../../assets/styles/Movies/MovieFeedStyle";
import { Catalog } from "../../assets/styles/Movies/Catalog";
import FeedImage from "../../assets/images/feed.png";

const Feed = () => {
    
    const { movieGenres,  popularMovieCatalog, topRatedCatalog, tvSeriesCatalog, trendingCatalog} = useContext(GlobalStateContext);

    return (
    <main>
      <FeedPoster>
        <img src={FeedImage} alt="" />
      </FeedPoster>
      <CatalogContent>
        <h2>Em alta</h2>
        <Catalog>{trendingCatalog}</Catalog>
      </CatalogContent>
      <GenreContent>
        <GenreList>{movieGenres}</GenreList>
      </GenreContent>
      <CatalogContent>
        <h2>Populares</h2>
        <Catalog>{popularMovieCatalog}</Catalog>
      </CatalogContent>
      <CatalogContent>
        <h2>Melhores avaliações</h2>
        <Catalog>{topRatedCatalog}</Catalog>
      </CatalogContent>
      <CatalogContent>
        <h2>Séries</h2>
        <Catalog>{tvSeriesCatalog}</Catalog>
      </CatalogContent>
    </main>
  );
};

export default Feed;
