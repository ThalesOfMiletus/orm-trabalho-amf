import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateUsersTable1705752946855 } from './migrations/1723596907187-CreateUsersTable';
import User from "../app/entities/Users";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "projeto_typeorm",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [CreateUsersTable1705752946855],
  subscribers: [],
});