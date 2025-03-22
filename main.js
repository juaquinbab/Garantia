const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { log, Console } = require('console');
const axios = require('axios');
const fs = require('fs');
const chokidar = require('chokidar');
const jsonfile = require('jsonfile');
const multer = require('multer');
const uuid = require('uuid');
const dataMap = new Map();
const batchSize = 5;
const app = express();



const { inicio } = require('./rutas/inicio');
const { venta } = require('./rutas/venta');




const { constants } = require('buffer');
require('dotenv').config();
const moment = require('moment-timezone');



const WHATSAPP_API_TOKEN = process.env.WHATSAPP_API_TOKEN;
const PORT = process.env.PORT;
const urlserver = "https://garantia-production.up.railway.app/";
const apiKey = process.env.apiKey;
const idnumero = '543668822173469'

const historialPath = path.join(__dirname, 'sala1');
const historials2Path = path.join(__dirname, 'sala2');
const historials3Path = path.join(__dirname, 'sala3');
const historials4Path = path.join(__dirname, 'sala4');
const historials5Path = path.join(__dirname, 'sala5');
const historials6Path = path.join(__dirname, 'sala6');
const historials7Path = path.join(__dirname, 'sala7');
const historials8Path = path.join(__dirname, 'sala8');
const historials9Path = path.join(__dirname, 'sala9');
const historials10Path = path.join(__dirname, 'sala10');
const historials11Path = path.join(__dirname, 'sala11');






///////PDF/////

let lastScreenshotUrlpdf1 = '';
let lastScreenshotUrlpdf2 = '';
let lastScreenshotUrlpdf3 = '';
let lastScreenshotUrlpdf4 = '';
let lastScreenshotUrlpdf5 = '';
let lastScreenshotUrlpdf6 = '';
let lastScreenshotUrlpdf7 = '';
let lastScreenshotUrlpdf8 = '';
let lastScreenshotUrlpdf9 = '';
let lastScreenshotUrlpdf10 = '';
let lastScreenshotUrlpdf11 = '';





app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



// Endpoint para la verificación de la suscripción de WhatsApp
app.get('/webhook', function (req, res) {
  if (
    req.query['hub.verify_token'] === 'ok') {
    res.send(req.query['hub.challenge']);
  } else {
    res.sendStatus(400);
  }
});


let MensajeIndex = [];
let MensajeIndexS2 = [];
let MensajeIndexS3 = [];
let MensajeIndexS4 = [];
let MensajeIndexS5 = [];
let MensajeIndexS6 = [];
let MensajeIndexS7 = [];
let MensajeIndexS8 = [];
let MensajeIndexS9 = [];
let MensajeIndexS10 = [];
let MensajeIndexS11 = [];
const EtapasMSG = []
const registro = []



let lastScreenshotUrl10 = '';
let lastScreenshotUrls2 = '';
let lastScreenshotUrls3 = '';
let lastScreenshotUrls4 = '';
let lastScreenshotUrls5 = '';
let lastScreenshotUrls6 = '';
let lastScreenshotUrls7 = '';
let lastScreenshotUrls8 = '';
let lastScreenshotUrls9 = '';
let lastScreenshotUrls10 = '';
let lastScreenshotUrls11 = '';
























// //////////////////////////////////////////////////////////////////////////////
///// ESTE CODIGO SIRVE EL HISTORIAL AL CLIENTE 
///////////////////////////////////////////////////////////////////



app.get('/sala1', (req, res) => {
  fs.readdir(historialPath, (err, files) => {
    if (err) {
      res.status(500).send('Error al leer la carpeta historial');
      return;
    }
    res.json(files.filter(file => path.extname(file) === '.json'));
  });
});

// Ruta para obtener el contenido de un archivo JSON específico
app.get('/sala1/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(historialPath, fileName);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error al leer el archivo JSON');
      return;
    }
    const fileContent = JSON.parse(data);
    res.json(fileContent);
  });
});

// Ruta para actualizar un archivo JSON específico
app.put('/sala1/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(historialPath, fileName);
  const newContent = JSON.stringify(req.body, null, 2);
  fs.writeFile(filePath, newContent, 'utf8', (err) => {
    if (err) {
      res.status(500).send('Error al escribir en el archivo JSON');
      return;
    }
    res.json({ message: 'Archivo actualizado con éxito' });
  });
});

// Ruta para actualizar MensajeIndex en el servidor
app.put('/MensajeIndex', (req, res) => {
  MensajeIndex = req.body;
  res.json({ message: 'MensajeIndex actualizado en el servidor' });
});




// //////////////////////////////////////////////////////////////////////////////
///// ESTE CODIGO SIRVE EL HISTORIAL AL CLIENTE SALA 2
///////////////////////////////////////////////////////////////////



app.get('/sala2', (req, res) => {
  fs.readdir(historials2Path, (err, files) => {
    if (err) {
      res.status(500).send('Error al leer la carpeta historial');
      return;
    }
    res.json(files.filter(file => path.extname(file) === '.json'));
  });
});

// Ruta para obtener el contenido de un archivo JSON específico
app.get('/sala2/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(historials2Path, fileName);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error al leer el archivo JSON');
      return;
    }
    const fileContent = JSON.parse(data);
    res.json(fileContent);
  });
});

// Ruta para actualizar un archivo JSON específico
app.put('/sala2/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(historials2Path, fileName);
  const newContent = JSON.stringify(req.body, null, 2);
  fs.writeFile(filePath, newContent, 'utf8', (err) => {
    if (err) {
      res.status(500).send('Error al escribir en el archivo JSON');
      return;
    }
    res.json({ message: 'Archivo actualizado con éxito' });
  });
});

// Ruta para actualizar MensajeIndex en el servidor
app.put('/MensajeIndexS2', (req, res) => {
  MensajeIndexS2 = req.body;
  res.json({ message: 'MensajeIndex actualizado en el servidor' });
});



//////////////////////////////////////
///////////////////////////////////////////
////////////////////////////////////////////////////



// //////////////////////////////////////////////////////////////////////////////
///// ESTE CODIGO SIRVE EL HISTORIAL AL CLIENTE SALA 3
///////////////////////////////////////////////////////////////////



app.get('/sala3', (req, res) => {
  fs.readdir(historials3Path, (err, files) => {
    if (err) {
      res.status(500).send('Error al leer la carpeta historial');
      return;
    }
    res.json(files.filter(file => path.extname(file) === '.json'));
  });
});

// Ruta para obtener el contenido de un archivo JSON específico
app.get('/sala3/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(historials3Path, fileName);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error al leer el archivo JSON');
      return;
    }
    const fileContent = JSON.parse(data);
    res.json(fileContent);
  });
});

// Ruta para actualizar un archivo JSON específico
app.put('/sala3/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(historials3Path, fileName);
  const newContent = JSON.stringify(req.body, null, 2);
  fs.writeFile(filePath, newContent, 'utf8', (err) => {
    if (err) {
      res.status(500).send('Error al escribir en el archivo JSON');
      return;
    }
    res.json({ message: 'Archivo actualizado con éxito' });
  });
});

// Ruta para actualizar MensajeIndex en el servidor
app.put('/MensajeIndexS3', (req, res) => {
  MensajeIndexS3 = req.body;
  res.json({ message: 'MensajeIndex actualizado en el servidor' });
});




//////////////////////////////////////
///////////////////////////////////////////
////////////////////////////////////////////////////



/ //////////////////////////////////////////////////////////////////////////////
///// ESTE CODIGO SIRVE EL HISTORIAL AL CLIENTE SALA 4
///////////////////////////////////////////////////////////////////



app.get('/sala4', (req, res) => {
  fs.readdir(historials4Path, (err, files) => {
    if (err) {
      res.status(500).send('Error al leer la carpeta historial');
      return;
    }
    res.json(files.filter(file => path.extname(file) === '.json'));
  });
});

// Ruta para obtener el contenido de un archivo JSON específico
app.get('/sala4/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(historials4Path, fileName);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error al leer el archivo JSON');
      return;
    }
    const fileContent = JSON.parse(data);
    res.json(fileContent);
  });
});

// Ruta para actualizar un archivo JSON específico
app.put('/sala4/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(historials4Path, fileName);
  const newContent = JSON.stringify(req.body, null, 2);
  fs.writeFile(filePath, newContent, 'utf8', (err) => {
    if (err) {
      res.status(500).send('Error al escribir en el archivo JSON');
      return;
    }
    res.json({ message: 'Archivo actualizado con éxito' });
  });
});

// Ruta para actualizar MensajeIndex en el servidor
app.put('/MensajeIndexS4', (req, res) => {
  MensajeIndexS4 = req.body;
  res.json({ message: 'MensajeIndex actualizado en el servidor' });
});




//////////////////////////////////////
///////////////////////////////////////////
////////////////////////////////////////////////////



/ //////////////////////////////////////////////////////////////////////////////
///// ESTE CODIGO SIRVE EL HISTORIAL AL CLIENTE SALA 5
///////////////////////////////////////////////////////////////////



app.get('/sala5', (req, res) => {
  fs.readdir(historials5Path, (err, files) => {
    if (err) {
      res.status(500).send('Error al leer la carpeta historial');
      return;
    }
    res.json(files.filter(file => path.extname(file) === '.json'));
  });
});

// Ruta para obtener el contenido de un archivo JSON específico
app.get('/sala5/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(historials5Path, fileName);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error al leer el archivo JSON');
      return;
    }
    const fileContent = JSON.parse(data);
    res.json(fileContent);
  });
});

// Ruta para actualizar un archivo JSON específico
app.put('/sala5/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(historials5Path, fileName);
  const newContent = JSON.stringify(req.body, null, 2);
  fs.writeFile(filePath, newContent, 'utf8', (err) => {
    if (err) {
      res.status(500).send('Error al escribir en el archivo JSON');
      return;
    }
    res.json({ message: 'Archivo actualizado con éxito' });
  });
});

// Ruta para actualizar MensajeIndex en el servidor
app.put('/MensajeIndexS5', (req, res) => {
  MensajeIndexS5 = req.body;
  res.json({ message: 'MensajeIndex actualizado en el servidor' });
});



//////////////////////////////////////
///////////////////////////////////////////
////////////////////////////////////////////////////



/ //////////////////////////////////////////////////////////////////////////////
///// ESTE CODIGO SIRVE EL HISTORIAL AL CLIENTE SALA 6
///////////////////////////////////////////////////////////////////


app.get('/sala6', (req, res) => {
  fs.readdir(historials6Path, (err, files) => {
    if (err) {
      res.status(500).send('Error al leer la carpeta historial');
      return;
    }
    res.json(files.filter(file => path.extname(file) === '.json'));
  });
});

// Ruta para obtener el contenido de un archivo JSON específico
app.get('/sala6/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(historials6Path, fileName);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error al leer el archivo JSON');
      return;
    }
    const fileContent = JSON.parse(data);
    res.json(fileContent);
  });
});

// Ruta para actualizar un archivo JSON específico
app.put('/sala6/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(historials6Path, fileName);
  const newContent = JSON.stringify(req.body, null, 2);
  fs.writeFile(filePath, newContent, 'utf8', (err) => {
    if (err) {
      res.status(500).send('Error al escribir en el archivo JSON');
      return;
    }
    res.json({ message: 'Archivo actualizado con éxito' });
  });
});

// Ruta para actualizar MensajeIndex en el servidor
app.put('/MensajeIndexS6', (req, res) => {
  MensajeIndexS6 = req.body;
  res.json({ message: 'MensajeIndex actualizado en el servidor' });
});




//////////////////////////////////////
///////////////////////////////////////////
////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////
///// ESTE CODIGO SIRVE EL HISTORIAL AL CLIENTE SALA 7
///////////////////////////////////////////////////////////////////


app.get('/sala7', (req, res) => {
  fs.readdir(historials7Path, (err, files) => {
    if (err) {
      res.status(500).send('Error al leer la carpeta historial');
      return;
    }
    res.json(files.filter(file => path.extname(file) === '.json'));
  });
});

// Ruta para obtener el contenido de un archivo JSON específico
app.get('/sala7/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(historials7Path, fileName);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error al leer el archivo JSON');
      return;
    }
    const fileContent = JSON.parse(data);
    res.json(fileContent);
  });
});

// Ruta para actualizar un archivo JSON específico
app.put('/sala7/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(historials7Path, fileName);
  const newContent = JSON.stringify(req.body, null, 2);
  fs.writeFile(filePath, newContent, 'utf8', (err) => {
    if (err) {
      res.status(500).send('Error al escribir en el archivo JSON');
      return;
    }
    res.json({ message: 'Archivo actualizado con éxito' });
  });
});

// Ruta para actualizar MensajeIndex en el servidor
app.put('/MensajeIndexS7', (req, res) => {
  MensajeIndexS7 = req.body;
  res.json({ message: 'MensajeIndex actualizado en el servidor' });
});




//////////////////////////////////////
///////////////////////////////////////////
////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////
///// ESTE CODIGO SIRVE EL HISTORIAL AL CLIENTE SALA 8
///////////////////////////////////////////////////////////////////


app.get('/sala8', (req, res) => {
  fs.readdir(historials8Path, (err, files) => {
    if (err) {
      res.status(500).send('Error al leer la carpeta historial');
      return;
    }
    res.json(files.filter(file => path.extname(file) === '.json'));
  });
});

// Ruta para obtener el contenido de un archivo JSON específico
app.get('/sala8/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(historials8Path, fileName);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error al leer el archivo JSON');
      return;
    }
    const fileContent = JSON.parse(data);
    res.json(fileContent);
  });
});

// Ruta para actualizar un archivo JSON específico
app.put('/sala8/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(historials8Path, fileName);
  const newContent = JSON.stringify(req.body, null, 2);
  fs.writeFile(filePath, newContent, 'utf8', (err) => {
    if (err) {
      res.status(500).send('Error al escribir en el archivo JSON');
      return;
    }
    res.json({ message: 'Archivo actualizado con éxito' });
  });
});

// Ruta para actualizar MensajeIndex en el servidor
app.put('/MensajeIndexS8', (req, res) => {
  MensajeIndexS8 = req.body;
  res.json({ message: 'MensajeIndex actualizado en el servidor' });
});



//////////////////////////////////////
///////////////////////////////////////////
////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////
///// ESTE CODIGO SIRVE EL HISTORIAL AL CLIENTE SALA 9
///////////////////////////////////////////////////////////////////



app.get('/sala9', (req, res) => {
  fs.readdir(historials9Path, (err, files) => {
    if (err) {
      res.status(500).send('Error al leer la carpeta historial');
      return;
    }
    res.json(files.filter(file => path.extname(file) === '.json'));
  });
});

// Ruta para obtener el contenido de un archivo JSON específico
app.get('/sala9/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(historials9Path, fileName);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error al leer el archivo JSON');
      return;
    }
    const fileContent = JSON.parse(data);
    res.json(fileContent);
  });
});

// Ruta para actualizar un archivo JSON específico
app.put('/sala9/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(historials9Path, fileName);
  const newContent = JSON.stringify(req.body, null, 2);
  fs.writeFile(filePath, newContent, 'utf8', (err) => {
    if (err) {
      res.status(500).send('Error al escribir en el archivo JSON');
      return;
    }
    res.json({ message: 'Archivo actualizado con éxito' });
  });
});

// Ruta para actualizar MensajeIndex en el servidor
app.put('/MensajeIndexS9', (req, res) => {
  MensajeIndexS9 = req.body;
  res.json({ message: 'MensajeIndex actualizado en el servidor' });
});




//////////////////////////////////////
///////////////////////////////////////////
////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
///// ESTE CODIGO SIRVE EL HISTORIAL AL CLIENTE SALA 10
///////////////////////////////////////////////////////////////////



// Ruta para obtener la lista de archivos JSON en la carpeta historial
app.get('/sala10', (req, res) => {
  fs.readdir(historials10Path, (err, files) => {
    if (err) {
      res.status(500).send('Error al leer la carpeta historial');
      return;
    }
    res.json(files.filter(file => path.extname(file) === '.json'));
  });
});

// Ruta para obtener el contenido de un archivo JSON específico
app.get('/sala10/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(historials10Path, fileName);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error al leer el archivo JSON');
      return;
    }
    const fileContent = JSON.parse(data);
    res.json(fileContent);
  });
});

// Ruta para actualizar un archivo JSON específico
app.put('/sala10/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(historials10Path, fileName);
  const newContent = JSON.stringify(req.body, null, 2);
  fs.writeFile(filePath, newContent, 'utf8', (err) => {
    if (err) {
      res.status(500).send('Error al escribir en el archivo JSON');
      return;
    }
    res.json({ message: 'Archivo actualizado con éxito' });
  });
});

// Ruta para actualizar MensajeIndex en el servidor
app.put('/MensajeIndexS10', (req, res) => {
  MensajeIndexS10 = req.body;
  res.json({ message: 'MensajeIndex actualizado en el servidor' });
});



//////////////////////////////////////
///////////////////////////////////////////
////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
///// ESTE CODIGO SIRVE EL HISTORIAL AL CLIENTE SALA 11
///////////////////////////////////////////////////////////////////




// Ruta para obtener la lista de archivos JSON en la carpeta historial
app.get('/sala11', (req, res) => {
  fs.readdir(historials11Path, (err, files) => {
    if (err) {
      res.status(500).send('Error al leer la carpeta historial');
      return;
    }
    res.json(files.filter(file => path.extname(file) === '.json'));
  });
});

// Ruta para obtener el contenido de un archivo JSON específico
app.get('/sala11/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(historials11Path, fileName);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error al leer el archivo JSON');
      return;
    }
    const fileContent = JSON.parse(data);
    res.json(fileContent);
  });
});

// Ruta para actualizar un archivo JSON específico
app.put('/sala11/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(historials11Path, fileName);
  const newContent = JSON.stringify(req.body, null, 2);
  fs.writeFile(filePath, newContent, 'utf8', (err) => {
    if (err) {
      res.status(500).send('Error al escribir en el archivo JSON');
      return;
    }
    res.json({ message: 'Archivo actualizado con éxito' });
  });
});

// Ruta para actualizar MensajeIndex en el servidor
app.put('/MensajeIndexS11', (req, res) => {
  MensajeIndexS11 = req.body;
  res.json({ message: 'MensajeIndex actualizado en el servidor' });
});





//////////////////////////////////////
///////////////////////////////////////////
////////////////////////////////////////////////////




