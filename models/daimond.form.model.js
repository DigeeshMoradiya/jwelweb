const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('DaimonForm', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },
    phoneno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.JSON,  
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  }, {
    timestamps: true,
    paranoid: true
  });
};
