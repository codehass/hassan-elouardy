import React, { useState } from 'react';
import './work.css';
import { IoOpenOutline } from 'react-icons/io5';
import { BsCodeSlash } from 'react-icons/bs';
import { GrNext } from 'react-icons/gr';
import img from './space-travel.png';

const projects = [{
  title: 'My 1',
  img,
  description: 'The Budget application is a mobile web application designed for managing your budget. It provides a list of transactions categorized by type, allowing you to easily track your expenses and analyze your spending. The implementation of this application involved utilizing Ruby on Rails and PostgreSQL.',
  stack: ['React', 'Rails', 'JavaScript'],
  live: 'www.google.com',
  code: 'www.google.com',
},
{
  title: 'Project 2',
  img,
  description: 'The Budget application is a mobile web application designed for managing your budget. It provides a list of transactions categorized by type, allowing you to easily track your expenses and analyze your spending. The implementation of this application involved utilizing Ruby on Rails and PostgreSQL.',
  stack: ['React', 'Rails', 'CSS', 'HTML'],
  live: 'www.google.com',
  code: 'www.google.com',
},
{
  title: 'Project 3',
  img,
  description: 'The Budget application is a mobile web application designed for managing your budget. It provides a list of transactions categorized by type, allowing you to easily track your expenses and analyze your spending. The implementation of this application involved utilizing Ruby on Rails and PostgreSQL.',
  stack: ['React', 'Rails', 'CSS', 'HTML'],
  live: 'www.google.com',
  code: 'www.google.com',
},
{
  title: 'Project 4',
  img,
  description: 'The Budget application is a mobile web application designed for managing your budget. It provides a list of transactions categorized by type, allowing you to easily track your expenses and analyze your spending. The implementation of this application involved utilizing Ruby on Rails and PostgreSQL.',
  stack: ['Rails', 'CSS', 'HTML'],
  live: 'www.google.com',
  code: 'www.google.com',
},
];

const Work = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProjectIndex((prevIndex) => {
      if (prevIndex === 0) {
        return projects.length - 1;
      }
      return prevIndex - 1;
    });
  };

  return (
    <div className="container">
      <div className="work">
        <div>
          <h2>My Recent Work</h2>
          <div className="line" />
        </div>
        <div className="project">
          <img src={projects[currentProjectIndex].img} alt="code" />
          <div className="project-info">
            <h3>{projects[currentProjectIndex].title}</h3>
            <p className="project-description">{projects[currentProjectIndex].description}</p>
            <div className="stack">
              {projects[currentProjectIndex].stack.map((item) => (
                <p
                  key={item}
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="buttons">
              <a
                href={
                  projects[currentProjectIndex].live
          }
                className="btn-live"
              >
                Live Demo
                <IoOpenOutline className="icon" />
              </a>
              <a
                href={
                  projects[currentProjectIndex].code
          }
                className="btn-code"
              >
                Source Code
                <BsCodeSlash className="icon icon-code" />
              </a>

            </div>
          </div>
        </div>
        <div className="scroll-btn">
          <button type="button" className="btn-next next-left" onClick={previousProject}>
            <GrNext className="next-right" />
          </button>
          <div className="point" />
          <div className="point" />
          <div className="point" />
          <button type="button" className="btn-next" onClick={nextProject}>
            <GrNext className="next-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
