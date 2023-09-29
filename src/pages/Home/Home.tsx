import { useState } from 'react';
import { Navbar } from '../../components';

import './styles.css';

export const Home = () => {
  const [click, setClick] = useState<boolean>(false);
  console.log(click);
  return (
    <div>
      {click ? <Navbar /> : null}
      <button className="btn-style" onClick={() => setClick(!click)} />
    </div>
  );
};
