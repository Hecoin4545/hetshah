import React from 'react';
import { Link } from 'react-router-dom';

// Css Files
import '../Component/Css/Home.css';

// Images
import ill from '../Component/Images/homelus.gif';

function Home() {
  return (
    <>
      <div className='main-home-area'>
        <div className='overview-desp'>
          <h1>
            Hello Everyone Myself , <span className='myname'> Het Shah </span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            cupiditate velit suscipit perferendis neque vero? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Animi, tenetur? Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Laboriosam, nisi.
          </p>
          <button>
            <a
              href='https://github.com/Hecoin4545'
              rel='noreferrer'
              target='_blank'
            >
              Github
            </a>
          </button>
          <button>
            <Link to='/projects' rel='noreferrer'>
              Projects
            </Link>
          </button>
        </div>
        <img src={ill} alt='' />
      </div>
    </>
  );
}

export default Home;
