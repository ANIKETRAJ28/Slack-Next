import { Sequelize } from "sequelize";

import { options } from "./config";

const sequelize = new Sequelize({
    host: options.HOST,
    username: options.USER,
    password: options.PASSWORD,
    database: options.DB,
    dialect: options.DIALECT,
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    dialectModule: require("mysql2"),
    benchmark: true
});

const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("DB connected successfully");
        await sequelize.sync({ alter: true });
    } catch (error) {
        console.log("Unable to connect DB with error...", error);
    }
};

dbConnection();

export default sequelize;