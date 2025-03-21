const ctx = document.getElementById('myChart').getContext('2d');

// Datos de ejemplo
const data = [

  
    { fecha: '5 -noviembre-2024', usuarios: 237 },
    { fecha: '6 -noviembre-2024', usuarios: 169 },
    { fecha: '7 -noviembre-2024', usuarios: 161 },
    { fecha: '8 -noviembre-2024', usuarios: 144 },
    { fecha: '9 -noviembre-2024', usuarios: 36 },
    { fecha: '12 -noviembre-2024', usuarios: 178 },
    
];

// Extraer las etiquetas y los valores de los datos
const labels = data.map(item => item.fecha);
const values = data.map(item => item.usuarios);

// Crear la gráfica
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Usuarios',
            data: values,
            backgroundColor: 'rgba(0, 123, 255, 0.7)', // Color más fuerte
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1,
            barThickness: 15 // Grosor de las barras
        }]
    },
    options: {
        indexAxis: 'y', // Cambiar la gráfica a horizontal
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                ticks: {
                    font: {
                        size: 14 // Tamaño más grande para las marcas a la izquierda
                    }
                }
            }
        }
    }
});
