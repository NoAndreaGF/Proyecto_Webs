import {Sequelize} from 'sequelize';

const sequelize = new Sequelize(
 'sales',
 'root',
 '123456',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

// Test
sequelize.authenticate().then(() => {
    console.log('Conexión establecida.');
 }).catch((error) => {
    console.error('No se estableció la conexión: ', error);
 });

export {sequelize};