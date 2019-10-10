import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar-styles.css';

export default class Navbar extends Component {

  render() {

    return (
      <div>
        <nav>
          <div className="title-container">
            <h1>Plant A Tree</h1>
          </div>
          <hr />
          <div>
            <ul className="nav-links">
              <li>
                <Link to="/">TREES</Link>
              </li>
              <li>
                <Link to="/cart">CART</Link>
              </li>
              <li>
                <Link to="/contactUs">CONTACT US</Link>
              </li>
            </ul>
          </div>
        </nav>
        <hr />
      </div>
    );
  }
}