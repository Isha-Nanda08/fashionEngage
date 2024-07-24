import React, { useState } from 'react';
import '../styles/writeblog.css'; // Ensure this path is correct

const WriteBlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    // Replace this URL with your actual endpoint
    fetch('/submit-blog', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div >
    <div className="form-container">
      <h2>Write a Blog</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="title">Blog Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Blog Content</label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={handleContentChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload Image (optional)</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="submit-btn">Post</button>
      </form>
    </div>
  </div>
  );
};

export default WriteBlogForm;
