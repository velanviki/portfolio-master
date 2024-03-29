import React from "react";
import "../styles/About.css";
// import Image from "../Image/image.jpg";
function About() {
  return (
    <div className="about component__space" id="about">
      <div className="container">
        <div className="row">
          {/* <div className="col__2"> */}
            {/* <div className="img">
              <img src={Image} alt="Image" />;
            </div> */}
          {/* </div> */}

          <div className="col__1">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                <li>
                Dedicated and results-driven software professional
 with 1.5 years of hands-on experience in the software
 development industry.
                </li>
              </p>

              <p className="about__text p__color">
                <li>
                  Certified MERN stack developer.
                </li>
              </p>
              <p className="about__text p__color">
                <li>Collaborative,Creative and Quick to adapt.</li>
              </p>

              <div className="about__button d__flex align__items__center">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1eKJb7ovTSbakN4rbiGKQ-T2zW7JhGdDk/view?usp=drivesdk"
                >
                  <button className="about btn pointer">Download CV</button>
                </a>
                <a href="#contact">
                  <button id="hire"className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
