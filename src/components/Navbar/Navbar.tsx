import React from 'react';
import './styles.css';

export const Navbar = () => {
  return (
    <div className="nav_Container">
      <ul className="list_Container">
        <li className="list_item">
          <a href="#">HOME</a>
        </li>
        <li className="list_item">
          <a href="#">ABOUT</a>
        </li>
        <li className="list_item">
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};
