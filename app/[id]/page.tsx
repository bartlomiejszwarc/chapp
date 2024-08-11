import ChatWindow from '@/components/chat/chat-window/chat-window';
import ChatsList from '@/components/chat/chats-list';
import ChatPageLayout from '@/layouts/chat-page-layout';

export default function Page({params}: {params: {id: string}}) {
  const {id} = params;

  return (
    <div className='w-full overflow-y-hidden'>
      <ChatPageLayout>
        <div className='w-full flex sm:space-x-8 overflow-y-hidden'>
          <div className='hidden w-full sm:flex sm:w-96 md:w-[30rem] h-[calc(100vh-4rem)] overflow-y-hidden'>
            <ChatsList />
          </div>
          <ChatWindow id={id} />
        </div>
      </ChatPageLayout>
    </div>
  );
}
