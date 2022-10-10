import { INTEGER, STRING, DATE, FLOAT } from 'sequelize';
import { sequelize } from '../data/connection.js';

const Order = sequelize.define("order", {
    idOrder: { 
        type: INTEGER,  
        primaryKey: true, 
        autoIncrement: true
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
        defaultValue: DATE.NOW
    },
    updatedAt: { 
        type: DATE,
        allowNull: false,
        defaultValue:  DATE.NOW 
    },
});

export { Order };