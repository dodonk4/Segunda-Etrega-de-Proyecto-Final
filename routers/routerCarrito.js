// const express = require('express');
// const Router = require('express');
import express from 'express';
import { Router } from 'express';

// const controladorCarrito = require('../controladores/controladorProductos.js');
import controladorCarrito from '../controladores/controladorProductos.js';

const routerApiCarrito = new Router();

routerApiCarrito.use(express.json());
routerApiCarrito.use(express.urlencoded({ extended: true }));

routerApiCarrito.get('/api/carrito/', controladorCarrito.getAllCarrito);
routerApiCarrito.get('/api/Carrito/:id/productos', controladorCarrito.getByIdCarrito);
routerApiCarrito.post('/api/carrito/', controladorCarrito.createCarrito);
routerApiCarrito.post('/api/carrito/:id/productos', controladorCarrito.addProductToCarrito);
routerApiCarrito.delete('/api/carrito/:id', controladorCarrito.deleteCarritoById);
routerApiCarrito.delete('/api/carrito/:id/productos/:id_prod', controladorCarrito.deleteProductoOfCarritoById);

export default routerApiCarrito;