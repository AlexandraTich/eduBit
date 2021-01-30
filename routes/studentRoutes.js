const express = require('express');
const StudentController = require('../controllers/StudentController');

const api = express.Router();

/**
 * POST: Para insertar datos y enviar datos sensibles  Se utiliza para almacenar información como datos sensibles Ej: la contraseña
 * GET: Para obtener datos
 * PUT: Modifica datos
 * DELETE: Eliminar información.
 */

//Estructura de las rutas ==> api.get('cadena de texto', (función anonima) => {}) 
api.get( '/saludar', (req, res) => {
    console.log('Llego a la ruta saludar...');
 });

api.post('/', StudentController.create);
api.put('/:idStudent', StudentController.update);
api.delete('/:idStudent', StudentController.remove);
api.get('/allStudents', StudentController.getAllStudents);
// Esta api se debe exportar para poder trabajar en el archivo de app.js
 module.exports = api;
