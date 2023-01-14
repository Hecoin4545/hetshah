import React from 'react';

// Importing Css Files
import '../Component/Css/About.css';

// Importing Images
import myphoto from '../Component/Images/myphoto.jpeg';

function About() {
  return (
    <>
      <div className='quote'>
        <h1>
          "Coding Is Not About <span className='color-m'> Learning </span>, It's
          About <span className='color-m'> Implementing</span>"
        </h1>
      </div>

      <div className='about-me'>
        <div className='left-sec'>
          <p>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            placeat id beatae ab modi,{' '}
            <span className='color-pu'>
              {' '}
              cupiditate quidem incidunt saepe ullam obcaecati nemo earum quasi.{' '}
            </span>{' '}
            Laboriosam provident itaque repudiandae mollitia quidem? Nobis.
            <br />
            <br />
            <span className='light-br'>
              {' '}
              Vitae fuga explicabo voluptate eius expedita sequi cum adipisci
              velit. Animi id officiis unde porro corporis numquam ipsam hic
              illo veritatis error? Officia fuga nesciunt ipsa ut tenetur odio
              consequuntur!
            </span>
            <br />
            <br />
            Quis dignissimos qui aliquam ipsum corporis autem illum voluptatum
            delectus nesciunt tempore cumque, doloribus sunt harum, eius nemo
            excepturi{' '}
            <span className='color-pu'>
              {' '}
              similique facere! Nulla ab labore perspiciatis numquam sunt aut
              vitae fuga.
            </span>
          </p>

          <div className='box-button'>
            <button>Contact Me</button>
            <button>Blogs</button>
          </div>
        </div>
        <div className='right-sec'>
          <img src={myphoto} alt='' />
        </div>
      </div>
    </>
  );
}

export default About;
