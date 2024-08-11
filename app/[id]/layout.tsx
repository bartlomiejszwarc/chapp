export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className='w-full min-h-[calc(100vh-5rem)] overflow-y-hidden sm:px-4'>{children}</div>;
}
