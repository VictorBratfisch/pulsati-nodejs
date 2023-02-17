const { Model, DataTypes } = require('sequelize');
const dbConfig = require('../config_db').getDbConfig; 

class Passageiro extends Model{}
Passageiro.init({
  codigo:{
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  }},
  
  {
    sequelize: dbConfig(),
    modelName: 'victor_passageiros',
    timestamps: false
  });
    
  exports.Passageiro = Passageiro;