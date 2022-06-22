import { query } from "express";
import admin from "firebase-admin"
import config from '../config.js'
import fs from 'fs'


admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
})



const db = admin.firestore();
class contenedorFirebase{
    constructor(nombreColeccion){
        this.coleccion = db.collection(nombreColeccion)
        this.contador = 0;
        if (nombreColeccion == 'productos'){
            this.contador = 1;
        }else if(nombreColeccion == 'carritos'){
            this.contador = 2;
        }
    }

    async save(objeto){
            try {
                    let id = objeto.id;
                    let doc = this.coleccion.doc(`${id}`);
                    await doc.create( { id: `${objeto.id}`, title: `${objeto.title}`, codigo: `${objeto.codigo}`, precio: `${objeto.precio}`, foto: `${objeto.foto}`, stock: `${objeto.stock}`, timestap: `${Date.now()}` } )    
            } catch (error) {
                throw new Error(`Error en escritura: ${error}`)
            }
        
    }

    async deleteById(id){
        try {
            const doc = this.coleccion.doc(`${id}`);
            let item = await doc.delete();
            console.log('El producto ha sido borrado exitosamente', item);
        }
        catch(err){
            throw new Error(`Error al : ${err}`)
        }
        
    }      
    

    async getAll(){
        try{
                let content = await this.coleccion.get();
                let docs = content.docs;

                const response = docs.map((doc)=>({
                    id: doc.data().id,
                    title: doc.data().title,
                    codigo: doc.data().codigo,
                    precio: doc.data().precio,
                    foto: doc.data().foto,
                    stock: doc.data().stock,
                    timestap: doc.data().timestap
                }))
                console.log(response);
                return response;
        }
        catch(err){
            throw new Error(`Error de lectura: ${err}`)
        }
    }

    async getById(id){   
        try{
            let content = await this.coleccion.get();
            let docs = content.docs;

            if(this.contador == 1){
                const response = docs.map((doc)=>({
                    id: doc.data().id,
                    title: doc.data().title,
                    codigo: doc.data().codigo,
                    precio: doc.data().precio,
                    foto: doc.data().foto,
                    stock: doc.data().stock,
                    timestap: doc.data().timestap
            })) 
            for (let i = 0; i < response.length; i++) {
                let dato = response[i];
                if(dato.id == id){
                    console.log(dato)
                    return dato
                }  
            }}else if(this.contador == 2){
                const response = docs.map((doc)=>({
                    id: doc.data().id,
                    productos: doc.data().productos,
                    timestap: doc.data().timestap
                }))
                for (let i = 0; i < response.length; i++) {
                    let dato = response[i];
                    if(dato.id == id){
                        console.log(dato)
                        return dato
                    }
                }
                
            }
            
        }
        catch(err){
            throw new Error(`Error de lectura: ${err}`)
        }
    }
    async replace(id, datos){
        try{
            let data = datos;
            console.log('ok');
            const doc = this.coleccion.doc(`${id}`);
            console.log(data);
            let item = await doc.update(data);
            console.log('El producto ha sido actualizado', item)
        }
        catch(err){
            throw new Error(`Error de lectura: ${err}`)
        }
    }
    async getAllCarrito(){
        try{
            let content = await this.coleccion.get();
                let docs = content.docs;

                const response = docs.map((doc)=>({
                    id: doc.data().id,
                    productos: doc.data().productos,
                    timestap: doc.data().timestap
            }))
            console.log(response);
            return response;
        }
        catch(err){
            throw new Error(`Error de lectura: ${err}`)
        }
    }
    async createCarrito(objeto){
        try{
            let id = objeto.id;
            let doc = this.coleccion.doc(`${id}`);
            await doc.create( { id: `${objeto.id}`, productos: [objeto.productos] , timestap: `${Date.now()}` } )  
        }
        catch(err){
            throw new Error(`Error en escritura: ${err}`)
        }
    }
    async addProductToCarrito (id){
        try {
            let coleccionDeProductos = await db.collection('productos').get();
            let productosDocs = coleccionDeProductos.docs;
            const response = productosDocs.map((doc)=>({
                id: doc.data().id,
                title: doc.data().title,
                codigo: doc.data().codigo,
                precio: doc.data().precio,
                foto: doc.data().foto,
                stock: doc.data().stock,
                timestap: doc.data().timestap
            }))
            let index = response.map(x => {
                return x.id;
            }).indexOf(id);
            let productoEncontrado = response[index];
            if (productoEncontrado == null) {
                console.log('Indique un producto con un ID valido')
            } else {
                let coleccionDeCarritos = await this.coleccion.get();
                let doc = coleccionDeCarritos.docs;
                const response2 = doc.map((doc)=>({
                    id: doc.data().id,
                    productos: doc.data().productos,
                    timestap: doc.data().timestap
                }))
                let prods = response2[0].productos;
                console.log(prods);
                prods = JSON.parse(prods);
                prods.push(productoEncontrado);
                let prods2 = JSON.stringify(prods);
                await this.coleccion.doc('nywdn3b56jKG2YZY2VBj').update({productos: prods2});
                console.log('El producto ha sido insertado', prods);
            }
            
        }catch(err){
            throw new Error(`Error en escritura: ${err}`)
        }
        
    }
    async deleteCarritoById(id){
        try {
            const doc = this.coleccion.doc(`${id}`);
            let item = await doc.delete();
            console.log('El carrito ha sido eliminado', item)
        }
        catch(err){
            throw new Error(`Error al : ${err}`)
        } 
    }
    async deleteProductoOfCarritoById(idCarrito, idProducto){
        try {
            let coleccionDeCarritos = await this.coleccion.get();
            let carritosDocs = coleccionDeCarritos.docs;
            const response = carritosDocs.map((doc)=>({
                id: doc.data().id,
                productos: doc.data().productos,
                timestap: doc.data().timestap
            }))
            let parsero = parseInt(idCarrito);
            let index = response.map(x => {
                console.log(x.id);
                return x.id;
            }).indexOf(parsero);
            let productosParseados = JSON.parse(response[index].productos);
            let index2 = productosParseados.map(x => {
                console.log(x.id);
                return x.id;
            }).indexOf(idProducto);
            if (productosParseados[index2]==null) {
                console.log('Indique un producto con un ID valido');
            } else {
                productosParseados.splice(index2,1);
                console.log(productosParseados);
                let prods = JSON.stringify(productosParseados);
                await this.coleccion.doc('nywdn3b56jKG2YZY2VBj').update({productos: prods});
                console.log('El producto a sido eliminado', prods);
            }
        }
        catch(err){
            throw new Error(`Error al : ${err}`)
        }
        
    } 
}

export default contenedorFirebase;