'use client';

import {usePeopleStore} from '@/providers/people-store-provider';
import UserSearchResultTile from '../user/user-search-result-tile';

export default function SearchPeopleList() {
  const {people} = usePeopleStore((state) => state);
  return (
    <div className='px-2 py-2 flex flex-col space-y-2 w-full sm:w-[35rem] '>
      {people.map((user, idx) => (
        <UserSearchResultTile key={idx} />
      ))}
    </div>
  );
}
