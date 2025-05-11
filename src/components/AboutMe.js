import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profilePic from '../images/profilePic.jpeg';

const AboutMe = () => {
  return (
    <div id="about">
      <br />
      <div className="row">
        <div className="col-lg-4 col-xm-6">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={profilePic} alt="Profile" />
          </div>
        </div>

        <div className="col-lg-7 col-xm-12">
          <div>
            <h2 style={{ color: 'midnightblue' }}>ABOUT ME</h2>
          </div>
          <hr style={{ background: 'white' }} />
          <div className="polaroid">
            <h5 style={{ color: 'ButtonText', textAlign: 'justify' }}>
              I'm Nigel Dsouza, a Principal Software Engineer and Tech Lead based in Dallas, Texas. Originally from Mumbai, India, I moved to the U.S. in 2019 to pursue my Master’s in Computer Science and am currently pursuing a second Master’s in Engineering Management at Trine University.
              <br /><br />
              At Fidelity Investments, I lead the architecture and development of critical financial systems using modern cloud infrastructure (AWS, Terraform, Jenkins, Spring Boot, Node.js). I specialize in highly available, secure, and scalable systems, and have built frameworks like Disaster Recovery Automation and CI/CD pipelines from scratch.
              <br /><br />
              I’m deeply invested in continuous improvement, both in systems and in people. My role has expanded from individual contributor to leadership, where I drive initiatives across squads and mentor engineers. Outside of work, I’m passionate about writing, presenting, and contributing to thought leadership — including publishing technical articles, presenting innovation strategies.
              <br /><br />
              I’m known for being adaptive, decisive, and relentlessly curious. I enjoy connecting the dots between technical architecture and user outcomes, and I aim to eventually lead larger engineering orgs or cross-functional innovation teams that blend technology and strategy.
            </h5>
          </div>
        </div>
      </div>

      <hr style={{ background: 'white' }} />
      <h3 style={{ color: 'peru', textAlign: 'center' }}>MORE ABOUT ME....</h3>
      <hr />
      <div className='wrapper'>
        <Row>
          <Col>
            <div className="speechbubble">
              <p style={{ textAlign: 'justify' }}>
                <b>What made you gain interest in Software Development?</b><br />
                Software development offers me the best way to channel both my analytical skills and my love for problem-solving. It’s where logic, creativity, and impact intersect.
              </p>
            </div>
          </Col>
          <Col>
            <div className="speechbubble">
              <p style={{ textAlign: 'justify' }}>
                <b>What excites you about Software Development, and how have you grown recently?</b><br />
                Tech is constantly evolving, and I enjoy staying ahead. This year, I’ve taken the initiative to build full-stack solutions on AWS, refined my DevOps skills, and contributed to innovation strategy coursework as part of my Engineering Management degree.
              </p>
            </div>
          </Col>
          <Col>
            <div className="speechbubble">
              <p style={{ textAlign: 'justify' }}>
                <b>How would coworkers describe you?</b><br />
                Strategic, reliable, and calm under pressure. I’m often seen as a go-to person when things get complex — someone who brings clarity and gets things moving without drama.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="speechbubble">
              <p style={{ textAlign: 'justify' }}>
                <b>How do you handle inheriting code you're unfamiliar with?</b><br />
                I assess structure, trace logic, document what I learn, and sharpen skills when needed. I’ve inherited batch jobs and lambda frameworks I wasn’t familiar with — and turned them into stable, reusable systems.
              </p>
            </div>
          </Col>
          <Col>
            <div className="speechbubble">
              <p style={{ textAlign: 'justify' }}>
                <b>Tell us about a time you dealt with a challenging situation.</b><br />
                I had a supervisor who changed directions often without documentation. I introduced a process of confirming requirements in writing before executing, which improved clarity and led to mutual trust.
              </p>
            </div>
          </Col>
          <Col>
            <div className="speechbubble">
              <p style={{ textAlign: 'justify' }}>
                <b>What type of responsibilities do you find rewarding or frustrating?</b><br />
                I thrive when I have autonomy and responsibility — leading projects, solving bottlenecks, mentoring others. What frustrates me is being told what to do without understanding the context or outcome. I believe in building the “why” into everything I touch.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutMe;
