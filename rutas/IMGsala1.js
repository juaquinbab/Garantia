
const fs = require('fs');
const axios = require('axios');
require('dotenv').config();
const url = process.env.url;
const idnumero = '543668822173469'
const path = require('path');
const urlserver = "https://garantia-production.up.railway.app/";


function IMGsala1(EtapasMSG, WHATSAPP_API_TOKEN) {
  // Iterar a través de EtapasMSG
  let idToUpdateAU = null;

  if (EtapasMSG.length > 0) {
    let elementoModificadoRecientemente33 = null;

    EtapasMSG.forEach((elemento) => {
      if (
        elemento.Idp !== 0 &&
        (elementoModificadoRecientemente33 === null ||
          elemento.timestamp > elementoModificadoRecientemente33.timestamp)
      ) {
        elementoModificadoRecientemente33 = elemento;
      }
    });

    if (elementoModificadoRecientemente33 !== null) {
      const { from, body, etapa, id, imgID, audioID, name } = elementoModificadoRecientemente33;

      if (etapa <= 0 || etapa <= 10 && imgID) {
        const folders = ['./sala1',]; // Lista de carpetas a revisar

        function countJSONFiles(callback) {
          let fileCount33 = 0;
          folders.forEach((folderPath) => {
            fs.readdir(folderPath, (err, files) => {
              if (err) {
                console.error('Error al leer la carpeta:', err);
                return;
              }

              const jsonFiles42 = files.filter((file) => path.extname(file) === '.json');
              fileCount33 += jsonFiles42.length;

              // Si hemos procesado la última carpeta, llama al callback
              if (folderPath === folders[folders.length - 1]) {
                callback(fileCount33);
              }
            });
          });
        }

        // Llamar a la función countJSONFilescirugia para obtener fileCount2
        countJSONFiles((fileCount33) => {
          idToUpdateAU = id;

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'text',
            text: {
              preview_url: false,
              body: `imagen recibida con éxito.\n`,
            },
          };

          axios
            .post(`https://graph.facebook.com/v16.0/${idnumero}/messages`, payload, {
              headers: {
                Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
                'Content-Type': 'application/json',
              },
            })
            .then((response) => {
              if (idToUpdateAU !== null) {
                const indexToUpdate = EtapasMSG.findIndex((item) => item.id === idToUpdateAU);
                if (indexToUpdate !== -1) {
                  EtapasMSG[indexToUpdate].etapa = 6;
                  EtapasMSG[indexToUpdate].idp = 0;
                  idToUpdateAU = null; // Restablecer el ID a null después de la actualización
                }
              }
            })
            .catch((error) => {
              console.error('Error al enviar la respuesta:', error.response.data);
            });
        });

        // Envia la imagen al servidor.

        const url = 'https://graph.facebook.com/v17.0/' + imgID;

        const config = {
          headers: {
            Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
          },
        };

        axios.get(url, config)
          .then(response => {
            const urlFromResponse = response.data.url;

            const configp = {
              headers: {
                Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              },
              responseType: 'stream',
            };

            axios.get(urlFromResponse, configp)
              .then(imageResponse => {
                const randomThreeDigitNumber = Math.floor(1 + Math.random() * 9000); // Número aleatorio entre 100 y 999
                const modifiedFileName = `${from}-${randomThreeDigitNumber}.jpg`;
                const imagePath = path.join(process.cwd(), '/public/historico', modifiedFileName);
                const writer = fs.createWriteStream(imagePath);

                imageResponse.data.pipe(writer);

                writer.on('finish', () => {
                  console.log('¡Imagen guardada con éxito en el servidor!');
                });

                // Generar el URL de la imagen

                const imageURL = `${urlserver}/historico/${modifiedFileName}`;

                // Buscar y actualizar archivo JSON en ambas carpetas
                let fileFound = false;
                for (const folderPath of folders) {
                  if (fileFound) break; // Si el archivo ya se encontró en una carpeta, no seguir buscando

                  // Nombre del archivo a buscar
                  const fileName = `${from}.json`;

                  // Ruta completa del archivo
                  const filePath = path.join(folderPath, fileName);

                  // Verificar si el archivo existe
                  if (fs.existsSync(filePath)) {
                    fileFound = true;
                    try {
                      // Leer el contenido del archivo JSON
                      const fileContent = fs.readFileSync(filePath, 'utf8');

                      // Parsear el contenido JSON a un array
                      const existingData = JSON.parse(fileContent);

                      // Información para agregar al JSON
                      const newData = {
                        "from": from,
                        "body": imageURL,
                        "name": name,
                        "imgID": "",
                        "etapa": 7,
                        "id": "",
                        "timestamp": Date.now(),
                        "Cambio": 1,
                        "IDNAN": 4,
                        "Idp": 1,
                        "idp": 0
                      };

                      // Agregar el nuevo objeto al array existente
                      existingData.push(newData);

                      // Escribir el array actualizado en el archivo JSON
                      fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

                      console.log('Nuevo dato agregado al archivo JSON correctamente.');
                    } catch (error) {
                      console.error('Error al procesar el archivo JSON:', error);
                    }
                  } else {
                    console.error(`El archivo no existe en ${folderPath}.`);
                  }
                }

                writer.on('error', (err) => {
                  console.error('Error al guardar la imagen:', err);
                });
              })
              .catch(error => {
                console.error('Error al realizar la solicitud GET para la imagen:', error);
              });
          })
          .catch(error => {
            console.error('Error al realizar la solicitud a la API de Facebook:', error);
          });
      } else {
        console.log("La condición para 'body' y 'etapa' no coincide.");
      }
    } else {
      console.log('No se encontró ningún elemento válido con idp distinto de 0');
    }
  } else {
    console.log("El array EtapasMSG está vacío.");
  }
}

module.exports = { IMGsala1 };