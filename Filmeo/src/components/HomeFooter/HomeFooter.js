import React from "react";
import { Company, Contact, Footer, Information, Main, SocialMedia } from "../../assets/styles/Home/HomeFooter";
import Logo from "../../assets/images/logo.png";
import GitHub from "../../assets/images/logo-do-github.png";
import Linkedin from "../../assets/images/logo-do-linkedin.png";

const HomeFooter = () => {
  return (
    <Footer>
      <Main>
        <Company>
          <img src={Logo} alt="Filmeo Logo Icon" />
          <p>Experimente as escolhas certas</p>
        </Company>
        <Information>
          <div>
            <nav>
              <ul>
                <li>Início</li>
                <li>Home</li>
                <li>Filmes</li>
                <li>Séries</li>
              </ul>
            </nav>
          </div>
          <div>
            <nav>
              <ul>
                <li>Sobre</li>
                <li>Informações</li>
                <li>Contato</li>
                <li>Blog</li>
              </ul>
            </nav>
          </div>
          <div>
            <nav>
              <ul>
                <li>Suporte</li>
                <li>FAQ</li>
                <li>Telefone</li>
                <li>E-mail</li>
              </ul>
            </nav>
          </div>
        </Information>
      </Main>
      <Contact>
        <SocialMedia>
          <a href="https://github.com/Danilo-Silverio" target="_blank" rel="noopener noreferrer">
            <img src={GitHub} alt="GitHub Icon" />
          </a>
          <a href="https://www.linkedin.com/in/danilogsilverio/" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="Linkedin Icon" />
          </a>
        </SocialMedia>
        <div>
          <p>Projeto desenvolvido por @Danilo G. Silvério</p>
        </div>
      </Contact>
    </Footer>
  );
};

export default HomeFooter;
