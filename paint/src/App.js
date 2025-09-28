import React, {useState} from 'react';
import EditPicture from './EditPicture';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setIsOpen(!isOpen)}>{!isOpen ? "Add picture" : "Close"}</button>
      {isOpen && <EditPicture/>}
    </div>
  );
}

export default App;
