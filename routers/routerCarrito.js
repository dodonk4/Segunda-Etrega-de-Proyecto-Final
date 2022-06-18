import express from 'express';
import { Router } from 'express';

import controladorCarrito from '../controladores/controladorCarrito.js';

const routerApiCarrito = new Router();

routerApiCarrito.use(express.json());
routerApiCarrito.use(express.urlencoded({ extended: true }));

routerApiCarrito.get('/api/carrito/', controladorCarrito.getAll);
// routerApiCarrito.get('/api/Carrito/:id/productos', controladorCarrito.getByIdCarrito);
routerApiCarrito.post('/api/carrito/', controladorCarrito.create);
// routerApiCarrito.post('/api/carrito/:id/productos', controladorCarrito.addProductToCarrito);
// routerApiCarrito.delete('/api/carrito/:id', controladorCarrito.deleteCarritoById);
// routerApiCarrito.delete('/api/carrito/:id/productos/:id_prod', controladorCarrito.deleteProductoOfCarritoById);

export default routerApiCarrito;