import "reflect-metadata"
import { DataSource } from "typeorm"
// import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "310520",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})