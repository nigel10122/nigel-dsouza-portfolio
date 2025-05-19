// src/components/ArticlePage.js
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import jsPDF from 'jspdf';
import { marked } from 'marked';

const ArticlePage = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [editing, setEditing] = useState(false);
  const textAreaRef = useRef();

  useEffect(() => {
    const fetchContent = async () => {
      const docRef = doc(db, 'authorship', slug);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContent(docSnap.data().content);
      } else {
        setContent(`# ${slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}\n\nStart writing your article here...`);
      }
    };
    fetchContent();
  }, [slug]);

  const handleSave = async () => {
    const updated = textAreaRef.current.value;
    await setDoc(doc(db, 'authorship', slug), { content: updated });
    setContent(updated);
    setEditing(false);
  };

  const handleDownloadPDF = () => {
    const docPDF = new jsPDF();
    const lines = docPDF.splitTextToSize(content, 180);
    docPDF.text(lines, 10, 10);
    docPDF.save(`${slug}.pdf`);
  };

  const handleDownloadMarkdown = () => {
    const blob = new Blob([content], { type: 'text/markdown' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${slug}.md`;
    link.click();
  };

  const handleEdit = () => setEditing(true);

  const formatTitle = slug => slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div className="container py-5" style={{ backgroundColor: '#f9f9f9', minHeight: '100vh', marginTop: "5rem" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 style={{ fontWeight: 'bold' }}>{formatTitle(slug)}</h2>
        <div>
          <button className="btn btn-danger mx-1" onClick={handleDownloadPDF}>Download PDF</button>
          <button className="btn btn-secondary mx-1" onClick={handleDownloadMarkdown}>Download .md</button>
        </div>
      </div>

      <div className="d-flex">
        <div className="me-4">
          {!editing ? (
            <button className="btn btn-warning" onClick={handleEdit}>✏️ Edit</button>
          ) : (
            <button className="btn btn-success" onClick={handleSave}>✅ Save</button>
          )}
        </div>

        <div className="flex-grow-1">
          {!editing ? (
            <div style={{ background: '#fff', padding: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}>
              <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
          ) : (
            <textarea
              ref={textAreaRef}
              defaultValue={content}
              rows={20}
              className="form-control"
              style={{ fontFamily: 'monospace', background: '#fff', border: '1px solid #ccc' }}
            ></textarea>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
