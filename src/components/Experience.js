import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Excel Academy
              <br></br>
              Lecturer
              <br></br>
              2016-2018
            </h3>
  
            <p>Delivered lectures of Computer Science to grade XI and XII. Gave extra attention to weak students for better understanding. 
               Met parents to discuss students’ progress and actions for improvement. Set exam papers/tests for mid-term and final exams.
               Prepared easy-to-understand lessons of Math and Physics for the students.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
          <h3>Beta Consultancy 
              <br></br>
              Website Developer & Digital Marketer
              <br></br>
              2017-2019
            </h3>
            <p>Designed and developed appealing websites for the clients as per their requirements. Delivered customer service for every Website, ensuring maximum client satisfaction. 
               Handled all social media accounts, such as Facebook, Instagram, and Twitter. Managed operations related to digital marketing for various handcrafted products. 
               Sold company products on Indian and international sites. Coordinated with NGOs, such as Care Foundation and OOO Farms, as part of corporate social responsibility. 
               Planned and organized charity events as well as acted as a liaison for art exhibitions. Prepared and finalized catalogs and brochures for marketing. 
               Updated clients on market conditions and new offerings. Tested websites using Advance Automation Testing by writing Selenium Scripts with Model-View-Controller (Eclipse JSP).
               Gained comprehensive skills in website development, automation testing in Selenium script writing, project management, and client interaction.
            </p>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Experience;
