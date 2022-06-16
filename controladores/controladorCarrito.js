// const ContenedorArchivo = require('../public/databaseCarrito.js');


// const contenedor = new ContenedorArchivo('./public/carrito.txt');
// const controladoresCarrito = {
//     getAll: async (req, res) => {
//         // res.send('Funciono correctamente');
//         res.json(await contenedor.getAll());
//     },
//     create: async(req, res) => {
//         res.json(await contenedor.create(req.body));
//     },
//     // getById: async(req, res) =>{
//     //     const id = req.params.id;
//     //     res.json(await contenedor.getById(id))
//     // },
//     // borrar: async (req, res) =>{
//     //     const id = req.params.id;
//     //     try {
//     //         await contenedor.deleteById(id);
//     //         res.sendStatus(204);
//     //     } catch (error) {
//     //             res.json({ error: error.message });
//     //     }
//     // },
//     // reemplazar: async (req, res) =>{
//     //     const id = req.params.id;
//     //     const datos = req.body;
//     //     try {
//     //         res.json(await contenedor.replace(id, datos))
//     //     } catch (error) {
//     //             res.json({ error: error.message })
//     //     }
//     // } 

// }


// module.exports = controladoresCarrito;