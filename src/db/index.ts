import Sequelize from "sequelize";
import config from "./config/config";

const sequelize = new Sequelize(config.development);

const connection = sequelize;

export default connection;