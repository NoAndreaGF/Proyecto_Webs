import { INTEGER, DATE, Sequelize } from 'sequelize';
import {sequelize} from "../data/connection.js";

const Out = sequelize.define("out", {
    idOut: { 
        type: INTEGER,  
        primaryKey: true, 
        autoIncrement: true
    },
    quantity: { 
        type: INTEGER,
        allowNull: false 
    },
    idProducts: { 
        type: INTEGER,  
        secundaryKey: true,
        allowNull: false 
    },
    date: { 
        type: DATE,
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
    console.log('Se creo la salida');
 }).catch((error) => {
    console.error('No se pudó crear la salida : ', error);
 });