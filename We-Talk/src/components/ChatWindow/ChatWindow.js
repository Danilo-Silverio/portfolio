import React, { useContext } from "react";
import EmojiPicker from "emoji-picker-react";
import GlobalStateContext from "../../global/GlobalStateContext";

// (STYLED-COMPONENTS)
import {
  ChatWindowArea,
  ChatWindowAreaBody,
  ChatWindowAreaFooter,
  ChatWindowAreaHeader,
  ChatWindowHeaderButtons,
  ChatWindowHeaderInfo,
  EmojiArea,
  CloseButton,
  EmojiButton,
  SendMessageButton,
  InputArea,
  EmojiDisplay,
  MessageBox,
  MessageContent,
  MessageText,
  MessageDate
} from "../../assets/styles/components/ChatWindow/ChatWindowStyle";
import "../../assets/styles/components/ChatWindow/emoji.css";

// (IMAGES)


// (MATERIAL UI)
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";

// COMPONENTS
import Messages from "../Messages/Messages";

const ChatWindow = () => {
  const {
    activeChat,
    emojiPickerDisplay,
    setEmojiPickerDisplay,
    textMessage,
    setTextMessage,
    chatMessage,
    setChatMessage
  } = useContext(GlobalStateContext);

  const handleEmojiClick = (e, emojiObject) => {
    setTextMessage(textMessage + emojiObject.emoji);
  };

  const onChangeText = (e) => {
    setTextMessage(e.target.value);
  };

  const newMessage = () => {

    const insertMessage = [...chatMessage, textMessage]

    setChatMessage(insertMessage);
    setTextMessage("");
  };

  const displayMessage = chatMessage.map((item) => {

    return(
        <MessageBox>            
            <MessageContent key={activeChat.chatId}>
                <MessageText>{item}</MessageText>
                <MessageDate>19:00</MessageDate>
            </MessageContent>
        </MessageBox>
    )
  });

  console.log(activeChat)

  return (
    <ChatWindowArea>
      <ChatWindowAreaHeader>
        <ChatWindowHeaderInfo>
          <img src={activeChat.profilePicture} alt="Avatar Icon" />
          <h1>{activeChat.person}</h1>
        </ChatWindowHeaderInfo>
        <ChatWindowHeaderButtons>
          <button>
            <SearchIcon style={{ color: "#f8fbff" }} />
          </button>
          <button>
            <AttachFileIcon style={{ color: "#f8fbff" }} />
          </button>
          <button>
            <MoreVertIcon style={{ color: "#f8fbff" }} />
          </button>
        </ChatWindowHeaderButtons>
      </ChatWindowAreaHeader>
      <ChatWindowAreaBody>
        <Messages/>
        {displayMessage}
      </ChatWindowAreaBody>
      <EmojiArea style={{ height: emojiPickerDisplay ? "280px" : "0px" }}>
        <EmojiPicker disableSearchBar onEmojiClick={handleEmojiClick} />
      </EmojiArea>
      <ChatWindowAreaFooter>
        <EmojiDisplay>
          <CloseButton onClick={() => setEmojiPickerDisplay(false)}>
            <CloseIcon
              fontSize="large"
              style={{
                color: "#5e7aff",
                width: emojiPickerDisplay ? "40px" : "0px",
                cursor: emojiPickerDisplay ? "pointer" : "default",
              }}
            />
          </CloseButton>
          <EmojiButton onClick={() => setEmojiPickerDisplay(true)}>
            <AddReactionIcon
              fontSize="large"
              style={{
                color: "#5e7aff",
                width: emojiPickerDisplay ? "0px" : "40px",
                cursor: emojiPickerDisplay ? "default" : "pointer",
              }}
            />
          </EmojiButton>
        </EmojiDisplay>
        <InputArea>
          <input
            type="text"
            placeholder="Digite uma mensagem"
            value={textMessage}
            onChange={onChangeText}
          />
        </InputArea>
        <SendMessageButton onClick={newMessage}>
          <SendIcon fontSize="large" style={{ color: "#5e7aff" }} />
        </SendMessageButton>
      </ChatWindowAreaFooter>
    </ChatWindowArea>
  );
};

export default ChatWindow;
