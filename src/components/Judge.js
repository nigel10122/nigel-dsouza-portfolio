import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

const Judge = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'judging'));
        const fetchedArticles = querySnapshot.docs.map(doc => ({
          title: doc.data().title || doc.id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
          path: `/judging/${doc.id}`
        }));
        setArticles(fetchedArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <section className="judging-section" style={{ padding: '3rem 2rem', backgroundColor: '#fdfdfd' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem', marginTop: '2rem', color: '#212529' }}>
          Judging Collection
        </h1>

        <div className="container">
          <div className="row">
            {articles.map((article, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                >
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
    </div>
  );
};

export default Judge;
