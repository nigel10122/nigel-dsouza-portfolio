import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Fidelity Investments<br />
              Tech Lead / Principal Software Engineer<br />
              2024–Present
            </h3>
            <p>
              Leading cloud infrastructure and full-stack development for Fidelity’s Alternative Investments Platform. Delivered critical AWS infrastructure using Terraform, developed Spring Boot APIs and Node.js Lambdas, built disaster recovery frameworks, and orchestrated CI/CD pipelines using Jenkins. Act as a cross-squad leader guiding DevOps enablement, quality engineering, and architecture planning.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Capgemini (Client: Fidelity Investments)<br />
              Software Consultant<br />
              2021–2024 
            </h3>
            <p>
              Contributed to API development, batch job optimization, and cloud automation in a fast-paced financial environment. Built reusable Spring components and AWS modules. Worked closely with Fidelity teams, which led to a direct transition as full-time tech lead after visa constraints were resolved through staffing partners.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
