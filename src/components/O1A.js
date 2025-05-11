import React from 'react';
import { Link } from 'react-router-dom';

const O1A = () => {
  const sections = [
    { title: 'Authorship', path: '/o1a/authorship' },
    { title: 'Media Coverage', path: '/o1a/media' },
    { title: 'Letters of Recommendation', path: '/o1a/lors' },
    { title: 'Critical Employment', path: '/o1a/employment' },
    { title: 'High Salary', path: '/o1a/salary' },
    { title: 'Original Contributions', path: '/o1a/contributions' },
    { title: 'Judging / Peer Review', path: '/o1a/judging' },
    { title: 'Professional Memberships', path: '/o1a/memberships' }
  ];

  return (
    <section id="extraordinary-abilities" style={{ padding: '3rem 2rem', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', marginTop: '1rem', color: '#333' }}>Extraordinary Abilities (O1-A Portfolio)</h1>

      <div className="container">
        <div className="row">
          {sections.map((section, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                <h4 style={{ marginBottom: '1rem', color: '#0d6efd' }}>{section.title}</h4>
                <Link to={section.path} className="btn btn-outline-primary">
                  View {section.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default O1A;
