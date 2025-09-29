import React, {useState} from 'react';
import EditPicture from './EditPicture';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [gallery, setGallery] = useState([])

    const onSave = (picture) => {
        setGallery(prev => [...prev, picture]);
        console.log("Gallery:", [...gallery, picture]);
    }

  return (
    <div className="App">
      <button onClick={() => setIsOpen(!isOpen)}>{!isOpen ? "Add picture" : "Close"}</button>
      {isOpen && <EditPicture onSave={onSave}/>}
    </div>
  );
}

export default App;
