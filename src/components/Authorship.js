import React from 'react';
import { Link } from 'react-router-dom';

const Authorship = () => {
  const articles = [
    { title: 'The Future of AI-Driven Infrastructure', path: '/authorship/future-ai-infra' },
    { title: 'When Code Becomes a Canvas', path: '/authorship/code-canvas' },
    { title: 'Microservices vs Monolith – A Developer’s Identity Crisis', path: '/authorship/identity-crisis' },
    { title: 'The Art of Automation in Modern Engineering', path: '/authorship/art-of-automation' },
    { title: 'Terraforming the Cloud: From Code to Control', path: '/authorship/terraform-cloud' }
  ];

  return (
    <section className="authorship-section" style={{ padding: '3rem 2rem', backgroundColor: '#fdfdfd' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', marginTop:'2rem',  color: '#212529' }}>Authorship Collection</h1>

      <div className="container">
        <div className="row">
          {articles.map((article, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h5 style={{ marginBottom: '1rem', color: '#0d6efd' }}>{article.title}</h5>
                <Link to={article.path} className="btn btn-outline-dark btn-sm">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authorship;