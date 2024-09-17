export default function UsersListPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className='flex flex-col space-y-4 items-center'>{children}</div>;
}
