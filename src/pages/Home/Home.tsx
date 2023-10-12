import { useState } from 'react';
import { motion } from 'framer-motion';

import { Navbar } from '../../components';

import './styles.css';

export const Home = () => {
  const [click, setClick] = useState<boolean>(false);

  console.log(click);
  return (
    <div>
      <div className="nav_option_container">
        <button className="nav_option" onClick={() => setClick(!click)} />
        {click ? (
          <motion.div animate={{ y: click ? 50 : 0 }}>
            <Navbar />
          </motion.div>
        ) : null}
      </div>
    </div>
  );
};
