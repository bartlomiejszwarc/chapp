import {ReactNode} from 'react';
interface Props {
  children: ReactNode;
  icon: JSX.Element;
}
export default function InputWithIconTemplate({children, icon}: Props) {
  return (
    <div className='flex'>
      <div className='rounded-s-lg px-3 py-3 border-[1px] border-transparent border-r-0 bg-sky-400 dark:bg-zinc-800 flex items-center'>
        {icon}
      </div>
      <div className='flex items-center justify-between rounded-e-lg border-[1px] rounded-l-none border-l-0 w-full pl-2'>
        {children}
      </div>
    </div>
  );
}
