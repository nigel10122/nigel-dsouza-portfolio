import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

const O1A = () => {
  const sections = [
    { title: 'Authorship', path: '/authorship', key: 'authorship' },
    { title: 'Media Coverage', path: '/media-coverage', key: 'media-coverage' },
    { title: 'Letters of Recommendation', path: '/lors', key: 'letters-of-recomendation' },
    { title: 'Critical Employment', path: '/employment', key: 'employment' },
    { title: 'High Salary', path: '/salary', key: 'salary' },
    { title: 'Original Contributions', path: '/contributions', key: 'contributions' },
    { title: 'Judging / Peer Review', path: '/judging', key: 'judging' },
    { title: 'Professional Memberships & Awards', path: '/memberships', key: 'memberships' }
  ];

  const [evidenceData, setEvidenceData] = useState([]);
  const [docCounts, setDocCounts] = useState({});
  const [sectionStatus, setSectionStatus] = useState({});

  useEffect(() => {
    const fetchEvidence = async () => {
      const snapshot = await getDocs(collection(db, 'evidence-tracker'));
      const data = snapshot.docs.map(doc => doc.data());
      setEvidenceData(data);
    };

    const fetchDocCounts = async () => {
      const counts = {};
      for (let section of sections) {
        const snap = await getDocs(collection(db, section.key));
        counts[section.key] = snap.size;
      }
      setDocCounts(counts);
    };

    const fetchStatuses = async () => {
      const statuses = {};
      for (let section of sections) {
        const ref = doc(db, 'requirement-progress', section.key);
        const snap = await getDoc(ref);
        statuses[section.key] = snap.exists() ? snap.data().status : 'Not Started';
      }
      setSectionStatus(statuses);
    };

    fetchEvidence();
    fetchDocCounts();
    fetchStatuses();
  }, []);

  const getStatusBadge = (status) => {
    const colorMap = {
      "Complete": "success",
      "In Progress": "warning",
      "Not Started": "secondary",
      "Not Met": "danger"
    };
    return <span className={`badge bg-${colorMap[status] || "light"} text-dark`}>{status}</span>;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Accepted":
        return "badge bg-success";
      case "Reached out":
        return "badge bg-info text-dark";
      case "Not started":
        return "badge bg-secondary";
      case "Not Met":
        return "badge bg-danger";
      default:
        return "badge bg-light text-dark";
    }
  };

  const getTypeColor = (type) => {
    const colors = {
      'Media': 'badge bg-purple',
      'Judging': 'badge bg-warning text-dark',
      'Prizes': 'badge bg-danger',
      'Research': 'badge bg-primary',
    };
    return colors[type] || 'badge bg-light text-dark';
  };

  return (
    <section id="extraordinary-abilities" style={{ marginTop: "2rem", padding: '3rem 2rem', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1 className="text-center mb-5">Extraordinary Abilities Requirements (O1-A Portfolio)</h1>

      <div className="container mb-5">
        <div className="row">
          {sections.map((section, index) => {
            const status = sectionStatus[section.key] || 'Not Started';
            const count = docCounts[section.key] || 0;

            return (
              <div key={index} className="col-md-6 mb-4">
                <div style={{
                  backgroundColor: 'white',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 0 10px rgba(0,0,0,0.1)'
                }}>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 style={{ color: '#0d6efd' }}>{section.title}</h5>
                    {getStatusBadge(status)}
                  </div>
                  {count > 0 && (
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>
                      📄 {count} {section.title === 'Letters of Recommendation' ? 'letters' : 'documents'}
                    </p>
                  )}
                  <Link to={section.path} className="btn btn-outline-primary btn-sm">
                    View {section.title}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Evidence Tracker Table */}
      <div className="container bg-white p-4 rounded shadow">
        <h3 className="mb-4">Evidence Tracker</h3>
        <table className="table table-hover table-bordered">
          <thead className="table-light">
            <tr>
              <th>Organization</th>
              <th>Status</th>
              <th>Type of Evidence</th>
            </tr>
          </thead>
          <tbody>
            {evidenceData.map((item, index) => (
              <tr key={index}>
                <td><strong>{item.org}</strong></td>
                <td><span className={getStatusColor(item.status)}>{item.status}</span></td>
                <td>
                  {item.type?.map((t, i) => (
                    <span key={i} className={`${getTypeColor(t)} me-1`}>{t}</span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default O1A;
