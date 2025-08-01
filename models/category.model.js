const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Category', {
    name: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
    slug: { type: DataTypes.STRING },
    parent_category_id: { type: DataTypes.INTEGER },
    deletedAt: { type: DataTypes.DATE },
    is_block: { type: DataTypes.BOOLEAN },
      
    }, {
      timestamps: true,   
      paranoid: true,    
    });
   
};
    