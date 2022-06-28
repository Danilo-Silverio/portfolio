import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

//IMAGES
import WeBot from "../assets/images/wetalk-icon.png";

const GlobalState = (props) => {
  const [textMessage, setTextMessage] = useState([""]);
  const [chatList, setChatList] = useState([
    { 
      chatId: 1, 
      person: "WeBot", 
      profilePicture: `${WeBot}`,
      lastMessage: "Olá, tudo bem? Eu sou o We Bot, ajudante aqui na plataforma We Talk. Você sabia que nossa missão é fortalecer a comunicação e conexão de pessoas ao redor do mundo? Para isso precisamos de tempo para entregar a plataforma em sua melhor forma. Agradeço pela interação, vamos crescer e desenvolver juntos! 😄😄",
      message: []
    },
  ]);
  const [activeChat, setActiveChat] = useState([{}]);
  const [emojiPickerDisplay, setEmojiPickerDisplay] = useState(false);
  const [chatMessage, setChatMessage] = useState([]);

  const data = {
    chatList,
    activeChat,
    emojiPickerDisplay,
    textMessage,
    chatMessage,
    setChatMessage,
    setTextMessage,
    setEmojiPickerDisplay,
    setChatList,
    setActiveChat
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
