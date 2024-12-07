import React, { useState } from 'react';
import AuthWrapper from '../AuthWrapper';
import { useNavigate } from 'react-router';

const Edit: React.FC = () => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset form fields (optional)
    setTitle('');
    setTags('');
    setContent('');

    navigate('/')
  };

  return (
    <AuthWrapper>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h2>Edit Post</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="title" style={{ display: 'block', marginBottom: '5px' }}>
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
              placeholder="Enter the title of your post"
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="tags" style={{ display: 'block', marginBottom: '5px' }}>
              Tags (comma-separated):
            </label>
            <input
              type="text"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
              placeholder="e.g. Company, JavaScript, Web Development"
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="content" style={{ display: 'block', marginBottom: '5px' }}>
              Content:
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{
                width: '100%',
                height: '150px',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
              placeholder="Write your topic content here..."
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: 'hsl(190, 70%, 70%)',
              color: '#000',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default Edit;
