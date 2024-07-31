import {Avatar} from '@nextui-org/avatar';

export default function ChatTile() {
  const sampleLastMessage =
    'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  const sampleDate = new Date();
  return (
    <div className='w-full flex h-16 space-x-2 dark:text-neutral-200'>
      <div className='w-12 h-12'>
        <Avatar className='w-12 h-12' />
      </div>
      <div className='overflow-y-hidden '>
        <span>User's name</span>
        <div className='text-ellipsis overflow-y-hidden line-clamp-1 '>
          <span className='text-sm'>{sampleLastMessage} </span>
        </div>
      </div>
      <div className='w-36 h-12 overflow-hidden'>
        <span className='text-xs'>{sampleDate.toString()}</span>
      </div>
    </div>
  );
}
