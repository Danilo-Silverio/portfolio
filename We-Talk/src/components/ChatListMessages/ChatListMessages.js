import React, {useContext} from "react";
import GlobalStateContext from "../../global/GlobalStateContext";

//STYLED-COMPONENTS
import { ChatListMessage, ChatListMessageContent, MessageContent, MessageContentDate, MessageContentLastMsg, MessageContentName } from "../../assets/styles/components/ChatListMessages/ChatListStyle";


const ChatListMessages = () => {
    
    const {chatList, activeChat, setActiveChat} = useContext(GlobalStateContext);

    const chatBox = chatList.map((item, key) => {
        
        return (
            <ChatListMessage key={key} onClick={() => setActiveChat(chatList[key])} active={activeChat === chatList[key]}>
                <img src={item.profilePicture} alt="Avatar Icon" />
                <ChatListMessageContent>
                    <MessageContent>
                        <MessageContentName>{item.person}</MessageContentName>
                        <MessageContentDate>18:00</MessageContentDate>
                    </MessageContent>
                    <MessageContent>
                        <MessageContentLastMsg>
                            <p>{item.lastMessage}</p>
                        </MessageContentLastMsg>
                    </MessageContent>
                </ChatListMessageContent>
            </ChatListMessage>
        )
    })

    return chatBox
};

export default ChatListMessages;