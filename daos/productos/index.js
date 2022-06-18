import config from '../../config.js'

let productosDao
let carritosDao
switch (config.MODO_PERSISTENCIA) {
    case 'firebase':
        const { default: ProductosDaoFirebase } = await import('./productosDaoFirebase.js')
        const { default: CarritosDaoFirebase } = await import('./carritosDaoFirebase.js')
        carritosDao = new CarritosDaoFirebase()
        productosDao = new ProductosDaoFirebase()
        break
    // case 'mongodb':
    //     const { default: ProductosDaoMongoDb } = await import('./ProductosDaoMongoDb.js')
    //     productosDao = new ProductosDaoMongoDb()
    //     break
    
}

export { productosDao, carritosDao }
