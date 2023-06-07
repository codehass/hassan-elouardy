import appointment from '../assets/appointment.png';
import budget from '../assets/budget-app.jpg';
import spaceTravel from '../assets/space-travel.png';
import airPollution from '../assets/air-pollution.png';

const projects = [{
  title: 'Bookstore CMS',
  img: appointment,
  description: 'Created a user-friendly React app for efficient book titles and author management. Enhanced experience with features to display and view recorded data. Utilized Redux, CSS3, ReactJS, React Routers, Redux Thunks, and React Testing Library for a robust and intuitive application.',
  stack: ['React', 'JavaScript', 'CSS'],
  live: 'https://bookstore-wnqr.onrender.com/',
  code: 'https://github.com/codehass/bookstore',
},
{
  title: 'Budget app',
  img: budget,
  description: 'The Budget application is a mobile web application designed for managing your budget. It provides a list of transactions categorized by type, allowing you to easily track your expenses and analyze your spending. The implementation of this application involved utilizing Ruby on Rails and PostgreSQL.',
  stack: ['Ruby', 'Ruby on Rails', 'CSS', 'PostgreSQL'],
  live: 'https://budget-app-d5fr.onrender.com/',
  code: 'https://github.com/codehass/Budget-app',
},
{
  title: 'Space travelers',
  img: spaceTravel,
  description: 'In this project, a web application was built utilizing real-time data from the SpaceX API. The website enables users to book rockets and participate in selected space missions. The application was developed using React.',
  stack: ['React', 'Redux', 'CSS', 'JavaScript'],
  live: 'https://space-travelers-plum.vercel.app/',
  code: 'https://github.com/codehass/space-travelers',
},
{
  title: 'Air Pollution',
  img: airPollution,
  description: 'The Air Pollution App provides users with information about the air quality in various African countries. It offers a user-friendly interface with convenient and accurate search options, allowing users to search by region or specific country. The app was developed using React, Redux, and CSS.',
  stack: ['React', 'Redux', 'CSS'],
  live: 'https://air-pollution-5kp2.onrender.com/',
  code: 'https://github.com/codehass/air-pollution',
},
];

const feedbacks = [
  {
    id: 1,
    name: 'Mohamed Hassan Noor',
    img: 'https://avatars.githubusercontent.com/u/97671133?v=4',
    position: 'Full-Stack Developer',
    text: 'I had the pleasure of working with Hassan El Ouardy on a project and I was thoroughly impressed with his technical skills, attention to detail, and ability to consistently meet deadlines. He is a true professional, always willing to go above and beyond to ensure that the project is a success. His communication skills are exceptional and he has a great way of explaining complex concepts in a way that is easy to understand. I would highly recommend him to anyone looking for a talented and reliable developer who will bring value to any project he is involved in.',
  },
  {
    id: 2,
    name: 'Md Tariq-ul Islam',
    img: 'https://avatars.githubusercontent.com/u/83580685?v=4',
    position: 'Full-Stack Developer',
    text: 'I had the pleasure of working with Hassan El Ouardy, and I highly recommend him for his position. Hassan El Ouardy consistently demonstrates a strong work ethic and exceptional skills. He is a quick learner and always strives to exceed expectations.',
  },
  {
    id: 3,
    name: 'KASHIF SALEEM',
    img: 'https://avatars.githubusercontent.com/u/111677605?v=4',
    position: 'Full-Stack Developer',
    text: "I highly recommend Hassan, my former teammate at Microverse, for his outstanding work and unwavering dedication. He consistently exhibits exceptional technical skills, a strong work ethic, and a commitment to delivering high-quality results. Hassan's expertise, attention to detail, and ability to innovate have greatly contributed to our team's success.",
  },
];

export { feedbacks, projects };
