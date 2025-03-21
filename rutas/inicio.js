const axios = require('axios');
require('dotenv').config();
const url = process.env.url;
const idnumero = '543668822173469'


function inicio(EtapasMSG, WHATSAPP_API_TOKEN) {


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
      
            if ( interactiveId === 'promociones' && etapa === 1) {


                idToUpdate101 = id;


                const payload = {
                    messaging_product: 'whatsapp',
                    recipient_type: 'individual',
                    to: from,
                    type: 'text',
                    text: {
                        preview_url: false,
                        body:
                        '🎥 Escoge el número de tu preferencia\n\n1️⃣ Netflix±Disney básico +Amazon prime video 24,000 por 30 días. (CON DISNEY PREMIUM 27)\n\n2️⃣ Netflix más Disney básico más hbo por 25,000 (CON DISNEY PREMIUM 27)\n\n3️⃣ Netflix más hbo + Amazon 22,000 por 30 días \n\n4️⃣ Netflix original sin caídas y renovables a 17 mil \n\n5️⃣ Disney+ con anuncios 7 mil\n\n6️⃣ Amazon 7 mil \n\n7️⃣ HBO Max 5 mil \n\n8️⃣ Crunchyroll 8 mil \n\n9️⃣ PARAMOUNT+ 5 MIL \n\n🔟 VIX 9 MIL \n\n1️⃣1️⃣ Spotify 1 mes 8 mil o 3 meses en 25 mil \n\n1️⃣2️⃣ YouTube premium 1 mes a 8 mil \n\n1️⃣3️⃣ Disney premium sin anuncios con el canal de ESPN y STAR+ 12 mil\n\n1️⃣4️⃣ DirecTV GO Plan oro con pantalla de win sport 29 mil',
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
                                EtapasMSG[indexToUpdate].etapa = 2;
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


module.exports = { inicio, };