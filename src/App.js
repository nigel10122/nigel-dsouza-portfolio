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
import ArticlePage from './components/ArticlePage';

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
      <div id="services"><Services /></div>
      <div id="experience"><Experience /></div>
      <div id="contacts"><Contacts /></div>
      <Footer />
    </div>
  )} />
  
  {/* 👇 Important: Place the more specific route first */}
  <Route path="/authorship/:slug" component={ArticlePage} />
  <Route exact path="/authorship" component={Authorship} />
  <Route path="/extraordinary" component={O1A} />
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
