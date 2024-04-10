const sequelize = require('sequelize');
const connection = require("../../DB/database");
const Technician = require('./Technician');

const EmailOTP = connection.define(
    "emailOTP",
    {
        userId:{
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unsigned: true
        },
        uniqueString:{
            type: sequelize.STRING(255),
            allowNull: false
        },
        createdAt:{
            type: sequelize.DATE(),
            allowNull: false
        },
        expiresAt:{
            type: sequelize.DATE(),
            allowNull: false
        },                
    }
);

EmailOTP.sync({force:false});

Technician.hasMany(EmailOTP, {
    foreignKey: 'userId',
    sourceKey: 'cod_technician'
});

Technician.belongsTo(EmailOTP, {
    foreignKey: 'userId',
    sourceKey: 'cod_technician'
});

module.exports = EmailOTP;