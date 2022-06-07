import styled from "styled-components";

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden;
    background-color: #050009;
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
export const FeedPoster = styled.div`
    display: flex;
    width: 100vw;
    @media screen and (max-width: 750px){
        img{
            margin-top: 10%;
            height: 14rem;
            width: 100vw;
        }
    }
`
export const GenreContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: fit-content;
    margin-top: 3%; 
    padding: 2%;
    border-radius: 20px;
    background-color: #171c23;
    @media screen and (max-width: 750px){
        width: 100%;
        border-radius: 0;
        overflow-x: scroll;
        margin-top: 10%;
    }
`;
export const GenreList = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    align-items: center;
    justify-content: center;
    width: 90%;
    gap: 10px;
    button{
        margin: 1%;
        height: 40px;
        width: 100%;
        border: none;
        border-radius: 5px;
        font-family: "Roboto";
        font-size: 16px;
        font-weight: 700;
        background-color: transparent;
        color: #988bc0;
        cursor: pointer;
    }
    button:hover{
        color: #fff;
        background-color: #988bc0;
    }
    @media screen and (max-width: 750px){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 8px;
        margin: 8% 0;
        padding: 3%;
        button{
            height: 40px;
            font-size: 13px;
        }
    }
`;
export const CatalogContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-top: 3%;
    h2{
        font-weight: 700;
        font-size: 2rem;
        color: #fff;
    }
    @media screen and (max-width: 750px){
    margin: 8% 0;
    h2{
        font-size: 1.5rem;
    }
  }
`;
export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    width: 100vw;
    margin: 12% 0 0 0;
    background-color: #42288c;
`;