const sequelize = require('sequelize');
const connection = require("../../DB/database");

const User = connection.define(
    "clientes",
    {
        cod_user:{
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unsigned: true
        },
        username:{
            type: sequelize.STRING(255),
            allowNull: false
        },
        email:{
            type: sequelize.STRING(255),
            allowNull: false
        },
        password:{
            type: sequelize.STRING(255),
            allowNull: false
        },        
        contact:{
            type: sequelize.STRING(255),
            allowNull: false
        },
        birth_day:{
            type: sequelize.DATE(),
            allowNull: false
        },
        main_device:{
            type: sequelize.STRING(255),
            allowNull: false
        },
        user_picture:{
            type: sequelize.STRING(255),
            allowNull: true
        },
        picture_url:{
            type: sequelize.STRING(255),
            allowNull: true
        },               
        verified:{
            type: sequelize.BOOLEAN,
            allowNull: false
        }        
    }
);

User.sync({force:false});

module.exports = User;
