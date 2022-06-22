import pkg from 'mongoose';
const { model } = pkg;
import mongoose from 'mongoose'
import config from '../config.js'

await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options)



class contenedorMongoDb{
    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }

    async save(objeto){
            try {
                let date = Date.now();
                const producto = {id: objeto.id, title: objeto.title, codigo: objeto.codigo, foto: objeto.foto, precio: objeto.precio, stock: objeto.stock, timestap: date};
                const productoSaveModel = new this.coleccion(producto);
                let productoSave = await productoSaveModel.save();
                console.log(productoSave);
            } catch (error) {
                throw new Error(`Error en escritura: ${error}`)
            }
        
    }

    async deleteById(id){
        try {
            let productoAEliminar = await this.coleccion.deleteOne({id: id});
            console.log('El producto ha sido borrado exitosamente', productoAEliminar);
        }
        catch(err){
            throw new Error(`Error al : ${err}`)
        }
        
    }      
    

    async getAll(){
        try{
                let productos = await this.coleccion.find({})
                console.log(productos);
                console.log('getAll funcionando en MongoDB')
        }
        catch(err){
            throw new Error(`Error de lectura: ${err}`)
        }
    }

    async getById(id){   
        try{
            let producto = await this.coleccion.find({id: id})
                console.log(producto);
        }
        catch(err){
            throw new Error(`Error de lectura: ${err}`)
        }
    }
    async replace(id, datos){
        try{
            
            if (typeof datos.id !== 'undefined') {
                let item = await this.coleccion.updateOne({id: id},{
                    $set: {id: datos.id}
                })
                console.log('El producto ha sido actualizado', item)
                
            } else if(typeof datos.title !== 'undefined'){
                let item = await this.coleccion.updateOne({id: id},{
                    $set: {title: datos.title}
                    
                })
                console.log('El producto ha sido actualizado', item)
            } else if(typeof datos.codigo !== 'undefined'){
                let item = await this.coleccion.updateOne({id: id},{
                    $set: {codigo: datos.codigo}
                })
                console.log('El producto ha sido actualizado', item)
            } else if(typeof datos.foto !== 'undefined'){
                let item = await this.coleccion.updateOne({id: id},{
                    $set: {foto: datos.foto}
                })
                console.log('El producto ha sido actualizado', item)
            } else if(typeof datos.precio !== 'undefined'){
                let item = await this.coleccion.updateOne({id: id},{
                    $set: {precio: datos.precio}
                })
                console.log('El producto ha sido actualizado', item)
            } else if(typeof datos.stock !== 'undefined'){
                let item = await this.coleccion.updateOne({id: id},{
                    $set: {stock: datos.stock}
                })
                console.log('El producto ha sido actualizado', item)
            } else if(typeof datos.timestap !== 'undefined'){
                let item = await this.coleccion.updateOne({id: id},{
                    $set: {timestap: datos.timestap}
                })
                console.log('El producto ha sido actualizado', item)
            }        
        }
        catch(err){
            throw new Error(`Error de lectura: ${err}`)
        }
    }
    async getAllCarrito(){
        try{
            let carritos = await this.coleccion.find({})
                console.log(carritos);
                
        }
        catch(err){
            throw new Error(`Error de lectura: ${err}`)
        }
    }
    async createCarrito(objeto){
        try {
            let date = Date.now();
            const carrito = {id: objeto.id, productos: objeto.productos, timestap: date};//RECOMENDABLE COLOCAR UN ARRAY VACÍO EN "PRODUCTOS"
            const carritoSaveModel = new this.coleccion(carrito);
            let carritoSave = await carritoSaveModel.save();
            console.log(carritoSave);
        } catch (error) {
            throw new Error(`Error en escritura: ${error}`)
        }
    }
    async getByIdCarrito(id){
        try{
            let carrito = await this.coleccion.find({id: id})
                console.log(carrito);
        }
        catch(err){
            throw new Error(`Error de lectura: ${err}`)
        }
    }
    async addProductToCarrito (id){
        try {
            const coleccionProductos = mongoose.model('productos');
            let elegido = await coleccionProductos.find({id: id});
            // console.log(JSON.stringify(elegido[0]));
            let carrito = await this.coleccion.find({});
            let productosParseados = JSON.parse(carrito[0].productos);
            productosParseados.push(elegido[0]);
            let nuevosProductos = JSON.stringify(productosParseados);
            await this.coleccion.updateOne({id: 1},{
                $set: {productos: nuevosProductos}
            })
            console.log('Producto añadido');


        } catch(err){
            throw new Error(`Error de lectura: ${err}`)
        }
    }
    async deleteCarritoById(id){
        try {
            let carritoAEliminar = await this.coleccion.deleteOne({id: id});
            console.log('El producto ha sido borrado exitosamente', carritoAEliminar);
        }
        catch(err){
            throw new Error(`Error al : ${err}`)
        } 
    }
    async deleteProductoOfCarritoById(idCarrito, idProducto){
        try {
            let carrito = await this.coleccion.find({id: idCarrito});
            let productos = JSON.parse(carrito[0].productos);
            let index = productos.map(x => {
                            return x.id;
                          }).indexOf(idProducto);
                        productos.splice(index, 1);
            productos.splice(index, 1);
            console.log(productos);

        }
        catch(err){
            throw new Error(`Error al : ${err}`)
        }
        
    } 
}

export default contenedorMongoDb;