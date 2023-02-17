const { Model, DataTypes } = require('sequelize');
const dbConfig = require('../config-db').getDbConfig; 

class Autor extends Model {}
Autor.init({
    codigo: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true
      },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sobrenome: {
    type: DataTypes.STRING
  },
  data_nascimento: {
    type: DataTypes.DATEONLY
  }
}, 

{
  sequelize: dbConfig(),
  modelName: 'victor_autores',
  timestamps: false
});

exports.Autor = Autor;