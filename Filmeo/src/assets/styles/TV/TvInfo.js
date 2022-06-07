import styled from "styled-components";

export const Series = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 100vh;
    padding: 3% 2% 5% 5%;
    color: #fff;
    background-image: linear-gradient(to bottom, #07020b, #0b0a0a );
    img{
        height: 40rem;
        border-radius: 20px;
        margin: 0 5% 0 0;
        box-shadow: 10px 10px 30px black;
    }
    @media screen and (max-width: 800px){
        display: flex;
        flex-direction: column;
        align-items: center;
        height: fit-content;
        padding: 2%;
        img{
            margin-top: 10%;
            height: 30rem;
            width: 90%;
        }
    }
`;
export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        font-size: 3rem;
    }
    p{
        font-size: 1.1rem;
    }
    div{
        display: flex;
        gap: 1vw;
        p:last-child{
            font-size: 1.1rem;
        }
    }
    span{
        font-weight: 700;
        padding: 1.3%;
        border-radius: 50%;
        margin-right: 1%;
        background-color: #42288c;
    }
    h2{
        font-size: 2rem;
    }
    p:last-child{
        text-align: justify;
        font-size: 1.3rem;
        font-weight: 300;
        width: 70%;
    }
    @media screen and (max-width: 800px){
        margin-left: 5%;
        h1{
            font-size: 1.6rem;
            margin-top: 16%;
        }
        p{
            font-size: 1rem;
        }
        div{
        p:last-child{
            width: 30%;
            font-size: 1rem;
        }
    }
        p:last-child{
            font-size: 1rem;
            width: 80%;
        }
    }
`;