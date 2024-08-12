import ChatSearchInput from './chat-search-input';
import ChatTile from './chat-tile';
import Link from 'next/link';

export default function ChatsList() {
  return (
    <div className='w-full sm:w-64 md:w-96 flex flex-col space-y-4 sm:h-[calc(100vh-5rem)] '>
      <ChatSearchInput />
      <div className='px-2 py-2 flex flex-col space-y-2 overflow-y-auto '>
        {Array.from({length: 20}, (_, idx) => (
          <Link href='/1' key={idx}>
            <ChatTile />
          </Link>
        ))}
      </div>
    </div>
  );
}
