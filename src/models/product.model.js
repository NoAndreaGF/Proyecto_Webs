import { INTEGER, STRING, DATE, FLOAT } from 'sequelize';
import { sequelize } from '../data/connection.js';

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
        defaultValue:  DATE.NOW
    },
    updatedAt: { 
        type: DATE,
        allowNull: false,
        defaultValue:  DATE.NOW 
    },
});

export { Product };