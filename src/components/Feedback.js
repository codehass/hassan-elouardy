import React, { useState } from 'react';
import './feedback.css';
import { GrNext } from 'react-icons/gr';

const feedbacks = [
  {
    id: 1,
    name: 'Hassan EL OUARDY',
    img: 'https://avatars.githubusercontent.com/u/92850366?s=400&u=b11a6e64f8807d9a454f41e01823e24be9444bd3&v=4',
    position: 'CEO of ABC Corporation',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed euismod, diam id tincidunt , Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed euismod, diam id tincidunt ,',
  },
  {
    id: 2,
    name: 'Mohamed Hassan Noor',
    img: 'https://avatars.githubusercontent.com/u/97671133?v=4',
    position: 'Full Stack Developer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed euismod, diam id tincidunt , Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed euismod, diam id tincidunt ,',
  },
];

const Feedback = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  const previousProject = () => {
    setCurrentProjectIndex((prevIndex) => {
      if (prevIndex === 0) {
        return feedbacks.length - 1;
      }
      return prevIndex - 1;
    });
  };

  return (
    <div className="feedback">
      <h3 className="feedback-title">
        What
        <span>people are saying</span>
      </h3>
      <div className="feedback-section">
        <div className="feedback-infos">
          <div className="feedback-img">
            <span className="coma" />
            <img
              src={feedbacks[currentProjectIndex].img}
              alt="feedback1"
              border="0"
            />
          </div>
          <h4>{feedbacks[currentProjectIndex].name}</h4>
          <p className="position">
            {feedbacks[currentProjectIndex].position}
          </p>
        </div>
        <div className="feedback-text">
          <p>
            {feedbacks[currentProjectIndex].text}
          </p>
        </div>
        <div className="feedback-btn">
          <button type="button" className="next-feedback next-left-feedback" onClick={previousProject}>
            <GrNext className="next-right-feedback" />
          </button>
          <div className="feedback-point" />
          <div className="feedback-point" />
          <div className="feedback-point" />
          <div className="feedback-point" />
          <button type="button" className="next-feedback" onClick={nextProject}>
            <GrNext className="next-right-feedback" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
