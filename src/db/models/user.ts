import { Model } from "sequelize";

const User = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Workshop, {
        foreignKey: "userId"
      });
    }
  }
  User.init({
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
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

export default User;