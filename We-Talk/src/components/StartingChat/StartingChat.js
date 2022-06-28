import React from "react";

//IMAGES
import WeBot from "../../assets/images/wetalk-icon.png";

//STYLED-COMPONENTS
import { StartingChatContent } from "../../assets/styles/components/StartingChat/StartingChatStyle";

const StartingChat = () => {
    return(
        <StartingChatContent>
            <img src={WeBot} alt="We Talk bot" />
            <h1>Conecte-se com WeTalk</h1>
            <h2>WeTalk é um aplicativo Web para computadores que tem a missão de fortalecer a comunicação e conexão de pessoas ao redor do mundo.</h2>
        </StartingChatContent>
    )
};

export default StartingChat;