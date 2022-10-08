import { INTEGER, STRING, DATE, FLOAT, Sequelize } from 'sequelize';
import {sequelize} from "../data/connection.js";

const Product = sequelize.define("product", {
    idProducts: { 
        type: INTEGER,  
        primaryKey: true, 
        autoIncrement: true
    },
    name: { 
        type: STRING,
        max: 30, 
        allowNull: false 
    },
    brand: { 
        type: STRING,
        max: 20, 
        allowNull: false 
    },
    description: { 
        type: STRING,
        max: 100, 
        allowNull: false 
    },
    price: { 
        type: FLOAT,
        allowNull: false 
    },
    stock: { 
        type: INTEGER,
        allowNull: false 
    },
    createdAt: { 
        type: DATE,
        allowNull: false,
        defaultValue:  Sequelize.NOW
    },
    updatedAt: { 
        type: DATE,
        allowNull: false,
        defaultValue:  Sequelize.NOW 
    },
});

// Test
sequelize.sync().then(() => {
    console.log('Se creo el producto');
 }).catch((error) => {
    console.error('No se pudó crear el producto : ', error);
 });