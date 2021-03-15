import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profilePic from '../images/profilePic.jpeg';

const AboutMe = () => {
  return (
    <div id="about">
    
                <br></br>
                
                <div className="row">
               <div className="col-lg-4 col-xm-6">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={profilePic} alt='{props.item.imgSrc}' />
                    </div>
                </div>      
               
                
                    <div className="col-lg-7 col-xm-12">
                        <div>
                       <h2 style ={{color:'midnightblue'}}>
                                ABOUT ME
                            </h2>
                        </div>
                        <hr style={{background:'white'}}></hr>
                        <div class = "polaroid">
                        <h5 style={{color:'ButtonText',textAlign:'justify'}}>
                            I am Nigel Dsouza, from Mumbai, India currently residing in Arlington, Texas. I am presently doing my Master’s degree in Computer Science.
                            I completed my degree in engineering – Computer Science from Mumbai University in 2018. I love swimming and music. I adhere to deadlines and I am a great team player. 
                            However, I tend to be overly critical about myself and do not give up until I achieve what I consider to be the best end product. 
                            During my studies, I completed several projects, where I excelled in my work. I am a great communicator albeit focused and to the point. 
                            I love interacting with people, asking questions and constantly enhancing my knowledge. At the same time, I love sharing my ideas and experiences with others. 
                            In this industry, it is extremely important to have an open communication, to analyze issues and present speedy solutions. 
                            Given my nature, I have been often appointed Project Lead and enjoy leadership positions as it enables me to make a larger impact.
                            Now, I am interested in expanding my career graph as a Software developer where I also look forward to attaining people management opportunity in my area of work.
                            I am an analytical and skilled professional who has developed an excellent reputation in leading and completing numerous fully tested web and app development projects in selenium within the defined time and budget. 
                            I am capable of using the latest tools and techniques to design and fully test websites that met and exceeded client satisfaction. 
                            I have demonstrated expertise in identifying, analyzing, and resolving complex issues by delivering robust technical solutions.
                            I am proficient in developing websites using Laravel, Eclipse (using JSP), Advance HTML, CSS, PHP, Python-Flask, Selenium Web Application Testing (Advance Automation Testing), and Android Studio (Android Development). 
                            I have extensive knowledge of software, website, and application development protocols, procedures, and practices.
                            I am an organized, detail-oriented, and conscientious self-starter, able to strategize and prioritize effectively to accomplish multiple tasks and stay calm under pressure. 
                            I am a skilled communicator who can maintain cultural sensitivity, establish rapport with members of diverse groups, and promote team cohesiveness.
                        </h5>
                        </div>
                    </div>
                  
                </div>

                <hr style = {{background:'white'}}></hr>
                <h3 style ={{color:'peru',textAlign:'center'}}>MORE ABOUT ME....</h3>
                <hr></hr>
                <div class='wrapper'>
                <Row>
                
                <Col>
                <div class ="speechbubble">
                <p style={{textAlign:'justify'}}>
                <b>What made you gain interest in Sofware Development?</b>
                <br></br>
                Sofwtare Development has the ability to give me sufficient opportunities to leverage most of my acquired skill sets – professionally as well as personally. It would bring out the best in me as this platform will let me show my potential.
                </p>
                </div>
                
                </Col>
                <Col>
                <div class ="speechbubble">
                <p style={{textAlign:'justify'}}>
                <b>What excites you or interests you about Software Development? And, can you tell us about
                the steps you have taken to develop your skills over the past year?</b><br></br>
                Software development is an exciting career because it's always evolving and constantly changing. This means I will always have the opportunity to interact with new tools and learn new skills, keeping me engaged in my career and the growth of the organization. It's a field that provides many opportunities for hands-on learning. There is a good demand for this position. It has the flexibility to work from almost anywhere. This is a major plus in the new reality from the pandemic. 
                I am currently pursuing a Master’s Degree from Texas University, Arlington. In addition I have enrolled in some online courses to enhance my skills. 
                </p>
                </div>
                </Col>
                <Col>
                <div class ="speechbubble">
                <p style={{textAlign:'justify'}}>
                <b> How do you think your co-workers in your past job would describe you?</b>
                <br></br>
                    My friends and co-workers would describe me as someone who takes the initiative and isn’t afraid to make decisions. 
                    I’m often the one to make a suggestion or decide on a plan when other people are indecisive. 
                    I often take the lead on projects and facilitate communication between different groups to make sure we’re all on the same page. 
                    They’d also say that I’m confident and relaxed under pressure. I’m usually the one to stay calm and think through a problem logically, even if things are a bit stressful. I think my friends and coworkers would both describe me as resourceful and someone who anticipates and solves problems before I’m asked. They would describe me as a natural leader 
                </p>
                </div>
                </Col>
                </Row>
                <Row>
                <p><br></br><br></br></p>
                <Col>
                <div class ="speechbubble">
                <p style={{textAlign:'justify'}}>
                    <b>How would you describe your ability to inherit code from others, likely in a variety of languages/frameworks, 
                        for which you may not be an expert? Can you provide an example?</b><br></br>

                    I would ask for any documentation if available, if not I will try and document as much as I can to understand what the code is trying to do. I will invest the time to really look at the file structure, CMS, task runners and whether or not the site is relying on any template engines. If it is a language or a framework I am not an expert on, I will see if expert help is available. If not, I will start enhancing my skills in that particular language or framework and own the code in whatever state it is in and try to improve on it. I will familiarize myself with reusable functions so I am not duplicating any code. 
                </p>
                </div>
                </Col>
                <Col>
                <div class ="speechbubble">
                <p style={{textAlign:'justify'}}>
               <b> Please share a recent example where you had to work with a challenging personality or deal with a challenging situation.</b><br></br>

                In my first job, my boss was a person who changed her instructions very frequently and failed to remember that she had done those changes. In the beginning this would cause me a lot of frustration as I had to constantly change and repeat a lot of my efforts to meet her expectations. I realized that I had to work within the system otherwise the work would suffer. So I  learnt that I needed to document the instructions/directions and get it approved from her before starting any work. This enabled both of us to get the work streamlined and become more efficient. We managed to establish a good working relationship. My boss appreciated my way of working and started delegating a lot of the work to me. 
                </p>
                </div>
                </Col>
                <Col>
                <div class ="speechbubble">
                <p style={{textAlign:'justify'}}>
              <b> What types of job responsibilities do you find to be the most rewarding/frustrating? Why?</b><br></br>

The type of responsibilities I find most rewarding is when I am the lead on the project and the go-to person on the project for issues. It is very satisfying when I can meet project deadlines and am appreciated for the quality of the project. 

Most frustrating is when I am told what to do with no flexibility to innovate or find better solutions to any task. I find it beneficial if I know what is trying to be achieved and find the most optimum solution within the quality frameworks defined for the project or company. 
</p>
</div>
                
</Col>
                </Row>

                </div>
               
        
        
        </div>
    );
  
}

export default AboutMe
