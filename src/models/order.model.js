import { INTEGER, STRING, DATE, FLOAT, Sequelize } from 'sequelize';
import {sequelize} from "../data/connection.js";

const Order = sequelize.define("order", {
    idOrder: { 
        type: INTEGER,  
        primaryKey: true, 
        autoIncrement: true
    },
    idCustomer: { 
        type: INTEGER, 
        secondaryKey: true,
        allowNull: false 
    },
    orderDate: { 
        type: DATE, 
        allowNull: false 
    },
    deliveryDate: { 
        type: DATE,
        allowNull: false 
    },
    status: { 
        type: STRING, 
        max: 20, 
        allowNull: false 
    },
    totalAmount: { 
        type: FLOAT,
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
    console.log('Se creo la orden');
 }).catch((error) => {
    console.error('No se pudó crear la orden : ', error);
 });