import ChatWindow from '@/components/chat/chat-window/chat-window';
import ChatsList from '@/components/chat/chats-list';
import ChatPageLayout from '@/layouts/chat-page-layout';

export default function Page({params}: {params: {id: string}}) {
  const {id} = params;

  return (
    <div className='w-full overflow-y-hidden'>
      <ChatPageLayout>
        <div className='w-full flex sm:space-x-8 overflow-y-hidden'>
          <div className='hidden w-full sm:flex sm:w-64 md:w-96 h-[calc(100vh-4rem)] overflow-y-hidden'>
            <ChatsList />
          </div>
          <div className='w-full sm:max-w-[90%]'>
            <ChatWindow id={id} />
          </div>
        </div>
      </ChatPageLayout>
    </div>
  );
}
