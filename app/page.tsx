import ChatsList from '@/components/chat/chats-list';
import CurrentUserTile from '@/components/user/current-user-tile';
import ChatPageLayout from '@/layouts/chat-page-layout';

export default async function Home() {
  return (
    <div className='w-full'>
      <ChatPageLayout>
        <div className='w-full flex space-x-8'>
          <div className='w-full flex sm:w-96 md:w-[30rem] '>
            <ChatsList />
          </div>
          <div className='hidden sm:flex sm:w-full'>
            <ChatsList />
          </div>
        </div>
      </ChatPageLayout>
    </div>
  );
}
