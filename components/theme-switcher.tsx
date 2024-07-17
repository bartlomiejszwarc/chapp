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
        <div className='text-zinc-200 hover:bg-zinc-600 p-1 rounded-lg'>
          <button onClick={() => setTheme('light')}>
            <LightModeIcon />
          </button>
        </div>
      )}
      {theme === 'light' && (
        <div className='text-zinc-600 hover:bg-zinc-100 p-1 rounded-lg'>
          <button onClick={() => setTheme('dark')}>
            <DarkModeIcon />
          </button>
        </div>
      )}
    </div>
  );
}
