import SignInForm from '@/components/form/sign-in-form';

export default function Page() {
  return (
    <div className='min-h-screen w-full  flex'>
      <div className='w-0 lg:w-1/2 xl:w-2/3 bg-sky-200 dark:bg-zinc-800 flex text-zinc-800 '>
        <span>Left - image</span>
      </div>
      <div className='w-full lg:w-1/2 xl:w-1/3 bg-white dark:bg-zinc-900 flex items-center justify-center'>
        <div className='w-[90%] sm:w-[60%] lg:w-[80%]'>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
