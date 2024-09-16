'use client';
import {Input} from '@nextui-org/react';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from 'react';
import {useFindUsers} from '@/hooks/use-find-users';
import {usePeopleStore} from '@/providers/people-store-provider';

export default function SearchPeopleInput() {
  const {people, setPeopleList} = usePeopleStore((state) => state);
  const {findUsers} = useFindUsers();
  const [inputValue, setInputValue] = useState<string>('');
  const searchUsers = async (e: React.KeyboardEvent<HTMLInputElement> | KeyboardEvent) => {
    if (e.key === 'Enter') {
      const people = await findUsers(inputValue);
      setPeopleList(people);
    }
  };
  return (
    <Input
      onKeyDown={(e) => searchUsers(e)}
      onChange={(e) => setInputValue(e.target.value)}
      className='w-full sm:w-[35rem]'
      placeholder={'Search on Chapp'}
      startContent={<SearchIcon className='text-neutral-700 dark:text-neutral-500' />}
    />
  );
}
