import styled from "styled-components";
import { primaryBlue, secondaryBlue, secondaryColor, tertiaryBlue } from "../../../../constants/colors";
import Background from "../../../images/background-chat.jpg";

// 1. CHAT WINDOW AREA----------------------------------------------------------------

export const ChatWindowArea = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

// (1.1 CHAT WINDOW AREA HEADER)
export const ChatWindowAreaHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 6px 0;
    border-bottom: 1px solid ${secondaryColor};
    background-image: linear-gradient(to bottom, ${primaryBlue} 50%, ${secondaryBlue});
`;

export const ChatWindowHeaderInfo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    img{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        margin:0 10px 0 25px;
    }
    h1{
        font-size: 18px;
        font-weight: 500;
        color: ${secondaryColor};
    }
`;

export const ChatWindowHeaderButtons = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        margin-right: 10px;
        border: none;
        border-radius: 50%;
        background-color: transparent;
        cursor: pointer;
        transition: all 0.4s ease;
    }
    button:hover{
        background-color: ${tertiaryBlue};
    }
`;

// (1.2 CHAT WINDOW AREA BODY)
export const ChatWindowAreaBody = styled.div`
    flex: 1;
    overflow-y: auto;
    background-color: ${secondaryColor};
    background-image: url(${Background});
    background-position: center;
    ::-webkit-scrollbar{
        width: 6px;
        height: 6px;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 20px;
        background-color: ${primaryBlue};
    }
`;

// (1.3 CHAT WINDOW AREA FOOTER)
export const ChatWindowAreaFooter = styled.div`
    display: flex;
    align-items: center;
    height: 65px;
    box-shadow: 0 -3px 15px #b4b7b4;
    background-image: linear-gradient(to bottom, ${tertiaryBlue} 35%, ${secondaryColor});
`;

export const EmojiDisplay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 15px;
    cursor: pointer;
`;

export const CloseButton = styled.button`
    border: none;
    background-color: transparent;
`;

export const EmojiButton = styled.button`
    padding: 4px;
    border: none;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
`;

export const InputArea = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    input{
        height: 45px;
        width: 95%;
        border: 0;
        outline: 0;
        border-radius: 15px;
        font-size: 15px;
        font-weight: 500;
        padding-left: 30px;
        color: #4A4A4A;
        background-color: ${secondaryColor};
    }
`;

export const SendMessageButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 25px;
    padding: 5px;
    border: none;
    border-radius: 50px;
    background-color: transparent;
    cursor: pointer;
`;

// (1.4 CHAT WINDOW EMOJI AREA)
export const EmojiArea = styled.div`
    overflow-y: hidden;
    transition: all 0.3s ease;
`;

// 1.5 (MESSAGES)----------------------------------------------------------------
export const MessageBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-width: 100%;
    margin: 0 40px 0 80px;
    overflow-wrap: break-word;
`;

export const MessageContent = styled.div`
    display: flex;
    max-width: 100%;
    flex-direction: column;
    padding: 10px;
    margin-top: 20px;
    border-radius: 10px;
    overflow-wrap: break-word;
    background-color: ${tertiaryBlue};
`;

export const MessageText = styled.p`
   font-size: 14px;
   margin: 5px 40px 5px 5px;
`;

export const MessageDate = styled.p`
    height: 15px;
    text-align: right;
    font-size: 11px;
    margin: 0 5px 0 0;
    color: #999;
`;