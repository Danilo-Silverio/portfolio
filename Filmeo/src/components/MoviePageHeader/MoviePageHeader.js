import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Header,
  HeaderButtons,
  NavigationBar,
  HomeButton
} from "../../assets/styles/Movies/MovieHeaderStyle";
import Logo from "../../assets/images/logo.png";
import UserIcon from "../../assets/images/user.png";

const HeaderPage = () => {
  
  const navigate = useNavigate();

  return (
    <Header>
      <div>
        <img src={Logo} alt="Filmeo logo" />
      </div>
      <NavigationBar>
        <nav>
          <ul>
            <li onClick={() => window.scrollTo(0, 2000)}>Populares</li>
            <li onClick={() => window.scrollTo(0, 1500)}>Gêneros</li>
            <li onClick={() => window.scrollTo(0, 4000)}>Séries</li>            
          </ul>
        </nav>
      </NavigationBar>
      <HeaderButtons>
        <HomeButton onClick={() => navigate("/")}>Home</HomeButton>
        <img src={UserIcon} alt="User Icon" />
      </HeaderButtons>
    </Header>
  );
};

export default HeaderPage;