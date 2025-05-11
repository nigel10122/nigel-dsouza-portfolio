import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";

const Footer = () => {
  return (
    <footer className="footer py-5" style={{ backgroundColor: "#1a1a1a", color: "#eee" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="text-warning">Contact</h5>
            <p className="mb-1">📍 2070 Texas plaza Dr</p>
            <p className="mb-1">📞 <a href="tel:+14693325344" style={{ color: '#eee' }}>+1 (469) 332-5344</a></p>
            <p>✉️ <a href="mailto:nigel10122@gmail.com" style={{ color: '#eee' }}>nigel10122@gmail.com</a></p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="text-warning">Quick Links</h5>
            <div className="row">
              <div className="col">
                <a className="footer-nav d-block mb-2" href="#home">Home</a>
                <a className="footer-nav d-block mb-2" href="#about">About Me</a>
                <a className="footer-nav d-block mb-2" href="#services">Services</a>
              </div>
              <div className="col">
                <a className="footer-nav d-block mb-2" href="#experience">Experience</a>
                <a className="footer-nav d-block mb-2" href="#portfolio">Portfolio</a>
                <a className="footer-nav d-block mb-2" href="#contacts">Contact</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4 text-center">
            <h5 className="text-warning">Connect</h5>
            <div className="d-flex justify-content-center mb-3">
              <FacebookShareButton url="https://nigel-portfolio.dev" quote="Tech Lead | Cloud Architect">
                <FacebookIcon className="mx-2" size={36} round />
              </FacebookShareButton>
              <TwitterShareButton url="https://nigel-portfolio.dev" quote="Tech Lead | Cloud Architect">
                <TwitterIcon className="mx-2" size={36} round />
              </TwitterShareButton>
              <RedditShareButton url="https://nigel-portfolio.dev" quote="Tech Lead | Cloud Architect">
                <RedditIcon className="mx-2" size={36} round />
              </RedditShareButton>
              <LinkedinShareButton url="https://nigel-portfolio.dev" quote="Tech Lead | Cloud Architect">
                <LinkedinIcon className="mx-2" size={36} round />
              </LinkedinShareButton>
            </div>
            <p style={{color : 'white'}}>
              &copy; {new Date().getFullYear()} Nigel D'Souza | Built with 💻 React JS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
