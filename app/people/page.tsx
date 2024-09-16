import SearchPeopleInput from '@/components/people/search-people-input';
import SearchPeopleList from '@/components/people/search-people-list';
export default function Page() {
  return (
    <div className='flex flex-col space-y-4 items-center'>
      <SearchPeopleInput />
      <SearchPeopleList />
    </div>
  );
}
