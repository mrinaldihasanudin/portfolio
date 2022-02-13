import React from 'react';
import Fade from 'react-reveal/Fade';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function index({ datas, cards, skills }) {
  return (
    <section className="container">
      <Fade delay={1000}>
        <div className="row justify-content-center mb-5" id="about">
          <div className="col-8 text-center ">
            <h2 className="my-5 border-property font-property">ABOUT ME</h2>
            <h5>{datas.text}</h5>
          </div>
        </div>
      </Fade>

      <Fade delay={500}>
        <div style={{ paddingTop: '50px' }} id="development">
          <h2 className="text-center border-property font-property">
            WEB CREATED FROM LEARNING
          </h2>
        </div>
        <div className="row justify-content-center text-center my-5">
          {cards.map((data, index) => (
            <div key={index} className="card card-property my-5 my-sm-3">
              <img
                className="card-img-top"
                src={data.images}
                alt="nomads laravel"
              />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.text}</p>
                <a
                  href={data.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Check it out !
                </a>
              </div>
            </div>
          ))}
        </div>
      </Fade>
      <Fade delay={500}>
        <div
          className="justify-content-center text-center my-5"
          style={{ paddingTop: '50px' }}
          id="skill"
        >
          <h2 className="border-property font-property">
            PROGRAMMING LANGUANGE <br /> THAT I USED
          </h2>
        </div>
        <div
          className="row justify-content-center"
          style={{ padding: '0 100px 0 100px' }}
        >
          {skills.map((data, index) => (
            <div key={index} className="col text-center mx-5 my-5">
              <img
                src={data.src}
                alt={data.text}
                width={data.width}
                className="img-property"
              />
              <h5 className="mt-4">{data.text}</h5>
            </div>
          ))}
        </div>
      </Fade>

      <Fade delay={500}>
        <div className="text-center my-5 contact-property">
          <h2 className="border-property font-property" id="contact">
            Contact
          </h2>
        </div>
        <h3 className="text-center">You can find me in social media</h3>
        <div style={{ margin: '50px 0 50px 0' }}>
          <div className="row">
            <div className="col text-center">
              <a
                href="https://www.facebook.com/muhamad.h.18/"
                target="_blank"
                rel="noreferrer"
                className="mx-3"
              >
                <i>
                  <FontAwesomeIcon
                    icon={['fab', 'fa-facebook-square']}
                    size="3x"
                  />
                </i>
              </a>
              <a
                href="https://www.instagram.com/mrinaldi_h/"
                target="_blank"
                rel="noreferrer"
                className="mx-3"
              >
                <i>
                  <FontAwesomeIcon
                    icon={['fab', 'fa-instagram-square']}
                    size="3x"
                  />
                </i>
              </a>
              <a
                href="https://www.linkedin.com/in/m-rinaldi-hasanudin-698950210/"
                target="_blank"
                rel="noreferrer"
                className="mx-3"
              >
                <i>
                  <FontAwesomeIcon icon={['fab', 'fa-linkedin']} size="3x" />
                </i>
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default index;
