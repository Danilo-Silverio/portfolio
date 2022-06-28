import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";

//STYLED-COMPONENTS
import { MessageBox, MessageContent, MessageDate, MessageText } from "../../assets/styles/components/Messages/MessagesStyle";


const Messages = () => {
    
    const {activeChat} = useContext(GlobalStateContext);

    return(    
        <MessageBox>            
            <MessageContent>
                <MessageText>{activeChat.lastMessage}</MessageText>
                <MessageDate>19:00</MessageDate>
            </MessageContent>
        </MessageBox>
    )
};

export default Messages;