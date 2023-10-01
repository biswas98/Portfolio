import { useState } from 'react';
import { Navbar } from '../../components';

import './styles.css';

export const Home = () => {
  const [click, setClick] = useState<boolean>(false);
  console.log(click);
  return (
    <div>
      <button className="nav_option" onClick={() => setClick(!click)} />

      {click ? <Navbar /> : null}
    </div>
  );
};
