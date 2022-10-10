import { INTEGER, DATE, FLOAT } from 'sequelize';
import { sequelize } from '../data/connection.js';

const RelProductOrder = sequelize.define("relproductorder", {
    idRel: { 
        type: INTEGER,  
        primaryKey: true, 
        autoIncrement: true
    },
    quantity: { 
        type: INTEGER,
        allowNull: false 
    },
    price: { 
        type: FLOAT,
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

export { RelProductOrder };