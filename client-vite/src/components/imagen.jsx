"use client";
import React, { useState } from "react";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes realizar la lógica para subir la imagen
    // Por ejemplo, puedes utilizar una API para subir la imagen al servidor

    // Una vez completada la subida, puedes limpiar el formulario
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  return (
    <div>
      <h1>Subir Imagen</h1>
      <div onSubmit={handleSubmit}>
        <input type="file" accept=".jpg,.png,.jpeg" onChange={handleFileChange} />
        {previewUrl && <img src={previewUrl} alt="Preview" style={{ maxWidth: "100%", marginTop: "10px" }} />}
        <button type="submit" disabled={!selectedFile}>Subir</button>
      </div>
    </div>
  );
};

export default ImageUpload;
