import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Header,
    HeaderButtons,
    HomeButton
  } from "../../assets/styles/MovieInfo/HeaderDetailsPage";
import Logo from "../../assets/images/logo.png";
import UserIcon from "../../assets/images/user.png";

const TvHeader = () => {
  
  const navigate = useNavigate();

  return (
    <Header>
      <div>
        <img src={Logo} alt="Filmeo logo" />
      </div>
      <HeaderButtons>
        <HomeButton onClick={() => navigate("/movie/feed")}>Catálogo</HomeButton>
        <HomeButton onClick={() => navigate("/")}>Home</HomeButton>
        <img src={UserIcon} alt="User Icon" />
      </HeaderButtons>
    </Header>
  );
};

export default TvHeader;