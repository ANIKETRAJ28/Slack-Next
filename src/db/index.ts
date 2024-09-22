// package imports
import { Sequelize } from "sequelize";
import mysql from "mysql2/promise"; // Import mysql2 correctly
// file imports
import dbConfig from "./config";

const createDatabaseIfNotExists = async () => {
    // Create a connection without specifying a database
    const connection = await mysql.createConnection({
      host: dbConfig.HOST,
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
    });
  
    // Create the database if it doesn't exist
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.DB}\`;`);
    await connection.end();
  };

async function configureDB() {
    try {
        await createDatabaseIfNotExists();
        const sequelize = await new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
            host: dbConfig.HOST,
            dialect: dbConfig.DIALECT as "mysql",
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            dialectModule: require('mysql2'),
        });
        await sequelize.sync({ alter: true});
        await sequelize.authenticate();
        console.log("db connected");
    } catch (error) {
        console.log("db error", error);
    }
}

configureDB();

export default configureDB