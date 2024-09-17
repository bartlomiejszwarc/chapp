export default function UsersListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className='px-2 py-2 flex flex-col space-y-2 w-full sm:w-[35rem] '>{children}</div>;
}
