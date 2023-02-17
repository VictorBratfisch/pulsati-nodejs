const { Model, DataTypes } = require('sequelize');
const dbConfig = require('../config-db').getDbConfig; 

class Venda extends Model {}
Venda.init({
    codigo: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true
      },
  codigoV: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  codigoP: {
    type: DataTypes.NUMBER
  },
  quantidade: {
    type: DataTypes.NUMBER
  }
}, 

{
  sequelize: dbConfig(),
  modelName: 'victor_2venda',
  timestamps: false
});

exports.Venda = Venda;