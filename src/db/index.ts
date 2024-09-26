import Sequelize from "sequelize";
import config from "./config/config";

const sequelize = new Sequelize(config.development);
// if(process.env.DB_SYNC) sequelize.sync({force: true});

const connection = sequelize;

export default connection;