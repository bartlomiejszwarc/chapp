export default function ChatPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className='w-full rounded-lg px-4'>{children}</div>;
}
