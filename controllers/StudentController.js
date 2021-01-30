/*Este es el archivo de las rutas*/

const Student = require('../models/Student');

/**
 * 
 * @param {*} req => Son todos los parametros que recibimos
 * @param {*} res Respuesta
 */

function create(req, res){
    var student = new Student();
    var params = req.body;

    student.nombre = params.nombre;
    student.apellidos = params.apellidos;
    student.edad = params.edad;
    student.correo = params.correo;
    student.dirección = params.dirección;
    student.telefono = params.telefono;

    student.save( (error, studentCreated) => {
        if(error){
                res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
                })
            }else{
                if(!studentCreated){
                    res.status(400).send({
                        statusCode: 400,
                        message: "Error al insertar el usuario"
                    })
                }else{
                    res.status(200).send({
                        statusCode: 200,        
                        message:"Usuario almacenado correctamente",
                        dataStudent:studentCreated
                    })
                }
            }
        })
}

/**
 * 
 * @param {*} req => Son todos los parametros que recibimos
 * @param {*} res => Respuesta
  */
/**/

function update(req, res){
    var parameters = req.body;
    var idStudent = req.params.idStudent;

    Student.findByIdAndUpdate( idStudent, parameters, (error, studentUpdated) => {
        if(error){
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        }else{
            if(!studentUpdated){
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al actualizar el usuario "
                })
            }else{
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario actualizado correctamenter"
                })
            }
        }
    } )
}

function remove(req, res){
    var idStudent = req.params.idStudent;

    Student.findOneAndDelete( idStudent, (error, studentRemoved) => {
            if (error) {
                res.status(500).send({
                    statusCode: 500,
                    message: "Error en el servidor"
                });
            } else {
                if (!studentRemoved) {
                    res.status(400).send({
                        statusCode: 400,
                        message: "Error al eliminar el usuario"
                    });
                } else {
                    res.status(200).send({
                        statusCode: 200,
                        message: "Usuario eliminado correctamente"
                    });
                }
            }
        })   
}

function getAllStudents(req, res){
    Student.find({}, (error, allStudents) => {
        if(error){
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        }else{
            res.status(200).send({
                statusCode: 200,
                message: "Todos los usuarios",
                allStudents: allStudents
            })
        }
    })
}

module.exports = {
    create,
    update,
    remove,
    getAllStudents
}

