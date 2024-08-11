import {Avatar} from '@nextui-org/react';

export default async function ChatUserInfo() {
  const displayName = 'John';

  const fallbackInitials = displayName.split(' ')[1]
    ? displayName.split(' ')[0].slice(0, 1) + displayName.split(' ')[1].slice(0, 1)
    : displayName.slice(0, 4);
  return (
    <div className='flex items-center space-x-2 h-16 w-full'>
      <Avatar showFallback name={fallbackInitials} src={''} />
      <span>{displayName}</span>
    </div>
  );
}
