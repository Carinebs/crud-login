import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserTable1682635703325 } from './migrations/1682635703325-UserTable'
// import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [UserTable1682635703325],
    subscribers: [],
})
