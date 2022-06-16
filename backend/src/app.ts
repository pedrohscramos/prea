import express from 'express';
import linksRouter from './routes/links';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use(linksRouter);
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-type, Accept, privatekey')
    next();
});

export default app;
