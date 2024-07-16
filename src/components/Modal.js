import React, { useState} from 'react';
import './style.css';

const Modal = ({ currentItem, textContent, setTextContent, onClose }) => {
  const [headingText, setHeadingText] = useState(currentItem.heading);
  const [paragraphText, setParagraphText] = useState(currentItem.paragraph);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'heading') {
      setHeadingText(value);
    } else if (name === 'paragraph') {
      setParagraphText(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTextContent = textContent.map((item) => {
      if (item.id === currentItem.id) {
        return { ...item, heading: headingText, paragraph: paragraphText };
      }
      return item;
    });
    setTextContent(updatedTextContent);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className='modal-header'>
          <h2>Edit Data</h2>
          <button onClick={onClose} className="close-button">X</button>
        </div>
        <div className='header-border'></div>
        <form onSubmit={handleSubmit}>
          <div className='input-content'>
            <label>Heading</label>
            <input
              className='input-placeholder'
              type="text"
              name="heading"
              value={headingText}
              onChange={handleChange}
            />
          </div>

          <div className='input-content'>
            <label>Paragraph</label>
            <input
              className='input-placeholder'
              type="text"
              name="paragraph"
              value={paragraphText}
              onChange={handleChange}
            />
          </div>

          <button className='submit-btn' type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
