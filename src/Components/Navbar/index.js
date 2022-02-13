import React from 'react';
import './index.scss';
import { Link } from 'react-scroll';
import { Link as NavLink } from 'react-router-dom';

function index() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <NavLink class="navbar-brand" href="#"></NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <NavLink to="#" class="nav-link point">
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <Link to="about" smooth={true} class="nav-link point">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link to="development" smooth={true} class="nav-link point">
                Learning
              </Link>
            </li>
            <li class="nav-item">
              <Link to="skill" smooth={true} class="nav-link point">
                Skills
              </Link>
            </li>
            <li class="nav-item">
              <Link to="contact" smooth={true} class="nav-link point">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default index;
