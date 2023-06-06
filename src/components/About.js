import React from 'react';
import './about.css';
import { BsDownload } from 'react-icons/bs';
import iconFrameworks from '../assets/icon-frameworks.svg';
import iconLanguages from '../assets/icon-languages.svg';
import iconTools from '../assets/icon-skills.svg';

const About = () => (
  <div className="about" id="about">
    <h2>About Me</h2>
    <div className="about__content">
      <p>
        Passionate full-stack web developer experienced in Ruby
        on Rails, React, and diverse web technologies. Committed
        to clean code, accessible interfaces, and efficient outcomes.
        Proficient in pair-programming and remote collaboration,
        with a proven track record of rapid skill acquisition and
        effective teamwork. Adaptable to diverse projects, consistently
        achieving high-quality results. Maintains a 95% on-time delivery
        rate for project deadlines.
      </p>
      <button type="button" className="about__button">
        <a href="https://drive.google.com/file/d/19KI1rFhnJGCEIBFc1aYMeALadu0X84un/view?usp=sharing" target="_blank" rel="noreferrer">
          Download Resume
          {' '}
          <BsDownload style={{ color: 'black', background: '#f90', marginRight: '5px' }} />
        </a>
      </button>
    </div>
    <div className="about__skills">
      <div className="skill">
        <img src={iconFrameworks} alt="Frameworks" />
        <h3>Frameworks</h3>
        <ul>
          <li>React</li>
          <li>Express</li>
          <li>Node</li>
          <li>Bootstrap</li>
          <li>Materialize</li>
        </ul>
      </div>
      <div className="skill">
        <img src={iconLanguages} alt="Languages" />
        <h3>Languages</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>SQL</li>
        </ul>
      </div>
      <div className="skill">
        <img src={iconTools} alt="Tools" />
        <h3>Tools</h3>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Heroku</li>
        </ul>
      </div>
    </div>
  </div>
);

export default About;
