const fs = require('fs');
const path = require('path');

// Ruta a la carpeta donde están los archivos JSON
const folderPath = path.join(__dirname, '2024-11-05');

// Leer todos los archivos de la carpeta
fs.readdir(folderPath, (err, files) => {
  if (err) {
    return console.error('Error leyendo la carpeta:', err);
  }

  // Filtrar solo los archivos JSON
  const jsonFiles = files.filter(file => file.endsWith('.json'));

  jsonFiles.forEach(file => {
    // Leer el contenido de cada archivo JSON
    const filePath = path.join(folderPath, file);
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        return console.error(`Error leyendo el archivo ${file}:`, err);
      }

      try {
        // Parsear el contenido JSON
        const jsonData = JSON.parse(data);

        // Comprobar si alguno de los objetos en el array tiene etapa 0 o 110
        const hasEtapa = jsonData.some(obj => obj.etapa === 0 || obj.etapa === 110);

        // Si lo tiene, imprimir el nombre del archivo
        if (hasEtapa) {
          console.log(`El archivo ${file} contiene un objeto con etapa 0 o 110`);
        }
      } catch (error) {
        console.error(`Error parseando el archivo ${file}:`, error);
      }
    });
  });
});
