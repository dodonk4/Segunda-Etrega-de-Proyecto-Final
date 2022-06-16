// const express = require('express');
// const Router = require('express');
// import { express } from 'express';
import express from 'express';
import { Router } from 'express';

// const controladorProductos = require('../controladores/controladorProductos.js');
import controladorProductos from '../controladores/controladorProductos.js';

const routerApiProductos = new Router();

routerApiProductos.use(express.json());
routerApiProductos.use(express.urlencoded({ extended: true }));

routerApiProductos.get('/api/productos/', controladorProductos.getAll);
routerApiProductos.get('/api/productos/:id', controladorProductos.getById);
routerApiProductos.post('/api/productos/', controladorProductos.create);
routerApiProductos.delete('/api/productos/:id', controladorProductos.borrar);
routerApiProductos.delete('/api/productos/:id', controladorProductos.reemplazar);

// module.exports = routerApiProductos;
export default routerApiProductos;