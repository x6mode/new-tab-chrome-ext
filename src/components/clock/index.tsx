import { useEffect, useState } from 'react';

import './style.css';


function prettyTimeFormatting (time: number) {
  return time > 9 ? time : `0${time}`;
}

function Clock (): JSX.Element {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000)

    return () => clearInterval(interval);
  }, []);


  const hours = prettyTimeFormatting(time.getHours());
  const minutes = prettyTimeFormatting(time.getMinutes());
  const seconds = prettyTimeFormatting(time.getSeconds());

  return (
    <h1 className='clock'>{ `${hours}:${minutes}:${seconds}` }</h1>
  );
}

export default Clock;
