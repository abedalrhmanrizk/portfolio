'use client';

import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

function ThemeSwitch() {
  const [theme, setTheme] = React.useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('THEME');
      return storedTheme ? JSON.parse(storedTheme) : false;
    }
  });

  function toggleTheme() {
    if (theme) {
      setTheme(!theme);
      document.documentElement.classList.add('dark');
    } else {
      setTheme(!theme);
      document.documentElement.classList.remove('dark');
    }
  }

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('THEME', JSON.stringify(theme));
      if (theme) {
        document.documentElement.classList.add('dark');
      } else document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className='fixed bottom-7 right-8 bg-white w-[3.5rem] h-[3.5rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white dark:border-black backdrop-opacity-40 shadow-xl rounded-full flex justify-center items-center hover:scale-110 active:scale-105 transition-all dark:bg-gray-950'
    >
      {theme ? <BsSun /> : <BsMoon />}
    </button>
  );
}

export default ThemeSwitch;
