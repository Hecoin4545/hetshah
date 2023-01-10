import React from 'react';

// Css Files
import './Css/Project.css';

// Images
import project1 from '../Component/Images/project1.png';
import project2 from '../Component/Images/project2.png';
import project3 from '../Component/Images/project3.png';

function Project() {
  return (
    <>
      <div className='container-pro'>
        <div className='heading-projects'>
          <h1>
            {' '}
            " Some Of My <span> Projects"</span>
          </h1>
        </div>
        <div className='sub-pro'>
          <div className='pro-1 projects'>
            <img src={project1} alt='' />
            <h1>Bootstrap Website</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              cumque ut illo inventore unde quasi id eveniet! Rerum soluta nisi
              amet ea error perspiciatis doloribus similique natus deserunt?
              Quasi, quidem!
            </p>
            <div className='work-program'>
              <p>HTML </p>
              <p>BOOTSTRAP </p>
              <p>JAVASCRIPT </p>
            </div>
            <div className='button'>
              <button className='btn'>VISIT</button>
              <button className='btn'>CODE</button>
            </div>
          </div>
          <div className='pro-2 projects'>
            <img src={project2} alt='' />
            <h1>Bootstrap Website</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              cumque ut illo inventore unde quasi id eveniet! Rerum soluta nisi
              amet ea error perspiciatis doloribus similique natus deserunt?
              Quasi, quidem!
            </p>
            <div className='work-program'>
              <p>HTML </p>
              <p>BOOTSTRAP </p>
              <p>JAVASCRIPT </p>
            </div>
            <div className='button'>
              <button className='btn'>VISIT</button>
              <button className='btn'>CODE</button>
            </div>
          </div>
          <div className='pro-3 projects'>
            <img src={project3} alt='' />
            <h1>Bootstrap Website</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              cumque ut illo inventore unde quasi id eveniet! Rerum soluta nisi
              amet ea error perspiciatis doloribus similique natus deserunt?
              Quasi, quidem!
            </p>
            <div className='work-program'>
              <p>HTML </p>
              <p>BOOTSTRAP </p>
              <p>JAVASCRIPT </p>
            </div>
            <div className='button'>
              <button className='btn'>VISIT</button>
              <button className='btn'>CODE</button>
            </div>
          </div>
          <div className='pro-4 projects'>
            <img src={project3} alt='' />
            <h1>Bootstrap Website</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              cumque ut illo inventore unde quasi id eveniet! Rerum soluta nisi
              amet ea error perspiciatis doloribus similique natus deserunt?
              Quasi, quidem!
            </p>
            <div className='work-program'>
              <p>HTML </p>
              <p>BOOTSTRAP </p>
              <p>JAVASCRIPT </p>
            </div>
            <div className='button'>
              <button className='btn'>VISIT</button>
              <button className='btn'>CODE</button>
            </div>
          </div>
          <div className='pro-5 projects'>
            <img src={project3} alt='' />
            <h1>Bootstrap Website</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              cumque ut illo inventore unde quasi id eveniet! Rerum soluta nisi
              amet ea error perspiciatis doloribus similique natus deserunt?
              Quasi, quidem!
            </p>
            <div className='work-program'>
              <p>HTML </p>
              <p>BOOTSTRAP </p>
              <p>JAVASCRIPT </p>
            </div>
            <div className='button'>
              <button className='btn'>VISIT</button>
              <button className='btn'>CODE</button>
            </div>
          </div>
          <div className='pro-6 projects'>
            <img src={project3} alt='' />
            <h1>Bootstrap Website</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              cumque ut illo inventore unde quasi id eveniet! Rerum soluta nisi
              amet ea error perspiciatis doloribus similique natus deserunt?
              Quasi, quidem!
            </p>
            <div className='work-program'>
              <p>HTML </p>
              <p>BOOTSTRAP </p>
              <p>JAVASCRIPT </p>
            </div>
            <div className='button'>
              <button className='btn'>VISIT</button>
              <button className='btn'>CODE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
