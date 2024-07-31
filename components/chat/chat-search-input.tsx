import {Input} from '@nextui-org/react';
import SearchIcon from '@mui/icons-material/Search';

export default function ChatSearchInput() {
  return (
    <Input
      placeholder={'Search in Chapp'}
      startContent={<SearchIcon className='text-neutral-700 dark:text-neutral-500' />}
    />
  );
}
