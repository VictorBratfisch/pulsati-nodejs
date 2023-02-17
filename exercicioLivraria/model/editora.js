const { Model, DataTypes } = require('sequelize');
const dbConfig = require('../config-db').getDbConfig; 

class Editora extends Model {}
Editora.init({
    codigo: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true
      },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cnpj: {
    type: DataTypes.NUMBER
  },
}, 

{
  sequelize: dbConfig(),
  modelName: 'victor_editoras',
  timestamps: false
});

exports.Editora = Editora;