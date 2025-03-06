import React from "react";

const GalleryItem = ({ image, onImageClick }) => {
    return (
        <div className="card">
            <img
                src={image.src}
                alt={image.title}
                onClick={() => onImageClick(image)}
            />
        </div>
    );
};

export default GalleryItem;
