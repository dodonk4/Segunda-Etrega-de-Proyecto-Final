import ContenedorMongoDb from "../../public/contenedorMongoDb.js"

class CarritosDaoMongoDb extends ContenedorMongoDb {

    constructor() {
        super('carritos', {
            id: { type: Number, required: true },
            productos: { type: String, required: true },
            timestap: { type: Number, required: true }
        })
    }
}

export default CarritosDaoMongoDb