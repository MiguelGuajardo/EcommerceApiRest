const mongoose = require("mongoose")
mongoose.set("strictQuery", false);
async function Conn(){
    try {
        await mongoose.connect(`${process.env.URI_MONGO}`)
        console.log("Conexión a la DB exitosa")
    } catch (error) {
        console.log("Error de conexión a la DB:", error)
    }
}
Conn()