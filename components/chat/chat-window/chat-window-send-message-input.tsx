'use client';
import {Textarea} from '@nextui-org/input';
import SendIcon from '@mui/icons-material/Send';
import {useState} from 'react';

interface Props {
  senderUid: string;
  receiverUid: string;
}

export default function ChatWindowSendMessageInput() {
  const [message, setMessage] = useState<string>('');

  const handleSendMessage = () => {
    if (message.length === 0) return;
    console.log(message, message.length);
  };
  return (
    <div className='relative flex items-end'>
      <Textarea placeholder={'Message...'} minRows={1} onChange={(e) => setMessage(e.target.value)} />
      <button
        disabled={message.length === 0 ? true : false}
        className={`ease-in-out duration-150 ${
          message.length === 0
            ? 'text-stone-500 dark:text-zinc-600'
            : 'text-stone-800 dark:text-zinc-400 hover:text-stone-700 hover:dark:text-zinc-300'
        } `}
        onClick={handleSendMessage}>
        <SendIcon className='text-3xl relative ml-4 mb-[0.35rem] z-30 ' />
      </button>
    </div>
  );
}
