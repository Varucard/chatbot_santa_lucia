const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('image'), (req, res) => {
  try {
    // Obtiene el archivo subido
    const file = req.file;

    // Verifica si se subió un archivo
    if (!file) {
      res.status(400).json({ error: 'No se ha proporcionado ninguna imagen.' });
      return;
    }

    // Mueve el archivo subido al directorio deseado (p. ej., 'public/uploads')
    const targetDirectory = 'public/uploads';
    const targetPath = path.join(targetDirectory, file.originalname);

    fs.renameSync(file.path, targetPath);

    res.json({ message: 'Imagen subida correctamente.', imageUrl: targetPath });
  } catch (error) {
    console.error('Error al subir la imagen:', error.message);
    res.status(500).json({ error: 'Ocurrió un error al subir la imagen.' });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
