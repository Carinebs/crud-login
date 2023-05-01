import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { AppDataSource } from './database/data-source'; 
import routers from './app/routes/routes';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routers);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

AppDataSource.initialize().then(async () => {
    console.log('server connect')
    app.listen(3333, () => {
        console.log('Server started on port 3333')
    });
});


