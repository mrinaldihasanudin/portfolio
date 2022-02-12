import React from 'react';
import './index.scss';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

import Profile from '../../Assets/img/profile.JPG';

function index() {
  return (
    <section class="jumbotron">
      <Fade>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1 class="display-4">
                Hello, I am <br /> M.Rinaldi Hasanudin
              </h1>
              <h2>Front-end Developer</h2>
              <div>
                <FontAwesomeIcon icon={solid('user-secret')} />
                <FontAwesomeIcon icon={regular('coffee')} />
                <FontAwesomeIcon icon={brands('twitter')} />
              </div>
            </div>
            <div className="col-4">
              <img
                src={Profile}
                alt="profile"
                className="img-fluid img-thumbnail"
                width={250}
              />
            </div>
          </div>
        </div>
      </Fade>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,96L48,90.7C96,85,192,75,288,106.7C384,139,480,213,576,229.3C672,245,768,203,864,170.7C960,139,1056,117,1152,128C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

export default index;
