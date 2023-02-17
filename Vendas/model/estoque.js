const { Model, DataTypes } = require('sequelize');
const dbConfig = require('../config-db').getDbConfig; 

class Estoque extends Model {}
Estoque.init({
    codigoP: {
      type: DataTypes.NUMBER
      },
    quantidade: {
        type: DataTypes.NUMBER
    }
}, 
{
  sequelize: dbConfig(),
  modelName: 'victor_estoque',
  timestamps: false
});

exports.Estoque = Estoque;