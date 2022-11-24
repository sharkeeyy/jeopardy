'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Theme, { foreignKey: 'theme_id' });
    }
  }
  Question.init({
    theme_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Themes',
        key: 'id',
      }
    },
    name: DataTypes.STRING,
    answer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};