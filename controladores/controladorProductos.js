import { productosDao } from '../daos/productos/index.js';

const controladoresProductos = {
    getAll: async (req, res) => {
        res.json(await productosDao.getAll());
    },
    create: async(req, res) => {
        res.json(await productosDao.save(req.body));
    },
    getById: async(req, res) =>{
        const id = req.params.id;
        res.json(await productosDao.getById(id))
    },
    borrar: async (req, res) =>{
        const id = req.params.id;
        try {
            await productosDao.deleteById(id);
            res.sendStatus(204);
        } catch (error) {
                res.json({ error: error.message });
        }
    },
    reemplazar: async (req, res) =>{
        const id = req.params.id;
        const datos = req.body;
        try {
            res.json(await productosDao.replace(id, datos))
        } catch (error) {
                res.json({ error: error.message })
        }
    }
}


export default controladoresProductos;