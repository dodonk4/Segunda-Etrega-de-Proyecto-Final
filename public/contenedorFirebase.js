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
    // async getByIdCarrito(id){
    //     let content = await this.getAllCarrito(); 
    //     let encontrado = content.find(objeto => objeto.id === id) ?? null;
    //     return encontrado.productos;
    // }
    // async addProductToCarrito (id){
    //     let content = await this.getAllCarrito();
    //     let carro = content[0];


    //     // let productoElegido = await this.getById(id);

    //         let content2 = await fs.promises.readFile(this.archivo);
    //         let content3 = JSON.parse(content2);
    //         let productoElegido = content3.find(objeto => objeto.id === id) ?? null


    //         let x = [];
            
    //         if ((carro.productos = "{}") || (carro.productos = "[]")){
    //             carro.productos = productoElegido;            
    //         }else{
    //             x.push(productoElegido);
    //         }
    //         x.push(carro.productos);
    //         carro.productos = x;
    //         await fs.promises.writeFile(this.archivo2, JSON.stringify(content), 'utf-8');
    // }
    // async deleteCarritoById(id){
    //     try {
    //         let content = await this.getAllCarrito();
    //         let index = content.map(x => {
    //             return x.id;
    //           }).indexOf(id);
    //         content.splice(index, 1);
    //         let f = JSON.stringify(content);
    //         await fs.promises.writeFile(this.archivo2, f, 'utf-8');
    //     }
    //     catch(err){
    //         throw new Error(`Error al : ${err}`)
    //     } 
    // }
    // async deleteProductoOfCarritoById(idCarrito, idProducto){
    //     try {
    //         let content = await this.getAllCarrito();
    //         let carritoEncontrado = content.find(objeto => objeto.id === idCarrito) ?? null;
    //         let index = carritoEncontrado.productos.map(x => {
    //             return x.id;
    //           }).indexOf(idProducto);
    //         carritoEncontrado.productos.splice(index, 1);
    //         let f = JSON.stringify(content);
    //         await fs.promises.writeFile(this.archivo2, f, 'utf-8');
    //     }
    //     catch(err){
    //         throw new Error(`Error al : ${err}`)
    //     }
        
    // } 
}

export default contenedorFirebase;