'use client';
import {Avatar} from '@nextui-org/avatar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useLayoutEffect} from 'react';
import useInviteUser from '@/hooks/invitations/use-invite-user';
interface Props {
  uid: string;
  displayName: string;
  email: string;
}
export default function UserSearchResultTile() {
  const {inviteUser} = useInviteUser();

  const checkIsPending = () => {
    return false;
  };

  useLayoutEffect(() => {}, []);

  const checkIfFriend = () => {
    return false;
  };

  return (
    <div className='relative w-full flex h-16 space-x-2 dark:text-neutral-200'>
      <div className='w-12 h-12'>
        <Avatar className='w-12 h-12' />
      </div>
      <div className='flex flex-col'>
        <span>User's name</span>
        <span className='text-sm dark:text-neutral-400'>User's e-mail</span>
      </div>
      {!checkIsPending() ? (
        <button
          className='absolute right-0 top-0 h-6 w-6 flex items-center justify-center bg-green-600 hover:bg-green-500 ease-in-out duration-150 rounded-full'
          onClick={() => inviteUser('1', '2')}>
          <AddIcon sx={{fontSize: '20px'}} />
        </button>
      ) : (
        <button className='absolute right-0 top-0 h-6 w-6 flex items-center justify-center bg-red-700 hover:bg-red-500 ease-in-out duration-150  rounded-full'>
          <RemoveIcon sx={{fontSize: '20px'}} />
        </button>
      )}
    </div>
  );
}
