import ChatSearchInput from './chat-search-input';
import ChatTile from './chat-tile';

export default function ChatsList() {
  return (
    <div className='w-full flex flex-col space-y-2'>
      <ChatSearchInput />
      <div className='px-2 py-2 flex flex-col space-y-2'>
        {Array.from({length: 10}, (_, idx) => (
          <ChatTile />
        ))}
      </div>
    </div>
  );
}
