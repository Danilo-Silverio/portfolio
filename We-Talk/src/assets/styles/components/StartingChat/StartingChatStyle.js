import styled from "styled-components";
import { mainBlue } from "../../../../constants/colors";

// 1. STARTING CHAT----------------------------------------------------------------
export const StartingChatContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    img{
        height: 40%;
        border-radius: 50%;
        opacity: 20%;
    }
    h1{
        font-size: 40px;
        font-weight: 900;
        color: ${mainBlue};
        opacity: 30%;
    }
    h2{
        font-size: 20px;
        font-weight: 500;
        width: 80%;
        color: rgba(143, 143, 145, 0.44)
    }
`;