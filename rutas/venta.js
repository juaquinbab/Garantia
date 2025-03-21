const axios = require('axios');
require('dotenv').config();
const url = process.env.url;
const idnumero = '543668822173469'


function venta(EtapasMSG, WHATSAPP_API_TOKEN) {
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
            const { from, body, etapa } = elementoModificadoRecientemente101;

            if (/^\d+$/.test(body) && body.length > 1 && etapa === 2) {
                const filePath = path.join(__dirname, 'sala1', `${from}.json`);

                if (fs.existsSync(filePath)) {
                    fs.readFile(filePath, 'utf8', (err, data) => {
                        if (err) {
                            console.error('Error leyendo el archivo:', err);
                            return;
                        }

                        try {
                            let jsonData = JSON.parse(data);

                            // Buscar el nombre en el JSON
                            const name = jsonData.name || "Desconocido";

                            // Generar la estructura para el push
                            const newEntry = {
                                from: from,
                                name: name,
                                body: `https://9d4qpf61-2020.use2.devtunnels.ms/pdf/${body}`
                            };

                            // Agregar al array de mensajes
                            jsonData.messages = jsonData.messages || [];
                            jsonData.messages.push(newEntry);

                            // Guardar el archivo actualizado
                            fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
                                if (err) {
                                    console.error('Error guardando el archivo:', err);
                                } else {
                                    console.log('Archivo actualizado correctamente.');
                                }
                            });

                        } catch (parseError) {
                            console.error('Error parseando el JSON:', parseError);
                        }
                    });
                } else {
                    console.log(`No se encontró el archivo JSON para from: ${from}`);
                }
            
    
                idToUpdate101 = id;


                const payload = {
                    messaging_product: 'whatsapp',
                    recipient_type: 'individual',
                    to: from,
                    type: 'text',
                    text: {
                        preview_url: false,
                        body:
                        '🚀 ¡Entrega inmediata! 🎉\n\nSolo debes enviar tu comprobante de pago y en minutos tendrás acceso. ✅\n\n💳 Bancolombia Ahorros / Ahorro a la Mano\n📌 Cuenta: 26400035406\n\n📲 Nequi o Daviplata\n📌 Número: 320 375 0163\n\n📢 Importante: No olvides enviar el nombre para el perfil. 📝✨',
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


module.exports = { venta, };