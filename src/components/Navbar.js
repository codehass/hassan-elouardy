import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }));
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.setState((prevState) => ({ clicked: !prevState.clicked }));
    }
  };

  render() {
    const { clicked } = this.state;

    return (
      <div className="navbar">
        <a href="https://google.com" className="logo">H.ELOUARDY</a>
        <ul className={clicked ? 'ul active' : 'ul'}>
          <li>
            <a href="https://google.com">Home</a>
          </li>
          <li>
            <a href="https://google.com">About Me</a>
          </li>
          <li>
            <a href="https://google.com">Projects</a>
          </li>
          <li>
            <a href="https://google.com">Reviews</a>
          </li>
          <li>
            <a href="https://google.com">Contact Me</a>
          </li>
        </ul>
        <button className="btn-nav" type="button" id="mobile" onClick={this.handleClick} onKeyDown={this.handleKeyDown}>
          <i className={clicked ? 'fas fa-bars' : 'fas fa-times'} />
        </button>
      </div>
    );
  }
}

export default Navbar;
