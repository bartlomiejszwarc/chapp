'use client';
import {Avatar} from '@nextui-org/avatar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useEffect, useState} from 'react';
import useInviteUser from '@/hooks/invitations/use-invite-user';
import {createClient} from '@/utils/supabase/client';
import {User} from '@supabase/supabase-js';
interface Props {
  id: string;
  avatarUrl: string;
  displayName: string;
  email: string;
}
export default function UserSearchResultTile({id, displayName, email, avatarUrl}: Props) {
  const {inviteUser} = useInviteUser();
  const supabase = createClient();
  const [currentUser, setCurrentUser] = useState<User | null>();

  const checkIsPending = () => {
    return false;
  };

  useEffect(() => {
    const getUserData = async () => {
      const {
        data: {user},
      } = await supabase.auth.getUser();
      setCurrentUser(user);
    };
    getUserData();
  }, []);

  const checkIfFriend = () => {
    return false;
  };

  return (
    <div className='relative w-full flex h-16 space-x-2 dark:text-neutral-200'>
      <div className='w-12 h-12'>
        <Avatar className='w-12 h-12' src={avatarUrl} />
      </div>
      <div className='flex flex-col'>
        <span>{displayName}</span>
        <span className='text-sm dark:text-neutral-400'>{email}</span>
      </div>
      {!checkIsPending() ? (
        <button
          className='absolute right-0 top-0 h-6 w-6 flex items-center justify-center bg-green-600 hover:bg-green-500 ease-in-out duration-150 rounded-full'
          onClick={() => inviteUser(currentUser!?.id, id)}>
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
