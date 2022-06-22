import { carritosDao } from '../daos/productos/index.js';

const controladoresCarritos = {
    create: async(req, res) => {
        res.json(await carritosDao.createCarrito(req.body));
    },
    getAll: async (req, res) => {
        res.json(await carritosDao.getAllCarrito());
    },
    getById: async(req, res) =>{
        const id = req.params.id;
        res.json(await carritosDao.getById(id));
    },
    addProductToCarrito: async(req, res) => {
        const id = req.params.id;
        res.json(await carritosDao.addProductToCarrito(id));
    },
    deleteCarritoById: async (req, res) =>{
        const id = req.params.id;
        try {
            await carritosDao.deleteCarritoById(id);
            res.sendStatus(204);
        } catch (error) {
                res.json({ error: error.message });
        }
    },
    deleteProductoOfCarritoById: async(req, res) => {
        const idCarrito = req.params.id;
        const idProd = req.params.id_prod;
        try{
            await carritosDao.deleteProductoOfCarritoById(idCarrito, idProd);
            res.sendStatus(204);
        } catch (error) {
                res.json({ error: error.message });
        }
    }

}


export default controladoresCarritos;