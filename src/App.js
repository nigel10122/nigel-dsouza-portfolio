import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Education from './components/Education';
import O1A from './components/O1A';
import Authorship from './components/Authorship';
import DocumentEditor from './components/DocumentEditor';
import MediaCoverage from './components/MediaCoverage';
import LettersofRecomendation from './components/Lor';
import Awards from './components/Awards';
import CriticalRole from './components/CriticalRole';
import Judge from './components/Judge';

const MainContent = () => {
  const location = useLocation();
  const showParticles = location.pathname === "/";

  return (
    <>
      {showParticles && (
        <Particles
          className="particles-canvas"
          params={{
            particles: {
              number: { value: 30, density: { enable: true, value_area: 900 } },
              shape: { type: "circle", stroke: { width: 6, color: "#f9ab00" } }
            }
          }}
        />
      )}

      <Navbar />

<Switch>
  <Route exact path="/" render={() => (
    <div className="main-content" style={{ position: 'relative', zIndex: 1, backgroundColor: '#fff' }}>
      <div id="home"><Header /></div>
      <div id="about"><AboutMe /></div>
      <div id="skills"><Skills /></div>
      <div id="education"><Education /></div>
        <div id="experience"><Experience /></div>
      <div id="services"><Services /></div>

      {/* <div id="contacts"><Contacts /></div> */}
      <Footer />
    </div>
  )} />
  
  {/* 👇 Important: Place the more specific route first */}
  <Route path="/:category/:slug" component={DocumentEditor} />
  <Route exact path="/authorship" component={Authorship} />
  <Route exact path="/media-coverage" component={MediaCoverage} />
  <Route exact path="/lors" component={LettersofRecomendation} />
  <Route exact path="/awards" component={Awards} />
  <Route exact path="/employment" component={CriticalRole} />
  <Route exact path="/judging" component={Judge} />
  {/* <Route path="/extraordinary" component={O1A} /> */}
</Switch>

    </>
  );
};

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;
