import React from "react";
import GalleryPixel from './GalleryPixel'
import './styles/GalleryPicture.css'

const GalleryPicture = ({ picture, rows, columns }) => {
    return (
        <div className="galleryPicture" style={{
            width: columns * 15,
            height: rows * 15,
            display: 'flex',
            flexWrap: 'wrap'
        }}>
            {picture.map((color, index) => (
                <GalleryPixel key={index} color={color} />
            ))}
        </div>
    );
}

export default GalleryPicture;
