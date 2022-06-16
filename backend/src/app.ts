import express from 'express';
import linksRouter from './routes/links';
import cors from 'cors';

const app = express();
const allowedOrigins = ['http://www.prea.tk', 'http://api.prea.tk:3001'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(express.json());
app.use(cors(options));
app.use(linksRouter);


export default app;
