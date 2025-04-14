import 'reflect-metadata';
import express from "express";
import cors from "cors";
import { routes } from "./routes";

const corsOptions = {
    // origin: [
    //     "http://localhost:3000",
    // ],
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

const app = express();
app.set('trust proxy', true);
app.use(cors(corsOptions));
app.use(express.json());
app.use('/', routes)

export { app };
