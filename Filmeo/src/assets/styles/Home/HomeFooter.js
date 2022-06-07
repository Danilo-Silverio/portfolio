import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    background-color: #0b0a0a;
`;
export const Main = styled.div`
    display: flex;
    align-items: center;
    padding: 2% 0;
    margin-bottom: 4%;
    width: 100%;
    justify-content: space-between;
    @media screen and (max-width: 770px){
        display: flex;
        flex-direction: column;
    }
`;
export const Company = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 3%;
    width: 50%;
    img{
        height: 4rem;
    }
    p{
        text-transform: uppercase;
        font-weight: 400;
        color: #fff;
    }
    @media screen and (max-width: 770px){
        width: 80%;
        p{
            font-size: 0.9rem;
            padding-left: 5%;
            margin-bottom: 10%;
        }
    }
`;
export const Information = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    li{
        list-style: none;
        font-weight: 400;
        font-size: 1.2rem;
        margin-bottom: 5%;
        cursor: pointer;
        color: #fff;
    }
    li:first-child{
        font-weight: 700;
        font-size: 1.6rem;
        margin-bottom: 20%;
    }
    @media screen and (max-width: 770px){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
    }
`;
export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    border-top: 1px solid gray;
    p{
        font-weight: 700;
        font-size: 1.3rem;
        color: #fff;
    }
    @media screen and (max-width: 770px){
        width: 90%;
        p{
            font-size: 0.8rem;
        }
    }
`; 
export const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5%;
    gap: 30%;
    img{
        height: 4rem;
        border-radius: 50%;
        margin-bottom: 50%;
    }
    @media screen and (max-width: 770px){
        gap: 20px;
        img{
            height: 3rem;
            margin-top: 50%;
        }
    }
`;