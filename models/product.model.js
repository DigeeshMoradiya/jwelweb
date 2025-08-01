const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Product', {
       name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      skuno: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: true,
      }, 
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    
      weight: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      images: {
        type: DataTypes.JSON, 
        allowNull: true,
      },
      big_images: {
        type: DataTypes.JSON, 
        allowNull: true,
      },
      is_new: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      is_size: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      silver_prices: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      prices: {
        type: DataTypes.JSON,
        allowNull: true,
      },
        is_sell: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      size: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      material: {
        type: DataTypes.JSON, // Change to JSON
        allowNull: true,
      },
      international_price: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      delivery_day : {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      short_description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      is_block: { type: DataTypes.BOOLEAN },
      
     
    }, {
      timestamps: true,   
      paranoid: true,    
    });
   
};
    