import React, { useEffect, useState } from 'react';
import EditPicture from './EditPicture';
import Gallery from './Gallery';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [gallery, setGallery] = useState([]);

  const deletePicture = (index) => {
    const newGallery = gallery.filter((_, i) => i !== index);
    setGallery(newGallery);
  }

  useEffect(() => {
    const savedGallery = localStorage.getItem('gallery');
    if (savedGallery) {
      setGallery(JSON.parse(savedGallery));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gallery', JSON.stringify(gallery));
  }, [gallery]);

  const onSave = (picture, rows, columns) => {
    setGallery([...gallery, { picture, rows, columns }]);
    setIsOpen(false);
  }

  return (
    <div className="App">
      <button className='button' onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? "Add picture" : "Close"}
      </button>
      {isOpen && <EditPicture onSave={onSave} />}
      <Gallery deletePicture={deletePicture} gallery={gallery} />
    </div>
  );
}

export default App;
