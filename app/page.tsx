import ChatsList from '@/components/chat/chats-list';
import ChatPageLayout from '@/layouts/chat-page-layout';

export default async function Home() {
  return (
    <div className='w-full '>
      <ChatPageLayout>
        <div className='w-full flex sm:space-x-8'>
          <div className='w-full flex sm:w-64 md:w-96 h-[calc(100vh-5rem)] overflow-auto'>
            <ChatsList />
          </div>
        </div>
      </ChatPageLayout>
    </div>
  );
}
