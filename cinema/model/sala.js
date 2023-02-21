const { Model, DataTypes } = require('sequelize');
    const dbConfig = require('../config-db').getDbConfig; 

    class Sala extends Model {}
    Sala.init({
        codigo: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
        },
    nomeSala: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capacidade: {
        type: DataTypes.NUMBER
    }
    }, 

    {
    sequelize: dbConfig(),
    modelName: 'victor_sala2',
    timestamps: false
    });

    exports.Sala = Sala;