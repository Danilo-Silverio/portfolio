import styled from "styled-components";



// 1. MESSAGES----------------------------------------------------------------
export const MessageBox = styled.div`
    display: flex;
    max-width: 80%;
`;

export const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    padding: 10px;
    margin: 20px 0 0 20px;
    border-radius: 10px;
    overflow-wrap: break-word;
    background-color: #fff;
`;

export const MessageText = styled.p`
   font-size: 14px;
   font-weight: 400;
   line-height: 30px;
   margin: 5px 40px 5px 5px;
`;

export const MessageDate = styled.p`
    height: 15px;
    text-align: right;
    font-size: 11px;
    margin: 0 5px 0 0;
    color: #999;
`;