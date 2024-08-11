import convertDate from '@/utils/convert-date';
import {Avatar} from '@nextui-org/avatar';

export default function Message() {
  const sampleDate = new Date();
  return (
    <div className={`w-[95%] flex`}>
      <div className='flex space-x-2'>
        <div>
          <Avatar />
        </div>
        <div className='flex flex-col space-y-[0.15rem]'>
          <div className='bg-zinc-300 dark:bg-zinc-900 pt-1 pb-1 pl-2 pr-6 max-w-96 flex rounded-lg break-all'>
            <span className='text-sm'>
              Sample messagedawadawdagedawadagedawadagedawadagedawadagedawadagedawadagedawad Sample
              messagedawadawdagedawadagedawadagedawadagedawadagedawadagedawadagedawad Sample
              messagedawadawdagedawadagedawadagedawadagedawadagedawadagedawadagedawad Sample
              messagedawadawdagedawadagedawadagedawadagedawadagedawadagedawadagedawad
            </span>
          </div>
          <span className='pl-2 text-xs text-zinc-600 dark:text-zinc-400'>{convertDate(sampleDate, 'full')}</span>
        </div>
      </div>
    </div>
  );
}
