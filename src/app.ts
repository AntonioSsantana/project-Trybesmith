import express from 'express';
import productRoute from './routes/Product.route';
import userRoute from './routes/User.route';

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/users', userRoute);

export default app;
