import React from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';

import Profile from '../../Assets/img/profile.JPG';

function index() {
  return (
    <section class="jumbotron pt-3 pt-sm-5 pt-md-5">
      <Fade>
        <div className="container">
          <div className="row">
            <div className="text-lg-left text-md-center text-sm-center text-center col-lg-7 order-lg-1 order-md-2 order-sm-2 order-2 pt-lg-5 pt-md-5">
              <h1>
                Hello, I am <br /> M.Rinaldi Hasanudin
              </h1>
              <h2>Front-end Developer</h2>
              <div className="mt-5">
                <a
                  key={index}
                  href="https://github.com/mrinaldihasanudin"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-4"
                >
                  <i>
                    <FontAwesomeIcon
                      icon={['fab', 'fa-github-square']}
                      size="3x"
                    />
                  </i>
                </a>
                <a
                  key={index}
                  href="https://www.instagram.com/mrinaldi_h/"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-4"
                >
                  <i>
                    <FontAwesomeIcon
                      icon={['fab', 'fa-instagram-square']}
                      size="3x"
                    />
                  </i>
                </a>
                <a
                  key={index}
                  href="https://www.facebook.com/muhamad.h.18/"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-4"
                >
                  <i>
                    <FontAwesomeIcon
                      icon={['fab', 'fa-facebook-square']}
                      size="3x"
                    />
                  </i>
                </a>
                <a
                  href="https://www.linkedin.com/in/m-rinaldi-hasanudin-698950210/"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-4"
                >
                  <i>
                    <FontAwesomeIcon icon={['fab', 'fa-linkedin']} size="3x" />
                  </i>
                </a>
              </div>
            </div>
            <div className="text-center col-lg-5 order-lg-2 order-md-1 order-sm-1 order-1 pt-lg-5">
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
