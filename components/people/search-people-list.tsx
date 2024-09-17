'use client';

import {usePeopleStore} from '@/providers/people-store-provider';
import UserSearchResultTile from '../user/user-search-result-tile';
import UsersListLayout from '@/layouts/users-list-layout';

export default function SearchPeopleList() {
  const {people} = usePeopleStore((state) => state);
  return (
    <UsersListLayout>
      {people!?.map((user, idx) => (
        <UserSearchResultTile key={idx} {...user} />
      ))}
    </UsersListLayout>
  );
}
