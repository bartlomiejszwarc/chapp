'use client';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme === 'dark' && (
        <div className='text-zinc-200 hover:bg-zinc-800 p-1 rounded-lg'>
          <button onClick={() => setTheme('light')}>
            <LightModeIcon className='mb-[1px]' />
          </button>
        </div>
      )}
      {theme === 'light' && (
        <div className='text-zinc-600 hover:bg-zinc-200 p-1 rounded-lg'>
          <button onClick={() => setTheme('dark')}>
            <DarkModeIcon className='mb-[1px]' />
          </button>
        </div>
      )}
    </div>
  );
}
