import React, { useState } from 'react';
import './work.css';
import { IoOpenOutline } from 'react-icons/io5';
import { BsCodeSlash } from 'react-icons/bs';
import { GrNext } from 'react-icons/gr';
import { projects } from '../data/data';

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
    <div className="work" id="work">
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
  );
};

export default Work;
