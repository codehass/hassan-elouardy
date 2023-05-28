import './navbar.css';

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <ul className="ul">
          <li>
            {' '}
            <a href="https://google.com">Home</a>
          </li>
          <li>
            {' '}
            <a href="https://google.com"> About Me</a>
            {' '}
          </li>
          <li>
            {' '}
            <a href="https://google.com"> Projects</a>
            {' '}
          </li>
          <li>
            {' '}
            <a href="https://google.com"> Reviews</a>
            {' '}
          </li>
          <li>
            {' '}
            <a href="https://google.com"> Contact Me</a>
            {' '}
          </li>
        </ul>
      </div>
    </div>
  );
}
