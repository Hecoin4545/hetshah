import React from 'react';
import '../Component/Css/Footer.css';
import { FaYoutube, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <div className='main-area-footer'>
        <div className='left-sec-ft'>
          <div className='left-first-footer'>
            <h1 className='heading-footer'>Het Shah</h1>
            <p className='para-footer'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, velit alias praesentium est porro ipsam! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Nobis, asperiores.
            </p>
          </div>
          <div className='socials-ft'>
            <FaYoutube />
            <FaGithub />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
        <div className='right-sec-ft'>
          <ul>
            <h1>Account</h1>
            <li>Home</li>
            <li>Address</li>
            <li>Social</li>
            <li>Home</li>
            <li>Address</li>
            <li>Social</li>
          </ul>

          <ul>
            <h1>Account</h1>
            <li>Home</li>
            <li>Address</li>
            <li>Social</li>
          </ul>

          <ul>
            <h1>Account</h1>
            <li>Home</li>
            <li>Address</li>
            <li>Social</li>
            <li>Social</li>
          </ul>

          <ul>
            <h1>Account</h1>
            <li>Home</li>
            <li>Address</li>
            <li>Social</li>
            <li>Address</li>
            <li>Social</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
