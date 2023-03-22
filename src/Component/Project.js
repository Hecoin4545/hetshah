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
        <div className='heading-projects' data-aos='fade-out'>
          <h1>
            {' '}
            " Some Of My <span> Projects"</span>
          </h1>
        </div>
        <div className='sub-pro'>
          <div className='pro-1 projects' data-aos='fade-right'>
            <img src={project1} alt='' />
            <h1>Bootstrap Website</h1>
            <p>
              This project marks my initial foray into utilizing Bootstrap, and
              I approached it with a mindset of expanding my knowledge and
              capabilities within this framework. Despite being a novice, I
              successfully constructed...
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
          <div className='pro-2 projects' data-aos='fade-out'>
            <img src={project2} alt='' />
            <h1>M.M Naravane</h1>
            <p>
              Manoj Mukund Naravane is a distinguished Indian Army officer who
              currently serves as the Chief of Army Staff. He has served in
              several key appointments during his illustrious career.He Is One
              Of The Best...
            </p>
            <div className='work-program'>
              <p>React </p>
              <p>CSS </p>
              <p>JAVASCRIPT </p>
            </div>
            <div className='button'>
              <button className='btn'>VISIT</button>
              <button className='btn'>CODE</button>
            </div>
          </div>
          <div className='pro-3 projects' data-aos='fade-left'>
            <img src={project3} alt='' />
            <h1>Hecoin Restaurant</h1>
            <p>
              Hecoin Restaurant offers a sophisticated and modern dining
              experience with innovative cuisine, a sleek ambiance, and
              attentive service. The menu features fresh and high-quality
              ingredients, with highlight...
            </p>
            <div className='work-program'>
              <p>HTML </p>
              <p>Css </p>
              <p>JAVASCRIPT </p>
            </div>
            <div className='button'>
              <button className='btn'>VISIT</button>
              <button className='btn'>CODE</button>
            </div>
          </div>
          <div className='pro-4 projects' data-aos='fade-right'>
            <img src={project3} alt='' />
            <h1>Previous Portfolio</h1>
            <p>
              At the outset of my web development career, I constructed this
              portfolio with the recognition that it may not be of the highest
              aesthetic quality. Nonetheless, I viewed this as an opportunity to
              refine my skills...
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
          <div className='pro-5 projects' data-aos='fade-out'>
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
          <div className='pro-6 projects' data-aos='fade-left'>
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
