// const ContenedorArchivo = require('../public/databaseProductos.js');
import ContenedorArchivo from "../public/databaseProductos.js";


const contenedor = new ContenedorArchivo('./public/productos.txt', './public/carrito.txt');
const controladoresProductos = {
    getAll: async (req, res) => {
        // res.send('Funciono correctamente');
        res.json(await contenedor.getAll());
    },
    create: async(req, res) => {
        res.json(await contenedor.save(req.body));
    },
    getById: async(req, res) =>{
        const id = req.params.id;
        res.json(await contenedor.getById(id))
    },
    borrar: async (req, res) =>{
        const id = req.params.id;
        try {
            await contenedor.deleteById(id);
            res.sendStatus(204);
        } catch (error) {
                res.json({ error: error.message });
        }
    },
    reemplazar: async (req, res) =>{
        const id = req.params.id;
        const datos = req.body;
        try {
            res.json(await contenedor.replace(id, datos))
        } catch (error) {
                res.json({ error: error.message })
        }
    },
    getAllCarrito: async (req, res) => {
        res.json(await contenedor.getAllCarrito());
    },
    createCarrito: async(req, res) => {
        res.json(await contenedor.createCarrito(req.body));
    },
    getByIdCarrito: async(req, res) => {
        const id = req.params.id;
        res.json(await contenedor.getByIdCarrito(id));
    },
    addProductToCarrito: async(req, res) => {
        const id = req.params.id;
        res.json(await contenedor.addProductToCarrito(id));
    },
    deleteCarritoById: async (req, res) =>{
        const id = req.params.id;
        try {
            await contenedor.deleteCarritoById(id);
            res.sendStatus(204);
        } catch (error) {
                res.json({ error: error.message });
        }
    },
    deleteProductoOfCarritoById: async(req, res) => {
        const idCarrito = req.params.id;
        const idProd = req.params.id_prod;
        try{
            await contenedor.deleteProductoOfCarritoById(idCarrito, idProd);
            res.sendStatus(204);
        } catch (error) {
                res.json({ error: error.message });
        }
    }
}


// module.exports = controladoresProductos;
export default controladoresProductos;