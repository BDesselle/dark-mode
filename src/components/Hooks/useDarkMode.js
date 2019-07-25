import React from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('');

  React.useEffect(() => {
    const body = document.body;
    darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
    console.log(darkMode)
  }, [darkMode]);

  return [darkMode, setDarkMode];
}

export default useDarkMode;