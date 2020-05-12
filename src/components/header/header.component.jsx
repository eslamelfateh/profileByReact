import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import './header.styles.scss';

const Header = () => {
  return (
    <Router>
      <div className='header'>
        <h1 className='logo'><Link className='logoLink'>Logo</Link></h1>
        <div>
          <ul className='navLinks' >
            <li><Link className='navLink'>Home</Link></li>
            <li><Link className='navLink'>Projects</Link></li>
            <li><Link className='navLink'>Contacts</Link></li>
          </ul>
          <button className='mode'> Dark Mode </button>
        </div>
      </div>
    </Router>
  );
};

export default Header;