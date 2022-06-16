// const fs = require('fs');
// module.exports = class ContenedorArchivo{
//     constructor(archivo){
//         this.archivo = archivo;
    
//     }

//     // async save(objeto){
//     //         try{
//     //             let leido = await fs.promises.readFile(this.archivo);
//     //             let stringed = leido.toString('utf8');
//     //             let parseado = JSON.parse(stringed);
//     //             parseado.push(objeto);
//     //             await fs.promises.writeFile(this.archivo, JSON.stringify(parseado), 'utf-8');
//     //         }
//     //         catch(err){
//     //             throw new Error(`Error en escritura: ${err}`)
//     //         }

//     async create(objeto){
//             try{
//                 let leido = await fs.promises.readFile(this.archivo);
//                 let stringed = leido.toString('utf8');
//                 let parseado = JSON.parse(stringed);
//                 let timestap = "ejemplo";
//                 objeto.timestap = timestap;
//                 let objeto2 = {"nombre": "pera"}
//                 objeto.productos = objeto2;
//                 objeto2.nombre = "manzana";
//                 // obj.nombre = "manzana";
//                 parseado.push(objeto);
//                 await fs.promises.writeFile(this.archivo, JSON.stringify(parseado), 'utf-8');
//             }
//             catch(err){
//                 throw new Error(`Error en escritura: ${err}`)
//             }
            
//         }
        
//     // }

//     // async deleteById(id){
//     //     try {
//     //         let content = await this.getAll();
//     //         let index = content.map(x => {
//     //             return x.id;
//     //           }).indexOf(id);
//     //         content.splice(index, 1);
//     //         let f = JSON.stringify(content);
//     //         await fs.promises.writeFile(this.archivo, f, 'utf-8');
//     //     }
//     //     catch(err){
//     //         throw new Error(`Error al : ${err}`)
//     //     }
        
//     // }      
    
//     // async deleteAll(){
//     //     try{
//     //         await fs.promises.writeFile(this.archivo, '[]');
//     //     }
//     //     catch(err){
//     //         throw new Error(`Error al escribir: ${err}`)
//     //     }
        
//     // }

//     async getAll(){
//         try{
//             let content = await fs.promises.readFile(this.archivo);
//             return JSON.parse(content);
//         }
//         catch(err){
//             throw new Error(`Error de lectura: ${err}`)
//         }
//     }

//     // async getById(id){
//     //     let content = await this.getAll(); 
//     //     return content.find(objeto => objeto.id === id) ?? null  
//     // }
//     // async replace(id, datos){
//     //     try{
//     //         let content = await this.getAll();
//     //         let productoBuscado = content.findIndex(p => p.id === id);
//     //         let producto = datos;
//     //         producto.id = id;
//     //         content[productoBuscado] = producto;
//     //         let f = JSON.stringify(content);
//     //         await fs.promises.writeFile(this.archivo, f, 'utf-8');
//     //     }
//     //     catch(err){
//     //         throw new Error(`Error de lectura: ${err}`)
//     //     }
//     // }
// }
