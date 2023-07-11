import { useEffect, useState } from 'react';
import './Header.css'

const Header = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => setTime(new Date()), 1000);
      return () => {
        clearInterval(interval);
      };
    }, []);

    return(
        <div className='header-box'>
            <h1>{time.toLocaleTimeString()}</h1>
            <h1>{time.toLocaleDateString()}</h1>
        </div>
    )
}

export default Header