import SignInForm from '@/components/form/sign-in-form';
import ChattingSvg from '@/components/svgs/chatting-svg';
import Logo from '@/components/svgs/logo';

export default function Page() {
  return (
    <div className='min-h-screen w-full  flex'>
      <div className='hidden lg:w-1/2 xl:w-2/3 bg-sky-100 dark:bg-zinc-800 lg:flex flex-col items-center justify-center text-zinc-800 dark:text-zinc-200'>
        <ChattingSvg />
        <Logo />
      </div>
      <div className='w-full lg:w-1/2 xl:w-1/3 bg-white dark:bg-zinc-900 flex items-center justify-center'>
        <div className='w-[90%] sm:w-[60%] lg:w-[80%]'>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
