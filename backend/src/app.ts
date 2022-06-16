import express from 'express';
import linksRouter from './routes/links';
import cors from 'cors';

const app = express();

app.use(express.json());
const whitelist = ["http://www.prea.tk"]

const corsOptions = {

  origin: function (origin:any, callback:any) {

    if (!origin || whitelist.indexOf(origin) !== -1) {

      callback(null, true)

    } else {

      callback(new Error("Not allowed by CORS"))

    }

  },

  credentials: true,

}

app.use(cors(corsOptions))
app.use(linksRouter);


export default app;
