import { INTEGER, STRING } from 'sequelize';
import {sequelize} from "../data/connection.js";

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
    }
});

// Test
sequelize.sync().then(() => {
    console.log('Se creo el usuario');
 }).catch((error) => {
    console.error('No se pudó crear el usuario : ', error);
 });