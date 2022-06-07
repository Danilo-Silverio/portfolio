import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Header,
  HeaderButtons,
  LoginButton,
  NavigationBar,
  SignUpButton,
} from "../../assets/styles/Home/HomeHeaderStyle";
import Logo from "../../assets/images/logo.png";
import { goToMovies } from "../../router/coordinator";

const HomeHeader = () => {
  
  const navigate = useNavigate();

  return (
    <Header>
      <div>
        <img src={Logo} alt="Filmeo logo" />
      </div>
      <NavigationBar>
        <nav>
          <ul>
            <li onClick={() => window.scrollTo(0, 0)}>Início</li>
            <li onClick={() => window.scrollTo(0, 1300)}>Sobre</li>
            <li onClick={() => window.scrollTo(0, 2000)}>Contato</li>
          </ul>
        </nav>
      </NavigationBar>
      <HeaderButtons>
        <LoginButton onClick={() => goToMovies(navigate)}>Entrar</LoginButton>
        <SignUpButton>Registre-se</SignUpButton>
      </HeaderButtons>
    </Header>
  );
};

export default HomeHeader;
