import { Links } from '@/constant';

import { FaVk, FaYoutube } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { BsTelegram } from 'react-icons/bs';
import { PiSoundcloudLogoFill } from 'react-icons/pi';

import './style.css';


function WidgetsPanel (): JSX.Element {
  const goLink = (link: Links) => location.href = link;

  return (
    <div className="widgets-panel">
      <button className="block" onClick={() => goLink(Links.YouTube)}>
        <FaYoutube />
      </button>
      <button className="block" onClick={() => goLink(Links.WhatsApp)}>
        <RiWhatsappFill />
      </button>
      <button className="block time-block" onClick={() => goLink(Links.Vk)}>
        <FaVk />
      </button>
      <button className="block" onClick={() => goLink(Links.Telegram)}>
        <BsTelegram />
      </button>
      <button className="block" onClick={() => goLink(Links.SoundCloud)}>
        <PiSoundcloudLogoFill />
      </button>
      <button className="block">
        Clock<br></br>
        15:13
      </button>
      <button className="block">
        Clock<br></br>
        15:13
      </button>
      <button className="block">
        Clock<br></br>
        15:13
      </button>
      <button className="block">
        Clock<br></br>
        15:13
      </button>
      <button className="block">
        Clock<br></br>
        15:13
      </button>
    </div>
  );
}

export default WidgetsPanel;
