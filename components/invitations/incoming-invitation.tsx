'use client';

import {InviterUserData, useGetUserData} from '@/hooks/user/use-get-user-data';
import UsersListLayout from '@/layouts/users-list-layout';
import {Avatar} from '@nextui-org/avatar';
import {useEffect, useState} from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

interface Props {
  invitationId: string;
}

export default function IncomingInvitation({invitationId}: Props) {
  const {getInviterUserData} = useGetUserData();
  const [inviterData, setInviterData] = useState<InviterUserData>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getInviterUserData(invitationId);
      setInviterData(data);
    };
    fetchData();
  }, []);

  const acceptInvitation = async () => {};
  const declineInvitation = async () => {};

  return (
    <UsersListLayout>
      <div className='h-16 flex items-center justify-between dark:text-neutral-200'>
        <div className='flex space-x-2 items-center'>
          <div className='w-12 h-12'>
            <Avatar className='w-12 h-12' src={inviterData!?.avatarUrl} />
          </div>
          <div className='flex flex-col'>
            <span>{inviterData!?.displayName}</span>
            <span className='text-sm dark:text-neutral-400'>{inviterData!?.email}</span>
          </div>
        </div>
        <div className='space-x-6 flex px-2'>
          <div className='flex items-center justify-center w-7 h-7 bg-green-600 dark:bg-green-500/30 hover:bg-green-500 hover:dark:bg-green-600 transition-all ease-in-out duration-150 rounded-full cursor-pointer text-neutral-50 dark:text-neutral-200'>
            <CheckIcon />
          </div>
          <div className='flex items-center justify-center w-7 h-7 bg-red-600 dark:bg-red-500/30 hover:bg-red-500 hover:dark:bg-red-600 transition-all ease-in-out duration-150 rounded-full cursor-pointer text-neutral-50 dark:text-neutral-200'>
            <ClearIcon />
          </div>
        </div>
      </div>
    </UsersListLayout>
  );
}
