const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const { v4: uuidv4 } = require("uuid");


const { ACCESS_KEY_ID, SECRET_ACCESS_KEY, BUCKET, IMAGE } = process.env;

// Configura las credenciales de AWS
const s3Client = new S3Client({
  region: 'sa-east-1', // Cambia a tu región
  credentials: {
    accessKeyId: `${ACCESS_KEY_ID}`,
    secretAccessKey: `${SECRET_ACCESS_KEY}`
  }
});



// Configura el almacenamiento con Multer-S3
const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.BUCKET,
    key: (req, file, callback) => {
      const extension = file.originalname.split(".").pop();
      const filename = `${uuidv4()}.${extension}`;
      callback(null, filename);
    },
  }),
});

// Ruta para subir la imagen
app.post("/upload-image", upload.single("image"), (req, res) => {
  if (req.file) {
    const imageUrl = req.file.location; // URL de la imagen en S3
    res.json({ success: true, url: imageUrl });
  } else {
    res.json({ success: false, message: "Error al subir la imagen" });
  }
});

module.exports = app;
