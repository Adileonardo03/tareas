const express = require('express');
const path = require('path');

const app = express();
const PORT = 3010;

// Middleware para servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.sendFile(path.resolve('public', 'index.html'));
});

// Ruta para la página "Quiénes Somos"
app.get('/presentacion', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'presentacion.html'));
});

// Ruta para la página de contacto
app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contacto.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});