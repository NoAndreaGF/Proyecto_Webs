import { INTEGER, STRING, DATE } from 'sequelize';
import {sequelize} from "../data/connection.js";

const Customer = sequelize.define("customer", {
    idCustomer: { 
        type: INTEGER,  
        primaryKey: true, 
        autoIncrement: true
    },
    name: { 
        type: STRING, 
        max: 30, 
        allowNull: false 
    },
    lastName: { 
        type: STRING, 
        max: 20,
        allowNull: false 
    },
    phone: { 
        type: STRING, 
        max: 10,
        min: 10, 
        allowNull: false,
        unique: true 
    },
    address: { 
        type: STRING, 
        max: 100, 
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
    console.log('Se creo el cliente');
 }).catch((error) => {
    console.error('No se pudó crear el cliente : ', error);
 });