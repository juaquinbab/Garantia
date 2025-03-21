const axios = require('axios');
require('dotenv').config();
const url = process.env.url;
const idnumero = '543668822173469'


function soporte(EtapasMSG, WHATSAPP_API_TOKEN) {


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
            const { from, body, etapa, id, interactiveId  } = elementoModificadoRecientemente101;
      
            if ( interactiveId === 'soporte' && etapa === 1) {


                idToUpdate101 = id;


                const payload = {
                    messaging_product: 'whatsapp',
                    recipient_type: 'individual',
                    to: from,
                    type: 'text',
                    text: {
                        preview_url: false,
                        body:
                        '📢 Área de Soporte 🛠️\n\nPor favor, envíanos una imagen del error 📸 y una breve descripción del problema 📝 para poder ayudarte lo más rápido posible. 🚀\n\n¡Gracias por tu colaboración! ✅',
                    },
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
                                EtapasMSG[indexToUpdate].etapa = 4;
                                EtapasMSG[indexToUpdate].idp = 0;
                                console.log(`Valor de 'etapa' actualizado para el ID: ${idToUpdate101}`);
                                idToUpdate101 = null; // Restablecer el ID a null después de la actualización
                            }
                        }
                    })
                    .catch((error) => {
                        console.error('Error al enviar la respuesta:', error.response.data);
                    });

                // Envia la imagen al servidor.

                // Código de envío de imagen al servidor aquí

            } else {
                // console.log("La condición para 'body' y 'etapa' no coincide.");
            }
        } else {
            console.log('No se encontró ningún elemento válido con idp distinto de 0');
        }
    } else {
        console.log("El array EtapasMSG está vacío.");
    }



}


module.exports = { soporte, };