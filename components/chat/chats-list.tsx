import ChatSearchInput from './chat-search-input';
import ChatTile from './chat-tile';

export default function ChatsList() {
  return (
    <div className='w-full flex flex-col space-y-2'>
      <ChatSearchInput />
      {Array.from({length: 10}, (_, idx) => (
        <ChatTile />
      ))}
    </div>
  );
}
