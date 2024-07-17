interface Props {
  onClick: any;
  text: string;
}
export default function FormSubmitButton({onClick, text}: Props) {
  return (
    <button
      className='w-full rounded-lg bg-sky-400 dark:bg-sky-600 py-2 text-zinc-100 font-medium text-md'
      onClick={onClick}>
      {text}
    </button>
  );
}
