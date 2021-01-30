const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var StudentSchema = new Schema({
    nombre: String,
    apellidos: String,
    edad: Number,
    correo: String, 
    dirección: String,
    telefono: Number
}); 
module.exports = mongoose.model('Student', StudentSchema);