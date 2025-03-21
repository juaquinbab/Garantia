const https = require('https');

function checkLatency() {
    const startTime = Date.now();
    https.get('https://www.google.com', (res) => {
        const latency = Date.now() - startTime;
        if (latency > 500) {
            const currentDate = new Date().toLocaleString();
            console.log(`[${currentDate}] Latencia alta: ${latency} ms`);
        }
    }).on('error', (e) => {
        console.error(`Error: ${e.message}`);
    });
}

setInterval(checkLatency, 5000);