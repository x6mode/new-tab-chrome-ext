import SwitchTheme from '@components/ui/theme-switch';
import WelcomeText from '@components/ui/big-text';
import WidgetsPanel from '@components/ui/widgets-panel';
import StatusConcurrency from '@components/ui/status-concurrency';

import { Slide, ToastContainer } from 'react-toastify';

import '@styles/global.css';
import 'react-toastify/dist/ReactToastify.min.css';


document.documentElement.dataset.theme = localStorage.getItem('app-theme') || 'light';

function App (): JSX.Element {
  return (
    <>
      <ToastContainer theme='dark' transition={Slide} position='top-left' pauseOnHover={false} pauseOnFocusLoss={false} />
      <SwitchTheme />
      <StatusConcurrency />
      <WelcomeText />
      <WidgetsPanel />
    </>
  );
}

export default App;
