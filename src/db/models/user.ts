import { DataTypes } from "sequelize";
import sequelize from "../index";

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
  },
  provider: {
    type: DataTypes.ENUM("Credentials", "Github"),
    allowNull: false
  }
});

export default User;