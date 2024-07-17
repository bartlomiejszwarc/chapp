import type {Metadata} from 'next';
import {Manrope} from 'next/font/google';
import './globals.css';
import {ThemeProvider} from '@/components/theme-provider';
import {ThemeSwitcher} from '@/components/theme-switcher';

const font = Manrope({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'ChatApp',
  description: 'Stat connected',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ThemeProvider attribute='class' disableTransitionOnChange>
          <div className='bg-transparent absolute right-2 top-2'>
            <ThemeSwitcher />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
