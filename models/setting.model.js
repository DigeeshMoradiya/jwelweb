 
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Setting', {
    key: { type: DataTypes.STRING, allowNull: true },
    value: { type: DataTypes.STRING, allowNull: true },
     
    }, {
      timestamps: true,   
      paranoid: true,    
    });
   
};
    

