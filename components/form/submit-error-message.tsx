import WarningIcon from '@mui/icons-material/Warning';

interface Props {
  text: string;
}
export default function SubmitErrorMessage({text}: Props) {
  return (
    <div className='flex items-center space-x-1'>
      <WarningIcon className='text-red-600 text-base' />
      <span className='text-sm text-red-600 font-medium dark:font-normal'>{text}</span>
    </div>
  );
}
