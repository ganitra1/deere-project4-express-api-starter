'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      Author.hasMany(models.Title, { foreignKey: "authorId" });
      Author.belongsToMany(models.User, {
        through: "UserAuthor",
        foreignKey: "authorId",
        otherKey: "userId",
      })
    }
  };
  Author.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};