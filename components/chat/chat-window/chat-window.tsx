import ChatUserInfo from '@/components/user/chat-user-info';
import ChatWindowSendMessageInput from './chat-window-send-message-input';
import Messages from './messages';

export default function ChatWindow() {
  return (
    <div className='flex flex-col w-full justify-end'>
      <ChatUserInfo />

      <Messages />
      <ChatWindowSendMessageInput />
    </div>
  );
}
