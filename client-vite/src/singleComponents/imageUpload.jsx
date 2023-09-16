import React, { useState } from 'react';

function ImageUpload({ onImageSelect }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const imageDataURL = event.target.result;
        console.log(imageDataURL);
        setSelectedImage(imageDataURL);
        onImageSelect(imageDataURL);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {selectedImage && (
        <img
          src={selectedImage}
          alt="Selected"
          style={{ maxWidth: '100px', maxHeight: '100px' }}
        />
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ marginTop: '10px' }}
      />
    </div>
  );
}

export default ImageUpload;
