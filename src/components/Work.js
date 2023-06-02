import React from 'react';
import './work.css';
import { IoOpenOutline } from 'react-icons/io5';
import { BsCodeSlash } from 'react-icons/bs';
import img from './space-travel.png';

const Work = () => (
  <div className="container">
    <div className="work">
      <h2>My Recent Work</h2>
      <div className="project">
        <img src={img} alt="code" />
        <div className="project-info">
          <h3>Budget-app</h3>
          <p className="project-description">
            The Budget application is a mobile web application designed
            for managing your budget. It provides a list of transactions
            categorized by type, allowing you to easily track your expenses
            and analyze your spending. The implementation of this
            application involved utilizing Ruby on Rails and PostgreSQL.
          </p>
          <div className="stack">
            <p>React</p>
            <p>Rails</p>
            <p>JavaScript</p>
          </div>
          <div className="buttons">
            <a href="www.google.com">
              Live Demo
              <IoOpenOutline className="icon" />
            </a>
            <a href="www.google.com">
              Source Code
              <BsCodeSlash className="icon" />
            </a>

          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
