//Dependencis
require('dotenv').config();
import express from 'express';
import { connect } from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const router = express.Router();

//Conect to MONGODB
connect(process.env.MONGO_URL, { useNewUrlParser: true });

//API
import apiBooksRoute from './api/routes/books.route.js';

//ROUTE
import createUser from './routes/user.route.js';
import authUser from './routes/auth.route.js';
//import verifyTokenRoute from './middlewares/verifyToken.middleware.js';

const app = express();
const port = 5000;

app.use(express.json()); 
app.use(cookieParser());
app.use(cors());

app.use('/api/books', apiBooksRoute);
app.use('/user', createUser);
app.use('/user', authUser);

app.get('/test', async (req, res) => {
    res.send('Welcomeeeeeeeeeeeeeeeeeeeeeee to my World');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

