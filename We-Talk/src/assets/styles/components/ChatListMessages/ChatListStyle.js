import styled from "styled-components";
import { tertiaryBlue } from "../../../../constants/colors";

// 1. CHAT LIST MESSAGES----------------------------------------------------------------
export const ChatListMessage = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
    cursor: pointer; 
    transition: all 0.3s;
    background-color:  ${props => props.active ? `${tertiaryBlue}` : "#fff"};
    img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-left: 15px;
    }
    :hover{
        background-color: ${tertiaryBlue};
    }
`;

export const ChatListMessageContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    flex: 1;
    padding-right: 15px;
    margin-left: 15px;
    border-bottom: 1px solid rgba(143, 143, 145, 0.336);
    flex-wrap: wrap;
    min-width: 0;
    :hover{
        border: none;
    }
`;

// (1.1 MESSAGE CONTENT)
export const MessageContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const MessageContentName = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #000;
`;

export const MessageContentDate = styled.div`
    font-size: 12px;
    color: #999;
`;

export const MessageContentLastMsg = styled.div`
    display: flex;
    width: 100%;
    font-size: 14px;
    color: #999;
    p{
        font-weight: 400;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 4% 0 0 0;
    }
`;
