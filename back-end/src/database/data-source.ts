import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserTable1682635703325 } from './migrations/1682635703325-UserTable';
import User from "../app/entities/User";
import * as dotenv from 'dotenv'
dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username:process.env.DB_NAME,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [UserTable1682635703325],
    subscribers: [],
})
