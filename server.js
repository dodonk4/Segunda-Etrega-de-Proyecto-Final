const port = 8080;
// const express = require('express');
// const { Server: HttpServer } = require('http');
// const { engine } = require('express-handlebars');
import express from 'express';
// import HttpServer from 'http';
import { engine } from 'express-handlebars';


// const routerProductos = require('./routers/routerProductos.js') ;
// const routerCarrito = require('./routers/routerCarrito.js');
import routerApiProductos from './routers/routerProductos.js';
import routerCarrito from './routers/routerCarrito.js';


const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(routerApiProductos);
app.use(routerCarrito);


app.engine('handlebars', engine({defaultLayout: "index"}));
app.set('view engine', 'handlebars');
app.set("views", "./views");
// const httpServer = new HttpServer(app);

app.use(express.static('public'));

// httpServer.listen(port, () => console.log(`App listening to port ${port}`));
app.listen(port, () => console.log(`App listening to port ${port}`));


