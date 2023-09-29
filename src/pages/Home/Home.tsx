import { useState } from 'react';
import { Navbar } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

export const Home = () => {
  const [click, setClick] = useState<boolean>(false);
  console.log(click);
  return (
    <div>
      {click ? <Navbar /> : null}
      <button className="btn-style" onClick={() => setClick(!click)} />
      <FontAwesomeIcon icon={faEnvelope} />
    </div>
  );
};
