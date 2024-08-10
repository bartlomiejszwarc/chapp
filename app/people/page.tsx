import UserSearchResultTile from '@/components/user/user-search-result-tile';
import {Input} from '@nextui-org/react';
import SearchIcon from '@mui/icons-material/Search';

export default function Page() {
  return (
    <div className='flex flex-col space-y-4 items-center'>
      <Input
        className='w-full sm:w-[35rem]'
        placeholder={'Search on Chapp'}
        startContent={<SearchIcon className='text-neutral-700 dark:text-neutral-500' />}
      />
      <div className='px-2 py-2 flex flex-col space-y-2 w-full sm:w-[35rem] '>
        {Array.from({length: 10}, (_, idx) => (
          <UserSearchResultTile key={idx} />
        ))}
      </div>
    </div>
  );
}
