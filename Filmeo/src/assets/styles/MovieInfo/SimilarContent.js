import styled from "styled-components";

export const SimilarContainer = styled.div`
     display: flex;
    flex-direction: column;
    align-items:flex-start;
    height: fit-content;
    width: 90vw;
    margin: 10% 0;
    overflow-y: hidden;
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
    div{
        display: flex;
        h1{
            font-size: 3rem;
            font-weight: 700;
            color: #fff;
        }
    }
    @media screen and (max-width: 770px){
            width: 90vw;
            ::-webkit-scrollbar {
                display: none;
            }
            div{
                h1{
                    font-size: 2rem;
                }
            }
        }
`;
export const RecommendedMovieCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 50vh;
    padding: 0 0.8%;
    margin-top: 1%;
    color: #fff;
    img{
        height: 45%;
        width: 20rem;
        border-radius: 20px;
    }
    h2{
        font-size: 1.4rem;
    }
    h3{
        font-size: 1.1rem;
        font-weight: 300;
    }
    @media screen and (max-width: 770px){
        img{
            height: 50%;
            width: 12rem;
        }
        h2{
            font-size: 1.3rem;
        }
        h3{
            font-size: 1rem;
        }
    }
`;
