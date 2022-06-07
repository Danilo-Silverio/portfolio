import React from "react";
import { Page, Text } from "../../assets/styles/Home/HomeStyle";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import HomeFilms from "../../assets/images/films.png";
import Play from "../../assets/images/play.png";
import HomeFooter from "../../components/HomeFooter/HomeFooter";
import { goToMovies } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";




const HomePage = () => {

    const navigate = useNavigate();

    return (
        <Page>
            <HomeHeader/>
            <main>
                <section>
                    <Text>
                        <p>Encontre seu filme favorito</p>
                        <h1>Os filmes mais populares do momento <span>em um só lugar</span></h1>
                        <h2>Conheça o Filmeo, um aplicativo de streaming que reúne os filmes mais populares, são milhões de filmes, séries e pessoas para descobrir.</h2>
                    </Text>
                    <button onClick={() => goToMovies(navigate)}>Explore já</button>
                </section>
                <section>
                    <div>
                        <img src={Play} alt="Play Movie Icon" />
                        <h3>+2000 conteúdos para assistir</h3>
                    </div>
                    <img src={HomeFilms} alt="Home Films" />
                    <div>
                        <p>✔️ Filmes populares</p>
                        <p>✔️ Séries populares</p>
                        <p>✔️ Desenhos populares</p>
                        <p>✔️ Escolha entre os melhores</p>
                    </div>
                </section>
            </main>
            <HomeFooter/>
        </Page>
    )
};

export default HomePage;