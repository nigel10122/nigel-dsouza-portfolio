import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faReact, faNode, faJava } from "@fortawesome/free-brands-svg-icons";
import { faCloud, faServer, faCodeBranch, faShieldAlt } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">My Services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faCloud} size="2x" /></div>
              <h3>Cloud Architecture</h3>
              <p>Specializing in secure and scalable AWS infrastructure using Lambda, Batch, EKS, Step Functions, and S3. Automated with Terraform and CI/CD pipelines.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faCodeBranch} size="2x" /></div>
              <h3>DevOps & CI/CD</h3>
              <p>Building robust automation pipelines with Jenkins, Groovy, and Git. Expertise in versioning, promotions, Artifactory, and Disaster Recovery setups.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faJava} size="2x" /></div>
              <h3>Backend Engineering</h3>
              <p>Development of enterprise APIs using Java (Spring Boot, Spring Batch) and Node.js. Integration with Oracle, PostgreSQL, and cloud-native systems.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faShieldAlt} size="2x" /></div>
              <h3>Automation & Quality Engineering</h3>
              <p>Extensive experience in test automation with Selenium, JUnit, and Jest. Coverage includes backend systems, APIs, and UI workflows.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;