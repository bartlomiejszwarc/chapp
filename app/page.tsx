import ChatWindow from '@/components/chat/chat-window/chat-window';
import ChatsList from '@/components/chat/chats-list';
import CurrentUserTile from '@/components/user/current-user-tile';
import ChatPageLayout from '@/layouts/chat-page-layout';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default async function Home() {
  return (
    <div className='w-full '>
      <ChatPageLayout>
        <div className='w-full flex sm:space-x-8'>
          <div className='hidden w-full sm:flex sm:w-96 md:w-[30rem] h-[calc(100vh-5rem)]'>
            <ChatsList />
          </div>
          <div className='relative flex w-full h-[calc(100vh-5rem)]'>
            <ChevronLeftIcon className='sm:hidden absolute left-0 top-0 z-30 text-5xl cursor-pointer ' />
            <ChatWindow />
          </div>
        </div>
      </ChatPageLayout>
    </div>
  );
}
