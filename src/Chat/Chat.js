import styled from 'styled-components'

import Picture from './Picture.js'
import ChatText from './ChatText.js'

function Chat(props) {
  return (
    <EachChat bg={props.bg}>
      <Picture name={props.name}></Picture>
      <ChatText text={props.text}></ChatText>
    </EachChat>
  );
}

const EachChat = styled.div`
  width: 99%;
  height: 110px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 0.5px solid white;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
  color: #4A4A4A;
  box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / .05);
  background-color:${props => props.bg};
`;


export default Chat;