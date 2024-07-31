import type {Metadata} from 'next';
import {Manrope} from 'next/font/google';
import './globals.css';
import {ThemeProvider} from '@/components/theme-provider';
import {ThemeSwitcher} from '@/components/theme-switcher';
import Navbar from '@/components/navbar/navbar';

const font = Manrope({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'ChatApp',
  description: 'Stay connected',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={font.className}>
        <div className='w-full min-h-screen'>
          <ThemeProvider attribute='class' disableTransitionOnChange>
            <Navbar />
            <div className='bg-transparent absolute right-4 top-4 z-[100]'>
              <ThemeSwitcher />
            </div>
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
