import express from 'express';
import linksRouter from './routes/links';
import cors from 'cors';

const app = express();

app.use(express.json());

    app.use(cors({
        methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
    }));



app.use(linksRouter);


export default app;
