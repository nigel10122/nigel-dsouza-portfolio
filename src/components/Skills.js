import react from '../assets/icons/react.svg';
import Bar from './Bar';

const languages = [
  {
    icon: react,
    name: <span style={{ marginLeft: '10px' }}>Java (Spring Boot, Spring Batch)</span>,
    level: '85',
  },
  {
    icon: react,
    name: <span style={{ marginLeft: '10px' }}>Node.js (AWS Lambda)</span>,
    level: '75',
  },
  {
    icon: react,
    name: <span style={{ marginLeft: '10px' }}>Python</span>,
    level: '65',
  },
  {
    icon: react,
    name: <span style={{ marginLeft: '10px' }}>HTML/CSS/JavaScript</span>,
    level: '80',
  },
  {
    icon: react,
    name: <span style={{ marginLeft: '10px' }}>React</span>,
    level: '70',
  },
  {
    icon: react,
    name: <span style={{ marginLeft: '10px' }}>SQL/PLSQL (Oracle, PostgreSQL)</span>,
    level: '70',
  },
];

const tools = [
  {
    icon: react,
    name: <span style={{ marginLeft: '10px' }}>Terraform (AWS Infra as Code)</span>,
    level: '90',
  },
  {
    icon: react,
    name: <span style={{ marginLeft: '10px' }}>AWS (Lambda, Batch, EKS, S3, DynamoDB, Step Functions)</span>,
    level: '85',
  },
  {
    icon: react,
    name: <span style={{ marginLeft: '10px' }}>Jenkins (CI/CD, Groovy)</span>,
    level: '80',
  },
  {
    icon: react,
    name: <span style={{ marginLeft: '10px' }}>Git & GitHub/GitLab</span>,
    level: '80',
  },
  {
    icon: react,
    name: <span style={{ marginLeft: '10px' }}>Docker</span>,
    level: '70',
  },
  {
    icon: react,
    name: <span style={{ marginLeft: '10px' }}>Datadog (Monitoring/Logs)</span>,
    level: '75',
  },
  {
    icon: react,
    name: <span style={{ marginLeft: '10px' }}>Postman & Selenium</span>,
    level: '65',
  },
];

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="container">
        <h1 className="py-5" style={{ textAlign: 'center' }}>MY SKILLS</h1>

        <div className="row">
          <div className="col-lg-6 resume-languages">
            <h5 className="reume-language__heading">Languages & Frameworks</h5>
            <div className="resume-language__body mt-3">
              {languages.map((language, i) => <Bar key={i} value={language} />)}
            </div>
          </div>
          <div className="col-lg-6 resume-languages">
            <h5 className="reume-language__heading">Tools & Platforms</h5>
            <div className="resume-language__body mt-3">
              {tools.map((tool, i) => <Bar key={i} value={tool} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
