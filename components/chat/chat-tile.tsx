import convertDate from '@/utils/convert-date';
import {Avatar} from '@nextui-org/avatar';

interface Props {
  uid: string;
  name: string;
  lastMessage: string;
  lastMessageDate: Date;
  userImageUrl: string;
}

export default function ChatTile() {
  const sampleLastMessage =
    'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  const sampleDate = new Date();
  return (
    <div className='w-full flex h-16 space-x-2 dark:text-neutral-200 justify-between cursor-pointer'>
      <div className='w-12 h-12'>
        <Avatar className='w-12 h-12' />
      </div>
      <div className='overflow-y-hidden'>
        <span>User's name</span>
        <div className='text-ellipsis overflow-y-hidden line-clamp-1 '>
          <span className='text-sm'>{sampleLastMessage} </span>
        </div>
      </div>
      <span className='text-xs'>{convertDate(sampleDate, 'minimal')}</span>
    </div>
  );
}
