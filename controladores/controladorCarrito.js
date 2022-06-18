import { carritosDao } from '../daos/productos/index.js';

const controladoresCarritos = {
    create: async(req, res) => {
        res.json(await carritosDao.createCarrito(req.body));
    },
    getAll: async (req, res) => {
        res.json(await carritosDao.getAllCarrito());
    },


}


export default controladoresCarritos;