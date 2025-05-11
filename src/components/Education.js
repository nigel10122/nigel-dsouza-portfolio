import React from "react";
import UTA from '../images/uta.png';
import MumbaiUniversity from '../images/mumbaiUniversity.png';
import TrineUniversity from '../images/trine.png';

const Education = () => {
  return (
    <div id="education" className="container py-5">
      <h1 className="py-5" style={{ color: 'black', textAlign: 'center' }}>EDUCATION</h1>
      <div className="row justify-content-center text-center">

        <div className="col-md-4 mb-4">
          <img className="g-card-image img-fluid mb-3" src={TrineUniversity} alt="Trine University" style={{ height: '100px', objectFit: 'contain' }} />
          <div>
            <h4 style={{ color: 'firebrick' }}>⦿ MSEM (Engineering Management)</h4>
            <h5 style={{ color: 'firebrick' }}>⦿ Trine University</h5>
            <h5 style={{ color: 'firebrick' }}>⦿ 2024–Present</h5>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <img className="g-card-image img-fluid mb-3" src={UTA} alt='University of Texas At Arlington' style={{ height: '100px', objectFit: 'contain' }} />
          <div>
            <h4 style={{ color: 'firebrick' }}>⦿ MSCS (Computer Science)</h4>
            <h5 style={{ color: 'firebrick' }}>⦿ University of Texas at Arlington</h5>
            <h5 style={{ color: 'firebrick' }}>⦿ 2019–2021</h5>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <img className="g-card-image img-fluid mb-3" src={MumbaiUniversity} alt='Mumbai University' style={{ height: '100px', objectFit: 'contain' }} />
          <div>
            <h4 style={{ color: 'firebrick' }}>⦿ BE (Computer Science)</h4>
            <h5 style={{ color: 'firebrick' }}>⦿ Mumbai University</h5>
            <h5 style={{ color: 'firebrick' }}>⦿ 2014–2018</h5>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Education;
