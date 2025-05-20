import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const DocumentEditorPage = () => {
  const { category, slug } = useParams();
  const [markdown, setMarkdown] = useState('');
  const [isEditable, setIsEditable] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedUrls, setPublishedUrls] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      const ref = doc(db, category, slug);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        setMarkdown(data.content || '');
        setIsEditable(data.editable || false);
        setTitle(data.title || '');
        setAuthor(data.author || '');
        setPublishedUrls(data.publishedUrls || []);
      }
    };
    fetchContent();
  }, [category, slug]);

  const handleSave = async () => {
    const ref = doc(db, category, slug);
    await setDoc(ref, { content: markdown }, { merge: true });
    setIsEditing(false);
  };

  return (
    <div className="container py-5" style={{ marginTop: '2rem' }}>
      {/* Header Area */}
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <h1 style={{ fontWeight: 600, fontSize: '2.25rem' }}>{title || 'Untitled Document'}</h1>
          {author && (
            <h4 className="text-muted" style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>
              By {author}
            </h4>
          )}

          {publishedUrls.length > 0 && (
            <div className="mt-3">
              <h6 style={{ fontWeight: 500, fontSize: '1.1rem' }}>Published On:</h6>
              <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem' }}>
                {publishedUrls.map((url, i) => (
                  <li key={i}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {url}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Edit Button */}
        {isEditable && (
          <div>
            {!isEditing ? (
              <button className="btn btn-warning" onClick={() => setIsEditing(true)}>
                ✏️ Edit
              </button>
            ) : (
              <button className="btn btn-success" onClick={handleSave}>
                ✅ Save
              </button>
            )}
          </div>
        )}
      </div>

      {/* Markdown Editor / Preview */}
      {isEditing ? (
        <textarea
          className="form-control"
          rows={30}
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          style={{
            fontFamily: 'monospace',
            whiteSpace: 'pre-wrap',
            backgroundColor: '#fdfdfd',
          }}
        />
      ) : (
        <div
          className="markdown-preview p-4"
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #ddd',
            borderRadius: '6px',
            maxWidth: '100%',
            overflowWrap: 'break-word',
          }}
        >
          <ReactMarkdown
            children={markdown}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              img: ({ ...props }) => (
                <img
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '6px',
                    marginBottom: '1rem',
                  }}
                  alt={props.alt}
                  {...props}
                />
              ),
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DocumentEditorPage;
