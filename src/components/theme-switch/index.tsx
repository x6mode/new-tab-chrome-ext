import useTheme from '@/hooks/use-theme';

import { MdDarkMode, MdLightMode } from 'react-icons/md';

import './style.css';


function SwitchTheme (): JSX.Element {
  const [theme, switchTheme] = useTheme();

  return (
    <div className="switch-theme">
      <button onClick={() => switchTheme()}>
        { theme === 'dark' ? <MdLightMode /> : <MdDarkMode /> }
      </button>
    </div>
  );
}

export default SwitchTheme;
