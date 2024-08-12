import ChatUserInfo from '@/components/user/chat-user-info';
import ChatWindowSendMessageInput from './chat-window-send-message-input';
import Messages from './messages';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from 'next/link';

interface Props {
  id?: string;
}
export default function ChatWindow({id}: Props) {
  const getConversation = () => {
    console.log(id);
  };

  getConversation();
  return (
    <div className='relative flex max-w-full h-[calc(100vh-5rem)] overflow-hidden'>
      <Link href='/'>
        <ChevronLeftIcon className='sm:hidden absolute left-0 top-0 z-30 text-[2.5rem] cursor-pointer mb-[50px] ' />
      </Link>
      <div className='flex flex-col w-full justify-end h-[100%] '>
        <ChatUserInfo />
        <Messages />
        <ChatWindowSendMessageInput />
      </div>
    </div>
  );
}
