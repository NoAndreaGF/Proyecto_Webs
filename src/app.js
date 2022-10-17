import express from 'express';
import { morganMiddleware } from './middlewares/morgan.middleware.js';
import { customersRouter } from './routes/customers.route.js';
import { insRouter } from './routes/ins.route.js';
import { ordersRouter } from './routes/orders.route.js';
import { outsRouter } from './routes/outs.route.js';
import { productsRouter } from './routes/products.route.js';
import { relProductOrdersRouter } from './routes/relProductOrder.route.js';
import { usersRouter } from './routes/users.route.js';


const port = process.env.PORT || 2526;
const app = express();


//middleware en morgan para logs
app.use(morganMiddleware);

app.use('/customers', customersRouter);
app.use('/ins', insRouter);
app.use('/orders', ordersRouter);
app.use('/outs', outsRouter);
app.use('/products', productsRouter);
app.use('/relProductOrders', relProductOrdersRouter);
app.use('/users', usersRouter);


app.listen(port, ()=> {
    console.log(`El server esta en linea en el puerto: ${port}`);
});
