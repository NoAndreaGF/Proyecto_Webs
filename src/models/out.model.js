import { INTEGER, DATE } from 'sequelize';
import { sequelize } from '../data/connection.js';

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
    date: { 
        type: DATE,
        allowNull: false 
    },
    createdAt: { 
        type: DATE,
        allowNull: false,
        defaultValue:  DATE.NOW
    },
    updatedAt: { 
        type: DATE,
        allowNull: false,
        defaultValue:  DATE.NOW 
    },
});

export { Out };