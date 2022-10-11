import { INTEGER, STRING, DATE } from 'sequelize';
import { sequelize } from '../data/connection.js';

const User = sequelize.define("user", {
    id: { 
        type: INTEGER,  
        primaryKey: true, 
        autoIncrement: true
    },
    username: { 
        type: STRING, 
        max: 30, 
        allowNull: false 
    },
    password: { 
        type: STRING, 
        min: 6,
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

export { User };