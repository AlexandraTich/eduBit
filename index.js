// Aquí nos conectamos a la base de datos

const mongoose = require("mongoose");
const app = require("./app");
const port = 5000;

mongoose.connect(
    "mongodb://localhost:27017/eduBit",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (error, res) => {
        if (error) {
            console.log("Error de conexión", error);
        } else {
            console.log("Nos conectamos correctamente");
            //El metodoo listen hace que la api escuche en un puerto especifico
            app.listen(port, () => {
                console.log("Escuchando en el puerto", port);
            });
        }
    }
);
