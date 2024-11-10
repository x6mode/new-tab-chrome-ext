import Clock from '@components/ui/clock';

import './style.css';


function WelcomeText (): JSX.Element {
  return (
    <div className='welcome-text'>
      <pre>
        ██████╗ ███████╗ █████╗ ████████╗██╗  ██╗<br></br>
        ██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██║  ██║<br></br>
        ██║  ██║█████╗  ███████║   ██║   ███████║<br></br>
        ██║  ██║██╔══╝  ██╔══██║   ██║   ██╔══██║<br></br>
        ██████╔╝███████╗██║  ██║   ██║   ██║  ██║<br></br>
        ╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝<br></br>                         
      </pre>
      <Clock />
      <div className="hr"></div>
    </div>
  );
}

export default WelcomeText;
