import Chat from './Chat.js'
import TextArea from './TextArea.js'

function ChatWrap() {
  return (
    <div className="chatWrap">
      <Chat bg='#D6C6E1' name='user' text='가나다라'></Chat>
      <Chat bg='#9A73B5' name='Gpt' text='마바사아'></Chat>
      <TextArea></TextArea>
    </div>
  );
}
export default ChatWrap;