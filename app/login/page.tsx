export default function Page() {
  return (
    <div className='min-h-screen w-full  flex'>
      <div className='w-2/3 bg-sky-200 flex text-zinc-800 '>
        <span>Hero image</span>
      </div>
      <div className='w-1/3 bg-white dark:bg-zinc-700 flex'>
        <span>Login side</span>
      </div>
    </div>
  );
}
