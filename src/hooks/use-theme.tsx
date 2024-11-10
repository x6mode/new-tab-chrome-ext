import { useEffect, useState } from 'react'


type TThemeVariant = 'dark' | 'light';

export default function useTheme (): [
  theme: TThemeVariant,
  switchTheme: () => void,
] {
  const [theme, setTheme] = useState<TThemeVariant>(() => {
    const localStorageItem = localStorage.getItem('app-theme') as TThemeVariant;

    return localStorageItem || 'light';
  });


  useEffect(() => {
    localStorage.setItem('app-theme', theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);


  const switchTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return [theme, switchTheme];
}