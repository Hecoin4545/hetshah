import React from 'react';

// Icons From React Icons
// import { FaSun, FaSearch } from 'react-icons/fa';

// Css
import '../Component/Css/Navbar.css';

function Navbar() {
  return (
    <>
      <div className='navbar-main'>
        <div className='upper-nav-area'>
          <div className='logo-area'>
            <p>Analysis Your Failure To Enjoy The Victory...</p>
          </div>
          {/* <div className='input-btn-main-nav'>
            <span className='search-icon'>
              <FaSearch />
            </span>
            <input type='text' placeholder='Type Anything About Me ' />
          </div>
          <div className='light-dark-area'>
            <FaSun />
          </div> */}
        </div>
        <div className='lower-nav-area'>
          <div className='nav-links'>
            <ul>
              <li>Home</li>
              <li>Blogs</li>
              <li>Projects</li>
              <li>Work With Me</li>
              <li>Videos</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
