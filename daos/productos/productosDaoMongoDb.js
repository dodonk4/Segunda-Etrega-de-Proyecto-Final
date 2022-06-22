import ContenedorMongoDb from "../../public/contenedorMongoDb.js"

class ProductosDaoMongoDb extends ContenedorMongoDb {

    constructor() {
        super('productos', {
            id: { type: Number, required: true },
            title: { type: String, required: true },
            codigo: { type: Number, required: true },
            foto: { type: String, required: true },
            precio: { type: Number, required: true },
            stock: { type: Number, required: true },
            timestap: { type: Number, required: true }
        })
    }
}

export default ProductosDaoMongoDb