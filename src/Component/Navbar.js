import React from 'react';

// Icons From React Icons
// import { FaSun, FaSearch } from 'react-icons/fa';

// Css
import '../Component/Css/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className='navbar-main'>
        <div className='upper-nav-area'>
          <div className='logo-area'>
            <p>Analysis Your Failure To Enjoy The Victory...</p>
          </div>
        </div>
        <div className='lower-nav-area'>
          <div className='nav-links'>
            <ul>
              <>
                <Link to='/' className='un'>
                  Home
                </Link>
              </>
              <li>
                <Link to='/blogs'>Blogs</Link>
              </li>
              <li>
                <Link to='/projects'>Projects</Link>
              </li>
              <li>
                <Link to='/work'>Work With Me</Link>
              </li>
              <li>
                <Link to='/'>Videos</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
