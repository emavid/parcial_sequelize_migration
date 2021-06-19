'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasOne(models.OrderDetail,
        {
          foreignKey: "orderId",
          as: "orderDetails"
        }
        );
      Product.hasMany(models.Image,
        {
          foreignKey: "imageId",
          as: "images"
        }
        );
      Product.belongsTo(models.Brand);
      Product.belongsTo(models.Category);
      Product.belongsTo(models.Size);
      Product.belongsTo(models.Gender);
      
    }
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    stock_min: DataTypes.INTEGER,
    stock_max: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
    genderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};