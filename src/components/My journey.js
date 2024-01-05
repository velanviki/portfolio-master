import React from "react";
import "../styles/My journey.css";

export default function Resume() {
  return (
    <>
      <div id="resume" class="resume">
        <h1 class="section-heading-title">MY JOURNEY </h1>
        <div class="container">
          <div class="row">
            <div class="col-lg-6" id="align">
              <h3 class="resume-title">About Me</h3>
              <div class="resume-item pb-0">
                <h4>Velan S</h4>
                <p>
                    Dedicated and results-driven software professional with 1.5
                    years of hands-on experience in the software development
                    industry. Adept at collaborating with cross-functional teams
                    to deliver high-quality solutions within specified
                    timelines. Proficient in multiple programming languages and
                    well-versed in the complete software development life cycle.
                </p>
                <p>
                  <ul>
                    <li>(+91) 8608687416</li>
                    <li>velanvicky01@gmail.com</li>
                  </ul>
                </p>
              </div>
              <div class="resume-item">
                <h4>Proficiency</h4>
                <ul type="1">
                  <li>1.Well known with JavaScript.</li>
                  <li>2.Mern stack development. </li>
                  <li>3.Databases (MongoDB,SQL).</li>
                </ul>
              </div>
              <h3 class="resume-title">Education</h3>
              <div class="resume-item">
                <h4>Bachelor of Engineering; Ece</h4>
                <h5>2014 - 2018</h5>
                <p>
                  <em>
                    Christ college of engineering and Technology, Pondicherry.
                  </em>
                </p>
                <p>
                  B-Tech in Electronics and Commucnication(ECE)
                  </p>
                  <p>
                  CGPA - 7.9
                </p>
              </div>
            </div>
            <div class="col-lg-6" id="aligns">
              <h3 class="resume-title">Professional Experience</h3>
              <div class="resume-item">
                <h4>Software Engineer</h4>
                <h5>2022 - Present</h5>
                <p>
                  <em>Telliant System Pvt Ltd, Chennai</em>
                </p>
                <p>
                  <ul>
                    <li>
                      Developed and optimized clean, maintainable, and efficient
                      codebase for web application, resulting in 40% reduction
                      in page load time and improved user experience.
                    </li>
                    <li>
                      Resolved 100+ software defects and issues through rigorous
                      debugging and troubleshooting, ensuring seamless
                      functionality and enhancing user experience.
                    </li>
                    <li>
                      Understand and analyze user requirements and translate
                      them into software solutions.
                    </li>
                    <li>
                      Work closely with cross-functional teams, including
                      product managers, designers, and quality assurance, to
                      deliver high quality software solutions
                    </li>
                    <li>
                      {" "}
                      Make and maintain technical documentation for code,
                      algorithms, and processes
                    </li>
                    <li>
                      Enhance code performance by prioritizing scalability and
                      efficiency optimizations.
                    </li>
                  </ul>
                </p>
              </div>
              <div class="resume-item">
                <h4>Junior Engineer in Production</h4>
                <h5>2020 - 2021</h5>
                <p>
                  <em>Avary teachnology pvt limited, Chennai</em>
                </p>
                <p>
                  <ul>
                    <li>
                      Handeling the team members to achieve the daily
                      production.
                    </li>
                    <li>
                      Reporting the managers about the productions details and
                      daily target achievemnets.
                    </li>
                    <li>
                      Production output record maintenance and related works.
                    </li>
                  </ul>
                </p>
              </div>

              <div class="resume-item">
                <h4>Line leader in Production</h4>
                <h5>2018 - 2020</h5>
                <p>
                  <em>TSMT pvt limited, Chennai</em>
                </p>
                <p>
                  <ul>
                    <li>
                      Responsible for the production line from start to end of
                      the process.
                    </li>
                    <li>
                      Responsible for reporting the managers about production
                      details.
                    </li>
                    <li>
                      Managing the team target as well as individual target of
                      team members.
                    </li>
                    <li>
                      Production output record maintenance and related works.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
