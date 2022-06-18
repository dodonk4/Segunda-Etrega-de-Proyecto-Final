// import ContenedorFirebase from "../../contenedores/contenedorFirebase.js"
import ContenedorFirebase from "../../public/contenedorFirebase.js"

class ProductosDaoFirebase extends ContenedorFirebase {

    constructor() {
        super('productos')
    }
}

export default ProductosDaoFirebase