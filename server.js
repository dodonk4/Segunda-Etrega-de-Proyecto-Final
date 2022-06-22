const port = 8080;
import express from 'express';
// import HttpServer from 'http';
import { engine } from 'express-handlebars';


import routerApiProductos from './routers/routerProductos.js';
import routerCarrito from './routers/routerCarrito.js';


const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(routerApiProductos);
app.use(routerCarrito);


app.engine('handlebars', engine({defaultLayout: "index"}));
app.set('view engine', 'handlebars');
app.set("views", "./views");


app.use(express.static('public'));


app.listen(port, () => console.log(`App listening to port ${port}`));


