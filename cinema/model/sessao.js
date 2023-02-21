const { Model, DataTypes } = require('sequelize');
const dbConfig = require('../config-db').getDbConfig; 

    class Sessao extends Model {}
    Sessao.init({
        codigo: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
        },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    horario: {
        type: DataTypes.NUMBER
    },
    nomeFilme: {
        type: DataTypes.STRING
    },
    valor: {
        type: DataTypes.NUMBER
    },
    ingressosVendidos: {
        type: DataTypes.NUMBER
    },
    codSala: {
        type: DataTypes.NUMBER
    }
    }, 

    {
    sequelize: dbConfig(),
    modelName: 'victor_sessao',
    timestamps: false
    });

    exports.Sessao = Sessao;