import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserTable1682635703325 } from './migrations/1682635703325-UserTable';
import User from "../app/entities/User";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "310520",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [UserTable1682635703325],
    subscribers: [],
})
