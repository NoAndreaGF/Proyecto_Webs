import { INTEGER, DATE } from 'sequelize';
import { sequelize } from '../data/connection.js';

const In = sequelize.define("in", {
    idIn: { 
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

export { In };