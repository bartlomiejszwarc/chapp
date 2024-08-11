import ChatWindow from '@/components/chat/chat-window/chat-window';
import ChatsList from '@/components/chat/chats-list';
import ChatPageLayout from '@/layouts/chat-page-layout';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default async function Home() {
  return (
    <div className='w-full '>
      <ChatPageLayout>
        <div className='w-full flex sm:space-x-8'>
          <div className='w-full flex sm:w-96 md:w-[30rem] h-[calc(100vh-5rem)] overflow-auto'>
            <ChatsList />
          </div>
        </div>
      </ChatPageLayout>
    </div>
  );
}
