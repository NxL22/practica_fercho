import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME, // Nombre de la base de datos
  process.env.DB_USER, // Usuario de la base de datos
  process.env.PASSWORD_DATA_BASE, // Contraseña
  {
    host: process.env.DB_HOST || "localhost", // Dirección del servidor
    dialect: "postgres", // Usaremos PostgreSQL
    logging: false, // Desactiva el log de queries
  },
);

export default sequelize;