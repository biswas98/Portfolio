import { useState } from 'react';
import { Navbar } from '../../components';

import './styles.css';

export const Home = () => {
  const [click, setClick] = useState<boolean>(false);
  console.log(click);
  return (
    <div>
      <Navbar />
      <button className="btn-style" onClick={() => setClick(!click)}>
        Click me
      </button>
    </div>
  );
};
