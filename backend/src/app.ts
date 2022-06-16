import express from 'express';
import linksRouter from './routes/links';
import cors from 'cors';

const app = express();
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, PUT, POST, DELETE, PATCH"
}
app.use(express.json());
app.use(cors(corsOptions));
app.use(linksRouter);


export default app;
