// const fs = require('fs');
import fs from 'fs';
class ContenedorArchivo{
    constructor(archivo, archivo2){
        this.archivo = archivo;
        this.archivo2 = archivo2; 
    
    }

    async save(objeto){
            try{
                let leido = await fs.promises.readFile(this.archivo);
                let stringed = leido.toString('utf8');
                let parseado = JSON.parse(stringed);
                objeto.timestap = Date.now();
                parseado.push(objeto);
                await fs.promises.writeFile(this.archivo, JSON.stringify(parseado), 'utf-8');
            }
            catch(err){
                throw new Error(`Error en escritura: ${err}`)
            }
        
    }

    async deleteById(id){
        try {
            let content = await this.getAll();
            let index = content.map(x => {
                return x.id;
              }).indexOf(id);
            content.splice(index, 1);
            let f = JSON.stringify(content);
            await fs.promises.writeFile(this.archivo, f, 'utf-8');
        }
        catch(err){
            throw new Error(`Error al : ${err}`)
        }
        
    }      
    
    async deleteAll(){
        try{
            await fs.promises.writeFile(this.archivo, '[]');
        }
        catch(err){
            throw new Error(`Error al escribir: ${err}`)
        }
        
    }

    async getAll(){
        try{
            let content = await fs.promises.readFile(this.archivo);
            return JSON.parse(content);
        }
        catch(err){
            throw new Error(`Error de lectura: ${err}`)
        }
    }

    async getById(id){
        let content = await this.getAll(); 
        return content.find(objeto => objeto.id === id) ?? null  
    }
    async replace(id, datos){
        try{
            let content = await this.getAll();
            let productoBuscado = content.findIndex(p => p.id === id);
            let producto = datos;
            producto.id = id;
            content[productoBuscado] = producto;
            let f = JSON.stringify(content);
            await fs.promises.writeFile(this.archivo, f, 'utf-8');
        }
        catch(err){
            throw new Error(`Error de lectura: ${err}`)
        }
    }
    async getAllCarrito(){
        try{
            let content = await fs.promises.readFile(this.archivo2);
            return JSON.parse(content);
        }
        catch(err){
            throw new Error(`Error de lectura: ${err}`)
        }
    }
    async createCarrito(carrito){
        try{
            let leido = await fs.promises.readFile(this.archivo2);
            let stringed = leido.toString('utf8');
            let parseado = JSON.parse(stringed);
            carrito.timestap = Date.now();
            parseado.push(carrito);
            await fs.promises.writeFile(this.archivo2, JSON.stringify(parseado), 'utf-8');
        }
        catch(err){
            throw new Error(`Error en escritura: ${err}`)
        }
    }
    async getByIdCarrito(id){
        let content = await this.getAllCarrito(); 
        let encontrado = content.find(objeto => objeto.id === id) ?? null;
        return encontrado.productos;
    }
    async addProductToCarrito (id){
        let content = await this.getAllCarrito();
        let carro = content[0];
        let productoElegido = await this.getById(id);
            let x = [];
            
            if ((carro.productos = "{}") || (carro.productos = "[]")){
                carro.productos = productoElegido;            
            }else{
                x.push(productoElegido);
            }
            x.push(carro.productos);
            carro.productos = x;
            await fs.promises.writeFile(this.archivo2, JSON.stringify(content), 'utf-8');
    }
    async deleteCarritoById(id){
        try {
            let content = await this.getAllCarrito();
            let index = content.map(x => {
                return x.id;
              }).indexOf(id);
            content.splice(index, 1);
            let f = JSON.stringify(content);
            await fs.promises.writeFile(this.archivo2, f, 'utf-8');
        }
        catch(err){
            throw new Error(`Error al : ${err}`)
        } 
    }
    async deleteProductoOfCarritoById(idCarrito, idProducto){
        try {
            let content = await this.getAllCarrito();
            let carritoEncontrado = content.find(objeto => objeto.id === idCarrito) ?? null;
            let index = carritoEncontrado.productos.map(x => {
                return x.id;
              }).indexOf(idProducto);
            carritoEncontrado.productos.splice(index, 1);
            let f = JSON.stringify(content);
            await fs.promises.writeFile(this.archivo2, f, 'utf-8');
        }
        catch(err){
            throw new Error(`Error al : ${err}`)
        }
        
    } 
}

export default ContenedorArchivo;