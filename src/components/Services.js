import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faAndroid, faFirefox } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">my services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
              <h3>Web Development</h3>
              <p>I approach each project individually and always focus on the result.Your website will be build with new proven technologies.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>

              <h3>Cloud Computing</h3>
              <p>Services like AWS, IBM Cloud and Microsoft Azure.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faAndroid} size="2x" /></div>

              <h3>Android Development</h3>
              <p>The look and feel of the Android application will be aesthetically pleasing to the client.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFirefox} size="2x" /></div>

              <h3>Automation Testing</h3>
              <p>Each software, web-application or android application will be fully automation tested using Unit testing and Selenium.</p>.
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services;
