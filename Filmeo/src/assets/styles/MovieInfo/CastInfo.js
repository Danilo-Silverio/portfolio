import styled from "styled-components";

export const CastContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    height: fit-content;
    width: 90vw;
    overflow-y: hidden;
    overflow-x: scroll;
    margin-top: 10%;
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
            padding-left: 30%;
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
                    padding-left: 30%;
                }
            }
        }
`;
export const CastCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 80vh;
    padding: 0 0.8%;
    margin-top: 1%;
    color: #fff;
    img{
        height: 70%;
        width: 17rem;
        border-radius: 20px;
    }
    h2{
        font-size: 1.6rem;
    }
    h3{
        font-size: 1.3rem;
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