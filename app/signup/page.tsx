import SignUpForm from '@/components/form/sign-up-form';
import InfoSvg from '@/components/svgs/info-svg';
import Logo from '@/components/svgs/logo';

export default function Page() {
  return (
    <div className='min-h-screen w-full  flex'>
      <div className='w-0 lg:w-1/2 xl:w-2/3 bg-sky-100 dark:bg-zinc-800 flex flex-col items-center justify-center text-zinc-800 dark:text-zinc-300'>
        <Logo />
        <div className='flex flex-col text-center'>
          <span className='text-base font-thin'>Join us now and connect with people all over the world</span>
        </div>
      </div>
      <div className='w-full lg:w-1/2 xl:w-1/3 bg-white dark:bg-zinc-900 flex items-center justify-center'>
        <div className='w-[90%] sm:w-[60%] lg:w-[80%]'>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
