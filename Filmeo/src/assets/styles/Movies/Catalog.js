import styled from "styled-components";

export const Catalog = styled.div`
  display: flex;
  height: 34rem;
  overflow-x: scroll;
  ::-webkit-scrollbar {
        height: 18px;
    }
    ::-webkit-scrollbar-track {
        background-color: #DDDDDD;
        border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #5C16C5;
        border-radius: 8px;
    }
  @media screen and (max-width: 750px){
    height: fit-content;
    ::-webkit-scrollbar {
    display: none;
  }
  }
`;
export const MovieCard = styled.div`
  margin: 0 1% 0 0;
  cursor: pointer;
  img {
    height: 20rem;
    width: 15rem;
    border-radius: 9px;
    cursor: pointer;
    transition: all 1s ease;
  }
  img:hover {
    height: 24rem;
    width: 18rem;
    box-shadow: 10px 10px 80px rgba(72, 71, 75, 0.692);
  }
  p {
    text-align: center;
    width: 10%;
    padding: 3%;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 700;
    color: #fff;
    background-color: #5c16c5;
  }
  h3{
    font-size: 1.1rem;
    color: #fff;
  }
  @media screen and (max-width: 750px){
    margin: 0 3% 0 0;
    img{
      height: 15rem;
      width: 12rem;
    }
    img{
      :hover{
        height: 15rem;
        width: 12rem;
      }
    }
    h3{
      font-size: 0.9rem;
    }
  }
`;
export const Votes = styled.div`
  display: flex;
  align-items: center;
  margin: 5% 0 25% 0;
  color: #fff;
  img{
    height: 2rem;
    width: 2rem;
    margin-right: 3%;
  }
  img:hover{
    height: 3rem;
    width: 3rem;
    box-shadow: none;
  }
  @media screen and (max-width: 750px){
    img{
      height: 2rem;
      width: 2rem;
    }
    h4{
      font-size: 0.8rem;
    }
  }
`;