app.post("/webhook", function (request, response) {
  // console.log('Incoming webhook: ' + JSON.stringify(request.body));
  const entry = request.body.entry && request.body.entry[0] ? request.body.entry[0] : {};
  const messageChange = entry.changes && entry.changes[0] ? entry.changes[0].value : {};
  const messages = messageChange.messages;

  const from = messages && messages.length > 0 && messages[0].from ? messages[0].from : 0;
  let body = messages && messages[0] && messages[0].text ? messages[0].text.body : '';
  const name = messageChange.contacts && messageChange.contacts[0] ? messageChange.contacts[0].profile.name : '';
  let imgID = messages && messages[0] && messages[0].image ? messages[0].image.id : '';
  const audioID = messages && messages[0] && messages[0].type === 'audio' ? messages[0].audio.id : '';

  // Verificar si body es una cadena antes de convertirla a minúsculas
  if (typeof body === 'string') {
    body = body.toLowerCase();
  }

  const documentId =
    messages &&
      messages[0] &&
      messages[0].document &&
      messages[0].document.id
      ? messages[0].document.id
      : "";

  let interactiveId = messages && messages[0] && messages[0].interactive && messages[0].interactive.button_reply ? messages[0].interactive.button_reply.id : '';
  let interactivelisid = messages && messages[0] && messages[0].interactive && messages[0].interactive.list_reply ? messages[0].interactive.list_reply.id : '';

  // Crear un objeto para almacenar los mensajes que llegan
  const objetoMensaje = {
    from: from,
    body: body,
    name: name,
    imgID: imgID,
    audioID: audioID,
    etapa: 0,
    interactiveId: interactiveId,
    interactivelisid: interactivelisid,
    documentId: documentId,
    Cambio: 1,
  };

  function generarID() {
    return uuid.v4();
  }

  var objetoExistenteIndex = -1;

  for (var i = 0; i < EtapasMSG.length; i++) {
    if (EtapasMSG[i].from === objetoMensaje.from) {
      objetoExistenteIndex = i;
      break;
    }
  }

  //const formattedDate = moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss');

  if (objetoExistenteIndex !== -1) {
    // EtapasMSG[objetoExistenteIndex].timestamp = formattedDate;
    EtapasMSG[objetoExistenteIndex].timestamp = Date.now(),
      EtapasMSG[objetoExistenteIndex].body = objetoMensaje.body;
    EtapasMSG[objetoExistenteIndex].Idp = 1;
    EtapasMSG[objetoExistenteIndex].imgID = objetoMensaje.imgID;
    EtapasMSG[objetoExistenteIndex].interactiveId = objetoMensaje.interactiveId;
    EtapasMSG[objetoExistenteIndex].interactivelisid = objetoMensaje.interactivelisid;
    EtapasMSG[objetoExistenteIndex].audioID = objetoMensaje.audioID;
    EtapasMSG[objetoExistenteIndex].Cambio = 1;
    EtapasMSG[objetoExistenteIndex].documentId = objetoMensaje.documentId;
  } else {
    const maxIDNAN = Math.max(...EtapasMSG.map(item => item.IDNAN), 0);
    const startingID = 1; // Valor inicial para IDNAN   
    const objetoConID = { ...objetoMensaje, id: generarID(), timestamp: Date.now(), IDNAN: maxIDNAN >= startingID ? maxIDNAN + 1 : startingID };
    EtapasMSG.push(objetoConID); // Agrega el objeto al arreglo EtapasMSG
  }

  for (const prop in objetoMensaje) {
    delete objetoMensaje[prop];
  }





  // //////////////////////////////////////////////////////
  // ESTE FRAGMENTO NOS RECIBE LOS USUARIOS Y LOS PASA A JASON.
  // /////////////////////////////////////////


  


  const folderPath = './sala1'; // Carpeta donde se guardarán los archivos JSON


  function procesarMensajesBatch(mensajes) {
    const mensajesBatch = mensajes.splice(0, batchSize); // Obtener el próximo lote de mensajes
  
    mensajesBatch.forEach((mensaje) => {
      // Supongamos que 'etapa' es una propiedad del objeto dentro de EtapasMSG
      if (mensaje.etapa > 0 && mensaje.etapa <= 100) {
        const filePath = `${folderPath}/${mensaje.from}.json`;
  
        if (fs.existsSync(filePath)) {
          const existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          const isDuplicateBody = existingData.some((existingMensaje) => existingMensaje.body === mensaje.body);
  
          if (!isDuplicateBody) {
            existingData.push(mensaje);
            fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
          }
        } else {
          fs.writeFileSync(filePath, JSON.stringify([mensaje], null, 2));
        }
      }
    });
  
    if (mensajes.length > 0) {
      setTimeout(() => {
        procesarMensajesBatch(mensajes); // Procesar el siguiente lote después de un tiempo de espera
      }, 300); // Esperar 1 segundo entre lotes
    }
  }
  
  // Iniciar el procesamiento por lotes
  procesarMensajesBatch(EtapasMSG.slice());






  ////////////////////////
  ////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // //////////////////////////////////////////////////////
  // ESTE FRAGMENTO NOS RECIBE LOS USUARIOS Y LOS PASA A JASON DE LA RUTA 2.
  // /////////////////////////////////////////



  const folderPathlaboratorio = './sala2'; // Carpeta donde se guardarán los archivos JSON


  function procesarlaboratorio(mensajes) {
    const mensajesBatch = mensajes.splice(0, batchSize); // Obtener el próximo lote de mensajes

    mensajesBatch.forEach((mensaje) => {
      // Supongamos que 'etapa' es una propiedad del objeto dentro de EtapasMSG
      if (mensaje.etapa >= 500 && mensaje.etapa <= 800) {
        const filePath = `${folderPathlaboratorio}/${mensaje.from}.json`;

        if (fs.existsSync(filePath)) {
          const existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          const isDuplicateBody = existingData.some((existingMensaje) => existingMensaje.body === mensaje.body);

          if (!isDuplicateBody) {
            existingData.push(mensaje);
            fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
          }
        } else {
          fs.writeFileSync(filePath, JSON.stringify([mensaje], null, 2));
        }
      }
    });

    if (mensajes.length > 0) {
      setTimeout(() => {
        procesarlaboratorio(mensajes); // Procesar el siguiente lote después de un tiempo de espera
      }, 1000); // Esperar 1 segundo entre lotes
    }
  }

  // Iniciar el procesamiento por lotes
  procesarlaboratorio(EtapasMSG.slice());



  ////////////////////////
  ////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // //////////////////////////////////////////////////////
  // ESTE FRAGMENTO NOS RECIBE LOS USUARIOS Y LOS PASA A JASON DE LA RUTA 3.
  // /////////////////////////////////////////


  const folderPathlaboratorio4 = './sala3'; // Carpeta donde se guardarán los archivos JSON


  function procesarlaboratorio4(mensajes) {
    const mensajesBatch = mensajes.splice(0, batchSize); // Obtener el próximo lote de mensajes

    mensajesBatch.forEach((mensaje) => {
      // Supongamos que 'etapa' es una propiedad del objeto dentro de EtapasMSG
      if (mensaje.etapa >= 20 && mensaje.etapa <= 22) {
        const filePath = `${folderPathlaboratorio4}/${mensaje.from}.json`;

        if (fs.existsSync(filePath)) {
          const existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          const isDuplicateBody = existingData.some((existingMensaje) => existingMensaje.body === mensaje.body);

          if (!isDuplicateBody) {
            existingData.push(mensaje);
            fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
          }
        } else {
          fs.writeFileSync(filePath, JSON.stringify([mensaje], null, 2));
        }
      }
    });

    if (mensajes.length > 0) {
      setTimeout(() => {
        procesarlaboratorio4(mensajes); // Procesar el siguiente lote después de un tiempo de espera
      }, 1000); // Esperar 1 segundo entre lotes
    }
  }

  // Iniciar el procesamiento por lotes
  procesarlaboratorio4(EtapasMSG.slice());




  ////////////////////////
  ////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




  // //////////////////////////////////////////////////////
  // ESTE FRAGMENTO NOS RECIBE LOS USUARIOS Y LOS PASA A JASON DE LA RUTA PREPAGADAS SALA 5.
  // /////////////////////////////////////////


  const folderPathlaboratorio5 = './sala4'; // Carpeta donde se guardarán los archivos JSON


  function procesarlaboratorio5(mensajes) {
    const mensajesBatch = mensajes.splice(0, batchSize); // Obtener el próximo lote de mensajes

    mensajesBatch.forEach((mensaje) => {
      // Supongamos que 'etapa' es una propiedad del objeto dentro de EtapasMSG
      if (mensaje.etapa >= 40 && mensaje.etapa <= 42) {
        const filePath = `${folderPathlaboratorio5}/${mensaje.from}.json`;

        if (fs.existsSync(filePath)) {
          const existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          const isDuplicateBody = existingData.some((existingMensaje) => existingMensaje.body === mensaje.body);

          if (!isDuplicateBody) {
            existingData.push(mensaje);
            fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
          }
        } else {
          fs.writeFileSync(filePath, JSON.stringify([mensaje], null, 2));
        }
      }
    });

    if (mensajes.length > 0) {
      setTimeout(() => {
        procesarlaboratorio5(mensajes); // Procesar el siguiente lote después de un tiempo de espera
      }, 1000); // Esperar 1 segundo entre lotes
    }
  }

  // Iniciar el procesamiento por lotes
  procesarlaboratorio5(EtapasMSG.slice());




  ////////////////////////
  ////////////////////////////
  ////////////////////////////////





  // //////////////////////////////////////////////////////
  // ESTE FRAGMENTO NOS RECIBE LOS USUARIOS Y LOS PASA A JASON DE LA RUTA PREPAGADAS SALA 6
  // /////////////////////////////////////////


  const folderPathlaboratorio6 = './sala5'; // Carpeta donde se guardarán los archivos JSON


  function procesarlaboratorio6(mensajes) {
    const mensajesBatch = mensajes.splice(0, batchSize); // Obtener el próximo lote de mensajes

    mensajesBatch.forEach((mensaje) => {
      // Supongamos que 'etapa' es una propiedad del objeto dentro de EtapasMSG
      if (mensaje.etapa >= 50 && mensaje.etapa <= 51) {
        const filePath = `${folderPathlaboratorio6}/${mensaje.from}.json`;

        if (fs.existsSync(filePath)) {
          const existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          const isDuplicateBody = existingData.some((existingMensaje) => existingMensaje.body === mensaje.body);

          if (!isDuplicateBody) {
            existingData.push(mensaje);
            fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
          }
        } else {
          fs.writeFileSync(filePath, JSON.stringify([mensaje], null, 2));
        }
      }
    });

    if (mensajes.length > 0) {
      setTimeout(() => {
        procesarlaboratorio6(mensajes); // Procesar el siguiente lote después de un tiempo de espera
      }, 1000); // Esperar 1 segundo entre lotes
    }
  }

  // Iniciar el procesamiento por lotes
  procesarlaboratorio6(EtapasMSG.slice());




  ////////////////////////
  ////////////////////////////
  ////////////////////////////////





  // //////////////////////////////////////////////////////
  // ESTE FRAGMENTO NOS RECIBE LOS USUARIOS Y LOS PASA A JASON.
  // /////////////////////////////////////////



  const folderPathlaboratorio7 = './sala6'; // Carpeta donde se guardarán los archivos JSON


  function procesarlaboratorio7(mensajes) {
    const mensajesBatch = mensajes.splice(0, batchSize); // Obtener el próximo lote de mensajes

    mensajesBatch.forEach((mensaje) => {
      // Supongamos que 'etapa' es una propiedad del objeto dentro de EtapasMSG
      if (mensaje.etapa >= 81 && mensaje.etapa <= 84) {
        const filePath = `${folderPathlaboratorio7}/${mensaje.from}.json`;

        if (fs.existsSync(filePath)) {
          const existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          const isDuplicateBody = existingData.some((existingMensaje) => existingMensaje.body === mensaje.body);

          if (!isDuplicateBody) {
            existingData.push(mensaje);
            fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
          }
        } else {
          fs.writeFileSync(filePath, JSON.stringify([mensaje], null, 2));
        }
      }
    });

    if (mensajes.length > 0) {
      setTimeout(() => {
        procesarlaboratorio7(mensajes); // Procesar el siguiente lote después de un tiempo de espera
      }, 1000); // Esperar 1 segundo entre lotes
    }
  }

  // Iniciar el procesamiento por lotes
  procesarlaboratorio7(EtapasMSG.slice());




  ////////////////////////
  ////////////////////////////
  /////////////////////////////////////////////


  // //////////////////////////////////////////////////////
  // ESTE FRAGMENTO NOS RECIBE LOS USUARIOS Y LOS PASA A JASON DE LA RUTA PREPAGADAS SALA 9
  // /////////////////////////////////////////


  const folderPathlaboratorio9 = './sala7'; // Carpeta donde se guardarán los archivos JSON


  function procesarlaboratorio9(mensajes) {
    const mensajesBatch = mensajes.splice(0, batchSize); // Obtener el próximo lote de mensajes

    mensajesBatch.forEach((mensaje) => {
      // Supongamos que 'etapa' es una propiedad del objeto dentro de EtapasMSG
      if (mensaje.etapa >= 90 && mensaje.etapa <= 91) {
        const filePath = `${folderPathlaboratorio9}/${mensaje.from}.json`;

        if (fs.existsSync(filePath)) {
          const existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          const isDuplicateBody = existingData.some((existingMensaje) => existingMensaje.body === mensaje.body);

          if (!isDuplicateBody) {
            existingData.push(mensaje);
            fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
          }
        } else {
          fs.writeFileSync(filePath, JSON.stringify([mensaje], null, 2));
        }
      }
    });

    if (mensajes.length > 0) {
      setTimeout(() => {
        procesarlaboratorio9(mensajes); // Procesar el siguiente lote después de un tiempo de espera
      }, 1000); // Esperar 1 segundo entre lotes
    }
  }

  // Iniciar el procesamiento por lotes
  procesarlaboratorio9(EtapasMSG.slice());




  ////////////////////////
  ////////////////////////////
  ////////////////////////////////




  // //////////////////////////////////////////////////////
  // ESTE FRAGMENTO NOS RECIBE LOS USUARIOS Y LOS PASA A JASON DE LA RUTA PREPAGADAS SALA 10
  // /////////////////////////////////////////


  const folderPathlaboratorio10 = './sala10'; // Carpeta donde se guardarán los archivos JSON


  function procesarlaboratorio10(mensajes) {
    const mensajesBatch = mensajes.splice(0, batchSize); // Obtener el próximo lote de mensajes

    mensajesBatch.forEach((mensaje) => {
      // Supongamos que 'etapa' es una propiedad del objeto dentro de EtapasMSG
      if (mensaje.etapa >= 100 && mensaje.etapa <= 101) {
        const filePath = `${folderPathlaboratorio10}/${mensaje.from}.json`;

        if (fs.existsSync(filePath)) {
          const existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          const isDuplicateBody = existingData.some((existingMensaje) => existingMensaje.body === mensaje.body);

          if (!isDuplicateBody) {
            existingData.push(mensaje);
            fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
          }
        } else {
          fs.writeFileSync(filePath, JSON.stringify([mensaje], null, 2));
        }
      }
    });

    if (mensajes.length > 0) {
      setTimeout(() => {
        procesarlaboratorio10(mensajes); // Procesar el siguiente lote después de un tiempo de espera
      }, 1000); // Esperar 1 segundo entre lotes
    }
  }

  // Iniciar el procesamiento por lotes
  procesarlaboratorio10(EtapasMSG.slice());




  ////////////////////////
  ////////////////////////////
  ////////////////////////////////



  // //////////////////////////////////////////////////////
  // ESTE FRAGMENTO NOS RECIBE LOS USUARIOS Y LOS PASA A JASON DE LA RUTA PREPAGADAS SALA 11
  // /////////////////////////////////////////


  const folderPathlaboratorio11 = './sala11'; // Carpeta donde se guardarán los archivos JSON


  function procesarlaboratorio11(mensajes) {
    const mensajesBatch = mensajes.splice(0, batchSize); // Obtener el próximo lote de mensajes

    mensajesBatch.forEach((mensaje) => {
      // Supongamos que 'etapa' es una propiedad del objeto dentro de EtapasMSG
      if (mensaje.etapa >= 110 && mensaje.etapa <= 111) {
        const filePath = `${folderPathlaboratorio11}/${mensaje.from}.json`;

        if (fs.existsSync(filePath)) {
          const existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          const isDuplicateBody = existingData.some((existingMensaje) => existingMensaje.body === mensaje.body);

          if (!isDuplicateBody) {
            existingData.push(mensaje);
            fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
          }
        } else {
          fs.writeFileSync(filePath, JSON.stringify([mensaje], null, 2));
        }
      }
    });

    if (mensajes.length > 0) {
      setTimeout(() => {
        procesarlaboratorio11(mensajes); // Procesar el siguiente lote después de un tiempo de espera
      }, 1000); // Esperar 1 segundo entre lotes
    }
  }

  // Iniciar el procesamiento por lotes
  procesarlaboratorio11(EtapasMSG.slice());




  ////////////////////////
  ////////////////////////////
  ////////////////////////////////




  // ////// CODIGOS DE CONEXION A SALAS
  
  inicio(EtapasMSG, WHATSAPP_API_TOKEN);
  venta(EtapasMSG, WHATSAPP_API_TOKEN);
  




  // ////////////////////////////////////////////////////////////////////////////////////

 

  // ///////////////////////////////////////////
  // // envia mensajes al numero de whatsapp que escribio a sala 1 //////////////////
  // ///////////////////////////////////////////

  let cambiosPendientes = true;


  function filtrarMensaje(mensajes) {
    let ultimoMensajeAsesor = null;

    for (let i = mensajes.length - 1; i >= 0; i--) {
      const mensaje = mensajes[i];
      if (mensaje.body.startsWith("Juan:")) {
        ultimoMensajeAsesor = {
          body: mensaje.body,
          from: mensaje.from,
          name: mensaje.name,
          etapa: mensaje.etapa
        };
        break; // Detener el bucle al encontrar el último mensaje
      }
    }

    return ultimoMensajeAsesor;
  }

  function enviarMensaje(mensaje) {
    const payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: mensaje.from,
      type: 'text',
      text: {
        preview_url: false,
        body: mensaje.body
      }
    };

    axios.post(`https://graph.facebook.com/v16.0/${idnumero}/messages`, payload, {
      headers: {
        Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('Respuesta enviada:', response.data);
      })
      .catch(error => {
        console.error('Error al enviar la respuesta:', error.response.data);
      });
  }

  let mensajesEnviados = {};

  app.post('/actualizar1', (req, res) => {
    // Enviar una respuesta al cliente (puedes personalizar la respuesta)
    res.json({ message: 'Actualización iniciada' });

    function actualizarFiltroPeriodicamente() {
      if (cambiosPendientes) {
        const mensajeFiltrado = filtrarMensaje(MensajeIndex);
        console.log("Mensaje filtrado:", mensajeFiltrado);
        if (mensajeFiltrado) {
          if (!mensajesEnviados[mensajeFiltrado.from] || mensajesEnviados[mensajeFiltrado.from] !== mensajeFiltrado.body) {
            mensajesEnviados[mensajeFiltrado.from] = mensajeFiltrado.body;
            console.log("from filtrado:", mensajeFiltrado.from, "body filtrado:", mensajeFiltrado.body);
            enviarMensaje(mensajeFiltrado);
          }
        }
      }
    }


    // Iniciar la actualización periódica
    actualizarFiltroPeriodicamente();
  });


  // //////////////////////////////////////////////////////////////////////



  // ///////////////////////////////////////////
  // // envia mensajes al numero de whatsapp que escribio a sala 2 //////////////////
  // ///////////////////////////////////////////

  let cambiosPendientes2 = true;


  function filtrarMensaje2(mensajes) {
    let ultimoMensajeAsesor = null;

    for (let i = mensajes.length - 1; i >= 0; i--) {
      const mensaje = mensajes[i];
      if (mensaje.body.startsWith("Juan:")) {
        ultimoMensajeAsesor = {
          body: mensaje.body,
          from: mensaje.from,
          name: mensaje.name,
          etapa: mensaje.etapa
        };
        break; // Detener el bucle al encontrar el último mensaje
      }
    }

    return ultimoMensajeAsesor;
  }

  function enviarMensaje2(mensaje) {
    const payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: mensaje.from,
      type: 'text',
      text: {
        preview_url: false,
        body: mensaje.body
      }
    };

    axios.post(`https://graph.facebook.com/v16.0/${idnumero}/messages`, payload, {
      headers: {
        Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('Respuesta enviada:', response.data);
      })
      .catch(error => {
        console.error('Error al enviar la respuesta:', error.response.data);
      });
  }

  let mensajesEnviados2 = {};

  app.post('/actualizar2', (req, res) => {
    // Enviar una respuesta al cliente (puedes personalizar la respuesta)
    res.json({ message: 'Actualización iniciada' });

    function actualizarFiltroPeriodicamente() {
      if (cambiosPendientes2) {
        const mensajeFiltrado = filtrarMensaje2(MensajeIndexS2);
        console.log("Mensaje filtrado:", mensajeFiltrado);
        if (mensajeFiltrado) {
          if (!mensajesEnviados2[mensajeFiltrado.from] || mensajesEnviados2[mensajeFiltrado.from] !== mensajeFiltrado.body) {
            mensajesEnviados2[mensajeFiltrado.from] = mensajeFiltrado.body;
            console.log("from filtrado:", mensajeFiltrado.from, "body filtrado:", mensajeFiltrado.body);
            enviarMensaje2(mensajeFiltrado);
          }
        }
      }
    }


    // Iniciar la actualización periódica
    actualizarFiltroPeriodicamente();
  });


  // //////////////////////////////////////////////////////////////////////



  // ///////////////////////////////////////////
  // // envia mensajes al numero de whatsapp que escribio a sala 3 //////////////////
  // ///////////////////////////////////////////

  let cambiosPendientes3 = true;


  function filtrarMensaje3(mensajes) {
    let ultimoMensajeAsesor = null;

    for (let i = mensajes.length - 1; i >= 0; i--) {
      const mensaje = mensajes[i];
      if (mensaje.body.startsWith("Juan:")) {
        ultimoMensajeAsesor = {
          body: mensaje.body,
          from: mensaje.from,
          name: mensaje.name,
          etapa: mensaje.etapa
        };
        break; // Detener el bucle al encontrar el último mensaje
      }
    }

    return ultimoMensajeAsesor;
  }

  function enviarMensaje3(mensaje) {
    const payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: mensaje.from,
      type: 'text',
      text: {
        preview_url: false,
        body: mensaje.body
      }
    };

    axios.post(`https://graph.facebook.com/v16.0/${idnumero}/messages`, payload, {
      headers: {
        Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('Respuesta enviada:', response.data);
      })
      .catch(error => {
        console.error('Error al enviar la respuesta:', error.response.data);
      });
  }

  let mensajesEnviados3 = {};

  app.post('/actualizar3', (req, res) => {
    // Enviar una respuesta al cliente (puedes personalizar la respuesta)
    res.json({ message: 'Actualización iniciada' });

    function actualizarFiltroPeriodicamente() {
      if (cambiosPendientes3) {
        const mensajeFiltrado = filtrarMensaje3(MensajeIndexS3);
        console.log("Mensaje filtrado:", mensajeFiltrado);
        if (mensajeFiltrado) {
          if (!mensajesEnviados3[mensajeFiltrado.from] || mensajesEnviados3[mensajeFiltrado.from] !== mensajeFiltrado.body) {
            mensajesEnviados3[mensajeFiltrado.from] = mensajeFiltrado.body;
            console.log("from filtrado:", mensajeFiltrado.from, "body filtrado:", mensajeFiltrado.body);
            enviarMensaje3(mensajeFiltrado);
          }
        }
      }
    }


    // Iniciar la actualización periódica
    actualizarFiltroPeriodicamente();
  });


  // //////////////////////////////////////////////////////////////////////




  // ///////////////////////////////////////////
  // // envia mensajes al numero de whatsapp que escribio a sala 4 //////////////////
  // ///////////////////////////////////////////

  let cambiosPendientes4 = true;


  function filtrarMensaje4(mensajes) {
    let ultimoMensajeAsesor = null;

    for (let i = mensajes.length - 1; i >= 0; i--) {
      const mensaje = mensajes[i];
      if (mensaje.body.startsWith("Asesor:")) {
        ultimoMensajeAsesor = {
          body: mensaje.body,
          from: mensaje.from,
          name: mensaje.name,
          etapa: mensaje.etapa
        };
        break; // Detener el bucle al encontrar el último mensaje
      }
    }

    return ultimoMensajeAsesor;
  }

  function enviarMensaje4(mensaje) {
    const payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: mensaje.from,
      type: 'text',
      text: {
        preview_url: false,
        body: mensaje.body
      }
    };

    axios.post(`https://graph.facebook.com/v16.0/${idnumero}/messages`, payload, {
      headers: {
        Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('Respuesta enviada:', response.data);
      })
      .catch(error => {
        console.error('Error al enviar la respuesta:', error.response.data);
      });
  }

  let mensajesEnviados4 = {};

  app.post('/actualizar4', (req, res) => {
    // Enviar una respuesta al cliente (puedes personalizar la respuesta)
    res.json({ message: 'Actualización iniciada' });

    function actualizarFiltroPeriodicamente() {
      if (cambiosPendientes4) {
        const mensajeFiltrado = filtrarMensaje4(MensajeIndexS4);
        console.log("Mensaje filtrado:", mensajeFiltrado);
        if (mensajeFiltrado) {
          if (!mensajesEnviados4[mensajeFiltrado.from] || mensajesEnviados4[mensajeFiltrado.from] !== mensajeFiltrado.body) {
            mensajesEnviados4[mensajeFiltrado.from] = mensajeFiltrado.body;
            console.log("from filtrado:", mensajeFiltrado.from, "body filtrado:", mensajeFiltrado.body);
            enviarMensaje4(mensajeFiltrado);
          }
        }
      }
    }


    // Iniciar la actualización periódica
    actualizarFiltroPeriodicamente();
  });


  // //////////////////////////////////////////////////////////////////////


  // ///////////////////////////////////////////
  // // envia mensajes al numero de whatsapp que escribio a sala 5 //////////////////
  // ///////////////////////////////////////////

  let cambiosPendientes5 = true;


  function filtrarMensaje5(mensajes) {
    let ultimoMensajeAsesor = null;

    for (let i = mensajes.length - 1; i >= 0; i--) {
      const mensaje = mensajes[i];
      if (mensaje.body.startsWith("Asesor:")) {
        ultimoMensajeAsesor = {
          body: mensaje.body,
          from: mensaje.from,
          name: mensaje.name,
          etapa: mensaje.etapa
        };
        break; // Detener el bucle al encontrar el último mensaje
      }
    }

    return ultimoMensajeAsesor;
  }

  function enviarMensaje5(mensaje) {
    const payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: mensaje.from,
      type: 'text',
      text: {
        preview_url: false,
        body: mensaje.body
      }
    };

    axios.post(`https://graph.facebook.com/v16.0/${idnumero}/messages`, payload, {
      headers: {
        Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('Respuesta enviada:', response.data);
      })
      .catch(error => {
        console.error('Error al enviar la respuesta:', error.response.data);
      });
  }

  let mensajesEnviados5 = {};

  app.post('/actualizar5', (req, res) => {
    // Enviar una respuesta al cliente (puedes personalizar la respuesta)
    res.json({ message: 'Actualización iniciada' });

    function actualizarFiltroPeriodicamente() {
      if (cambiosPendientes5) {
        const mensajeFiltrado = filtrarMensaje5(MensajeIndexS5);
        console.log("Mensaje filtrado:", mensajeFiltrado);
        if (mensajeFiltrado) {
          if (!mensajesEnviados5[mensajeFiltrado.from] || mensajesEnviados5[mensajeFiltrado.from] !== mensajeFiltrado.body) {
            mensajesEnviados5[mensajeFiltrado.from] = mensajeFiltrado.body;
            console.log("from filtrado:", mensajeFiltrado.from, "body filtrado:", mensajeFiltrado.body);
            enviarMensaje5(mensajeFiltrado);
          }
        }
      }
    }


    // Iniciar la actualización periódica
    actualizarFiltroPeriodicamente();
  });


  // //////////////////////////////////////////////////////////////////////






  // ///////////////////////////////////////////
  // // envia mensajes al numero de whatsapp que escribio a sala 6 //////////////////
  // ///////////////////////////////////////////

  let cambiosPendientes6 = true;


  function filtrarMensaje6(mensajes) {
    let ultimoMensajeAsesor = null;

    for (let i = mensajes.length - 1; i >= 0; i--) {
      const mensaje = mensajes[i];
      if (mensaje.body.startsWith("Asesor:")) {
        ultimoMensajeAsesor = {
          body: mensaje.body,
          from: mensaje.from,
          name: mensaje.name,
          etapa: mensaje.etapa
        };
        break; // Detener el bucle al encontrar el último mensaje
      }
    }

    return ultimoMensajeAsesor;
  }

  function enviarMensaje6(mensaje) {
    const payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: mensaje.from,
      type: 'text',
      text: {
        preview_url: false,
        body: mensaje.body
      }
    };

    axios.post(`https://graph.facebook.com/v16.0/${idnumero}/messages`, payload, {
      headers: {
        Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('Respuesta enviada:', response.data);
      })
      .catch(error => {
        console.error('Error al enviar la respuesta:', error.response.data);
      });
  }

  let mensajesEnviados6 = {};

  app.post('/actualizar6', (req, res) => {
    // Enviar una respuesta al cliente (puedes personalizar la respuesta)
    res.json({ message: 'Actualización iniciada' });

    function actualizarFiltroPeriodicamente() {
      if (cambiosPendientes6) {
        const mensajeFiltrado = filtrarMensaje6(MensajeIndexS6);
        console.log("Mensaje filtrado:", mensajeFiltrado);
        if (mensajeFiltrado) {
          if (!mensajesEnviados6[mensajeFiltrado.from] || mensajesEnviados6[mensajeFiltrado.from] !== mensajeFiltrado.body) {
            mensajesEnviados6[mensajeFiltrado.from] = mensajeFiltrado.body;
            console.log("from filtrado:", mensajeFiltrado.from, "body filtrado:", mensajeFiltrado.body);
            enviarMensaje6(mensajeFiltrado);
          }
        }
      }
    }


    // Iniciar la actualización periódica
    actualizarFiltroPeriodicamente();
  });


  // //////////////////////////////////////////////////////////////////////






  // ///////////////////////////////////////////
  // // envia mensajes al numero de whatsapp que escribio a sala 7 //////////////////
  // ///////////////////////////////////////////

  let cambiosPendientes7 = true;


  function filtrarMensaje7(mensajes) {
    let ultimoMensajeAsesor = null;

    for (let i = mensajes.length - 1; i >= 0; i--) {
      const mensaje = mensajes[i];
      if (mensaje.body.startsWith("Asesor:")) {
        ultimoMensajeAsesor = {
          body: mensaje.body,
          from: mensaje.from,
          name: mensaje.name,
          etapa: mensaje.etapa
        };
        break; // Detener el bucle al encontrar el último mensaje
      }
    }

    return ultimoMensajeAsesor;
  }

  function enviarMensaje7(mensaje) {
    const payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: mensaje.from,
      type: 'text',
      text: {
        preview_url: false,
        body: mensaje.body
      }
    };

    axios.post(`https://graph.facebook.com/v16.0/${idnumero}/messages`, payload, {
      headers: {
        Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('Respuesta enviada:', response.data);
      })
      .catch(error => {
        console.error('Error al enviar la respuesta:', error.response.data);
      });
  }

  let mensajesEnviados7 = {};

  app.post('/actualizar7', (req, res) => {
    // Enviar una respuesta al cliente (puedes personalizar la respuesta)
    res.json({ message: 'Actualización iniciada' });

    function actualizarFiltroPeriodicamente() {
      if (cambiosPendientes7) {
        const mensajeFiltrado = filtrarMensaje7(MensajeIndexS7);
        console.log("Mensaje filtrado:", mensajeFiltrado);
        if (mensajeFiltrado) {
          if (!mensajesEnviados7[mensajeFiltrado.from] || mensajesEnviados7[mensajeFiltrado.from] !== mensajeFiltrado.body) {
            mensajesEnviados7[mensajeFiltrado.from] = mensajeFiltrado.body;
            console.log("from filtrado:", mensajeFiltrado.from, "body filtrado:", mensajeFiltrado.body);
            enviarMensaje7(mensajeFiltrado);
          }
        }
      }
    }


    // Iniciar la actualización periódica
    actualizarFiltroPeriodicamente();
  });


  // //////////////////////////////////////////////////////////////////////






  // ///////////////////////////////////////////
  // // envia mensajes al numero de whatsapp que escribio a sala 8 //////////////////
  // ///////////////////////////////////////////

  let cambiosPendientes8 = true;


  function filtrarMensaje8(mensajes) {
    let ultimoMensajeAsesor = null;

    for (let i = mensajes.length - 1; i >= 0; i--) {
      const mensaje = mensajes[i];
      if (mensaje.body.startsWith("Asesor:")) {
        ultimoMensajeAsesor = {
          body: mensaje.body,
          from: mensaje.from,
          name: mensaje.name,
          etapa: mensaje.etapa
        };
        break; // Detener el bucle al encontrar el último mensaje
      }
    }

    return ultimoMensajeAsesor;
  }

  function enviarMensaje8(mensaje) {
    const payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: mensaje.from,
      type: 'text',
      text: {
        preview_url: false,
        body: mensaje.body
      }
    };

    axios.post(`https://graph.facebook.com/v16.0/${idnumero}/messages`, payload, {
      headers: {
        Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('Respuesta enviada:', response.data);
      })
      .catch(error => {
        console.error('Error al enviar la respuesta:', error.response.data);
      });
  }

  let mensajesEnviados8 = {};

  app.post('/actualizar8', (req, res) => {
    // Enviar una respuesta al cliente (puedes personalizar la respuesta)
    res.json({ message: 'Actualización iniciada' });

    function actualizarFiltroPeriodicamente() {
      if (cambiosPendientes8) {
        const mensajeFiltrado = filtrarMensaje8(MensajeIndexS8);
        console.log("Mensaje filtrado:", mensajeFiltrado);
        if (mensajeFiltrado) {
          if (!mensajesEnviados8[mensajeFiltrado.from] || mensajesEnviados8[mensajeFiltrado.from] !== mensajeFiltrado.body) {
            mensajesEnviados8[mensajeFiltrado.from] = mensajeFiltrado.body;
            console.log("from filtrado:", mensajeFiltrado.from, "body filtrado:", mensajeFiltrado.body);
            enviarMensaje8(mensajeFiltrado);
          }
        }
      }
    }


    // Iniciar la actualización periódica
    actualizarFiltroPeriodicamente();
  });


  // //////////////////////////////////////////////////////////////////////





  // ///////////////////////////////////////////
  // // envia mensajes al numero de whatsapp que escribio a sala 9 //////////////////
  // ///////////////////////////////////////////

  let cambiosPendientes9 = true;


  function filtrarMensaje9(mensajes) {
    let ultimoMensajeAsesor = null;

    for (let i = mensajes.length - 1; i >= 0; i--) {
      const mensaje = mensajes[i];
      if (mensaje.body.startsWith("Asesor:")) {
        ultimoMensajeAsesor = {
          body: mensaje.body,
          from: mensaje.from,
          name: mensaje.name,
          etapa: mensaje.etapa
        };
        break; // Detener el bucle al encontrar el último mensaje
      }
    }

    return ultimoMensajeAsesor;
  }

  function enviarMensaje9(mensaje) {
    const payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: mensaje.from,
      type: 'text',
      text: {
        preview_url: false,
        body: mensaje.body
      }
    };

    axios.post(`https://graph.facebook.com/v16.0/${idnumero}/messages`, payload, {
      headers: {
        Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('Respuesta enviada:', response.data);
      })
      .catch(error => {
        console.error('Error al enviar la respuesta:', error.response.data);
      });
  }

  let mensajesEnviados9 = {};

  app.post('/actualizar9', (req, res) => {
    // Enviar una respuesta al cliente (puedes personalizar la respuesta)
    res.json({ message: 'Actualización iniciada' });

    function actualizarFiltroPeriodicamente() {
      if (cambiosPendientes9) {
        const mensajeFiltrado = filtrarMensaje9(MensajeIndexS9);
        console.log("Mensaje filtrado:", mensajeFiltrado);
        if (mensajeFiltrado) {
          if (!mensajesEnviados9[mensajeFiltrado.from] || mensajesEnviados9[mensajeFiltrado.from] !== mensajeFiltrado.body) {
            mensajesEnviados9[mensajeFiltrado.from] = mensajeFiltrado.body;
            console.log("from filtrado:", mensajeFiltrado.from, "body filtrado:", mensajeFiltrado.body);
            enviarMensaje9(mensajeFiltrado);
          }
        }
      }
    }


    // Iniciar la actualización periódica
    actualizarFiltroPeriodicamente();
  });


  // //////////////////////////////////////////////////////////////////////







  / ///////////////////////////////////////////
  // // envia mensajes al numero de whatsapp que escribio a sala 10 //////////////////
  // ///////////////////////////////////////////

  let cambiosPendientes10 = true;


  function filtrarMensaje10(mensajes) {
    let ultimoMensajeAsesor = null;

    for (let i = mensajes.length - 1; i >= 0; i--) {
      const mensaje = mensajes[i];
      if (mensaje.body.startsWith("Asesor:")) {
        ultimoMensajeAsesor = {
          body: mensaje.body,
          from: mensaje.from,
          name: mensaje.name,
          etapa: mensaje.etapa
        };
        break; // Detener el bucle al encontrar el último mensaje
      }
    }

    return ultimoMensajeAsesor;
  }

  function enviarMensaje10(mensaje) {
    const payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: mensaje.from,
      type: 'text',
      text: {
        preview_url: false,
        body: mensaje.body
      }
    };

    axios.post(`https://graph.facebook.com/v16.0/${idnumero}/messages`, payload, {
      headers: {
        Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('Respuesta enviada:', response.data);
      })
      .catch(error => {
        console.error('Error al enviar la respuesta:', error.response.data);
      });
  }

  let mensajesEnviados10 = {};

  app.post('/actualizar10', (req, res) => {
    // Enviar una respuesta al cliente (puedes personalizar la respuesta)
    res.json({ message: 'Actualización iniciada' });

    function actualizarFiltroPeriodicamente() {
      if (cambiosPendientes10) {
        const mensajeFiltrado = filtrarMensaje10(MensajeIndexS10);
        console.log("Mensaje filtrado:", mensajeFiltrado);
        if (mensajeFiltrado) {
          if (!mensajesEnviados10[mensajeFiltrado.from] || mensajesEnviados10[mensajeFiltrado.from] !== mensajeFiltrado.body) {
            mensajesEnviados10[mensajeFiltrado.from] = mensajeFiltrado.body;
            console.log("from filtrado:", mensajeFiltrado.from, "body filtrado:", mensajeFiltrado.body);
            enviarMensaje10(mensajeFiltrado);
          }
        }
      }
    }


    // Iniciar la actualización periódica
    actualizarFiltroPeriodicamente();
  });


  // //////////////////////////////////////////////////////////////////////






  / ///////////////////////////////////////////
  // // envia mensajes al numero de whatsapp que escribio a sala 10 //////////////////
  // ///////////////////////////////////////////

  let cambiosPendientes11 = true;


  function filtrarMensaje11(mensajes) {
    let ultimoMensajeAsesor = null;

    for (let i = mensajes.length - 1; i >= 0; i--) {
      const mensaje = mensajes[i];
      if (mensaje.body.startsWith("Asesor:")) {
        ultimoMensajeAsesor = {
          body: mensaje.body,
          from: mensaje.from,
          name: mensaje.name,
          etapa: mensaje.etapa
        };
        break; // Detener el bucle al encontrar el último mensaje
      }
    }

    return ultimoMensajeAsesor;
  }

  function enviarMensaje11(mensaje) {
    const payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: mensaje.from,
      type: 'text',
      text: {
        preview_url: false,
        body: mensaje.body
      }
    };

    axios.post(`https://graph.facebook.com/v16.0/${idnumero}/messages`, payload, {
      headers: {
        Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('Respuesta enviada:', response.data);
      })
      .catch(error => {
        console.error('Error al enviar la respuesta:', error.response.data);
      });
  }

  let mensajesEnviados11 = {};

  app.post('/actualizar11', (req, res) => {
    // Enviar una respuesta al cliente (puedes personalizar la respuesta)
    res.json({ message: 'Actualización iniciada' });

    function actualizarFiltroPeriodicamente() {
      if (cambiosPendientes11) {
        const mensajeFiltrado = filtrarMensaje11(MensajeIndexS11);
        console.log("Mensaje filtrado:", mensajeFiltrado);
        if (mensajeFiltrado) {
          if (!mensajesEnviados11[mensajeFiltrado.from] || mensajesEnviados11[mensajeFiltrado.from] !== mensajeFiltrado.body) {
            mensajesEnviados11[mensajeFiltrado.from] = mensajeFiltrado.body;
            console.log("from filtrado:", mensajeFiltrado.from, "body filtrado:", mensajeFiltrado.body);
            enviarMensaje11(mensajeFiltrado);
          }
        }
      }
    }


    // Iniciar la actualización periódica
    actualizarFiltroPeriodicamente();
  });


  // //////////////////////////////////////////////////////////////////////



  // //////////////////////////////
  // ///////////////////



  app.get('/obtenerMensajes1', (req, res) => {
    const mensajes = MensajeIndex.map(({ body, timestamp }) => ({

      body,
      timestamp

    }));

    const mensajesJSON = JSON.stringify(mensajes);
    res.send(mensajesJSON);

    console.log(` Mensajes sala 1 ${mensajesJSON}`);

  });







  app.post('/responderMensaje1', (req, res) => {
    const response = req.body.response; // Obtener la respuesta del cuerpo de la solicitud
    const modifiedResponse = `Asesor: ${response}`; // Agregar "asesor: " al inicio de la respuesta

    const lastMessage = MensajeIndex[MensajeIndex.length - 1]; // Obtener el último mensaje guardado

    const timestamp = new Date().toISOString();

    const mensaje = {
      from: lastMessage ? lastMessage.from : 'ValorPorDefectoFrom', // Usar valor del último mensaje o valor por defecto
      name: lastMessage ? lastMessage.name : 'ValorPorDefectoName', // Usar valor del último mensaje o valor por defecto
      body: modifiedResponse, // Guardar la respuesta modificada en el campo 'body'
      response: response, // Guardar la respuesta original en el campo 'response'
      timestamp: timestamp // Guardar la hora actual en el campo 'timestamp'
    };
    MensajeIndex.push(mensaje); // Agregar el objeto mensaje al array
    // console.log(`Mensaje recibido desde el cliente1: "${response}"`);

    // Leer el archivo JSON correspondiente a 'from'
    const filePath = path.join(__dirname, 'sala1', `${mensaje.from}.json`);
    fs.readFile(filePath, 'utf8', (err, data) => {

      let historial = [];

      if (!err) {
        try {
          historial = JSON.parse(data);
        } catch (parseError) {
          console.error('Error al parsear el archivo JSON:', parseError);
        }
      }

      // Agregar el objeto mensaje al historial
      historial.push(mensaje);

      // Escribir el historial actualizado de vuelta al archivo JSON
      fs.writeFile(filePath, JSON.stringify(historial, null, 2), (err) => {
        if (err) {
          console.error('Error al escribir en el archivo JSON:', err);
          return res.status(500).json({ message: 'Error al escribir en el archivo JSON' });
        }

        res.json({ message: 'Respuesta enviada exitosamente' });
      });
    });
  });








  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  // //////////////////////////////
  // ///////////////////




  app.get('/obtenerMensajes2', (req, res) => {
    const mensajes = MensajeIndexS2.map(({ body, timestamp }) => ({

      body,
      timestamp

    }));

    const mensajesJSON = JSON.stringify(mensajes);
    res.send(mensajesJSON);

    console.log(` Mensajes sala 2 ${mensajesJSON}`);

  });





  app.post('/responderMensaje2', (req, res) => {
    const response = req.body.response; // Obtener la respuesta del cuerpo de la solicitud
    const modifiedResponse = `Asesor: ${response}`; // Agregar "asesor: " al inicio de la respuesta

    const lastMessage = MensajeIndexS2[MensajeIndexS2.length - 1]; // Obtener el último mensaje guardado

    const timestamp = new Date().toISOString();

    const mensaje = {
      from: lastMessage ? lastMessage.from : 'ValorPorDefectoFrom', // Usar valor del último mensaje o valor por defecto
      name: lastMessage ? lastMessage.name : 'ValorPorDefectoName', // Usar valor del último mensaje o valor por defecto
      body: modifiedResponse, // Guardar la respuesta modificada en el campo 'body'
      response: response, // Guardar la respuesta original en el campo 'response'
      timestamp: timestamp // Guardar la hora actual en el campo 'timestamp'
    };

    MensajeIndexS2.push(mensaje); // Agregar el objeto mensaje al array
    // console.log(`Mensaje recibido desde el cliente1: "${response}"`);

    // Leer el archivo JSON correspondiente a 'from'
    const filePath = path.join(__dirname, 'sala2', `${mensaje.from}.json`);
    fs.readFile(filePath, 'utf8', (err, data) => {

      let historial = [];

      if (!err) {
        try {
          historial = JSON.parse(data);
        } catch (parseError) {
          console.error('Error al parsear el archivo JSON:', parseError);
        }
      }

      // Agregar el objeto mensaje al historial
      historial.push(mensaje);

      // Escribir el historial actualizado de vuelta al archivo JSON
      fs.writeFile(filePath, JSON.stringify(historial, null, 2), (err) => {
        if (err) {
          console.error('Error al escribir en el archivo JSON:', err);
          return res.status(500).json({ message: 'Error al escribir en el archivo JSON' });
        }

        res.json({ message: 'Respuesta enviada exitosamente' });
      });
    });
  });








  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





  // //////////////////////////////
  // ///////////////////



  app.get('/obtenerMensajes3', (req, res) => {
    const mensajes = MensajeIndexS3.map(({ body, timestamp }) => ({

      body,
      timestamp

    }));

    const mensajesJSON = JSON.stringify(mensajes);
    res.send(mensajesJSON);

    console.log(` Mensajes sala 3 ${mensajesJSON}`);

  });





  app.post('/responderMensaje3', (req, res) => {
    const response = req.body.response; // Obtener la respuesta del cuerpo de la solicitud
    const modifiedResponse = `Asesor: ${response}`; // Agregar "asesor: " al inicio de la respuesta

    const lastMessage = MensajeIndexS3[MensajeIndexS3.length - 1]; // Obtener el último mensaje guardado

    const timestamp = new Date().toISOString();

    const mensaje = {
      from: lastMessage ? lastMessage.from : 'ValorPorDefectoFrom', // Usar valor del último mensaje o valor por defecto
      name: lastMessage ? lastMessage.name : 'ValorPorDefectoName', // Usar valor del último mensaje o valor por defecto
      body: modifiedResponse, // Guardar la respuesta modificada en el campo 'body'
      response: response, // Guardar la respuesta original en el campo 'response'
      timestamp: timestamp // Guardar la hora actual en el campo 'timestamp'
    };

    MensajeIndexS3.push(mensaje); // Agregar el objeto mensaje al array
    // console.log(`Mensaje recibido desde el cliente1: "${response}"`);

    // Leer el archivo JSON correspondiente a 'from'
    const filePath = path.join(__dirname, 'sala3', `${mensaje.from}.json`);
    fs.readFile(filePath, 'utf8', (err, data) => {

      let historial = [];

      if (!err) {
        try {
          historial = JSON.parse(data);
        } catch (parseError) {
          console.error('Error al parsear el archivo JSON:', parseError);
        }
      }

      // Agregar el objeto mensaje al historial
      historial.push(mensaje);

      // Escribir el historial actualizado de vuelta al archivo JSON
      fs.writeFile(filePath, JSON.stringify(historial, null, 2), (err) => {
        if (err) {
          console.error('Error al escribir en el archivo JSON:', err);
          return res.status(500).json({ message: 'Error al escribir en el archivo JSON' });
        }

        res.json({ message: 'Respuesta enviada exitosamente' });
      });
    });
  });








  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





  // //////////////////////////////
  // ///////////////////



  app.get('/obtenerMensajes4', (req, res) => {
    const mensajes = MensajeIndexS4.map(({ body, timestamp }) => ({

      body,
      timestamp

    }));

    const mensajesJSON = JSON.stringify(mensajes);
    res.send(mensajesJSON);

    console.log(` Mensajes sala 4 ${mensajesJSON}`);

  });






  app.post('/responderMensaje4', (req, res) => {
    const response = req.body.response; // Obtener la respuesta del cuerpo de la solicitud
    const modifiedResponse = `Asesor: ${response}`; // Agregar "asesor: " al inicio de la respuesta

    const lastMessage = MensajeIndexS4[MensajeIndexS4.length - 1]; // Obtener el último mensaje guardado

    const timestamp = new Date().toISOString();

    const mensaje = {
      from: lastMessage ? lastMessage.from : 'ValorPorDefectoFrom', // Usar valor del último mensaje o valor por defecto
      name: lastMessage ? lastMessage.name : 'ValorPorDefectoName', // Usar valor del último mensaje o valor por defecto
      body: modifiedResponse, // Guardar la respuesta modificada en el campo 'body'
      response: response, // Guardar la respuesta original en el campo 'response'
      timestamp: timestamp // Guardar la hora actual en el campo 'timestamp'
    };

    MensajeIndexS4.push(mensaje); // Agregar el objeto mensaje al array
    // console.log(`Mensaje recibido desde el cliente1: "${response}"`);

    // Leer el archivo JSON correspondiente a 'from'
    const filePath = path.join(__dirname, 'sala4', `${mensaje.from}.json`);
    fs.readFile(filePath, 'utf8', (err, data) => {

      let historial = [];

      if (!err) {
        try {
          historial = JSON.parse(data);
        } catch (parseError) {
          console.error('Error al parsear el archivo JSON:', parseError);
        }
      }

      // Agregar el objeto mensaje al historial
      historial.push(mensaje);

      // Escribir el historial actualizado de vuelta al archivo JSON
      fs.writeFile(filePath, JSON.stringify(historial, null, 2), (err) => {
        if (err) {
          console.error('Error al escribir en el archivo JSON:', err);
          return res.status(500).json({ message: 'Error al escribir en el archivo JSON' });
        }

        res.json({ message: 'Respuesta enviada exitosamente' });
      });
    });
  });







  // //////////////////////////////
  // ///////////////////



  app.get('/obtenerMensajes5', (req, res) => {
    const bodys = MensajeIndexS5.map(({ body }) => body);
    const bodyJSON = JSON.stringify(bodys);
    res.send(bodyJSON);
    //console.log(` Mensajes sala 2 ${bodyJSON}`);
  });






  app.post('/responderMensaje5', (req, res) => {
    const response = req.body.response; // Obtener la respuesta del cuerpo de la solicitud
    const modifiedResponse = `Asesor: ${response}`; // Agregar "asesor: " al inicio de la respuesta

    const lastMessage = MensajeIndexS5[MensajeIndexS5.length - 1]; // Obtener el último mensaje guardado

    const timestamp = new Date().toISOString();

    const mensaje = {
      from: lastMessage ? lastMessage.from : 'ValorPorDefectoFrom', // Usar valor del último mensaje o valor por defecto
      name: lastMessage ? lastMessage.name : 'ValorPorDefectoName', // Usar valor del último mensaje o valor por defecto
      body: modifiedResponse, // Guardar la respuesta modificada en el campo 'body'
      response: response, // Guardar la respuesta original en el campo 'response'
      timestamp: timestamp // Guardar la hora actual en el campo 'timestamp'
    };

    MensajeIndexS5.push(mensaje); // Agregar el objeto mensaje al array
    // console.log(`Mensaje recibido desde el cliente1: "${response}"`);

    // Leer el archivo JSON correspondiente a 'from'
    const filePath = path.join(__dirname, 'sala5', `${mensaje.from}.json`);
    fs.readFile(filePath, 'utf8', (err, data) => {

      let historial = [];

      if (!err) {
        try {
          historial = JSON.parse(data);
        } catch (parseError) {
          console.error('Error al parsear el archivo JSON:', parseError);
        }
      }

      // Agregar el objeto mensaje al historial
      historial.push(mensaje);

      // Escribir el historial actualizado de vuelta al archivo JSON
      fs.writeFile(filePath, JSON.stringify(historial, null, 2), (err) => {
        if (err) {
          console.error('Error al escribir en el archivo JSON:', err);
          return res.status(500).json({ message: 'Error al escribir en el archivo JSON' });
        }

        res.json({ message: 'Respuesta enviada exitosamente' });
      });
    });
  });






  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







  //////////////////////////////
  // ///////////////////



  app.get('/obtenerMensajes6', (req, res) => {
    const bodys = MensajeIndexS6.map(({ body }) => body);
    const bodyJSON = JSON.stringify(bodys);
    res.send(bodyJSON);
    // console.log(` Mensajes sala 6 ${bodyJSON}`);
  });






  app.post('/responderMensaje6', (req, res) => {
    const response = req.body.response; // Obtener la respuesta del cuerpo de la solicitud
    const modifiedResponse = `Asesor: ${response}`; // Agregar "asesor: " al inicio de la respuesta

    const lastMessage = MensajeIndexS6[MensajeIndexS6.length - 1]; // Obtener el último mensaje guardado

    const timestamp = new Date().toISOString();

    const mensaje = {
      from: lastMessage ? lastMessage.from : 'ValorPorDefectoFrom', // Usar valor del último mensaje o valor por defecto
      name: lastMessage ? lastMessage.name : 'ValorPorDefectoName', // Usar valor del último mensaje o valor por defecto
      body: modifiedResponse, // Guardar la respuesta modificada en el campo 'body'
      response: response, // Guardar la respuesta original en el campo 'response'
      timestamp: timestamp // Guardar la hora actual en el campo 'timestamp'
    };

    MensajeIndexS6.push(mensaje); // Agregar el objeto mensaje al array
    // console.log(`Mensaje recibido desde el cliente1: "${response}"`);

    // Leer el archivo JSON correspondiente a 'from'
    const filePath = path.join(__dirname, 'sala6', `${mensaje.from}.json`);
    fs.readFile(filePath, 'utf8', (err, data) => {

      let historial = [];

      if (!err) {
        try {
          historial = JSON.parse(data);
        } catch (parseError) {
          console.error('Error al parsear el archivo JSON:', parseError);
        }
      }

      // Agregar el objeto mensaje al historial
      historial.push(mensaje);

      // Escribir el historial actualizado de vuelta al archivo JSON
      fs.writeFile(filePath, JSON.stringify(historial, null, 2), (err) => {
        if (err) {
          console.error('Error al escribir en el archivo JSON:', err);
          return res.status(500).json({ message: 'Error al escribir en el archivo JSON' });
        }

        res.json({ message: 'Respuesta enviada exitosamente' });
      });
    });
  });



  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





  //////////////////////////////
  // ///////////////////



  app.get('/obtenerMensajes7', (req, res) => {
    const mensajes = MensajeIndexS7.map(({ body, timestamp }) => ({

      body,
      timestamp

    }));

    const mensajesJSON = JSON.stringify(mensajes);
    res.send(mensajesJSON);

    console.log(` Mensajes sala 7 ${mensajesJSON}`);

  });






  app.post('/responderMensaje7', (req, res) => {
    const response = req.body.response; // Obtener la respuesta del cuerpo de la solicitud
    const modifiedResponse = `Asesor: ${response}`; // Agregar "asesor: " al inicio de la respuesta

    const lastMessage = MensajeIndexS7[MensajeIndexS7.length - 1]; // Obtener el último mensaje guardado

    const timestamp = new Date().toISOString();

    const mensaje = {
      from: lastMessage ? lastMessage.from : 'ValorPorDefectoFrom', // Usar valor del último mensaje o valor por defecto
      name: lastMessage ? lastMessage.name : 'ValorPorDefectoName', // Usar valor del último mensaje o valor por defecto
      body: modifiedResponse, // Guardar la respuesta modificada en el campo 'body'
      response: response, // Guardar la respuesta original en el campo 'response'
      timestamp: timestamp // Guardar la hora actual en el campo 'timestamp'
    };

    MensajeIndexS7.push(mensaje); // Agregar el objeto mensaje al array
    // console.log(`Mensaje recibido desde el cliente1: "${response}"`);

    // Leer el archivo JSON correspondiente a 'from'
    const filePath = path.join(__dirname, 'sala7', `${mensaje.from}.json`);
    fs.readFile(filePath, 'utf8', (err, data) => {

      let historial = [];

      if (!err) {
        try {
          historial = JSON.parse(data);
        } catch (parseError) {
          console.error('Error al parsear el archivo JSON:', parseError);
        }
      }

      // Agregar el objeto mensaje al historial
      historial.push(mensaje);

      // Escribir el historial actualizado de vuelta al archivo JSON
      fs.writeFile(filePath, JSON.stringify(historial, null, 2), (err) => {
        if (err) {
          console.error('Error al escribir en el archivo JSON:', err);
          return res.status(500).json({ message: 'Error al escribir en el archivo JSON' });
        }

        res.json({ message: 'Respuesta enviada exitosamente' });
      });
    });
  });






  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  //////////////////////////////
  // ///////////////////



  app.get('/obtenerMensajes8', (req, res) => {
    const bodys = MensajeIndexS8.map(({ body }) => body);
    const bodyJSON = JSON.stringify(bodys);
    res.send(bodyJSON);
    // console.log(` Mensajes sala 8 ${bodyJSON}`);
  });






  app.post('/responderMensaje8', (req, res) => {
    const response = req.body.response; // Obtener la respuesta del cuerpo de la solicitud
    const modifiedResponse = `Asesor: ${response}`; // Agregar "asesor: " al inicio de la respuesta

    const lastMessage = MensajeIndexS8[MensajeIndexS8.length - 1]; // Obtener el último mensaje guardado

    const timestamp = new Date().toISOString();

    const mensaje = {
      from: lastMessage ? lastMessage.from : 'ValorPorDefectoFrom', // Usar valor del último mensaje o valor por defecto
      name: lastMessage ? lastMessage.name : 'ValorPorDefectoName', // Usar valor del último mensaje o valor por defecto
      body: modifiedResponse, // Guardar la respuesta modificada en el campo 'body'
      response: response, // Guardar la respuesta original en el campo 'response'
      timestamp: timestamp // Guardar la hora actual en el campo 'timestamp'
    };

    MensajeIndexS8.push(mensaje); // Agregar el objeto mensaje al array
    // console.log(`Mensaje recibido desde el cliente1: "${response}"`);

    // Leer el archivo JSON correspondiente a 'from'
    const filePath = path.join(__dirname, 'sala8', `${mensaje.from}.json`);
    fs.readFile(filePath, 'utf8', (err, data) => {

      let historial = [];

      if (!err) {
        try {
          historial = JSON.parse(data);
        } catch (parseError) {
          console.error('Error al parsear el archivo JSON:', parseError);
        }
      }

      // Agregar el objeto mensaje al historial
      historial.push(mensaje);

      // Escribir el historial actualizado de vuelta al archivo JSON
      fs.writeFile(filePath, JSON.stringify(historial, null, 2), (err) => {
        if (err) {
          console.error('Error al escribir en el archivo JSON:', err);
          return res.status(500).json({ message: 'Error al escribir en el archivo JSON' });
        }

        res.json({ message: 'Respuesta enviada exitosamente' });
      });
    });
  });






  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  //////////////////////////////
  // ///////////////////



  app.get('/obtenerMensajes9', (req, res) => {
    const bodys = MensajeIndexS9.map(({ body }) => body);
    const bodyJSON = JSON.stringify(bodys);
    res.send(bodyJSON);
    //console.log(` Mensajes sala 9 ${bodyJSON}`);
  });






  app.post('/responderMensaje9', (req, res) => {
    const response = req.body.response; // Obtener la respuesta del cuerpo de la solicitud
    const modifiedResponse = `Asesor: ${response}`; // Agregar "asesor: " al inicio de la respuesta

    const lastMessage = MensajeIndexS9[MensajeIndexS9.length - 1]; // Obtener el último mensaje guardado

    const timestamp = new Date().toISOString();

    const mensaje = {
      from: lastMessage ? lastMessage.from : 'ValorPorDefectoFrom', // Usar valor del último mensaje o valor por defecto
      name: lastMessage ? lastMessage.name : 'ValorPorDefectoName', // Usar valor del último mensaje o valor por defecto
      body: modifiedResponse, // Guardar la respuesta modificada en el campo 'body'
      response: response, // Guardar la respuesta original en el campo 'response'
      timestamp: timestamp // Guardar la hora actual en el campo 'timestamp'
    };

    MensajeIndexS9.push(mensaje); // Agregar el objeto mensaje al array
    // console.log(`Mensaje recibido desde el cliente1: "${response}"`);

    // Leer el archivo JSON correspondiente a 'from'
    const filePath = path.join(__dirname, 'sala9', `${mensaje.from}.json`);
    fs.readFile(filePath, 'utf8', (err, data) => {

      let historial = [];

      if (!err) {
        try {
          historial = JSON.parse(data);
        } catch (parseError) {
          console.error('Error al parsear el archivo JSON:', parseError);
        }
      }

      // Agregar el objeto mensaje al historial
      historial.push(mensaje);

      // Escribir el historial actualizado de vuelta al archivo JSON
      fs.writeFile(filePath, JSON.stringify(historial, null, 2), (err) => {
        if (err) {
          console.error('Error al escribir en el archivo JSON:', err);
          return res.status(500).json({ message: 'Error al escribir en el archivo JSON' });
        }

        res.json({ message: 'Respuesta enviada exitosamente' });
      });
    });
  });






  //////////////////////////////
  // ///////////////////



  app.get('/obtenerMensajes10', (req, res) => {
    const bodys = MensajeIndexS10.map(({ body }) => body);
    const bodyJSON = JSON.stringify(bodys);
    res.send(bodyJSON);
    //console.log(` Mensajes sala 9 ${bodyJSON}`);
  });






  app.post('/responderMensaje10', (req, res) => {
    const response = req.body.response; // Obtener la respuesta del cuerpo de la solicitud
    const modifiedResponse = `Asesor: ${response}`; // Agregar "asesor: " al inicio de la respuesta

    const lastMessage = MensajeIndexS10[MensajeIndexS10.length - 1]; // Obtener el último mensaje guardado

    const timestamp = new Date().toISOString();

    const mensaje = {
      from: lastMessage ? lastMessage.from : 'ValorPorDefectoFrom', // Usar valor del último mensaje o valor por defecto
      name: lastMessage ? lastMessage.name : 'ValorPorDefectoName', // Usar valor del último mensaje o valor por defecto
      body: modifiedResponse, // Guardar la respuesta modificada en el campo 'body'
      response: response, // Guardar la respuesta original en el campo 'response'
      timestamp: timestamp // Guardar la hora actual en el campo 'timestamp'
    };

    MensajeIndexS10.push(mensaje); // Agregar el objeto mensaje al array
    // console.log(`Mensaje recibido desde el cliente1: "${response}"`);

    // Leer el archivo JSON correspondiente a 'from'
    const filePath = path.join(__dirname, 'sala10', `${mensaje.from}.json`);
    fs.readFile(filePath, 'utf8', (err, data) => {

      let historial = [];

      if (!err) {
        try {
          historial = JSON.parse(data);
        } catch (parseError) {
          console.error('Error al parsear el archivo JSON:', parseError);
        }
      }

      // Agregar el objeto mensaje al historial
      historial.push(mensaje);

      // Escribir el historial actualizado de vuelta al archivo JSON
      fs.writeFile(filePath, JSON.stringify(historial, null, 2), (err) => {
        if (err) {
          console.error('Error al escribir en el archivo JSON:', err);
          return res.status(500).json({ message: 'Error al escribir en el archivo JSON' });
        }

        res.json({ message: 'Respuesta enviada exitosamente' });
      });
    });
  });





  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








  //////////////////////////////
  // ///////////////////



  app.get('/obtenerMensajes11', (req, res) => {
    const bodys = MensajeIndexS11.map(({ body }) => body);
    const bodyJSON = JSON.stringify(bodys);
    res.send(bodyJSON);
    //console.log(` Mensajes sala 9 ${bodyJSON}`);
  });






  app.post('/responderMensaje11', (req, res) => {
    const response = req.body.response; // Obtener la respuesta del cuerpo de la solicitud
    const modifiedResponse = `Asesor: ${response}`; // Agregar "asesor: " al inicio de la respuesta

    const lastMessage = MensajeIndexS11[MensajeIndexS11.length - 1]; // Obtener el último mensaje guardado

    const timestamp = new Date().toISOString();

    const mensaje = {
      from: lastMessage ? lastMessage.from : 'ValorPorDefectoFrom', // Usar valor del último mensaje o valor por defecto
      name: lastMessage ? lastMessage.name : 'ValorPorDefectoName', // Usar valor del último mensaje o valor por defecto
      body: modifiedResponse, // Guardar la respuesta modificada en el campo 'body'
      response: response, // Guardar la respuesta original en el campo 'response'
      timestamp: timestamp // Guardar la hora actual en el campo 'timestamp'
    };

    MensajeIndexS11.push(mensaje); // Agregar el objeto mensaje al array
    // console.log(`Mensaje recibido desde el cliente1: "${response}"`);

    // Leer el archivo JSON correspondiente a 'from'
    const filePath = path.join(__dirname, 'sala11', `${mensaje.from}.json`);
    fs.readFile(filePath, 'utf8', (err, data) => {

      let historial = [];

      if (!err) {
        try {
          historial = JSON.parse(data);
        } catch (parseError) {
          console.error('Error al parsear el archivo JSON:', parseError);
        }
      }

      // Agregar el objeto mensaje al historial
      historial.push(mensaje);

      // Escribir el historial actualizado de vuelta al archivo JSON
      fs.writeFile(filePath, JSON.stringify(historial, null, 2), (err) => {
        if (err) {
          console.error('Error al escribir en el archivo JSON:', err);
          return res.status(500).json({ message: 'Error al escribir en el archivo JSON' });
        }

        res.json({ message: 'Respuesta enviada exitosamente' });
      });
    });
  });





  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





  // ///////////////////////////////////////////////
  // ESTE CODIGO COLOCA EL NOMBRE DE USUAIRO EN EL CLIENTE SALA 1////
  // //////////////////////////////////////////////////////////

  let Usuario1 = 'No hay usuarios'; // Valor predeterminado en caso de que no haya valores en mensajesIndex1

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'Usuario1'
  function asignarValorname() {
    if (MensajeIndex.length > 0 && MensajeIndex[0].name) {
      Usuario1 = MensajeIndex[0].name;
    } else {
      Usuario1 = 'no hay usuarios'; // Si no hay valores en mensajesIndex1, se asigna 'no hay usuarios'
    }
    // console.log('Valor de "Usuario1":', Usuario1);
  }

  setInterval(asignarValorname, 1000);



  app.get('/Usuarioget1', (req, res) => {
    // Supongamos que Usuario1 tiene un valor en el servidor
    Usuario1 = Usuario1;

    // Envía el valor de Usuario1 al cliente
    res.send(Usuario1);
  });


  let borrar1 = 'No hay usuario'; // Variable para almacenar el valor de 'from'

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'borrar1'
  function asignarValorFrom() {
    if (MensajeIndex.length > 0 && MensajeIndex[0].from) {
      borrar1 = MensajeIndex[0].from;
    } else {
      borrar1 = 'No hay usuario';
    }
    // console.log('Valor de "borrar1":', borrar1);
  }

  setInterval(asignarValorFrom, 1000);

  app.get('/BuscaOrden', (req, res) => {
    // Envía el valor de borrar1 al cliente
    res.send(borrar1);
  });






  // /////////////////////////////////
  ///////////
  ////////////////////
  //



  // ///////////////////////////////////////////////
  // ESTE CODIGO COLOCA EL NOMBRE DE USUAIRO EN EL CLIENTE SALA 2////
  // //////////////////////////////////////////////////////////

  let Usuario2 = 'No hay usuarios'; // Valor predeterminado en caso de que no haya valores en mensajesIndex1

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'Usuario1'
  function asignarValorname2() {
    if (MensajeIndexS2.length > 0 && MensajeIndexS2[0].name) {
      Usuario2 = MensajeIndexS2[0].name;
    } else {
      Usuario2 = 'no hay usuarios'; // Si no hay valores en mensajesIndex1, se asigna 'no hay usuarios'
    }
    // console.log('Valor de "Usuario1":', Usuario1);
  }

  setInterval(asignarValorname2, 1000);



  app.get('/Usuarioget2', (req, res) => {
    // Supongamos que Usuario1 tiene un valor en el servidor
    Usuario2 = Usuario2;

    // Envía el valor de Usuario1 al cliente
    res.send(Usuario2);
  });


  let borrar2 = 'No hay usuario'; // Variable para almacenar el valor de 'from'

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'borrar1'
  function asignarValorFrom2() {
    if (MensajeIndexS2.length > 0 && MensajeIndexS2[0].from) {
      borrar2 = MensajeIndexS2[0].from;
    } else {
      borrar2 = 'No hay usuario';
    }
    // console.log('Valor de "borrar1":', borrar1);
  }

  setInterval(asignarValorFrom2, 1000);

  app.get('/BuscaOrden2', (req, res) => {
    // Envía el valor de borrar1 al cliente
    res.send(borrar2);
  });






  // /////////////////////////////////
  ///////////
  ////////////////////
  //





  // ///////////////////////////////////////////////
  // ESTE CODIGO COLOCA EL NOMBRE DE USUAIRO EN EL CLIENTE SALA 3////
  // //////////////////////////////////////////////////////////

  let Usuario3 = 'No hay usuarios'; // Valor predeterminado en caso de que no haya valores en mensajesIndex1

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'Usuario1'
  function asignarValorname3() {
    if (MensajeIndexS3.length > 0 && MensajeIndexS3[0].name) {
      Usuario3 = MensajeIndexS3[0].name;
    } else {
      Usuario3 = 'no hay usuarios'; // Si no hay valores en mensajesIndex1, se asigna 'no hay usuarios'
    }
    // console.log('Valor de "Usuario1":', Usuario1);
  }

  setInterval(asignarValorname3, 1000);



  app.get('/Usuarioget3', (req, res) => {
    // Supongamos que Usuario1 tiene un valor en el servidor
    Usuario3 = Usuario3;

    // Envía el valor de Usuario1 al cliente
    res.send(Usuario3);
  });


  let borrar3 = 'No hay usuario'; // Variable para almacenar el valor de 'from'

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'borrar1'
  function asignarValorFrom3() {
    if (MensajeIndexS3.length > 0 && MensajeIndexS3[0].from) {
      borrar3 = MensajeIndexS3[0].from;
    } else {
      borrar3 = 'No hay usuario';
    }
    // console.log('Valor de "borrar1":', borrar1);
  }

  setInterval(asignarValorFrom3, 1000);

  app.get('/BuscaOrden3', (req, res) => {
    // Envía el valor de borrar1 al cliente
    res.send(borrar3);
  });







  // ///////////////////////////////////////////////
  // ESTE CODIGO COLOCA EL NOMBRE DE USUAIRO EN EL CLIENTE SALA 4////
  // //////////////////////////////////////////////////////////

  let Usuario4 = 'No hay usuarios'; // Valor predeterminado en caso de que no haya valores en mensajesIndex1

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'Usuario1'
  function asignarValorname4() {
    if (MensajeIndexS4.length > 0 && MensajeIndexS4[0].name) {
      Usuario4 = MensajeIndexS4[0].name;
    } else {
      Usuario4 = 'no hay usuarios'; // Si no hay valores en mensajesIndex1, se asigna 'no hay usuarios'
    }
    // console.log('Valor de "Usuario1":', Usuario1);
  }

  setInterval(asignarValorname4, 1000);



  app.get('/Usuarioget4', (req, res) => {
    // Supongamos que Usuario1 tiene un valor en el servidor
    Usuario4 = Usuario4;

    // Envía el valor de Usuario1 al cliente
    res.send(Usuario4);
  });


  let borrar4 = 'No hay usuario'; // Variable para almacenar el valor de 'from'

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'borrar1'
  function asignarValorFrom4() {
    if (MensajeIndexS4.length > 0 && MensajeIndexS4[0].from) {
      borrar4 = MensajeIndexS4[0].from;
    } else {
      borrar4 = 'No hay usuario';
    }
    // console.log('Valor de "borrar1":', borrar1);
  }

  setInterval(asignarValorFrom4, 1000);

  app.get('/BuscaOrden4', (req, res) => {
    // Envía el valor de borrar1 al cliente
    res.send(borrar4);
  });




  // /////////////////////////////////
  ///////////
  ////////////////////
  //






  // ///////////////////////////////////////////////
  // ESTE CODIGO COLOCA EL NOMBRE DE USUAIRO EN EL CLIENTE SALA 5////
  // //////////////////////////////////////////////////////////

  let Usuario5 = 'No hay usuarios'; // Valor predeterminado en caso de que no haya valores en mensajesIndex1

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'Usuario1'
  function asignarValorname5() {
    if (MensajeIndexS5.length > 0 && MensajeIndexS5[0].name) {
      Usuario5 = MensajeIndexS5[0].name;
    } else {
      Usuario5 = 'no hay usuarios'; // Si no hay valores en mensajesIndex1, se asigna 'no hay usuarios'
    }
    // console.log('Valor de "Usuario1":', Usuario1);
  }

  setInterval(asignarValorname5, 1000);



  app.get('/Usuarioget5', (req, res) => {
    // Supongamos que Usuario1 tiene un valor en el servidor
    Usuario5 = Usuario5;

    // Envía el valor de Usuario1 al cliente
    res.send(Usuario5);
  });


  let borrar5 = 'No hay usuario'; // Variable para almacenar el valor de 'from'

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'borrar1'
  function asignarValorFrom5() {
    if (MensajeIndexS5.length > 0 && MensajeIndexS5[0].from) {
      borrar5 = MensajeIndexS5[0].from;
    } else {
      borrar5 = 'No hay usuario';
    }
    // console.log('Valor de "borrar1":', borrar1);
  }

  setInterval(asignarValorFrom5, 1000);

  app.get('/BuscaOrden5', (req, res) => {
    // Envía el valor de borrar1 al cliente
    res.send(borrar5);
  });




  // /////////////////////////////////
  ///////////
  ////////////////////
  //





  // ///////////////////////////////////////////////
  // ESTE CODIGO COLOCA EL NOMBRE DE USUAIRO EN EL CLIENTE SALA 6////
  // //////////////////////////////////////////////////////////

  let Usuario6 = 'No hay usuarios'; // Valor predeterminado en caso de que no haya valores en mensajesIndex1

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'Usuario1'
  function asignarValorname6() {
    if (MensajeIndexS6.length > 0 && MensajeIndexS6[0].name) {
      Usuario6 = MensajeIndexS6[0].name;
    } else {
      Usuario6 = 'no hay usuarios'; // Si no hay valores en mensajesIndex1, se asigna 'no hay usuarios'
    }
    // console.log('Valor de "Usuario1":', Usuario1);
  }

  setInterval(asignarValorname6, 1000);



  app.get('/Usuarioget6', (req, res) => {
    // Supongamos que Usuario1 tiene un valor en el servidor
    Usuario6 = Usuario6;

    // Envía el valor de Usuario1 al cliente
    res.send(Usuario6);
  });


  let borrar6 = 'No hay usuario'; // Variable para almacenar el valor de 'from'

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'borrar1'
  function asignarValorFrom6() {
    if (MensajeIndexS6.length > 0 && MensajeIndexS6[0].from) {
      borrar6 = MensajeIndexS6[0].from;
    } else {
      borrar6 = 'No hay usuario';
    }
    // console.log('Valor de "borrar1":', borrar1);
  }

  setInterval(asignarValorFrom6, 1000);

  app.get('/BuscaOrden6', (req, res) => {
    // Envía el valor de borrar1 al cliente
    res.send(borrar6);
  });




  // /////////////////////////////////
  ///////////
  ////////////////////
  //


  // ///////////////////////////////////////////////
  // ESTE CODIGO COLOCA EL NOMBRE DE USUAIRO EN EL CLIENTE SALA 7////
  // //////////////////////////////////////////////////////////

  let Usuario7 = 'No hay usuarios'; // Valor predeterminado en caso de que no haya valores en mensajesIndex1

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'Usuario1'
  function asignarValorname7() {
    if (MensajeIndexS7.length > 0 && MensajeIndexS7[0].name) {
      Usuario7 = MensajeIndexS7[0].name;
    } else {
      Usuario7 = 'no hay usuarios'; // Si no hay valores en mensajesIndex1, se asigna 'no hay usuarios'
    }
    // console.log('Valor de "Usuario1":', Usuario1);
  }

  setInterval(asignarValorname7, 1000);



  app.get('/Usuarioget7', (req, res) => {
    // Supongamos que Usuario1 tiene un valor en el servidor
    Usuario7 = Usuario7;

    // Envía el valor de Usuario1 al cliente
    res.send(Usuario7);
  });


  let borrar7 = 'No hay usuario'; // Variable para almacenar el valor de 'from'

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'borrar1'
  function asignarValorFrom7() {
    if (MensajeIndexS7.length > 0 && MensajeIndexS7[0].from) {
      borrar7 = MensajeIndexS7[0].from;
    } else {
      borrar7 = 'No hay usuario';
    }
    // console.log('Valor de "borrar1":', borrar1);
  }

  setInterval(asignarValorFrom7, 1000);

  app.get('/BuscaOrden7', (req, res) => {
    // Envía el valor de borrar1 al cliente
    res.send(borrar7);
  });




  // /////////////////////////////////
  ///////////
  ////////////////////
  //





  // ///////////////////////////////////////////////
  // ESTE CODIGO COLOCA EL NOMBRE DE USUAIRO EN EL CLIENTE SALA 8////
  // //////////////////////////////////////////////////////////

  let Usuario8 = 'No hay usuarios'; // Valor predeterminado en caso de que no haya valores en mensajesIndex1

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'Usuario1'
  function asignarValorname8() {
    if (MensajeIndexS8.length > 0 && MensajeIndexS8[0].name) {
      Usuario8 = MensajeIndexS8[0].name;
    } else {
      Usuario8 = 'no hay usuarios'; // Si no hay valores en mensajesIndex1, se asigna 'no hay usuarios'
    }
    // console.log('Valor de "Usuario1":', Usuario1);
  }

  setInterval(asignarValorname8, 1000);



  app.get('/Usuarioget8', (req, res) => {
    // Supongamos que Usuario1 tiene un valor en el servidor
    Usuario8 = Usuario8;

    // Envía el valor de Usuario1 al cliente
    res.send(Usuario8);
  });


  let borrar8 = 'No hay usuario'; // Variable para almacenar el valor de 'from'

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'borrar1'
  function asignarValorFrom8() {
    if (MensajeIndexS8.length > 0 && MensajeIndexS8[0].from) {
      borrar8 = MensajeIndexS8[0].from;
    } else {
      borrar8 = 'No hay usuario';
    }
    // console.log('Valor de "borrar1":', borrar1);
  }

  setInterval(asignarValorFrom8, 1000);

  app.get('/BuscaOrden8', (req, res) => {
    // Envía el valor de borrar1 al cliente
    res.send(borrar8);
  });




  // /////////////////////////////////
  ///////////
  ////////////////////
  //


  // ///////////////////////////////////////////////
  // ESTE CODIGO COLOCA EL NOMBRE DE USUAIRO EN EL CLIENTE SALA 9////
  // //////////////////////////////////////////////////////////

  let Usuario9 = 'No hay usuarios'; // Valor predeterminado en caso de que no haya valores en mensajesIndex1

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'Usuario1'
  function asignarValorname9() {
    if (MensajeIndexS9.length > 0 && MensajeIndexS9[0].name) {
      Usuario9 = MensajeIndexS9[0].name;
    } else {
      Usuario9 = 'no hay usuarios'; // Si no hay valores en mensajesIndex1, se asigna 'no hay usuarios'
    }
    // console.log('Valor de "Usuario1":', Usuario1);
  }

  setInterval(asignarValorname9, 1000);



  app.get('/Usuarioget9', (req, res) => {
    // Supongamos que Usuario1 tiene un valor en el servidor
    Usuario9 = Usuario9;

    // Envía el valor de Usuario1 al cliente
    res.send(Usuario9);
  });


  let borrar9 = 'No hay usuario'; // Variable para almacenar el valor de 'from'

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'borrar1'
  function asignarValorFrom9() {
    if (MensajeIndexS9.length > 0 && MensajeIndexS9[0].from) {
      borrar9 = MensajeIndexS9[0].from;
    } else {
      borrar9 = 'No hay usuario';
    }
    // console.log('Valor de "borrar1":', borrar1);
  }

  setInterval(asignarValorFrom9, 1000);

  app.get('/BuscaOrden9', (req, res) => {
    // Envía el valor de borrar1 al cliente
    res.send(borrar9);
  });




  // /////////////////////////////////
  ///////////
  ////////////////////
  //







  // ///////////////////////////////////////////////
  // ESTE CODIGO COLOCA EL NOMBRE DE USUAIRO EN EL CLIENTE SALA 10////
  // //////////////////////////////////////////////////////////

  let Usuario10 = 'No hay usuarios'; // Valor predeterminado en caso de que no haya valores en mensajesIndex1

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'Usuario1'
  function asignarValorname10() {
    if (MensajeIndexS10.length > 0 && MensajeIndexS10[0].name) {
      Usuario10 = MensajeIndexS10[0].name;
    } else {
      Usuario10 = 'no hay usuarios'; // Si no hay valores en mensajesIndex1, se asigna 'no hay usuarios'
    }
    // console.log('Valor de "Usuario1":', Usuario1);
  }

  setInterval(asignarValorname10, 1000);



  app.get('/Usuarioget10', (req, res) => {
    // Supongamos que Usuario1 tiene un valor en el servidor
    Usuario10 = Usuario10;

    // Envía el valor de Usuario1 al cliente
    res.send(Usuario10);
  });


  let borrar10 = 'No hay usuario'; // Variable para almacenar el valor de 'from'

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'borrar1'
  function asignarValorFrom10() {
    if (MensajeIndexS10.length > 0 && MensajeIndexS10[0].from) {
      borrar10 = MensajeIndexS10[0].from;
    } else {
      borrar10 = 'No hay usuario';
    }
    // console.log('Valor de "borrar1":', borrar1);
  }

  setInterval(asignarValorFrom10, 1000);

  app.get('/BuscaOrden10', (req, res) => {
    // Envía el valor de borrar1 al cliente
    res.send(borrar10);
  });




  // /////////////////////////////////
  ///////////
  ////////////////////
  //







  // ///////////////////////////////////////////////
  // ESTE CODIGO COLOCA EL NOMBRE DE USUAIRO EN EL CLIENTE SALA 11////
  // //////////////////////////////////////////////////////////

  let Usuario11 = 'No hay usuarios'; // Valor predeterminado en caso de que no haya valores en mensajesIndex1

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'Usuario1'
  function asignarValorname11() {
    if (MensajeIndexS11.length > 0 && MensajeIndexS11[0].name) {
      Usuario11 = MensajeIndexS11[0].name;
    } else {
      Usuario11 = 'no hay usuarios'; // Si no hay valores en mensajesIndex1, se asigna 'no hay usuarios'
    }
    // console.log('Valor de "Usuario1":', Usuario1);
  }

  setInterval(asignarValorname11, 1000);



  app.get('/Usuarioget11', (req, res) => {
    // Supongamos que Usuario1 tiene un valor en el servidor
    Usuario11 = Usuario11;

    // Envía el valor de Usuario1 al cliente
    res.send(Usuario11);
  });


  let borrar11 = 'No hay usuario'; // Variable para almacenar el valor de 'from'

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'borrar1'
  function asignarValorFrom11() {
    if (MensajeIndexS11.length > 0 && MensajeIndexS11[0].from) {
      borrar11 = MensajeIndexS11[0].from;
    } else {
      borrar11 = 'No hay usuario';
    }
    // console.log('Valor de "borrar1":', borrar1);
  }

  setInterval(asignarValorFrom11, 1000);

  app.get('/BuscaOrden11', (req, res) => {
    // Envía el valor de borrar1 al cliente
    res.send(borrar11);
  });




  // /////////////////////////////////
  ///////////
  ////////////////////
  //


  if (!registro[from]) {
    registro[from] = { etapa: 0, body, timestamp: Date.now() };
  
    async function enviarMensajeBienvenida(to) {
      if (EtapasMSG.length > 0) {
        // Encontrar el elemento más reciente con Idp diferente de 0
        const elementoModificadoRecientemente = EtapasMSG.reduce((másReciente, elemento) => {
          if (
            elemento.Idp !== 0 &&
            (!másReciente || elemento.timestamp > másReciente.timestamp)
          ) {
            return elemento;
          }
          return másReciente;
        }, null);
  
        if (elementoModificadoRecientemente) {
          const { id, interactiveId } = elementoModificadoRecientemente;
  
          // Registrar el ID en `registro[from]`
          registro[from].id = id;
  
          if (registro[to] && registro[to].etapa === 0) {
            
            
            
            const payload = {
              messaging_product: 'whatsapp',
              recipient_type: 'individual',
              to: from,
              type: 'image',
              image: {
                  link: "http://imgfz.com/i/savhZyl.jpeg",
                  caption: "*¡BIENVENIDO A GARANTÍA MANIZALES!*\n\nOfrecemos soluciones rápidas y confiables para obtener el dinero que necesitas. \n\n1️⃣ *Empeño sobre motos* 🚗🏍️ \n2️⃣ *Préstamos sobre artículos comerciales*📱💻🎧 \n\nSi tienes un celular, computador, dispositivos Apple, televisores Smart o un equipo de sonido, puedes obtener dinero de forma rápida.\n\n*¡Dinero en solo 30 minutos!*\n\nSin costos anticipados por trámites, papelería o fiadores. \n\n📩 *Envíanos fotos y referencia de tu artículo o vehículo para cotizar tu préstamo.*"
              }
          };




            try {
              // Enviar mensaje a través de la API de WhatsApp
              const response = await axios.post(
                `https://graph.facebook.com/v19.0/${idnumero}/messages`,
                payload,
                {
                  headers: {
                    Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
                    'Content-Type': 'application/json',
                  },
                }
              );
  
              console.log('Mensaje enviado:', response.data);
  
              // Actualizar etapa en `registro` y `EtapasMSG`
              registro[to].etapa = 1;
  
              const indexToUpdate = EtapasMSG.findIndex((item) => item.id === id);
              if (indexToUpdate !== -1) {
                EtapasMSG[indexToUpdate].etapa = 1;
                EtapasMSG[indexToUpdate].idp = 0;
                console.log(`Etapa actualizada para el ID: ${id}`);
              }
            } catch (error) {
              console.error('Error al enviar el mensaje:', error.response?.data || error.message);
            }
          }
        }
      }
    }
  
    // Llamar a la función para enviar el mensaje de bienvenida
    enviarMensajeBienvenida(from);
  }



  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  //////////////////////////////////////////////////
  ///////////REGRESA AL MeNu PRINCIPAL////////
  ////////////////////////////////////////////////////////////

  let idToUpdate101 = null;

  if (EtapasMSG.length > 0) {
    let elementoModificadoRecientemente101 = null;

    EtapasMSG.forEach((elemento) => {
      if (
        elemento.Idp !== 0 &&
        (elementoModificadoRecientemente101 === null ||
          elemento.timestamp > elementoModificadoRecientemente101.timestamp)
      ) {
        elementoModificadoRecientemente101 = elemento;
      }
    });

    if (elementoModificadoRecientemente101 !== null) {
      const { from, body, etapa, id, interactiveId } = elementoModificadoRecientemente101;

      // Verificar si la propiedad 'body' es igual a la cadena '1'
      if (/^regresar/i.test(body) && etapa >= 0 && etapa <= 300) {


        idToUpdate101 = id;

        const payload = {
          messaging_product: 'whatsapp',
          recipient_type: 'individual',
          to: to, // Cambié 'from' por 'to' para enviar el mensaje al destinatario correcto
          type: 'text',
          text: {
            preview_url: false,
            body: '¡Bienvenido/a a la Clínica Medsalud!\n \n*Por favor, indica el número de la opción que deseas consultar:* 📋 \n \nEn el momento que desees escribe *REGRESAR* para volver a este menú  \n \n 1️⃣Agendar citas médicas y RX\n \n 2️⃣ Asesor Cirugías \n \n 3️⃣ Agendar citas laboratorio \n \n 4️⃣ Servicios Particulares \n \n 5️⃣ Descarga de Laboratorios \n \n 6️⃣ Descarga imágenes DX \n \n 7️⃣ Farmacia \n \n 8️⃣ Citas Odontológicas \n \n 9️⃣ Cancelar Citas'
          }
        };

        axios
          .post(`https://graph.facebook.com/v17.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json',
            },
          })
          .then((response) => {
            console.log('Respuesta enviada:', response.data);

            if (idToUpdate101 !== null) {
              const indexToUpdate = EtapasMSG.findIndex((item) => item.id === idToUpdate101);
              if (indexToUpdate !== -1) {
                EtapasMSG[indexToUpdate].etapa = 0;
                EtapasMSG[indexToUpdate].idp = 0;
                console.log(`Valor de 'etapa' actualizado para el ID: ${idToUpdate101}`);
                idToUpdate101 = null; // Restablecer el ID a null después de la actualización
              }
            }
          })
          .catch((error) => {
            console.error('Error al enviar la respuesta:', error.response.data);
          });



      } else {
        // console.log("La condición para 'body' y 'etapa' no coincide.");
      }
    } else {
      console.log('No se encontró ningún elemento válido con idp distinto de 0');
    }
  } else {
    console.log("El array EtapasMSG está vacío.");
  }


  // ///////////




  ///////////////////////////////////////////
  ////////////// CREA LAS CAPTURAS PARA ENVIO SALA 1
  // /////////////////////////



  // Configurar multer para gestionar la carga de archivos
  const storage500 = multer.diskStorage({
    destination: 'public/screenshotssala1/',  // Cambiado a 'screenshots/'
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload500 = multer({ storage: storage500 });

  // Ruta para recibir la captura de pantalla
  app.post('/save-screenshotsmagisterio', upload500.single('screenshot'), (req, res) => {
    const screenshot = req.file;

    if (!screenshot) {
      return res.status(400).send('No se proporcionó ninguna captura de pantalla.');
    }

    // Mover la captura de pantalla a un directorio adecuado o realizar otras operaciones según sea necesario
    const destinationPath = path.join(__dirname, 'public/screenshotssala1', screenshot.originalname);

    fs.rename(screenshot.path, destinationPath, (err) => {
      if (err) {
        return res.status(500).send('Error al guardar la captura de pantalla.');
      }

      // Obtener el último mensaje del array mensajesIndex10
      const lastMessage = MensajeIndex[MensajeIndex.length - 1];

      // Agregar un objeto al array mensajesIndex10 con los valores de from, name y body
      MensajeIndex.push({
        from: lastMessage.from,
        name: lastMessage.name,
        body: `https://garantia-production.up.railway.app//screenshotssala1/${screenshot.originalname}`
      });

      // Guardar la información en un archivo JSON en la carpeta historial con el nombre de from
      const historialPath = path.join(__dirname, 'sala1', `${lastMessage.from}.json`);
      const jsonData = JSON.stringify(MensajeIndex, null, 2);

      fs.writeFile(historialPath, jsonData, (err) => {
        if (err) {
          return res.status(500).send('Error al guardar la información en el historial.');
        }

        // Actualizar la URL de la última captura de pantalla
        lastScreenshotUrl10 = `https://garantia-production.up.railway.app//screenshotssala1/${screenshot.originalname}`;

        function obtenerFromDeMensajes(mensajes) {
          // Tomar el 'from' del primer objeto del array (si existe)
          return mensajes.length > 0 ? mensajes[0].from : null;
        }

        function enviarMensaje10(from) {
          if (!lastScreenshotUrl10) {
            console.error('Error: lastScreenshotUrl no está definido.');
            // Puedes agregar aquí una acción adicional, como enviar un mensaje de error al cliente
            return;
          }

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'image',
            image: {
              link: lastScreenshotUrl10
            }
          };

          axios.post(`https://graph.facebook.com/v19.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              // console.log('Respuesta enviada a', from, ':', response.data);
            })
            .catch(error => {
              console.error('Error al enviar la respuesta a', from, ':', error.response.data);
            });
        }

        function enviarMensajeSiempre() {
          const from = obtenerFromDeMensajes(MensajeIndex);

          if (from) {
            // console.log("Enviando mensaje a:", from);
            enviarMensaje10(from);
          } else {
            console.log("No hay mensajes para enviar.");
          }
        }

        enviarMensajeSiempre();
        // Enviar una respuesta al cliente
        res.status(200).send('Captura de pantalla y datos guardados exitosamente.');
      });
    });
  });






  //////////////////////////////////////////
  ////////////// CREA LAS CAPTURAS PARA ENVIO SALA 2
  // /////////////////////////



  // Configurar multer para gestionar la carga de archivos
  const storage500s2 = multer.diskStorage({
    destination: 'public/screenshotssala1/',  // Cambiado a 'screenshots/'
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload500s2 = multer({ storage: storage500s2 });

  // Ruta para recibir la captura de pantalla
  app.post('/save-screenshotsmagisterio2', upload500s2.single('screenshot'), (req, res) => {
    const screenshot = req.file;

    if (!screenshot) {
      return res.status(400).send('No se proporcionó ninguna captura de pantalla.');
    }

    // Mover la captura de pantalla a un directorio adecuado o realizar otras operaciones según sea necesario
    const destinationPath = path.join(__dirname, 'public/screenshotssala1', screenshot.originalname);

    fs.rename(screenshot.path, destinationPath, (err) => {
      if (err) {
        return res.status(500).send('Error al guardar la captura de pantalla.');
      }

      // Obtener el último mensaje del array mensajesIndex10
      const lastMessage = MensajeIndexS2[MensajeIndexS2.length - 1];

      // Agregar un objeto al array mensajesIndex10 con los valores de from, name y body
      MensajeIndexS2.push({
        from: lastMessage.from,
        name: lastMessage.name,
        body: `https://garantia-production.up.railway.app//screenshotssala1/${screenshot.originalname}`
      });

      // Guardar la información en un archivo JSON en la carpeta historial con el nombre de from
      const historialPath = path.join(__dirname, 'sala2', `${lastMessage.from}.json`);
      const jsonData = JSON.stringify(MensajeIndexS2, null, 2);

      fs.writeFile(historialPath, jsonData, (err) => {
        if (err) {
          return res.status(500).send('Error al guardar la información en el historial.');
        }

        // Actualizar la URL de la última captura de pantalla
        lastScreenshotUrls2 = `https://garantia-production.up.railway.app//screenshotssala1/${screenshot.originalname}`;

        function obtenerFromDeMensajes(mensajes) {
          // Tomar el 'from' del primer objeto del array (si existe)
          return mensajes.length > 0 ? mensajes[0].from : null;
        }

        function enviarMensaje10(from) {
          if (!lastScreenshotUrls2) {
            console.error('Error: lastScreenshotUrl no está definido.');
            // Puedes agregar aquí una acción adicional, como enviar un mensaje de error al cliente
            return;
          }

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'image',
            image: {
              link: lastScreenshotUrls2
            }
          };

          axios.post(`https://graph.facebook.com/v19.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              // console.log('Respuesta enviada a', from, ':', response.data);
            })
            .catch(error => {
              console.error('Error al enviar la respuesta a', from, ':', error.response.data);
            });
        }

        function enviarMensajeSiempre() {
          const from = obtenerFromDeMensajes(MensajeIndexS2);

          if (from) {
            // console.log("Enviando mensaje a:", from);
            enviarMensaje10(from);
          } else {
            console.log("No hay mensajes para enviar.");
          }
        }

        enviarMensajeSiempre();
        // Enviar una respuesta al cliente
        res.status(200).send('Captura de pantalla y datos guardados exitosamente.');
      });
    });
  });




  ///////////////////////////////////////////
  ////////////// CREA LAS CAPTURAS PARA ENVIO SALA 3
  // /////////////////////////



  // Configurar multer para gestionar la carga de archivos
  const storage500s3 = multer.diskStorage({
    destination: 'public/screenshotssala1/',  // Cambiado a 'screenshots/'
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload500s3 = multer({ storage: storage500s3 });

  // Ruta para recibir la captura de pantalla
  app.post('/save-screenshotsmagisterio3', upload500s3.single('screenshot'), (req, res) => {
    const screenshot = req.file;

    if (!screenshot) {
      return res.status(400).send('No se proporcionó ninguna captura de pantalla.');
    }

    // Mover la captura de pantalla a un directorio adecuado o realizar otras operaciones según sea necesario
    const destinationPath = path.join(__dirname, 'public/screenshotssala1', screenshot.originalname);

    fs.rename(screenshot.path, destinationPath, (err) => {
      if (err) {
        return res.status(500).send('Error al guardar la captura de pantalla.');
      }

      // Obtener el último mensaje del array mensajesIndex10
      const lastMessage = MensajeIndexS3[MensajeIndexS3.length - 1];

      // Agregar un objeto al array mensajesIndex10 con los valores de from, name y body
      MensajeIndexS3.push({
        from: lastMessage.from,
        name: lastMessage.name,
        body: `https://garantia-production.up.railway.app//screenshotssala1/${screenshot.originalname}`
      });

      // Guardar la información en un archivo JSON en la carpeta historial con el nombre de from
      const historialPath = path.join(__dirname, 'sala3', `${lastMessage.from}.json`);
      const jsonData = JSON.stringify(MensajeIndexS3, null, 2);

      fs.writeFile(historialPath, jsonData, (err) => {
        if (err) {
          return res.status(500).send('Error al guardar la información en el historial.');
        }

        // Actualizar la URL de la última captura de pantalla
        lastScreenshotUrls3 = `https://garantia-production.up.railway.app//screenshotssala1/${screenshot.originalname}`;

        function obtenerFromDeMensajes(mensajes) {
          // Tomar el 'from' del primer objeto del array (si existe)
          return mensajes.length > 0 ? mensajes[0].from : null;
        }

        function enviarMensaje10(from) {
          if (!lastScreenshotUrls3) {
            console.error('Error: lastScreenshotUrl no está definido.');
            // Puedes agregar aquí una acción adicional, como enviar un mensaje de error al cliente
            return;
          }

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'image',
            image: {
              link: lastScreenshotUrls3
            }
          };

          axios.post(`https://graph.facebook.com/v19.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              // console.log('Respuesta enviada a', from, ':', response.data);
            })
            .catch(error => {
              console.error('Error al enviar la respuesta a', from, ':', error.response.data);
            });
        }

        function enviarMensajeSiempre() {
          const from = obtenerFromDeMensajes(MensajeIndexS3);

          if (from) {
            // console.log("Enviando mensaje a:", from);
            enviarMensaje10(from);
          } else {
            console.log("No hay mensajes para enviar.");
          }
        }

        enviarMensajeSiempre();
        // Enviar una respuesta al cliente
        res.status(200).send('Captura de pantalla y datos guardados exitosamente.');
      });
    });
  });







  ///////////////////////////////////////////
  ////////////// CREA LAS CAPTURAS PARA ENVIO SALA 4
  // /////////////////////////



  // Configurar multer para gestionar la carga de archivos
  const storage500s4 = multer.diskStorage({
    destination: 'public/screenshotssala1/',  // Cambiado a 'screenshots/'
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload500s4 = multer({ storage: storage500s4 });

  // Ruta para recibir la captura de pantalla
  app.post('/save-screenshotsmagisterio4', upload500s4.single('screenshot'), (req, res) => {
    const screenshot = req.file;

    if (!screenshot) {
      return res.status(400).send('No se proporcionó ninguna captura de pantalla.');
    }

    // Mover la captura de pantalla a un directorio adecuado o realizar otras operaciones según sea necesario
    const destinationPath = path.join(__dirname, 'public/screenshotssala1', screenshot.originalname);

    fs.rename(screenshot.path, destinationPath, (err) => {
      if (err) {
        return res.status(500).send('Error al guardar la captura de pantalla.');
      }

      // Obtener el último mensaje del array mensajesIndex10
      const lastMessage = MensajeIndexS4[MensajeIndexS4.length - 1];

      // Agregar un objeto al array mensajesIndex10 con los valores de from, name y body
      MensajeIndexS4.push({
        from: lastMessage.from,
        name: lastMessage.name,
        body: `https://garantia-production.up.railway.app//screenshotssala1/${screenshot.originalname}`
      });

      // Guardar la información en un archivo JSON en la carpeta historial con el nombre de from
      const historialPath = path.join(__dirname, 'sala4', `${lastMessage.from}.json`);
      const jsonData = JSON.stringify(MensajeIndexS4, null, 2);

      fs.writeFile(historialPath, jsonData, (err) => {
        if (err) {
          return res.status(500).send('Error al guardar la información en el historial.');
        }

        // Actualizar la URL de la última captura de pantalla
        lastScreenshotUrls4 = `https://garantia-production.up.railway.app//screenshotssala1/${screenshot.originalname}`;

        function obtenerFromDeMensajes(mensajes) {
          // Tomar el 'from' del primer objeto del array (si existe)
          return mensajes.length > 0 ? mensajes[0].from : null;
        }

        function enviarMensaje10(from) {
          if (!lastScreenshotUrls4) {
            console.error('Error: lastScreenshotUrl no está definido.');
            // Puedes agregar aquí una acción adicional, como enviar un mensaje de error al cliente
            return;
          }

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'image',
            image: {
              link: lastScreenshotUrls4
            }
          };

          axios.post(`https://graph.facebook.com/v19.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              // console.log('Respuesta enviada a', from, ':', response.data);
            })
            .catch(error => {
              console.error('Error al enviar la respuesta a', from, ':', error.response.data);
            });
        }

        function enviarMensajeSiempre() {
          const from = obtenerFromDeMensajes(MensajeIndexS4);

          if (from) {
            // console.log("Enviando mensaje a:", from);
            enviarMensaje10(from);
          } else {
            console.log("No hay mensajes para enviar.");
          }
        }

        enviarMensajeSiempre();
        // Enviar una respuesta al cliente
        res.status(200).send('Captura de pantalla y datos guardados exitosamente.');
      });
    });
  });








  ///////////////////////////////////////////
  ////////////// CREA LAS CAPTURAS PARA ENVIO SALA 5
  // /////////////////////////



  // Configurar multer para gestionar la carga de archivos
  const storage500s5 = multer.diskStorage({
    destination: 'public/screenshotssala1/',  // Cambiado a 'screenshots/'
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload500s5 = multer({ storage: storage500s5 });

  // Ruta para recibir la captura de pantalla
  app.post('/save-screenshotsmagisterio5', upload500s5.single('screenshot'), (req, res) => {
    const screenshot = req.file;

    if (!screenshot) {
      return res.status(400).send('No se proporcionó ninguna captura de pantalla.');
    }

    // Mover la captura de pantalla a un directorio adecuado o realizar otras operaciones según sea necesario
    const destinationPath = path.join(__dirname, 'public/screenshotssala1', screenshot.originalname);

    fs.rename(screenshot.path, destinationPath, (err) => {
      if (err) {
        return res.status(500).send('Error al guardar la captura de pantalla.');
      }

      // Obtener el último mensaje del array mensajesIndex10
      const lastMessage = MensajeIndexS5[MensajeIndexS5.length - 1];

      // Agregar un objeto al array mensajesIndex10 con los valores de from, name y body
      MensajeIndexS5.push({
        from: lastMessage.from,
        name: lastMessage.name,
        body: `https://garantia-production.up.railway.app//screenshotssala1/${screenshot.originalname}`
      });

      // Guardar la información en un archivo JSON en la carpeta historial con el nombre de from
      const historialPath = path.join(__dirname, 'sala5', `${lastMessage.from}.json`);
      const jsonData = JSON.stringify(MensajeIndexS5, null, 2);

      fs.writeFile(historialPath, jsonData, (err) => {
        if (err) {
          return res.status(500).send('Error al guardar la información en el historial.');
        }

        // Actualizar la URL de la última captura de pantalla
        lastScreenshotUrls5 = `https://garantia-production.up.railway.app//screenshotssala1/${screenshot.originalname}`;

        function obtenerFromDeMensajes(mensajes) {
          // Tomar el 'from' del primer objeto del array (si existe)
          return mensajes.length > 0 ? mensajes[0].from : null;
        }

        function enviarMensaje10(from) {
          if (!lastScreenshotUrls5) {
            console.error('Error: lastScreenshotUrl no está definido.');
            // Puedes agregar aquí una acción adicional, como enviar un mensaje de error al cliente
            return;
          }

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'image',
            image: {
              link: lastScreenshotUrls5
            }
          };

          axios.post(`https://graph.facebook.com/v19.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              // console.log('Respuesta enviada a', from, ':', response.data);
            })
            .catch(error => {
              console.error('Error al enviar la respuesta a', from, ':', error.response.data);
            });
        }

        function enviarMensajeSiempre() {
          const from = obtenerFromDeMensajes(MensajeIndexS5);

          if (from) {
            // console.log("Enviando mensaje a:", from);
            enviarMensaje10(from);
          } else {
            console.log("No hay mensajes para enviar.");
          }
        }

        enviarMensajeSiempre();
        // Enviar una respuesta al cliente
        res.status(200).send('Captura de pantalla y datos guardados exitosamente.');
      });
    });
  });






  ///////////////////////////////////////////
  ////////////// CREA LAS CAPTURAS PARA ENVIO SALA 6
  // /////////////////////////



  // Configurar multer para gestionar la carga de archivos
  const storage500s6 = multer.diskStorage({
    destination: 'public/screenshotssala1/',  // Cambiado a 'screenshots/'
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload500s6 = multer({ storage: storage500s6 });

  // Ruta para recibir la captura de pantalla
  app.post('/save-screenshotsmagisterio6', upload500s6.single('screenshot'), (req, res) => {
    const screenshot = req.file;

    if (!screenshot) {
      return res.status(400).send('No se proporcionó ninguna captura de pantalla.');
    }

    // Mover la captura de pantalla a un directorio adecuado o realizar otras operaciones según sea necesario
    const destinationPath = path.join(__dirname, 'public/screenshotssala1', screenshot.originalname);

    fs.rename(screenshot.path, destinationPath, (err) => {
      if (err) {
        return res.status(500).send('Error al guardar la captura de pantalla.');
      }

      // Obtener el último mensaje del array mensajesIndex10
      const lastMessage = MensajeIndexS6[MensajeIndexS6.length - 1];

      // Agregar un objeto al array mensajesIndex10 con los valores de from, name y body
      MensajeIndexS6.push({
        from: lastMessage.from,
        name: lastMessage.name,
        body: `https://garantia-production.up.railway.app//screenshotssala1/${screenshot.originalname}`
      });

      // Guardar la información en un archivo JSON en la carpeta historial con el nombre de from
      const historialPath = path.join(__dirname, 'sala6', `${lastMessage.from}.json`);
      const jsonData = JSON.stringify(MensajeIndexS6, null, 2);

      fs.writeFile(historialPath, jsonData, (err) => {
        if (err) {
          return res.status(500).send('Error al guardar la información en el historial.');
        }

        // Actualizar la URL de la última captura de pantalla
        lastScreenshotUrls6 = `https://garantia-production.up.railway.app//screenshotssala1/${screenshot.originalname}`;

        function obtenerFromDeMensajes(mensajes) {
          // Tomar el 'from' del primer objeto del array (si existe)
          return mensajes.length > 0 ? mensajes[0].from : null;
        }

        function enviarMensaje10(from) {
          if (!lastScreenshotUrls6) {
            console.error('Error: lastScreenshotUrl no está definido.');
            // Puedes agregar aquí una acción adicional, como enviar un mensaje de error al cliente
            return;
          }

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'image',
            image: {
              link: lastScreenshotUrls6
            }
          };

          axios.post(`https://graph.facebook.com/v19.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              // console.log('Respuesta enviada a', from, ':', response.data);
            })
            .catch(error => {
              console.error('Error al enviar la respuesta a', from, ':', error.response.data);
            });
        }

        function enviarMensajeSiempre() {
          const from = obtenerFromDeMensajes(MensajeIndexS6);

          if (from) {
            // console.log("Enviando mensaje a:", from);
            enviarMensaje10(from);
          } else {
            console.log("No hay mensajes para enviar.");
          }
        }

        enviarMensajeSiempre();
        // Enviar una respuesta al cliente
        res.status(200).send('Captura de pantalla y datos guardados exitosamente.');
      });
    });
  });




  ///////////////////////////////////////////
  ////////////// CREA LAS CAPTURAS PARA ENVIO SALA 7
  // /////////////////////////



  // Configurar multer para gestionar la carga de archivos
  const storage500s7 = multer.diskStorage({
    destination: 'public/screenshotssala1/',  // Cambiado a 'screenshots/'
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload500s7 = multer({ storage: storage500s7 });

  // Ruta para recibir la captura de pantalla
  app.post('/save-screenshotsmagisterio7', upload500s7.single('screenshot'), (req, res) => {
    const screenshot = req.file;

    if (!screenshot) {
      return res.status(400).send('No se proporcionó ninguna captura de pantalla.');
    }

    // Mover la captura de pantalla a un directorio adecuado o realizar otras operaciones según sea necesario
    const destinationPath = path.join(__dirname, 'public/screenshotssala1', screenshot.originalname);

    fs.rename(screenshot.path, destinationPath, (err) => {
      if (err) {
        return res.status(500).send('Error al guardar la captura de pantalla.');
      }

      // Obtener el último mensaje del array mensajesIndex10
      const lastMessage = MensajeIndexS7[MensajeIndexS7.length - 1];

      // Agregar un objeto al array mensajesIndex10 con los valores de from, name y body
      MensajeIndexS7.push({
        from: lastMessage.from,
        name: lastMessage.name,
        body: `https://garantia-production.up.railway.app//screenshotssala1/${screenshot.originalname}`
      });

      // Guardar la información en un archivo JSON en la carpeta historial con el nombre de from
      const historialPath = path.join(__dirname, 'sala7', `${lastMessage.from}.json`);
      const jsonData = JSON.stringify(MensajeIndexS7, null, 2);

      fs.writeFile(historialPath, jsonData, (err) => {
        if (err) {
          return res.status(500).send('Error al guardar la información en el historial.');
        }

        // Actualizar la URL de la última captura de pantalla
        lastScreenshotUrls7 = `https://garantia-production.up.railway.app//screenshotssala1/${screenshot.originalname}`;

        function obtenerFromDeMensajes(mensajes) {
          // Tomar el 'from' del primer objeto del array (si existe)
          return mensajes.length > 0 ? mensajes[0].from : null;
        }

        function enviarMensaje10(from) {
          if (!lastScreenshotUrls7) {
            console.error('Error: lastScreenshotUrl no está definido.');
            // Puedes agregar aquí una acción adicional, como enviar un mensaje de error al cliente
            return;
          }

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'image',
            image: {
              link: lastScreenshotUrls7
            }
          };

          axios.post(`https://graph.facebook.com/v19.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              // console.log('Respuesta enviada a', from, ':', response.data);
            })
            .catch(error => {
              console.error('Error al enviar la respuesta a', from, ':', error.response.data);
            });
        }

        function enviarMensajeSiempre() {
          const from = obtenerFromDeMensajes(MensajeIndexS7);

          if (from) {
            // console.log("Enviando mensaje a:", from);
            enviarMensaje10(from);
          } else {
            console.log("No hay mensajes para enviar.");
          }
        }

        enviarMensajeSiempre();
        // Enviar una respuesta al cliente
        res.status(200).send('Captura de pantalla y datos guardados exitosamente.');
      });
    });
  });






  ///////////////////////////////////////////
  ////////////// CREA LAS CAPTURAS PARA ENVIO SALA 8
  // /////////////////////////



  // Configurar multer para gestionar la carga de archivos
  const storage500s8 = multer.diskStorage({
    destination: 'public/screenshotssala1/',  // Cambiado a 'screenshots/'
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload500s8 = multer({ storage: storage500s8 });

  // Ruta para recibir la captura de pantalla
  app.post('/save-screenshotsmagisterio8', upload500s8.single('screenshot'), (req, res) => {
    const screenshot = req.file;

    if (!screenshot) {
      return res.status(400).send('No se proporcionó ninguna captura de pantalla.');
    }

    // Mover la captura de pantalla a un directorio adecuado o realizar otras operaciones según sea necesario
    const destinationPath = path.join(__dirname, 'public/screenshotssala1', screenshot.originalname);

    fs.rename(screenshot.path, destinationPath, (err) => {
      if (err) {
        return res.status(500).send('Error al guardar la captura de pantalla.');
      }

      // Obtener el último mensaje del array mensajesIndex10
      const lastMessage = MensajeIndexS8[MensajeIndexS8.length - 1];

      // Agregar un objeto al array mensajesIndex10 con los valores de from, name y body
      MensajeIndexS8.push({
        from: lastMessage.from,
        name: lastMessage.name,
        body: `https://garantia-production.up.railway.app//screenshotssala1/${screenshot.originalname}`
      });

      // Guardar la información en un archivo JSON en la carpeta historial con el nombre de from
      const historialPath = path.join(__dirname, 'sala8', `${lastMessage.from}.json`);
      const jsonData = JSON.stringify(MensajeIndexS8, null, 2);

      fs.writeFile(historialPath, jsonData, (err) => {
        if (err) {
          return res.status(500).send('Error al guardar la información en el historial.');
        }

        // Actualizar la URL de la última captura de pantalla
        lastScreenshotUrls8 = `https://garantia-production.up.railway.app//screenshotssala1/${screenshot.originalname}`;

        function obtenerFromDeMensajes(mensajes) {
          // Tomar el 'from' del primer objeto del array (si existe)
          return mensajes.length > 0 ? mensajes[0].from : null;
        }

        function enviarMensaje10(from) {
          if (!lastScreenshotUrls8) {
            console.error('Error: lastScreenshotUrl no está definido.');
            // Puedes agregar aquí una acción adicional, como enviar un mensaje de error al cliente
            return;
          }

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'image',
            image: {
              link: lastScreenshotUrls8
            }
          };

          axios.post(`https://graph.facebook.com/v19.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              // console.log('Respuesta enviada a', from, ':', response.data);
            })
            .catch(error => {
              console.error('Error al enviar la respuesta a', from, ':', error.response.data);
            });
        }

        function enviarMensajeSiempre() {
          const from = obtenerFromDeMensajes(MensajeIndexS8);

          if (from) {
            // console.log("Enviando mensaje a:", from);
            enviarMensaje10(from);
          } else {
            console.log("No hay mensajes para enviar.");
          }
        }

        enviarMensajeSiempre();
        // Enviar una respuesta al cliente
        res.status(200).send('Captura de pantalla y datos guardados exitosamente.');
      });
    });
  });



  ///////////////////////////////////////////
  ////////////// CREA LAS CAPTURAS PARA ENVIO SALA 9
  // /////////////////////////



  // Configurar multer para gestionar la carga de archivos
  const storage500s9 = multer.diskStorage({
    destination: 'public/screenshotssala1/',  // Cambiado a 'screenshots/'
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload500s9 = multer({ storage: storage500s9 });

  // Ruta para recibir la captura de pantalla
  app.post('/save-screenshotsmagisterio9', upload500s9.single('screenshot'), (req, res) => {
    const screenshot = req.file;

    if (!screenshot) {
      return res.status(400).send('No se proporcionó ninguna captura de pantalla.');
    }

    // Mover la captura de pantalla a un directorio adecuado o realizar otras operaciones según sea necesario
    const destinationPath = path.join(__dirname, 'public/screenshotssala1', screenshot.originalname);

    fs.rename(screenshot.path, destinationPath, (err) => {
      if (err) {
        return res.status(500).send('Error al guardar la captura de pantalla.');
      }

      // Obtener el último mensaje del array mensajesIndex10
      const lastMessage = MensajeIndexS9[MensajeIndexS9.length - 1];

      // Agregar un objeto al array mensajesIndex10 con los valores de from, name y body
      MensajeIndexS9.push({
        from: lastMessage.from,
        name: lastMessage.name,
        body: `https://garantia-production.up.railway.app//screenshotssala1/${screenshot.originalname}`
      });

      // Guardar la información en un archivo JSON en la carpeta historial con el nombre de from
      const historialPath = path.join(__dirname, 'sala9', `${lastMessage.from}.json`);
      const jsonData = JSON.stringify(MensajeIndexS9, null, 2);

      fs.writeFile(historialPath, jsonData, (err) => {
        if (err) {
          return res.status(500).send('Error al guardar la información en el historial.');
        }

        // Actualizar la URL de la última captura de pantalla
        lastScreenshotUrls9 = `https://garantia-production.up.railway.app//screenshotssala1/${screenshot.originalname}`;

        function obtenerFromDeMensajes(mensajes) {
          // Tomar el 'from' del primer objeto del array (si existe)
          return mensajes.length > 0 ? mensajes[0].from : null;
        }

        function enviarMensaje10(from) {
          if (!lastScreenshotUrls9) {
            console.error('Error: lastScreenshotUrl no está definido.');
            // Puedes agregar aquí una acción adicional, como enviar un mensaje de error al cliente
            return;
          }

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'image',
            image: {
              link: lastScreenshotUrls9
            }
          };

          axios.post(`https://graph.facebook.com/v19.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              // console.log('Respuesta enviada a', from, ':', response.data);
            })
            .catch(error => {
              console.error('Error al enviar la respuesta a', from, ':', error.response.data);
            });
        }

        function enviarMensajeSiempre() {
          const from = obtenerFromDeMensajes(MensajeIndexS9);

          if (from) {
            // console.log("Enviando mensaje a:", from);
            enviarMensaje10(from);
          } else {
            console.log("No hay mensajes para enviar.");
          }
        }

        enviarMensajeSiempre();
        // Enviar una respuesta al cliente
        res.status(200).send('Captura de pantalla y datos guardados exitosamente.');
      });
    });
  });





  ///////////////////////////////////////////
  ////////////// CREA LAS CAPTURAS PARA ENVIO SALA 10
  // /////////////////////////



  // Configurar multer para gestionar la carga de archivos
  const storage500s10 = multer.diskStorage({
    destination: 'public/screenshotssala1/',  // Cambiado a 'screenshots/'
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload500s10 = multer({ storage: storage500s10 });

  // Ruta para recibir la captura de pantalla
  app.post('/save-screenshotsmagisterio10', upload500s10.single('screenshot'), (req, res) => {
    const screenshot = req.file;

    if (!screenshot) {
      return res.status(400).send('No se proporcionó ninguna captura de pantalla.');
    }

    // Mover la captura de pantalla a un directorio adecuado o realizar otras operaciones según sea necesario
    const destinationPath = path.join(__dirname, 'public/screenshotssala1', screenshot.originalname);

    fs.rename(screenshot.path, destinationPath, (err) => {
      if (err) {
        return res.status(500).send('Error al guardar la captura de pantalla.');
      }

      // Obtener el último mensaje del array mensajesIndex10
      const lastMessage = MensajeIndexS10[MensajeIndexS10.length - 1];

      // Agregar un objeto al array mensajesIndex10 con los valores de from, name y body
      MensajeIndexS10.push({
        from: lastMessage.from,
        name: lastMessage.name,
        body: `https://garantia-production.up.railway.app//screenshotssala1/${screenshot.originalname}`
      });

      // Guardar la información en un archivo JSON en la carpeta historial con el nombre de from
      const historialPath = path.join(__dirname, 'sala10', `${lastMessage.from}.json`);
      const jsonData = JSON.stringify(MensajeIndexS10, null, 2);

      fs.writeFile(historialPath, jsonData, (err) => {
        if (err) {
          return res.status(500).send('Error al guardar la información en el historial.');
        }

        // Actualizar la URL de la última captura de pantalla
        lastScreenshotUrls10 = `https://garantia-production.up.railway.app//screenshotssala1/${screenshot.originalname}`;

        function obtenerFromDeMensajes(mensajes) {
          // Tomar el 'from' del primer objeto del array (si existe)
          return mensajes.length > 0 ? mensajes[0].from : null;
        }

        function enviarMensaje10(from) {  //este si es 10
          if (!lastScreenshotUrls10) {
            console.error('Error: lastScreenshotUrl no está definido.');
            // Puedes agregar aquí una acción adicional, como enviar un mensaje de error al cliente
            return;
          }

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'image',
            image: {
              link: lastScreenshotUrls10
            }
          };

          axios.post(`https://graph.facebook.com/v19.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              // console.log('Respuesta enviada a', from, ':', response.data);
            })
            .catch(error => {
              console.error('Error al enviar la respuesta a', from, ':', error.response.data);
            });
        }

        function enviarMensajeSiempre() {
          const from = obtenerFromDeMensajes(MensajeIndexS10);

          if (from) {
            // console.log("Enviando mensaje a:", from);
            enviarMensaje10(from); //este si es 10
          } else {
            console.log("No hay mensajes para enviar.");
          }
        }

        enviarMensajeSiempre();
        // Enviar una respuesta al cliente
        res.status(200).send('Captura de pantalla y datos guardados exitosamente.');
      });
    });
  });




  ///////////////////////////////////////////
  ////////////// CREA LAS CAPTURAS PARA ENVIO SALA 11
  // /////////////////////////


  // Configurar multer para gestionar la carga de archivos
  const storage500s11 = multer.diskStorage({
    destination: 'public/screenshotssala1/',  // Cambiado a 'screenshots/'
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload500s11 = multer({ storage: storage500s11 });

  // Ruta para recibir la captura de pantalla
  app.post('/save-screenshotsmagisterio11', upload500s11.single('screenshot'), (req, res) => {
    const screenshot = req.file;

    if (!screenshot) {
      return res.status(400).send('No se proporcionó ninguna captura de pantalla.');
    }

    // Mover la captura de pantalla a un directorio adecuado o realizar otras operaciones según sea necesario
    const destinationPath = path.join(__dirname, 'public/screenshotssala1', screenshot.originalname);

    fs.rename(screenshot.path, destinationPath, (err) => {
      if (err) {
        return res.status(500).send('Error al guardar la captura de pantalla.');
      }

      // Obtener el último mensaje del array mensajesIndex10
      const lastMessage = MensajeIndexS11[MensajeIndexS11.length - 1];

      // Agregar un objeto al array mensajesIndex10 con los valores de from, name y body
      MensajeIndexS11.push({
        from: lastMessage.from,
        name: lastMessage.name,
        body: `https://garantia-production.up.railway.app//screenshotssala1/${screenshot.originalname}`
      });

      // Guardar la información en un archivo JSON en la carpeta historial con el nombre de from
      const historialPath = path.join(__dirname, 'sala11', `${lastMessage.from}.json`);
      const jsonData = JSON.stringify(MensajeIndexS11, null, 2);

      fs.writeFile(historialPath, jsonData, (err) => {
        if (err) {
          return res.status(500).send('Error al guardar la información en el historial.');
        }

        // Actualizar la URL de la última captura de pantalla
        lastScreenshotUrls11 = `https://garantia-production.up.railway.app//screenshotssala1/${screenshot.originalname}`;

        function obtenerFromDeMensajes(mensajes) {
          // Tomar el 'from' del primer objeto del array (si existe)
          return mensajes.length > 0 ? mensajes[0].from : null;
        }

        function enviarMensaje10(from) {  //este si es 10
          if (!lastScreenshotUrls11) {
            console.error('Error: lastScreenshotUrl no está definido.');
            // Puedes agregar aquí una acción adicional, como enviar un mensaje de error al cliente
            return;
          }

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'image',
            image: {
              link: lastScreenshotUrls11
            }
          };

          axios.post(`https://graph.facebook.com/v19.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              // console.log('Respuesta enviada a', from, ':', response.data);
            })
            .catch(error => {
              console.error('Error al enviar la respuesta a', from, ':', error.response.data);
            });
        }

        function enviarMensajeSiempre() {
          const from = obtenerFromDeMensajes(MensajeIndexS11);

          if (from) {
            // console.log("Enviando mensaje a:", from);
            enviarMensaje10(from); //este si es 10
          } else {
            console.log("No hay mensajes para enviar.");
          }
        }

        enviarMensajeSiempre();
        // Enviar una respuesta al cliente
        res.status(200).send('Captura de pantalla y datos guardados exitosamente.');
      });
    });
  });








  ///////////////////////////////////////////
  ////////////// CREA EL CODIGO PARA ENVIAR PDF PARA ENVIO SALA 1
  // /////////////////////////


  const storage500sPDF1 = multer.diskStorage({
    destination: 'public/pdf/',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload500sPDF1 = multer({ storage: storage500sPDF1 });

  // Ruta para recibir el archivo PDF
  app.post('/save-PDF1', upload500sPDF1.single('pdf'), (req, res) => {
    const pdf = req.file;

    if (!pdf) {
      return res.status(400).send('No se cargó el PDF.');
    }

    // Mover el archivo PDF a un directorio adecuado o realizar otras operaciones según sea necesario
    const destinationPath = path.join(__dirname, 'public/pdf', pdf.originalname);

    fs.rename(pdf.path, destinationPath, (err) => {
      if (err) {
        return res.status(500).send('Error al guardar el PDF.');
      }

      // Obtener el último mensaje del array MensajeIndex
      const lastMessage = MensajeIndex[MensajeIndex.length - 1];

      // Agregar un objeto al array MensajeIndex con los valores de from, name y body
      MensajeIndex.push({
        from: lastMessage.from,
        name: lastMessage.name,
        body: `https://garantia-production.up.railway.app//pdf/${pdf.originalname}`
      });

      // Guardar la información en un archivo JSON en la carpeta historial con el nombre de from
      const historialPath = path.join(__dirname, 'sala1', `${lastMessage.from}.json`);
      const jsonData = JSON.stringify(MensajeIndex, null, 2);

      fs.writeFile(historialPath, jsonData, (err) => {
        if (err) {
          return res.status(500).send('Error al guardar la información en el historial.');
        }

        // Actualizar la URL del último PDF
        lastScreenshotUrlpdf1 = `https://garantia-production.up.railway.app//pdf/${pdf.originalname}`;

        function obtenerFromDeMensajes(mensajes) {
          // Tomar el 'from' del primer objeto del array (si existe)
          return mensajes.length > 0 ? mensajes[0].from : null;
        }

        function enviarMensaje10(from) {
          if (!lastScreenshotUrlpdf1) {
            console.error('Error: lastScreenshotUrlpdf1 no está definido.');
            return;
          }

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'document',
            document: {
              link: lastScreenshotUrlpdf1,
              caption: 'Por favor descargar y leer las indicaciones en este PDF.',
              filename: lastScreenshotUrlpdf1,
            },
          };

          axios.post(`https://graph.facebook.com/v19.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              console.log('Respuesta enviada a', from, ':', response.data);
            })
            .catch(error => {
              console.error('Error al enviar la respuesta a', from, ':', error.response.data);
            });
        }

        function enviarMensajeSiempre() {
          const from = obtenerFromDeMensajes(MensajeIndex);

          if (from) {
            console.log("Enviando mensaje a:", from);
            enviarMensaje10(from);
          } else {
            console.log("No hay mensajes para enviar.");
          }
        }

        enviarMensajeSiempre();
        res.status(200).send('PDF y datos guardados exitosamente.');
      });
    });
  });







  ///////////////////////////////////////////
  ////////////// CREA EL CODIGO PARA ENVIAR PDF PARA ENVIO SALA 2
  // /////////////////////////


  const storage500sPDF2 = multer.diskStorage({
    destination: 'public/pdf/',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload500sPDF2 = multer({ storage: storage500sPDF2 });

  // Ruta para recibir el archivo PDF
  app.post('/save-PDF2', upload500sPDF2.single('pdf'), (req, res) => {
    const pdf = req.file;

    if (!pdf) {
      return res.status(400).send('No se cargó el PDF.');
    }

    // Mover el archivo PDF a un directorio adecuado o realizar otras operaciones según sea necesario
    const destinationPath = path.join(__dirname, 'public/pdf', pdf.originalname);

    fs.rename(pdf.path, destinationPath, (err) => {
      if (err) {
        return res.status(500).send('Error al guardar el PDF.');
      }

      // Obtener el último mensaje del array MensajeIndex
      const lastMessage = MensajeIndexS2[MensajeIndexS2.length - 1];

      // Agregar un objeto al array MensajeIndex con los valores de from, name y body
      MensajeIndexS2.push({
        from: lastMessage.from,
        name: lastMessage.name,
        body: `https://garantia-production.up.railway.app//pdf/${pdf.originalname}`
      });

      // Guardar la información en un archivo JSON en la carpeta historial con el nombre de from
      const historialPath = path.join(__dirname, 'sala2', `${lastMessage.from}.json`);
      const jsonData = JSON.stringify(MensajeIndexS2, null, 2);

      fs.writeFile(historialPath, jsonData, (err) => {
        if (err) {
          return res.status(500).send('Error al guardar la información en el historial.');
        }

        // Actualizar la URL del último PDF
        lastScreenshotUrlpdf2 = `https://garantia-production.up.railway.app//pdf/${pdf.originalname}`;

        function obtenerFromDeMensajes(mensajes) {
          // Tomar el 'from' del primer objeto del array (si existe)
          return mensajes.length > 0 ? mensajes[0].from : null;
        }

        function enviarMensaje10(from) {
          if (!lastScreenshotUrlpdf2) {
            console.error('Error: lastScreenshotUrlpdf1 no está definido.');
            return;
          }

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'document',
            document: {
              link: lastScreenshotUrlpdf2,
              caption: 'Por favor descargar y leer las indicaciones en este PDF.',
              filename: lastScreenshotUrlpdf2,
            },
          };

          axios.post(`https://graph.facebook.com/v19.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              console.log('Respuesta enviada a', from, ':', response.data);
            })
            .catch(error => {
              console.error('Error al enviar la respuesta a', from, ':', error.response.data);
            });
        }

        function enviarMensajeSiempre() {
          const from = obtenerFromDeMensajes(MensajeIndexS2);

          if (from) {
            console.log("Enviando mensaje a:", from);
            enviarMensaje10(from);
          } else {
            console.log("No hay mensajes para enviar.");
          }
        }

        enviarMensajeSiempre();
        res.status(200).send('PDF y datos guardados exitosamente.');
      });
    });
  });




  ///////////////////////////////////////////
  ////////////// CREA EL CODIGO PARA ENVIAR PDF PARA ENVIO SALA 3
  // /////////////////////////


  const storage500sPDF3 = multer.diskStorage({
    destination: 'public/pdf/',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload500sPDF3 = multer({ storage: storage500sPDF3 });

  // Ruta para recibir el archivo PDF
  app.post('/save-PDF3', upload500sPDF3.single('pdf'), (req, res) => {
    const pdf = req.file;

    if (!pdf) {
      return res.status(400).send('No se cargó el PDF.');
    }

    // Mover el archivo PDF a un directorio adecuado o realizar otras operaciones según sea necesario
    const destinationPath = path.join(__dirname, 'public/pdf', pdf.originalname);

    fs.rename(pdf.path, destinationPath, (err) => {
      if (err) {
        return res.status(500).send('Error al guardar el PDF.');
      }

      // Obtener el último mensaje del array MensajeIndex
      const lastMessage = MensajeIndexS3[MensajeIndexS3.length - 1];

      // Agregar un objeto al array MensajeIndex con los valores de from, name y body
      MensajeIndexS3.push({
        from: lastMessage.from,
        name: lastMessage.name,
        body: `https://garantia-production.up.railway.app//pdf/${pdf.originalname}`
      });

      // Guardar la información en un archivo JSON en la carpeta historial con el nombre de from
      const historialPath = path.join(__dirname, 'sala3', `${lastMessage.from}.json`);
      const jsonData = JSON.stringify(MensajeIndexS3, null, 2);

      fs.writeFile(historialPath, jsonData, (err) => {
        if (err) {
          return res.status(500).send('Error al guardar la información en el historial.');
        }

        // Actualizar la URL del último PDF
        lastScreenshotUrlpdf3 = `https://garantia-production.up.railway.app//pdf/${pdf.originalname}`;

        function obtenerFromDeMensajes(mensajes) {
          // Tomar el 'from' del primer objeto del array (si existe)
          return mensajes.length > 0 ? mensajes[0].from : null;
        }

        function enviarMensaje10(from) {
          if (!lastScreenshotUrlpdf3) {
            console.error('Error: lastScreenshotUrlpdf1 no está definido.');
            return;
          }

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'document',
            document: {
              link: lastScreenshotUrlpdf3,
              caption: 'Por favor descargar y leer las indicaciones en este PDF.',
              filename: lastScreenshotUrlpdf3,
            },
          };

          axios.post(`https://graph.facebook.com/v19.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              console.log('Respuesta enviada a', from, ':', response.data);
            })
            .catch(error => {
              console.error('Error al enviar la respuesta a', from, ':', error.response.data);
            });
        }

        function enviarMensajeSiempre() {
          const from = obtenerFromDeMensajes(MensajeIndexS3);

          if (from) {
            console.log("Enviando mensaje a:", from);
            enviarMensaje10(from);
          } else {
            console.log("No hay mensajes para enviar.");
          }
        }

        enviarMensajeSiempre();
        res.status(200).send('PDF y datos guardados exitosamente.');
      });
    });
  });




  ///////////////////////////////////////////
  ////////////// CREA EL CODIGO PARA ENVIAR PDF PARA ENVIO SALA 4
  // /////////////////////////


  const storage500sPDF4 = multer.diskStorage({
    destination: 'public/pdf/',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload500sPDF4 = multer({ storage: storage500sPDF4 });

  // Ruta para recibir el archivo PDF
  app.post('/save-PDF4', upload500sPDF4.single('pdf'), (req, res) => {
    const pdf = req.file;

    if (!pdf) {
      return res.status(400).send('No se cargó el PDF.');
    }

    // Mover el archivo PDF a un directorio adecuado o realizar otras operaciones según sea necesario
    const destinationPath = path.join(__dirname, 'public/pdf', pdf.originalname);

    fs.rename(pdf.path, destinationPath, (err) => {
      if (err) {
        return res.status(500).send('Error al guardar el PDF.');
      }

      // Obtener el último mensaje del array MensajeIndex
      const lastMessage = MensajeIndexS4[MensajeIndexS4.length - 1];

      // Agregar un objeto al array MensajeIndex con los valores de from, name y body
      MensajeIndexS4.push({
        from: lastMessage.from,
        name: lastMessage.name,
        body: `https://garantia-production.up.railway.app//pdf/${pdf.originalname}`
      });

      // Guardar la información en un archivo JSON en la carpeta historial con el nombre de from
      const historialPath = path.join(__dirname, 'sala4', `${lastMessage.from}.json`);
      const jsonData = JSON.stringify(MensajeIndexS4, null, 2);

      fs.writeFile(historialPath, jsonData, (err) => {
        if (err) {
          return res.status(500).send('Error al guardar la información en el historial.');
        }

        // Actualizar la URL del último PDF
        lastScreenshotUrlpdf4 = `https://garantia-production.up.railway.app//pdf/${pdf.originalname}`;

        function obtenerFromDeMensajes(mensajes) {
          // Tomar el 'from' del primer objeto del array (si existe)
          return mensajes.length > 0 ? mensajes[0].from : null;
        }

        function enviarMensaje10(from) {
          if (!lastScreenshotUrlpdf4) {
            console.error('Error: lastScreenshotUrlpdf1 no está definido.');
            return;
          }

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'document',
            document: {
              link: lastScreenshotUrlpdf4,
              caption: 'Por favor descargar y leer las indicaciones en este PDF.',
              filename: lastScreenshotUrlpdf4,
            },
          };

          axios.post(`https://graph.facebook.com/v19.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              console.log('Respuesta enviada a', from, ':', response.data);
            })
            .catch(error => {
              console.error('Error al enviar la respuesta a', from, ':', error.response.data);
            });
        }

        function enviarMensajeSiempre() {
          const from = obtenerFromDeMensajes(MensajeIndexS4);

          if (from) {
            console.log("Enviando mensaje a:", from);
            enviarMensaje10(from);
          } else {
            console.log("No hay mensajes para enviar.");
          }
        }

        enviarMensajeSiempre();
        res.status(200).send('PDF y datos guardados exitosamente.');
      });
    });
  });


  ///////////////////////////////////////////
  ////////////// CREA EL CODIGO PARA ENVIAR PDF PARA ENVIO SALA 5
  // /////////////////////////


  const storage500sPDF5 = multer.diskStorage({
    destination: 'public/pdf/',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload500sPDF5 = multer({ storage: storage500sPDF5 });

  // Ruta para recibir el archivo PDF
  app.post('/save-PDF5', upload500sPDF5.single('pdf'), (req, res) => {
    const pdf = req.file;

    if (!pdf) {
      return res.status(400).send('No se cargó el PDF.');
    }

    // Mover el archivo PDF a un directorio adecuado o realizar otras operaciones según sea necesario
    const destinationPath = path.join(__dirname, 'public/pdf', pdf.originalname);

    fs.rename(pdf.path, destinationPath, (err) => {
      if (err) {
        return res.status(500).send('Error al guardar el PDF.');
      }

      // Obtener el último mensaje del array MensajeIndex
      const lastMessage = MensajeIndexS5[MensajeIndexS5.length - 1];

      // Agregar un objeto al array MensajeIndex con los valores de from, name y body
      MensajeIndexS5.push({
        from: lastMessage.from,
        name: lastMessage.name,
        body: `https://garantia-production.up.railway.app//pdf/${pdf.originalname}`
      });

      // Guardar la información en un archivo JSON en la carpeta historial con el nombre de from
      const historialPath = path.join(__dirname, 'sala5', `${lastMessage.from}.json`);
      const jsonData = JSON.stringify(MensajeIndexS5, null, 2);

      fs.writeFile(historialPath, jsonData, (err) => {
        if (err) {
          return res.status(500).send('Error al guardar la información en el historial.');
        }

        // Actualizar la URL del último PDF
        lastScreenshotUrlpdf5 = `https://garantia-production.up.railway.app//pdf/${pdf.originalname}`;

        function obtenerFromDeMensajes(mensajes) {
          // Tomar el 'from' del primer objeto del array (si existe)
          return mensajes.length > 0 ? mensajes[0].from : null;
        }

        function enviarMensaje10(from) {
          if (!lastScreenshotUrlpdf5) {
            console.error('Error: lastScreenshotUrlpdf1 no está definido.');
            return;
          }

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'document',
            document: {
              link: lastScreenshotUrlpdf5,
              caption: 'Por favor descargar y leer las indicaciones en este PDF.',
              filename: lastScreenshotUrlpdf5,
            },
          };

          axios.post(`https://graph.facebook.com/v19.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              console.log('Respuesta enviada a', from, ':', response.data);
            })
            .catch(error => {
              console.error('Error al enviar la respuesta a', from, ':', error.response.data);
            });
        }

        function enviarMensajeSiempre() {
          const from = obtenerFromDeMensajes(MensajeIndexS5);

          if (from) {
            console.log("Enviando mensaje a:", from);
            enviarMensaje10(from);
          } else {
            console.log("No hay mensajes para enviar.");
          }
        }

        enviarMensajeSiempre();
        res.status(200).send('PDF y datos guardados exitosamente.');
      });
    });
  });





  ///////////////////////////////////////////
  ////////////// CREA EL CODIGO PARA ENVIAR PDF PARA ENVIO SALA 6
  // /////////////////////////


  const storage500sPDF6 = multer.diskStorage({
    destination: 'public/pdf/',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload500sPDF6 = multer({ storage: storage500sPDF6 });

  // Ruta para recibir el archivo PDF
  app.post('/save-PDF6', upload500sPDF6.single('pdf'), (req, res) => {
    const pdf = req.file;

    if (!pdf) {
      return res.status(400).send('No se cargó el PDF.');
    }

    // Mover el archivo PDF a un directorio adecuado o realizar otras operaciones según sea necesario
    const destinationPath = path.join(__dirname, 'public/pdf', pdf.originalname);

    fs.rename(pdf.path, destinationPath, (err) => {
      if (err) {
        return res.status(500).send('Error al guardar el PDF.');
      }

      // Obtener el último mensaje del array MensajeIndex
      const lastMessage = MensajeIndexS6[MensajeIndexS6.length - 1];

      // Agregar un objeto al array MensajeIndex con los valores de from, name y body
      MensajeIndexS6.push({
        from: lastMessage.from,
        name: lastMessage.name,
        body: `https://garantia-production.up.railway.app//pdf/${pdf.originalname}`
      });

      // Guardar la información en un archivo JSON en la carpeta historial con el nombre de from
      const historialPath = path.join(__dirname, 'sala6', `${lastMessage.from}.json`);
      const jsonData = JSON.stringify(MensajeIndexS6, null, 2);

      fs.writeFile(historialPath, jsonData, (err) => {
        if (err) {
          return res.status(500).send('Error al guardar la información en el historial.');
        }

        // Actualizar la URL del último PDF
        lastScreenshotUrlpdf6 = `https://garantia-production.up.railway.app//pdf/${pdf.originalname}`;

        function obtenerFromDeMensajes(mensajes) {
          // Tomar el 'from' del primer objeto del array (si existe)
          return mensajes.length > 0 ? mensajes[0].from : null;
        }

        function enviarMensaje10(from) {
          if (!lastScreenshotUrlpdf6) {
            console.error('Error: lastScreenshotUrlpdf1 no está definido.');
            return;
          }

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'document',
            document: {
              link: lastScreenshotUrlpdf6,
              caption: 'Por favor descargar y leer las indicaciones en este PDF.',
              filename: lastScreenshotUrlpdf6,
            },
          };

          axios.post(`https://graph.facebook.com/v19.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              console.log('Respuesta enviada a', from, ':', response.data);
            })
            .catch(error => {
              console.error('Error al enviar la respuesta a', from, ':', error.response.data);
            });
        }

        function enviarMensajeSiempre() {
          const from = obtenerFromDeMensajes(MensajeIndexS6);

          if (from) {
            console.log("Enviando mensaje a:", from);
            enviarMensaje10(from);
          } else {
            console.log("No hay mensajes para enviar.");
          }
        }

        enviarMensajeSiempre();
        res.status(200).send('PDF y datos guardados exitosamente.');
      });
    });
  });




  ///////////////////////////////////////////
  ////////////// CREA EL CODIGO PARA ENVIAR PDF PARA ENVIO SALA 7
  // /////////////////////////


  const storage500sPDF7 = multer.diskStorage({
    destination: 'public/pdf/',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload500sPDF7 = multer({ storage: storage500sPDF7 });

  // Ruta para recibir el archivo PDF
  app.post('/save-PDF7', upload500sPDF7.single('pdf'), (req, res) => {
    const pdf = req.file;

    if (!pdf) {
      return res.status(400).send('No se cargó el PDF.');
    }

    // Mover el archivo PDF a un directorio adecuado o realizar otras operaciones según sea necesario
    const destinationPath = path.join(__dirname, 'public/pdf', pdf.originalname);

    fs.rename(pdf.path, destinationPath, (err) => {
      if (err) {
        return res.status(500).send('Error al guardar el PDF.');
      }

      // Obtener el último mensaje del array MensajeIndex
      const lastMessage = MensajeIndexS7[MensajeIndexS7.length - 1];

      // Agregar un objeto al array MensajeIndex con los valores de from, name y body
      MensajeIndexS7.push({
        from: lastMessage.from,
        name: lastMessage.name,
        body: `https://garantia-production.up.railway.app//pdf/${pdf.originalname}`
      });

      // Guardar la información en un archivo JSON en la carpeta historial con el nombre de from
      const historialPath = path.join(__dirname, 'sala7', `${lastMessage.from}.json`);
      const jsonData = JSON.stringify(MensajeIndexS7, null, 2);

      fs.writeFile(historialPath, jsonData, (err) => {
        if (err) {
          return res.status(500).send('Error al guardar la información en el historial.');
        }

        // Actualizar la URL del último PDF
        lastScreenshotUrlpdf7 = `https://garantia-production.up.railway.app//pdf/${pdf.originalname}`;

        function obtenerFromDeMensajes(mensajes) {
          // Tomar el 'from' del primer objeto del array (si existe)
          return mensajes.length > 0 ? mensajes[0].from : null;
        }

        function enviarMensaje10(from) {
          if (!lastScreenshotUrlpdf7) {
            console.error('Error: lastScreenshotUrlpdf1 no está definido.');
            return;
          }

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'document',
            document: {
              link: lastScreenshotUrlpdf7,
              caption: 'Por favor descargar y leer las indicaciones en este PDF.',
              filename: lastScreenshotUrlpdf7,
            },
          };

          axios.post(`https://graph.facebook.com/v19.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              console.log('Respuesta enviada a', from, ':', response.data);
            })
            .catch(error => {
              console.error('Error al enviar la respuesta a', from, ':', error.response.data);
            });
        }

        function enviarMensajeSiempre() {
          const from = obtenerFromDeMensajes(MensajeIndexS7);

          if (from) {
            console.log("Enviando mensaje a:", from);
            enviarMensaje10(from);
          } else {
            console.log("No hay mensajes para enviar.");
          }
        }

        enviarMensajeSiempre();
        res.status(200).send('PDF y datos guardados exitosamente.');
      });
    });
  });



  ///////////////////////////////////////////
  ////////////// CREA EL CODIGO PARA ENVIAR PDF PARA ENVIO SALA 8
  // /////////////////////////


  const storage500sPDF8 = multer.diskStorage({
    destination: 'public/pdf/',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload500sPDF8 = multer({ storage: storage500sPDF8 });

  // Ruta para recibir el archivo PDF
  app.post('/save-PDF8', upload500sPDF8.single('pdf'), (req, res) => {
    const pdf = req.file;

    if (!pdf) {
      return res.status(400).send('No se cargó el PDF.');
    }

    // Mover el archivo PDF a un directorio adecuado o realizar otras operaciones según sea necesario
    const destinationPath = path.join(__dirname, 'public/pdf', pdf.originalname);

    fs.rename(pdf.path, destinationPath, (err) => {
      if (err) {
        return res.status(500).send('Error al guardar el PDF.');
      }

      // Obtener el último mensaje del array MensajeIndex
      const lastMessage = MensajeIndexS8[MensajeIndexS8.length - 1];

      // Agregar un objeto al array MensajeIndex con los valores de from, name y body
      MensajeIndexS8.push({
        from: lastMessage.from,
        name: lastMessage.name,
        body: `https://garantia-production.up.railway.app//pdf/${pdf.originalname}`
      });

      // Guardar la información en un archivo JSON en la carpeta historial con el nombre de from
      const historialPath = path.join(__dirname, 'sala8', `${lastMessage.from}.json`);
      const jsonData = JSON.stringify(MensajeIndexS8, null, 2);

      fs.writeFile(historialPath, jsonData, (err) => {
        if (err) {
          return res.status(500).send('Error al guardar la información en el historial.');
        }

        // Actualizar la URL del último PDF
        lastScreenshotUrlpdf8 = `https://garantia-production.up.railway.app//pdf/${pdf.originalname}`;

        function obtenerFromDeMensajes(mensajes) {
          // Tomar el 'from' del primer objeto del array (si existe)
          return mensajes.length > 0 ? mensajes[0].from : null;
        }

        function enviarMensaje10(from) {
          if (!lastScreenshotUrlpdf8) {
            console.error('Error: lastScreenshotUrlpdf1 no está definido.');
            return;
          }

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'document',
            document: {
              link: lastScreenshotUrlpdf8,
              caption: 'Por favor descargar y leer las indicaciones en este PDF.',
              filename: lastScreenshotUrlpdf8,
            },
          };

          axios.post(`https://graph.facebook.com/v19.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              console.log('Respuesta enviada a', from, ':', response.data);
            })
            .catch(error => {
              console.error('Error al enviar la respuesta a', from, ':', error.response.data);
            });
        }

        function enviarMensajeSiempre() {
          const from = obtenerFromDeMensajes(MensajeIndexS8);

          if (from) {
            console.log("Enviando mensaje a:", from);
            enviarMensaje10(from);
          } else {
            console.log("No hay mensajes para enviar.");
          }
        }

        enviarMensajeSiempre();
        res.status(200).send('PDF y datos guardados exitosamente.');
      });
    });
  });



  ///////////////////////////////////////////
  ////////////// CREA EL CODIGO PARA ENVIAR PDF PARA ENVIO SALA 9
  // /////////////////////////


  const storage500sPDF9 = multer.diskStorage({
    destination: 'public/pdf/',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload500sPDF9 = multer({ storage: storage500sPDF9 });

  // Ruta para recibir el archivo PDF
  app.post('/save-PDF9', upload500sPDF9.single('pdf'), (req, res) => {
    const pdf = req.file;

    if (!pdf) {
      return res.status(400).send('No se cargó el PDF.');
    }

    // Mover el archivo PDF a un directorio adecuado o realizar otras operaciones según sea necesario
    const destinationPath = path.join(__dirname, 'public/pdf', pdf.originalname);

    fs.rename(pdf.path, destinationPath, (err) => {
      if (err) {
        return res.status(500).send('Error al guardar el PDF.');
      }

      // Obtener el último mensaje del array MensajeIndex
      const lastMessage = MensajeIndexS9[MensajeIndexS9.length - 1];

      // Agregar un objeto al array MensajeIndex con los valores de from, name y body
      MensajeIndexS9.push({
        from: lastMessage.from,
        name: lastMessage.name,
        body: `https://garantia-production.up.railway.app//pdf/${pdf.originalname}`
      });

      // Guardar la información en un archivo JSON en la carpeta historial con el nombre de from
      const historialPath = path.join(__dirname, 'sala9', `${lastMessage.from}.json`);
      const jsonData = JSON.stringify(MensajeIndexS9, null, 2);

      fs.writeFile(historialPath, jsonData, (err) => {
        if (err) {
          return res.status(500).send('Error al guardar la información en el historial.');
        }

        // Actualizar la URL del último PDF
        lastScreenshotUrlpdf9 = `https://garantia-production.up.railway.app//pdf/${pdf.originalname}`;

        function obtenerFromDeMensajes(mensajes) {
          // Tomar el 'from' del primer objeto del array (si existe)
          return mensajes.length > 0 ? mensajes[0].from : null;
        }

        function enviarMensaje10(from) {
          if (!lastScreenshotUrlpdf9) {
            console.error('Error: lastScreenshotUrlpdf1 no está definido.');
            return;
          }

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'document',
            document: {
              link: lastScreenshotUrlpdf9,
              caption: 'Por favor descargar y leer las indicaciones en este PDF.',
              filename: lastScreenshotUrlpdf9,
            },
          };

          axios.post(`https://graph.facebook.com/v19.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              console.log('Respuesta enviada a', from, ':', response.data);
            })
            .catch(error => {
              console.error('Error al enviar la respuesta a', from, ':', error.response.data);
            });
        }

        function enviarMensajeSiempre() {
          const from = obtenerFromDeMensajes(MensajeIndexS9);

          if (from) {
            console.log("Enviando mensaje a:", from);
            enviarMensaje10(from);
          } else {
            console.log("No hay mensajes para enviar.");
          }
        }

        enviarMensajeSiempre();
        res.status(200).send('PDF y datos guardados exitosamente.');
      });
    });
  });





  ///////////////////////////////////////////
  ////////////// CREA EL CODIGO PARA ENVIAR PDF PARA ENVIO SALA 10
  // /////////////////////////


  const storage500sPDF10 = multer.diskStorage({
    destination: 'public/pdf/',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload500sPDF10 = multer({ storage: storage500sPDF10 });

  // Ruta para recibir el archivo PDF
  app.post('/save-PDF10', upload500sPDF10.single('pdf'), (req, res) => {
    const pdf = req.file;

    if (!pdf) {
      return res.status(400).send('No se cargó el PDF.');
    }

    // Mover el archivo PDF a un directorio adecuado o realizar otras operaciones según sea necesario
    const destinationPath = path.join(__dirname, 'public/pdf', pdf.originalname);

    fs.rename(pdf.path, destinationPath, (err) => {
      if (err) {
        return res.status(500).send('Error al guardar el PDF.');
      }

      // Obtener el último mensaje del array MensajeIndex
      const lastMessage = MensajeIndexS10[MensajeIndexS10.length - 1];

      // Agregar un objeto al array MensajeIndex con los valores de from, name y body
      MensajeIndexS10.push({
        from: lastMessage.from,
        name: lastMessage.name,
        body: `https://garantia-production.up.railway.app//pdf/${pdf.originalname}`
      });

      // Guardar la información en un archivo JSON en la carpeta historial con el nombre de from
      const historialPath = path.join(__dirname, 'sala10', `${lastMessage.from}.json`);
      const jsonData = JSON.stringify(MensajeIndexS10, null, 2);

      fs.writeFile(historialPath, jsonData, (err) => {
        if (err) {
          return res.status(500).send('Error al guardar la información en el historial.');
        }

        // Actualizar la URL del último PDF
        lastScreenshotUrlpdf10 = `https://garantia-production.up.railway.app//pdf/${pdf.originalname}`;

        function obtenerFromDeMensajes(mensajes) {
          // Tomar el 'from' del primer objeto del array (si existe)
          return mensajes.length > 0 ? mensajes[0].from : null;
        }

        function enviarMensaje10(from) {
          if (!lastScreenshotUrlpdf10) {
            console.error('Error: lastScreenshotUrlpdf1 no está definido.');
            return;
          }

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'document',
            document: {
              link: lastScreenshotUrlpdf10,
              caption: 'Por favor descargar y leer las indicaciones en este PDF.',
              filename: lastScreenshotUrlpdf10,
            },
          };

          axios.post(`https://graph.facebook.com/v19.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              console.log('Respuesta enviada a', from, ':', response.data);
            })
            .catch(error => {
              console.error('Error al enviar la respuesta a', from, ':', error.response.data);
            });
        }

        function enviarMensajeSiempre() {
          const from = obtenerFromDeMensajes(MensajeIndexS10);

          if (from) {
            console.log("Enviando mensaje a:", from);
            enviarMensaje10(from);
          } else {
            console.log("No hay mensajes para enviar.");
          }
        }

        enviarMensajeSiempre();
        res.status(200).send('PDF y datos guardados exitosamente.');
      });
    });
  });





  ///////////////////////////////////////////
  ////////////// CREA EL CODIGO PARA ENVIAR PDF PARA ENVIO SALA 11
  // /////////////////////////


  const storage500sPDF11 = multer.diskStorage({
    destination: 'public/pdf/',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload500sPDF11 = multer({ storage: storage500sPDF11 });

  // Ruta para recibir el archivo PDF
  app.post('/save-PDF11', upload500sPDF11.single('pdf'), (req, res) => {
    const pdf = req.file;

    if (!pdf) {
      return res.status(400).send('No se cargó el PDF.');
    }

    // Mover el archivo PDF a un directorio adecuado o realizar otras operaciones según sea necesario
    const destinationPath = path.join(__dirname, 'public/pdf', pdf.originalname);

    fs.rename(pdf.path, destinationPath, (err) => {
      if (err) {
        return res.status(500).send('Error al guardar el PDF.');
      }

      // Obtener el último mensaje del array MensajeIndex
      const lastMessage = MensajeIndexS11[MensajeIndexS11.length - 1];

      // Agregar un objeto al array MensajeIndex con los valores de from, name y body
      MensajeIndexS11.push({
        from: lastMessage.from,
        name: lastMessage.name,
        body: `https://garantia-production.up.railway.app//pdf/${pdf.originalname}`
      });

      // Guardar la información en un archivo JSON en la carpeta historial con el nombre de from
      const historialPath = path.join(__dirname, 'sala11', `${lastMessage.from}.json`);
      const jsonData = JSON.stringify(MensajeIndexS11, null, 2);

      fs.writeFile(historialPath, jsonData, (err) => {
        if (err) {
          return res.status(500).send('Error al guardar la información en el historial.');
        }

        // Actualizar la URL del último PDF
        lastScreenshotUrlpdf11 = `https://garantia-production.up.railway.app//pdf/${pdf.originalname}`;

        function obtenerFromDeMensajes(mensajes) {
          // Tomar el 'from' del primer objeto del array (si existe)
          return mensajes.length > 0 ? mensajes[0].from : null;
        }

        function enviarMensaje10(from) {
          if (!lastScreenshotUrlpdf11) {
            console.error('Error: lastScreenshotUrlpdf1 no está definido.');
            return;
          }

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'document',
            document: {
              link: lastScreenshotUrlpdf11,
              caption: 'Por favor descargar y leer las indicaciones en este PDF.',
              filename: lastScreenshotUrlpdf11,
            },
          };

          axios.post(`https://graph.facebook.com/v19.0/${idnumero}/messages`, payload, {
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              console.log('Respuesta enviada a', from, ':', response.data);
            })
            .catch(error => {
              console.error('Error al enviar la respuesta a', from, ':', error.response.data);
            });
        }

        function enviarMensajeSiempre() {
          const from = obtenerFromDeMensajes(MensajeIndexS11);

          if (from) {
            console.log("Enviando mensaje a:", from);
            enviarMensaje10(from);
          } else {
            console.log("No hay mensajes para enviar.");
          }
        }

        enviarMensajeSiempre();
        res.status(200).send('PDF y datos guardados exitosamente.');
      });
    });
  });






  //////////////////////////////////////
  //////////////VERIFICA QUE LOS FROM SEAN IGUALES
  ////////////////////////////////////////////////////////

  function verificarYVaciarArray10() {
    if (MensajeIndex.length <= 1) {
      // Si el array está vacío o tiene solo un elemento, no se hace nada
      return;
    } else {
      const fromInicial = MensajeIndex[0].from;
      for (let i = 1; i < MensajeIndex.length; i++) {
        if (MensajeIndex[i].from !== fromInicial) {
          MensajeIndex.length = 0;
          console.log('El array se ha vaciado debido a valores diferentes en "from".');
          return;
        }
      }
      // console.log('Todos los valores de "from" son iguales en el array.');
    }
  }

  // Función que se ejecutará cada 3 segundos
  function ejecutarCadaTresSegundos10() {
    verificarYVaciarArray10();
    // Puedes realizar otras operaciones aquí con tu array mensajesIndex1 si es necesario
  }

  // Ejecutar la función cada 3 segundos
  setInterval(ejecutarCadaTresSegundos10, 3000);





  //////////////////////////////////////
  //////////////VERIFICA QUE LOS FROM SEAN IGUALES SALA 2 
  ////////////////////////////////////////////////////////

  function verificarYVaciarArrays2() {
    if (MensajeIndexS2.length <= 1) {
      // Si el array está vacío o tiene solo un elemento, no se hace nada
      return;
    } else {
      const fromInicial = MensajeIndexS2[0].from;
      for (let i = 1; i < MensajeIndexS2.length; i++) {
        if (MensajeIndexS2[i].from !== fromInicial) {
          MensajeIndexS2.length = 0;
          console.log('El array se ha vaciado debido a valores diferentes en "from".');
          return;
        }
      }
      // console.log('Todos los valores de "from" son iguales en el array.');
    }
  }

  // Función que se ejecutará cada 3 segundos
  function ejecutarCadaTresSegundoss2() {
    verificarYVaciarArrays2();
    // Puedes realizar otras operaciones aquí con tu array mensajesIndex1 si es necesario
  }

  // Ejecutar la función cada 3 segundos
  setInterval(ejecutarCadaTresSegundoss2, 3000);





  //////////////////////////////////////
  //////////////VERIFICA QUE LOS FROM SEAN IGUALES SALA 3
  ////////////////////////////////////////////////////////

  function verificarYVaciarArrays3() {
    if (MensajeIndexS3.length <= 1) {
      // Si el array está vacío o tiene solo un elemento, no se hace nada
      return;
    } else {
      const fromInicial = MensajeIndexS3[0].from;
      for (let i = 1; i < MensajeIndexS3.length; i++) {
        if (MensajeIndexS3[i].from !== fromInicial) {
          MensajeIndexS3.length = 0;
          console.log('El array se ha vaciado debido a valores diferentes en "from".');
          return;
        }
      }
      // console.log('Todos los valores de "from" son iguales en el array.');
    }
  }

  // Función que se ejecutará cada 3 segundos
  function ejecutarCadaTresSegundoss3() {
    verificarYVaciarArrays3();
    // Puedes realizar otras operaciones aquí con tu array mensajesIndex1 si es necesario
  }

  // Ejecutar la función cada 3 segundos
  setInterval(ejecutarCadaTresSegundoss3, 3000);






  //////////////////////////////////////
  //////////////VERIFICA QUE LOS FROM SEAN IGUALES SALA 4
  ////////////////////////////////////////////////////////

  function verificarYVaciarArrays4() {
    if (MensajeIndexS4.length <= 1) {
      // Si el array está vacío o tiene solo un elemento, no se hace nada
      return;
    } else {
      const fromInicial = MensajeIndexS4[0].from;
      for (let i = 1; i < MensajeIndexS4.length; i++) {
        if (MensajeIndexS4[i].from !== fromInicial) {
          MensajeIndexS4.length = 0;
          console.log('El array se ha vaciado debido a valores diferentes en "from".');
          return;
        }
      }
      // console.log('Todos los valores de "from" son iguales en el array.');
    }
  }

  // Función que se ejecutará cada 3 segundos
  function ejecutarCadaTresSegundoss4() {
    verificarYVaciarArrays4();
    // Puedes realizar otras operaciones aquí con tu array mensajesIndex1 si es necesario
  }

  // Ejecutar la función cada 3 segundos
  setInterval(ejecutarCadaTresSegundoss4, 3000);




  //////////////////////////////////////
  //////////////VERIFICA QUE LOS FROM SEAN IGUALES SALA 5
  ////////////////////////////////////////////////////////

  function verificarYVaciarArrays5() {
    if (MensajeIndexS5.length <= 1) {
      // Si el array está vacío o tiene solo un elemento, no se hace nada
      return;
    } else {
      const fromInicial = MensajeIndexS5[0].from;
      for (let i = 1; i < MensajeIndexS5.length; i++) {
        if (MensajeIndexS5[i].from !== fromInicial) {
          MensajeIndexS5.length = 0;
          console.log('El array se ha vaciado debido a valores diferentes en "from".');
          return;
        }
      }
      // console.log('Todos los valores de "from" son iguales en el array.');
    }
  }

  // Función que se ejecutará cada 3 segundos
  function ejecutarCadaTresSegundoss5() {
    verificarYVaciarArrays5();
    // Puedes realizar otras operaciones aquí con tu array mensajesIndex1 si es necesario
  }

  // Ejecutar la función cada 3 segundos
  setInterval(ejecutarCadaTresSegundoss5, 3000);





  //////////////////////////////////////
  //////////////VERIFICA QUE LOS FROM SEAN IGUALES SALA 6
  ////////////////////////////////////////////////////////

  function verificarYVaciarArrays6() {
    if (MensajeIndexS6.length <= 1) {
      // Si el array está vacío o tiene solo un elemento, no se hace nada
      return;
    } else {
      const fromInicial = MensajeIndexS6[0].from;
      for (let i = 1; i < MensajeIndexS6.length; i++) {
        if (MensajeIndexS6[i].from !== fromInicial) {
          MensajeIndexS6.length = 0;
          console.log('El array se ha vaciado debido a valores diferentes en "from".');
          return;
        }
      }
      // console.log('Todos los valores de "from" son iguales en el array.');
    }
  }

  // Función que se ejecutará cada 3 segundos
  function ejecutarCadaTresSegundoss6() {
    verificarYVaciarArrays6();
    // Puedes realizar otras operaciones aquí con tu array mensajesIndex1 si es necesario
  }

  // Ejecutar la función cada 3 segundos
  setInterval(ejecutarCadaTresSegundoss6, 3000);







  //////////////////////////////////////
  //////////////VERIFICA QUE LOS FROM SEAN IGUALES SALA 7
  ////////////////////////////////////////////////////////

  function verificarYVaciarArrays7() {
    if (MensajeIndexS7.length <= 1) {
      // Si el array está vacío o tiene solo un elemento, no se hace nada
      return;
    } else {
      const fromInicial = MensajeIndexS7[0].from;
      for (let i = 1; i < MensajeIndexS7.length; i++) {
        if (MensajeIndexS7[i].from !== fromInicial) {
          MensajeIndexS7.length = 0;
          console.log('El array se ha vaciado debido a valores diferentes en "from".');
          return;
        }
      }
      // console.log('Todos los valores de "from" son iguales en el array.');
    }
  }

  // Función que se ejecutará cada 3 segundos
  function ejecutarCadaTresSegundoss7() {
    verificarYVaciarArrays7();
    // Puedes realizar otras operaciones aquí con tu array mensajesIndex1 si es necesario
  }

  // Ejecutar la función cada 3 segundos
  setInterval(ejecutarCadaTresSegundoss7, 3000);







  //////////////////////////////////////
  //////////////VERIFICA QUE LOS FROM SEAN IGUALES SALA 8
  ////////////////////////////////////////////////////////

  function verificarYVaciarArrays8() {
    if (MensajeIndexS8.length <= 1) {
      // Si el array está vacío o tiene solo un elemento, no se hace nada
      return;
    } else {
      const fromInicial = MensajeIndexS8[0].from;
      for (let i = 1; i < MensajeIndexS8.length; i++) {
        if (MensajeIndexS8[i].from !== fromInicial) {
          MensajeIndexS8.length = 0;
          console.log('El array se ha vaciado debido a valores diferentes en "from".');
          return;
        }
      }
      // console.log('Todos los valores de "from" son iguales en el array.');
    }
  }

  // Función que se ejecutará cada 3 segundos
  function ejecutarCadaTresSegundoss8() {
    verificarYVaciarArrays8();
    // Puedes realizar otras operaciones aquí con tu array mensajesIndex1 si es necesario
  }

  // Ejecutar la función cada 3 segundos
  setInterval(ejecutarCadaTresSegundoss8, 3000);





  //////////////////////////////////////
  //////////////VERIFICA QUE LOS FROM SEAN IGUALES SALA 9
  ////////////////////////////////////////////////////////

  function verificarYVaciarArrays9() {
    if (MensajeIndexS9.length <= 1) {
      // Si el array está vacío o tiene solo un elemento, no se hace nada
      return;
    } else {
      const fromInicial = MensajeIndexS9[0].from;
      for (let i = 1; i < MensajeIndexS9.length; i++) {
        if (MensajeIndexS9[i].from !== fromInicial) {
          MensajeIndexS9.length = 0;
          console.log('El array se ha vaciado debido a valores diferentes en "from".');
          return;
        }
      }
      // console.log('Todos los valores de "from" son iguales en el array.');
    }
  }

  // Función que se ejecutará cada 3 segundos
  function ejecutarCadaTresSegundoss9() {
    verificarYVaciarArrays9();
    // Puedes realizar otras operaciones aquí con tu array mensajesIndex1 si es necesario
  }

  // Ejecutar la función cada 3 segundos
  setInterval(ejecutarCadaTresSegundoss9, 3000);




  //////////////////////////////////////
  //////////////VERIFICA QUE LOS FROM SEAN IGUALES SALA 10
  ////////////////////////////////////////////////////////

  function verificarYVaciarArrays10() {
    if (MensajeIndexS10.length <= 1) {
      // Si el array está vacío o tiene solo un elemento, no se hace nada
      return;
    } else {
      const fromInicial = MensajeIndexS10[0].from;
      for (let i = 1; i < MensajeIndexS10.length; i++) {
        if (MensajeIndexS10[i].from !== fromInicial) {
          MensajeIndexS10.length = 0;
          console.log('El array se ha vaciado debido a valores diferentes en "from".');
          return;
        }
      }
      // console.log('Todos los valores de "from" son iguales en el array.');
    }
  }

  // Función que se ejecutará cada 3 segundos
  function ejecutarCadaTresSegundoss10() {
    verificarYVaciarArrays10();
    // Puedes realizar otras operaciones aquí con tu array mensajesIndex1 si es necesario
  }

  // Ejecutar la función cada 3 segundos
  setInterval(ejecutarCadaTresSegundoss10, 3000);





  //////////////////////////////////////
  //////////////VERIFICA QUE LOS FROM SEAN IGUALES SALA 10
  ////////////////////////////////////////////////////////

  function verificarYVaciarArrays11() {
    if (MensajeIndexS11.length <= 1) {
      // Si el array está vacío o tiene solo un elemento, no se hace nada
      return;
    } else {
      const fromInicial = MensajeIndexS11[0].from;
      for (let i = 1; i < MensajeIndexS11.length; i++) {
        if (MensajeIndexS11[i].from !== fromInicial) {
          MensajeIndexS11.length = 0;
          console.log('El array se ha vaciado debido a valores diferentes en "from".');
          return;
        }
      }
      // console.log('Todos los valores de "from" son iguales en el array.');
    }
  }

  // Función que se ejecutará cada 3 segundos
  function ejecutarCadaTresSegundoss11() {
    verificarYVaciarArrays11();
    // Puedes realizar otras operaciones aquí con tu array mensajesIndex1 si es necesario
  }

  // Ejecutar la función cada 3 segundos
  setInterval(ejecutarCadaTresSegundoss11, 3000);




  // ///////////////////////////////////////////////////////////////////
  // REINICIA A LOS USUARIOS DE SALA 1
  // ///////////////////////////////////////////////////////////
  
  let BorrarIDNAN10 = ''; // Valor predeterminado en caso de que no haya valores en mensajesIndex1

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'Usuario1'
  function asignarValorIDNAN10() {
    if (MensajeIndex.length > 0 && MensajeIndex[0].from) {

      BorrarIDNAN10 = MensajeIndex[0].from;
    } else {
      BorrarIDNAN10 = 'no hay usuarios'; // Si no hay valores en mensajesIndex1, se asigna 'no hay usuarios'
    }
    // console.log('Valor de "Usuario1":', BorrarIDNAN7);
  }

  setInterval(asignarValorIDNAN10, 2000);



  app.post('/reset-array', (req, res) => {

    buttonState10 = false;

    const valorABorrar = borrar1;

    // Verifica si se encuentra algún valor con "from" dentro de EtapasMSG
    const valorEncontrado = EtapasMSG.some((etapa) => etapa.from === valorABorrar);

    if (valorEncontrado) {
      // console.log(`Se encontró un valor con "from" igual a "${valorABorrar}" en EtapasMSG`);

      // Elimina los elementos del array EtapasMSG que cumplen la condición 'from === valorABorrar'
      for (let i = EtapasMSG.length - 1; i >= 0; i--) {
        if (EtapasMSG[i].from === valorABorrar) {
          EtapasMSG.splice(i, 1);
        }
      }

      // console.log(`Se eliminaron los elementos con "from" igual a "${valorABorrar}" de EtapasMSG`);

      // Elimina los elementos del array registro que cumplen la condición 'from === valorABorrar'
      if (registro[valorABorrar]) {
        delete registro[valorABorrar];
    }

    // Enviar una respuesta con éxito
    res.json({ success: true, message: `Se Reinicio el Usuario "${valorABorrar}"` });
} else {
    // Si no se encontró el valor
    res.json({ success: false, message: `El usuario  "${valorABorrar}" ya esta en el menu inicial` });
}
});








  // //////////////////////////






  // ///////////////////////////////////////////////////////////////////
  // REINICIA A LOS USUARIOS DE SALA 2
  // ///////////////////////////////////////////////////////////


  let BorrarIDNANs2 = ''; // Valor predeterminado en caso de que no haya valores en mensajesIndex1

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'Usuario1'
  function asignarValorIDNANs2() {
    if (MensajeIndexS2.length > 0 && MensajeIndexS2[0].from) {

      BorrarIDNANs2 = MensajeIndexS2[0].from;
    } else {
      BorrarIDNANs2 = 'no hay usuarios'; // Si no hay valores en mensajesIndex1, se asigna 'no hay usuarios'
    }
    // console.log('Valor de "Usuario1":', BorrarIDNAN7);
  }

  setInterval(asignarValorIDNANs2, 2000);



  app.post('/reset-array2', (req, res) => {
    buttonStates2 = false;
    const valorABorrar = BorrarIDNANs2;

    // Verifica si se encuentra algún valor con "from" dentro de EtapasMSG
    const valorEncontrado = EtapasMSG.some((etapa) => etapa.from === valorABorrar);

    if (valorEncontrado) {
        // Elimina los elementos del array EtapasMSG que cumplen la condición 'from === valorABorrar'
        for (let i = EtapasMSG.length - 1; i >= 0; i--) {
            if (EtapasMSG[i].from === valorABorrar) {
                EtapasMSG.splice(i, 1);
            }
        }

        // Elimina los elementos del array registro que cumplen la condición 'from === valorABorrar'
        if (registro[valorABorrar]) {
            delete registro[valorABorrar];
        }

        // Enviar una respuesta con éxito
        res.json({ success: true, message: `Se Reinicio el Usuario "${valorABorrar}"` });
    } else {
        // Si no se encontró el valor
        res.json({ success: false, message: `El usuario  "${valorABorrar}" ya esta en el menu inicial` });
    }
});






  // //////////////////////////




  // ///////////////////////////////////////////////////////////////////
  // REINICIA A LOS USUARIOS DE SALA 3
  // ///////////////////////////////////////////////////////////



  let BorrarIDNANs3 = ''; // Valor predeterminado en caso de que no haya valores en mensajesIndex1

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'Usuario1'
  function asignarValorIDNANs3() {
    if (MensajeIndexS3.length > 0 && MensajeIndexS3[0].from) {

      BorrarIDNANs3 = MensajeIndexS3[0].from;
    } else {
      BorrarIDNANs3 = 'no hay usuarios'; // Si no hay valores en mensajesIndex1, se asigna 'no hay usuarios'
    }
    // console.log('Valor de "Usuario1":', BorrarIDNAN7);
  }

  setInterval(asignarValorIDNANs3, 2000);



  app.post('/reset-array3', (req, res) => {

    buttonStates3 = false;

    const valorABorrar = borrar3;

    // Verifica si se encuentra algún valor con "from" dentro de EtapasMSG
    const valorEncontrado = EtapasMSG.some((etapa) => etapa.from === valorABorrar);

    if (valorEncontrado) {
      // console.log(`Se encontró un valor con "from" igual a "${valorABorrar}" en EtapasMSG`);

      // Elimina los elementos del array EtapasMSG que cumplen la condición 'from === valorABorrar'
      for (let i = EtapasMSG.length - 1; i >= 0; i--) {
        if (EtapasMSG[i].from === valorABorrar) {
          EtapasMSG.splice(i, 1);
        }
      }

      // console.log(`Se eliminaron los elementos con "from" igual a "${valorABorrar}" de EtapasMSG`);

      // Elimina los elementos del array registro que cumplen la condición 'from === valorABorrar'
      if (registro[valorABorrar]) {
        delete registro[valorABorrar];
    }

    // Enviar una respuesta con éxito
    res.json({ success: true, message: `Se Reinicio el Usuario "${valorABorrar}"` });
} else {
    // Si no se encontró el valor
    res.json({ success: false, message: `El usuario  "${valorABorrar}" ya esta en el menu inicial` });
}
});











  // ///////////////////////////////////////////////////////////////////
  // REINICIA A LOS USUARIOS DE SALA 4
  // ///////////////////////////////////////////////////////////

  let BorrarIDNANs4 = ''; // Valor predeterminado en caso de que no haya valores en mensajesIndex1

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'Usuario1'
  function asignarValorIDNANs4() {
    if (MensajeIndexS4.length > 0 && MensajeIndexS4[0].from) {

      BorrarIDNANs4 = MensajeIndexS4[0].from;
    } else {
      BorrarIDNANs4 = 'no hay usuarios'; // Si no hay valores en mensajesIndex1, se asigna 'no hay usuarios'
    }
    // console.log('Valor de "Usuario1":', BorrarIDNAN7);
  }

  setInterval(asignarValorIDNANs4, 2000);



  app.post('/reset-array4', (req, res) => {

    buttonStates4 = false;

    const valorABorrar = borrar4;

    // Verifica si se encuentra algún valor con "from" dentro de EtapasMSG
    const valorEncontrado = EtapasMSG.some((etapa) => etapa.from === valorABorrar);

    if (valorEncontrado) {
      // console.log(`Se encontró un valor con "from" igual a "${valorABorrar}" en EtapasMSG`);

      // Elimina los elementos del array EtapasMSG que cumplen la condición 'from === valorABorrar'
      for (let i = EtapasMSG.length - 1; i >= 0; i--) {
        if (EtapasMSG[i].from === valorABorrar) {
          EtapasMSG.splice(i, 1);
        }
      }

      // console.log(`Se eliminaron los elementos con "from" igual a "${valorABorrar}" de EtapasMSG`);

      // Elimina los elementos del array registro que cumplen la condición 'from === valorABorrar'
      if (registro[valorABorrar]) {
        delete registro[valorABorrar];
    }

    // Enviar una respuesta con éxito
    res.json({ success: true, message: `Se Reinicio el Usuario "${valorABorrar}"` });
} else {
    // Si no se encontró el valor
    res.json({ success: false, message: `El usuario  "${valorABorrar}" ya esta en el menu inicial` });
}
});


  // //////////////////////////




  // ///////////////////////////////////////////////////////////////////
  // REINICIA A LOS USUARIOS DE SALA 5
  // ///////////////////////////////////////////////////////////


  let BorrarIDNANs5 = ''; // Valor predeterminado en caso de que no haya valores en mensajesIndex1

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'Usuario1'
  function asignarValorIDNANs5() {
    if (MensajeIndexS5.length > 0 && MensajeIndexS5[0].from) {

      BorrarIDNANs5 = MensajeIndexS5[0].from;
    } else {
      BorrarIDNANs5 = 'no hay usuarios'; // Si no hay valores en mensajesIndex1, se asigna 'no hay usuarios'
    }
    // console.log('Valor de "Usuario1":', BorrarIDNAN7);
  }

  setInterval(asignarValorIDNANs5, 2000);



  app.post('/reset-array5', (req, res) => {

    buttonStates5 = false;

    const valorABorrar = borrar5;

    // Verifica si se encuentra algún valor con "from" dentro de EtapasMSG
    const valorEncontrado = EtapasMSG.some((etapa) => etapa.from === valorABorrar);

    if (valorEncontrado) {
      // console.log(`Se encontró un valor con "from" igual a "${valorABorrar}" en EtapasMSG`);

      // Elimina los elementos del array EtapasMSG que cumplen la condición 'from === valorABorrar'
      for (let i = EtapasMSG.length - 1; i >= 0; i--) {
        if (EtapasMSG[i].from === valorABorrar) {
          EtapasMSG.splice(i, 1);
        }
      }

      // console.log(`Se eliminaron los elementos con "from" igual a "${valorABorrar}" de EtapasMSG`);

      // Elimina los elementos del array registro que cumplen la condición 'from === valorABorrar'
      if (registro[valorABorrar]) {
        delete registro[valorABorrar];
    }

    // Enviar una respuesta con éxito
    res.json({ success: true, message: `Se Reinicio el Usuario "${valorABorrar}"` });
} else {
    // Si no se encontró el valor
    res.json({ success: false, message: `El usuario  "${valorABorrar}" ya esta en el menu inicial` });
}
});



  // //////////////////////////





  // ///////////////////////////////////////////////////////////////////
  // REINICIA A LOS USUARIOS DE SALA 6
  // ///////////////////////////////////////////////////////////


  let BorrarIDNANs6 = ''; // Valor predeterminado en caso de que no haya valores en mensajesIndex1

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'Usuario1'
  function asignarValorIDNANs6() {
    if (MensajeIndexS6.length > 0 && MensajeIndexS6[0].from) {

      BorrarIDNANs6 = MensajeIndexS6[0].from;
    } else {
      BorrarIDNANs6 = 'no hay usuarios'; // Si no hay valores en mensajesIndex1, se asigna 'no hay usuarios'
    }
    // console.log('Valor de "Usuario1":', BorrarIDNAN7);
  }

  setInterval(asignarValorIDNANs6, 2000);



  app.post('/reset-array6', (req, res) => {

    buttonStates6 = false;

    const valorABorrar = borrar6;

    // Verifica si se encuentra algún valor con "from" dentro de EtapasMSG
    const valorEncontrado = EtapasMSG.some((etapa) => etapa.from === valorABorrar);

    if (valorEncontrado) {
      // console.log(`Se encontró un valor con "from" igual a "${valorABorrar}" en EtapasMSG`);

      // Elimina los elementos del array EtapasMSG que cumplen la condición 'from === valorABorrar'
      for (let i = EtapasMSG.length - 1; i >= 0; i--) {
        if (EtapasMSG[i].from === valorABorrar) {
          EtapasMSG.splice(i, 1);
        }
      }

      // console.log(`Se eliminaron los elementos con "from" igual a "${valorABorrar}" de EtapasMSG`);

      // Elimina los elementos del array registro que cumplen la condición 'from === valorABorrar'
      if (registro[valorABorrar]) {
        delete registro[valorABorrar];
    }

    // Enviar una respuesta con éxito
    res.json({ success: true, message: `Se Reinicio el Usuario "${valorABorrar}"` });
} else {
    // Si no se encontró el valor
    res.json({ success: false, message: `El usuario  "${valorABorrar}" ya esta en el menu inicial` });
}
});








  // ///////////////////////////////////////////////////////////////////
  // REINICIA A LOS USUARIOS DE SALA 7
  // ///////////////////////////////////////////////////////////


  let BorrarIDNANs7 = ''; // Valor predeterminado en caso de que no haya valores en mensajesIndex1

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'Usuario1'
  function asignarValorIDNANs7() {
    if (MensajeIndexS7.length > 0 && MensajeIndexS7[0].from) {

      BorrarIDNANs7 = MensajeIndexS7[0].from;
    } else {
      BorrarIDNANs7 = 'no hay usuarios'; // Si no hay valores en mensajesIndex1, se asigna 'no hay usuarios'
    }
    // console.log('Valor de "Usuario1":', BorrarIDNAN7);
  }

  setInterval(asignarValorIDNANs7, 2000);



  app.post('/reset-array7', (req, res) => {

    buttonStates7 = false;

    const valorABorrar = borrar7;

    // Verifica si se encuentra algún valor con "from" dentro de EtapasMSG
    const valorEncontrado = EtapasMSG.some((etapa) => etapa.from === valorABorrar);

    if (valorEncontrado) {
      // console.log(`Se encontró un valor con "from" igual a "${valorABorrar}" en EtapasMSG`);

      // Elimina los elementos del array EtapasMSG que cumplen la condición 'from === valorABorrar'
      for (let i = EtapasMSG.length - 1; i >= 0; i--) {
        if (EtapasMSG[i].from === valorABorrar) {
          EtapasMSG.splice(i, 1);
        }
      }

      // console.log(`Se eliminaron los elementos con "from" igual a "${valorABorrar}" de EtapasMSG`);

      // Elimina los elementos del array registro que cumplen la condición 'from === valorABorrar'
      if (registro[valorABorrar]) {
        delete registro[valorABorrar];
    }

    // Enviar una respuesta con éxito
    res.json({ success: true, message: `Se Reinicio el Usuario "${valorABorrar}"` });
} else {
    // Si no se encontró el valor
    res.json({ success: false, message: `El usuario  "${valorABorrar}" ya esta en el menu inicial` });
}
});






  // ///////////////////////////////////////////////////////////////////
  // REINICIA A LOS USUARIOS DE SALA 8
  // ///////////////////////////////////////////////////////////


  let BorrarIDNANs8 = ''; // Valor predeterminado en caso de que no haya valores en mensajesIndex1

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'Usuario1'
  function asignarValorIDNANs8() {
    if (MensajeIndexS8.length > 0 && MensajeIndexS8[0].from) {

      BorrarIDNANs8 = MensajeIndexS8[0].from;
    } else {
      BorrarIDNANs8 = 'no hay usuarios'; // Si no hay valores en mensajesIndex1, se asigna 'no hay usuarios'
    }
    // console.log('Valor de "Usuario1":', BorrarIDNAN7);
  }

  setInterval(asignarValorIDNANs8, 2000);



  app.post('/reset-array8', (req, res) => {

    buttonStates8 = false;

    const valorABorrar = borrar8;

    // Verifica si se encuentra algún valor con "from" dentro de EtapasMSG
    const valorEncontrado = EtapasMSG.some((etapa) => etapa.from === valorABorrar);

    if (valorEncontrado) {
      // console.log(`Se encontró un valor con "from" igual a "${valorABorrar}" en EtapasMSG`);

      // Elimina los elementos del array EtapasMSG que cumplen la condición 'from === valorABorrar'
      for (let i = EtapasMSG.length - 1; i >= 0; i--) {
        if (EtapasMSG[i].from === valorABorrar) {
          EtapasMSG.splice(i, 1);
        }
      }

      // console.log(`Se eliminaron los elementos con "from" igual a "${valorABorrar}" de EtapasMSG`);

      // Elimina los elementos del array registro que cumplen la condición 'from === valorABorrar'
      if (registro[valorABorrar]) {
        delete registro[valorABorrar];
        // console.log(`Se eliminó el elemento cuya clave era igual a "${valorABorrar}" de registro`);
      } else {
        // console.log(`No se encontró ningún elemento con clave igual a "${valorABorrar}" en registro`);
      }
    } else {
      // console.log(`No se encontró ningún valor con "from" igual a "${valorABorrar}" en EtapasMSG`);
    }

    // Resto del código para borrar archivos, enviar respuestas, etc.

  });

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  // ///////////////////////////////////////////////////////////////////
  // REINICIA A LOS USUARIOS DE SALA 9
  // ///////////////////////////////////////////////////////////


  let BorrarIDNANs9 = ''; // Valor predeterminado en caso de que no haya valores en mensajesIndex1

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'Usuario1'
  function asignarValorIDNANs9() {
    if (MensajeIndexS9.length > 0 && MensajeIndexS9[0].from) {

      BorrarIDNANs9 = MensajeIndexS9[0].from;
    } else {
      BorrarIDNANs9 = 'no hay usuarios'; // Si no hay valores en mensajesIndex1, se asigna 'no hay usuarios'
    }
    // console.log('Valor de "Usuario1":', BorrarIDNAN7);
  }

  setInterval(asignarValorIDNANs9, 2000);



  app.post('/reset-array9', (req, res) => {

    buttonStates9 = false;

    const valorABorrar = borrar9;

    // Verifica si se encuentra algún valor con "from" dentro de EtapasMSG
    const valorEncontrado = EtapasMSG.some((etapa) => etapa.from === valorABorrar);

    if (valorEncontrado) {
      // console.log(`Se encontró un valor con "from" igual a "${valorABorrar}" en EtapasMSG`);

      // Elimina los elementos del array EtapasMSG que cumplen la condición 'from === valorABorrar'
      for (let i = EtapasMSG.length - 1; i >= 0; i--) {
        if (EtapasMSG[i].from === valorABorrar) {
          EtapasMSG.splice(i, 1);
        }
      }

      // console.log(`Se eliminaron los elementos con "from" igual a "${valorABorrar}" de EtapasMSG`);

      // Elimina los elementos del array registro que cumplen la condición 'from === valorABorrar'
      if (registro[valorABorrar]) {
        delete registro[valorABorrar];
        // console.log(`Se eliminó el elemento cuya clave era igual a "${valorABorrar}" de registro`);
      } else {
        // console.log(`No se encontró ningún elemento con clave igual a "${valorABorrar}" en registro`);
      }
    } else {
      // console.log(`No se encontró ningún valor con "from" igual a "${valorABorrar}" en EtapasMSG`);
    }

    // Resto del código para borrar archivos, enviar respuestas, etc.

  });

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  // ///////////////////////////////////////////////////////////////////
  // REINICIA A LOS USUARIOS DE SALA 10
  // ///////////////////////////////////////////////////////////


  let BorrarIDNANs10 = ''; // Valor predeterminado en caso de que no haya valores en mensajesIndex1

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'Usuario1'
  function asignarValorIDNANs10() {
    if (MensajeIndexS10.length > 0 && MensajeIndexS10[0].from) {

      BorrarIDNANs10 = MensajeIndexS10[0].from;
    } else {
      BorrarIDNANs10 = 'no hay usuarios'; // Si no hay valores en mensajesIndex1, se asigna 'no hay usuarios'
    }
    // console.log('Valor de "Usuario1":', BorrarIDNAN7);
  }

  setInterval(asignarValorIDNANs10, 2000);



  app.post('/reset-array10', (req, res) => {

    buttonStates10 = false;

    const valorABorrar = borrar10;

    // Verifica si se encuentra algún valor con "from" dentro de EtapasMSG
    const valorEncontrado = EtapasMSG.some((etapa) => etapa.from === valorABorrar);

    if (valorEncontrado) {
      // console.log(`Se encontró un valor con "from" igual a "${valorABorrar}" en EtapasMSG`);

      // Elimina los elementos del array EtapasMSG que cumplen la condición 'from === valorABorrar'
      for (let i = EtapasMSG.length - 1; i >= 0; i--) {
        if (EtapasMSG[i].from === valorABorrar) {
          EtapasMSG.splice(i, 1);
        }
      }

      // console.log(`Se eliminaron los elementos con "from" igual a "${valorABorrar}" de EtapasMSG`);

      // Elimina los elementos del array registro que cumplen la condición 'from === valorABorrar'
      if (registro[valorABorrar]) {
        delete registro[valorABorrar];
        // console.log(`Se eliminó el elemento cuya clave era igual a "${valorABorrar}" de registro`);
      } else {
        // console.log(`No se encontró ningún elemento con clave igual a "${valorABorrar}" en registro`);
      }
    } else {
      // console.log(`No se encontró ningún valor con "from" igual a "${valorABorrar}" en EtapasMSG`);
    }

    // Resto del código para borrar archivos, enviar respuestas, etc.

  });

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  // ///////////////////////////////////////////////////////////////////
  // REINICIA A LOS USUARIOS DE SALA 11
  // ///////////////////////////////////////////////////////////


  let BorrarIDNANs11 = ''; // Valor predeterminado en caso de que no haya valores en mensajesIndex1

  // Función que se ejecuta cada 2 segundos para asignar 'from' a 'Usuario1'
  function asignarValorIDNANs11() {
    if (MensajeIndexS11.length > 0 && MensajeIndexS11[0].from) {

      BorrarIDNANs11 = MensajeIndexS11[0].from;
    } else {
      BorrarIDNANs11 = 'no hay usuarios'; // Si no hay valores en mensajesIndex1, se asigna 'no hay usuarios'
    }
    // console.log('Valor de "Usuario1":', BorrarIDNAN7);
  }

  setInterval(asignarValorIDNANs11, 2000);



  app.post('/reset-array11', (req, res) => {

    buttonStates11 = false;

    const valorABorrar = borrar11;

    // Verifica si se encuentra algún valor con "from" dentro de EtapasMSG
    const valorEncontrado = EtapasMSG.some((etapa) => etapa.from === valorABorrar);

    if (valorEncontrado) {
      // console.log(`Se encontró un valor con "from" igual a "${valorABorrar}" en EtapasMSG`);

      // Elimina los elementos del array EtapasMSG que cumplen la condición 'from === valorABorrar'
      for (let i = EtapasMSG.length - 1; i >= 0; i--) {
        if (EtapasMSG[i].from === valorABorrar) {
          EtapasMSG.splice(i, 1);
        }
      }

      // console.log(`Se eliminaron los elementos con "from" igual a "${valorABorrar}" de EtapasMSG`);

      // Elimina los elementos del array registro que cumplen la condición 'from === valorABorrar'
      if (registro[valorABorrar]) {
        delete registro[valorABorrar];
        // console.log(`Se eliminó el elemento cuya clave era igual a "${valorABorrar}" de registro`);
      } else {
        // console.log(`No se encontró ningún elemento con clave igual a "${valorABorrar}" en registro`);
      }
    } else {
      // console.log(`No se encontró ningún valor con "from" igual a "${valorABorrar}" en EtapasMSG`);
    }

    // Resto del código para borrar archivos, enviar respuestas, etc.

  });

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




  app.get('/move-json-files', (req, res) => {
    try {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().slice(0, 10); // YYYY-MM-DD
      const targetFolder = path.join(__dirname, formattedDate);

      let filesMoved = false;

      for (let i = 1; i <= 7; i++) {
        const folderName = `sala${i}`;
        const folderPath = path.join(__dirname, folderName);

        if (fs.existsSync(folderPath)) {
          const files = fs.readdirSync(folderPath);

          files.forEach(file => {
            if (path.extname(file) === '.json' && !isNaN(path.parse(file).name)) {
              if (!fs.existsSync(targetFolder)) {
                fs.mkdirSync(targetFolder);
              }

              const oldPath = path.join(folderPath, file);
              const newPath = path.join(targetFolder, file);

              fs.copyFileSync(oldPath, newPath);
              fs.unlinkSync(oldPath);
              filesMoved = true;
            }
          });
        }
      }

      if (filesMoved) {
        res.send(`Archivos .json movidos y eliminados de las carpetas originales a ${targetFolder}.`);
      } else {
        res.send('No se encontraron archivos .json en las carpetas.');
      }
    } catch (error) {
      console.error('Error moviendo archivos:', error);
      res.status(500).send('Ocurrió un error al mover los archivos.');
    }
  });



  // //////////////////////////
  ///////////////////////////////



  const folderPrefix = 'sala';
  const folderCount = 7;

  function countJsonFiles() {
    const result = [];

    for (let i = 1; i <= folderCount; i++) {
      const folderName = `${folderPrefix}${i}`;
      const folderPath = path.join(__dirname, folderName);

      if (fs.existsSync(folderPath)) {
        const files = fs.readdirSync(folderPath).filter(file => file.endsWith('.json'));
        const totalFiles = files.length;
        let filesWithoutResponse = 0;

        files.forEach(file => {
          const filePath = path.join(folderPath, file);
          const fileContent = fs.readFileSync(filePath, 'utf8');

          try {
            const jsonData = JSON.parse(fileContent);

            // Verifica si alguno de los objetos en los arrays anidados tiene el campo "response"
            let tieneResponse = false;
            for (let obj of jsonData) {
              if (obj.hasOwnProperty('response')) {
                tieneResponse = true;
                break;
              }
            }

            // Si ninguno de los objetos tiene el campo "response", incrementa el contador
            if (!tieneResponse) {
              filesWithoutResponse++;
            }
          } catch (error) {
            console.error(`Error parsing JSON file ${filePath}: ${error.message}`);
          }
        });

        result.push({
          sala: folderName,
          totalFiles,
          filesWithoutResponse,
        });

        //console.log(`Processed ${folderName}: ${totalFiles} total files, ${filesWithoutResponse} without response`);
      } else {
        //console.log(`Folder not found: ${folderName}`);
      }
    }

    return result;
  }

  // Llamada inicial para contar los archivos JSON
  global.latestData = countJsonFiles();
  //console.log('Initial data:', global.latestData);

  // Función para actualizar los datos cada 10 minutos
  setInterval(() => {
    global.latestData = countJsonFiles();
    // console.log('Updated data:', global.latestData);
  }, 10 * 60 * 1000);

  // Configura una ruta para enviar los datos al cliente
  app.get('/data', (req, res) => {
    // console.log('Request to /data');
    res.json(global.latestData || []);
    //console.log('Sent data to client:', global.latestData);
  });










  // Iterar a través de EtapasMSG
  let idToUpdatepdf = null;


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
      const { from, body, etapa, id, documentId } = elementoModificadoRecientemente33;

      if (etapa >= 0 && etapa <= 300 && documentId) {
        const folders = ['./sala1', './sala2', './sala3', './sala4', './sala5', './sala6', './sala7', './sala8', './sala9', './sala10', './sala11'];
        let fileFound = false;

        folders.forEach((folderPath) => {
          if (fileFound) return; // Salir si ya se encontró el archivo

          const fileName = `${from}.json`;
          const filePath = path.join(folderPath, fileName);

          if (fs.existsSync(filePath)) {
            fileFound = true;

            idToUpdatepdf = id;

            const payload = {
              messaging_product: 'whatsapp',
              recipient_type: 'individual',
              to: from,
              type: 'text',
              text: {
                preview_url: false,
                body: `PDF Recibido.`,
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
                if (idToUpdatepdf !== null) {
                  const indexToUpdate = EtapasMSG.findIndex((item) => item.id === idToUpdatepdf);
                  if (indexToUpdate !== -1) {
                    EtapasMSG[indexToUpdate].etapa = etapa;
                    EtapasMSG[indexToUpdate].idp = 0;
                    idToUpdatepdf = null; // Restablecer el ID a null después de la actualización
                  }
                }
              })
              .catch((error) => {
                console.error('Error al enviar la respuesta:', error.response.data);
              });

            const url = 'https://graph.facebook.com/v17.0/' + documentId;

            const config = {
              headers: {
                Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              },
            };

            axios
              .get(url, config)
              .then((response) => {
                const urlFromResponse = response.data.url;

                const configPDF = {
                  headers: {
                    Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
                  },
                  responseType: 'stream',
                };

                axios
                  .get(urlFromResponse, configPDF)
                  .then((pdfResponse) => {
                    const randomThreeDigitNumber = Math.floor(1 + Math.random() * 9000);
                    const modifiedFileName = `${from}-${randomThreeDigitNumber}.pdf`;
                    const pdfDir = path.join(process.cwd(), 'public/pdf');

                    // Verificar si la carpeta 'PDF' existe, si no, crearla
                    if (!fs.existsSync(pdfDir)) {
                      fs.mkdirSync(pdfDir, { recursive: true });
                    }

                    const pdfPath = path.join(pdfDir, modifiedFileName);
                    const writer = fs.createWriteStream(pdfPath);

                    pdfResponse.data.pipe(writer);

                    writer.on('finish', () => {
                      const pdfURL = `${urlserver}/pdf/${modifiedFileName}`;

                      const newData = {
                        from: from,
                        body: pdfURL, // URL del PDF
                        filename: modifiedFileName,
                        etapa: 32,
                        id: "",
                        timestamp: Date.now(),
                        IDNAN: 4,
                        Cambio: 1,
                        Idp: 1,
                        idp: 0,
                      };

                      try {
                        const fileContent = fs.readFileSync(filePath, 'utf8');
                        const existingData = JSON.parse(fileContent);
                        existingData.push(newData);
                        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
                      } catch (error) {
                        console.error('Error al procesar el archivo JSON:', error);
                      }
                    });

                    writer.on('error', (err) => {
                      console.error('Error al guardar el PDF:', err);
                    });
                  })
                  .catch((error) => {
                    console.error('Error al descargar el PDF desde la URL:', error);
                  });
              })
              .catch((error) => {
                console.error('Error al obtener la URL del PDF:', error);
              });
          }
        });

        if (!fileFound) {
          console.error('El archivo JSON no existe en ninguna de las carpetas.');
        }
      } else {
        console.log("La condición para 'body' y 'etapa' no coincide.");
      }
    } else {
      console.log('No se encontró ningún elemento válido con idp distinto de 0');
    }
  } else {
    console.log("El array EtapasMSG está vacío.");
  }






  // ////////////////////////////////////////////////////
  //////////ENVIA IMAGENES A PARTICULARES ////
  ////////////////////////////////////

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
    const { from, body, etapa, id, imgID, audioID } = elementoModificadoRecientemente33;

    if (etapa >= 0 && etapa <= 300 && audioID) {
      const folders = ['./sala1', './sala2', './sala3'];
      let fileFound = false;

      folders.forEach(folderPath => {
        if (fileFound) return; // Si ya se encontró el archivo, salir del bucle

        const fileName = `${from}.json`;
        const filePath = path.join(folderPath, fileName);

        if (fs.existsSync(filePath)) {
          fileFound = true;

          idToUpdateAU = id;

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'text',
            text: {
              preview_url: false,
              body: `Audio Recibido.`,
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
                  EtapasMSG[indexToUpdate].etapa = 4;
                  EtapasMSG[indexToUpdate].idp = 0;
                  idToUpdateAU = null; // Restablecer el ID a null después de la actualización
                }
              }
            })
            .catch((error) => {
              console.error('Error al enviar la respuesta:', error.response.data);
            });

          const url = 'https://graph.facebook.com/v17.0/' + audioID;

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
  .then(audioResponse => {
    const randomThreeDigitNumber = Math.floor(1 + Math.random() * 9000);
    const modifiedFileName = `${from}-${randomThreeDigitNumber}.ogg`;
    const audioDir = path.join(process.cwd(), 'public/Audio');
    
    // Verificar si la carpeta 'Audio' existe, si no, crearla
    if (!fs.existsSync(audioDir)) {
      fs.mkdirSync(audioDir, { recursive: true });
    }

    const audioPath = path.join(audioDir, modifiedFileName);
    const writer = fs.createWriteStream(audioPath);

    audioResponse.data.pipe(writer);

    writer.on('finish', () => {
      const audioURL = `${urlserver}/Audio/${modifiedFileName}`;
   

                    const newData = {
                      "from": from,
                      "body": audioURL,
                      "name": name,
                      "imgID": "",
                      "etapa": 32,
                      "id": "",
                      "timestamp": Date.now(),
                      "IDNAN": 4,
                      "Cambio": 1,
                      "Idp": 1,
                      "idp": 0
                    };

                    try {
                      const fileContent = fs.readFileSync(filePath, 'utf8');
                      const existingData = JSON.parse(fileContent);
                      existingData.push(newData);
                      fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
                    } catch (error) {
                      console.error('Error al procesar el archivo JSON:', error);
                    }
                  });

                  writer.on('error', (err) => {
                    console.error('Error al guardar el audio:', err);
                  });
                })
                .catch(error => {
                  console.error('Error al realizar la solicitud GET para el audio:', error);
                });
            })
            .catch(error => {
              console.error('Error al realizar la solicitud a la API de Facebook:', error);
            });
        }
      });

      if (!fileFound) {
        console.error('El archivo no existe en ninguna de las carpetas.');
      }
    } else {
      console.log("La condición para 'body' y 'etapa' no coincide.");
    }
  } else {
    console.log('No se encontró ningún elemento válido con idp distinto de 0');
  }
} else {
  console.log("El array EtapasMSG está vacío.");
}
  // /////////////////////
  /////////////////
  ///////////////////////////////////


  


  // ////////////////////////////////////////////////////
  //////////ESTE CODIGO CARGA LAS IMAGENES AL HISTORIAL ////
  ////////////////////////////////////

  // Iterar a través de EtapasMSG
  let idToUpdate33 = null;

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
    const { from, body, etapa, id, imgID } = elementoModificadoRecientemente33;

    if (etapa >= 0 && etapa <= 10 && imgID) {
      const folders = ['./sala1', './sala2', './sala3'];
      let fileFound = false;

      folders.forEach(folderPath => {
        if (fileFound) return; // Si ya se encontró el archivo, salir del bucle

        const fileName = `${from}.json`;
        const filePath = path.join(folderPath, fileName);

        if (fs.existsSync(filePath)) {
          fileFound = true;

          idToUpdate33 = id;

          const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: from,
            type: 'text',
            text: {
              preview_url: false,
              body: `Imagen Recibida.`,
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
              if (idToUpdate33 !== null) {
                const indexToUpdate = EtapasMSG.findIndex((item) => item.id === idToUpdate33);
                if (indexToUpdate !== -1) {
                  EtapasMSG[indexToUpdate].etapa = 2;
                  EtapasMSG[indexToUpdate].idp = 0;
                  idToUpdate33 = null; // Restablecer el ID a null después de la actualización
                }
              }
            })
            .catch((error) => {
              console.error('Error al enviar la respuesta:', error.response.data);
            });

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
    const randomThreeDigitNumber = Math.floor(1 + Math.random() * 90000);
    const modifiedFileName = `${from}-${randomThreeDigitNumber}.jpg`;
    const imageDir = path.join(process.cwd(), 'public/historico');
    
    // Verificar si la carpeta existe, si no, crearla
    if (!fs.existsSync(imageDir)) {
      fs.mkdirSync(imageDir, { recursive: true });
    }

    const imagePath = path.join(imageDir, modifiedFileName);
    const writer = fs.createWriteStream(imagePath);

    imageResponse.data.pipe(writer);

    writer.on('finish', () => {
      const imageURL = `${urlserver}/historico/${modifiedFileName}`;
      // Aquí puedes hacer algo con la URL de la imagen

                    const newData = {
                      "from": from,
                      "body": imageURL,
                      "name": name,
                      "imgID": "",
                      "etapa": 32,
                      "id": "",
                      "timestamp": Date.now(),
                      "IDNAN": 4,
                      "Cambio": 1,
                      "Idp": 1,
                      "idp": 0
                    };

                    try {
                      const fileContent = fs.readFileSync(filePath, 'utf8');
                      const existingData = JSON.parse(fileContent);
                      existingData.push(newData);
                      fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
                    } catch (error) {
                      console.error('Error al procesar el archivo JSON:', error);
                    }
                  });

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
        }
      });

      if (!fileFound) {
        console.error('El archivo no existe en ninguna de las carpetas.');
      }
    } else {
      console.log("La condición para 'body' y 'etapa' no coincide.");
    }
  } else {
    console.log('No se encontró ningún elemento válido con idp distinto de 0');
  }
} else {
  console.log("El array EtapasMSG está vacío.");
}

  // /////////////////////
  /////////////////
  ///////////////////////////////////







  response.sendStatus(200);
});









/////// ADMIN /////




const sala1Dir = path.join(__dirname, 'sala1');
const sala2Dir = path.join(__dirname, 'sala2');
const sala3Dir = path.join(__dirname, 'sala3');

// Configuración de multer para la carga de archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const folder = req.body.sala === 'sala1' ? sala1Dir :
                       req.body.sala === 'sala2' ? sala2Dir : sala3Dir;
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });

app.use(express.static('public'));
app.use(express.json());

app.post('/upload', upload.array('files', 50), (req, res) => {
    res.send({ message: 'Archivos subidos exitosamente' });
});

app.get('/files/:sala', (req, res) => {
    const folder = req.params.sala === 'sala1' ? sala1Dir :
                   req.params.sala === 'sala2' ? sala2Dir : sala3Dir;

    fs.readdir(folder, (err, files) => {
        if (err) return res.status(500).send({ error: 'Error al leer la carpeta' });
        res.send({ files });
    });
});

app.delete('/files/:sala/:filename', (req, res) => {
    const folder = req.params.sala === 'sala1' ? sala1Dir :
                   req.params.sala === 'sala2' ? sala2Dir : sala3Dir;

    const filePath = path.join(folder, req.params.filename);
    fs.unlink(filePath, (err) => {
        if (err) return res.status(500).send({ error: 'Error al eliminar el archivo' });
        res.send({ message: 'Archivo eliminado' });
    });
});

app.get('/download/:sala', (req, res) => {
    const folder = req.params.sala === 'sala1' ? sala1Dir :
                   req.params.sala === 'sala2' ? sala2Dir : sala3Dir;
    
    const zipPath = path.join(__dirname, `${req.params.sala}.zip`);
    const archiver = require('archiver');

    const output = fs.createWriteStream(zipPath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => {
        res.download(zipPath, () => fs.unlinkSync(zipPath));
    });

    archive.on('error', (err) => res.status(500).send({ error: 'Error al comprimir archivos' }));
    archive.pipe(output);
    archive.directory(folder, false);
    archive.finalize();
});

app.delete('/delete-all/:sala', (req, res) => {
    const folder = req.params.sala === 'sala1' ? sala1Dir :
                   req.params.sala === 'sala2' ? sala2Dir : sala3Dir;

    fs.readdir(folder, (err, files) => {
        if (err) return res.status(500).send({ error: 'Error al leer la carpeta' });

        files.forEach((file) => fs.unlinkSync(path.join(folder, file)));

        res.send({ message: `Todos los archivos en ${req.params.sala} fueron eliminados.` });
    });
});











process.on('uncaughtException', (err) => {
  console.error('Excepción no controlada en el servidor:', err);
});

// Manejo de rechazos de promesas no manejados en el servidor
process.on('unhandledRejection', (reason, promise) => {
  console.error('Rechazo de promesa no manejado en el servidor:', promise, 'razón:', reason);
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
