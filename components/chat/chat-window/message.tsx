import convertDate from '@/utils/convert-date';
import {Avatar} from '@nextui-org/avatar';

interface Props {
  userAvatarUrl?: string;
  message?: string;
  messageUid?: string;
}
export default function Message({userAvatarUrl, message, messageUid}: Props) {
  const sampleDate = new Date();
  return (
    <div className={`w-[95%] flex ${messageUid === '0' ? 'justify-end' : 'justify-start'}`}>
      <div className='flex space-x-2'>
        <div>
          <Avatar />
        </div>
        <div className='flex flex-col space-y-[0.15rem]'>
          <div
            className={`${
              messageUid === '0'
                ? 'bg-sky-500 text-zinc-100 dark:bg-sky-600'
                : ' text-zinc-800 dark:text-zinc-200 bg-zinc-200 dark:bg-zinc-900'
            }  py-2 pl-3 pr-6 max-w-96 flex rounded-lg break-all`}>
            <span className='text-sm'>
              Sample messagedawadawdagedawadagedawadagedawadagedawadagedawadagedawadagedawad Sample
              messagedawadawdagedawadagedawadagedawadagedawadagedawadagedawadagedawad Sample
              messagedawadawdagedawadagedawadagedawadagedawadagedawadagedawadagedawad Sample
              messagedawadawdagedawadagedawadagedawadagedawadagedawadagedawadagedawad
            </span>
          </div>
          <span className='pl-2 text-xs text-zinc-600 dark:text-zinc-400'>{convertDate(sampleDate, 'chat')}</span>
        </div>
      </div>
    </div>
  );
}
