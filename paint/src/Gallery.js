import React from "react";
import GalleryPicture from "./GalleryPicture";
import './styles/Gallery.css'

const Gallery = ({ gallery, deletePicture }) => {
  return (
    <div className="gallery">
      {gallery.map((picture, index) => (
        <div className="GalleryPictureContainer" key={index} style={{ marginBottom: '10px' }}>
          <GalleryPicture 
            picture={picture.picture} 
            rows={picture.rows} 
            columns={picture.columns} 
          />
          <button className="deleteBtn" onClick={() => deletePicture(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
