import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Header,
  HeaderButtons,
  NavigationBar,
  HomeButton
} from "../../assets/styles/MovieInfo/HeaderDetailsPage";
import Logo from "../../assets/images/logo.png";
import UserIcon from "../../assets/images/user.png";

const HeaderDetailsPage = () => {
  
  const navigate = useNavigate();

  return (
    <Header>
      <div>
        <img src={Logo} alt="Filmeo logo" />
      </div>
      <NavigationBar>
        <nav>
          <ul>
            <li onClick={() => window.scrollTo(0, 2000)}>Informações</li>
            <li onClick={() => window.scrollTo(0, 1300)}>Elenco</li>
            <li onClick={() => window.scrollTo(0, 4000)}>Recomendações</li>            
          </ul>
        </nav>
      </NavigationBar>
      <HeaderButtons>
        <HomeButton onClick={() => navigate("/movie/feed")}>Catálogo</HomeButton>
        <HomeButton onClick={() => navigate("/")}>Home</HomeButton>
        <img src={UserIcon} alt="User Icon" />
      </HeaderButtons>
    </Header>
  );
};

export default HeaderDetailsPage;