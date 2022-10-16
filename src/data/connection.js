import {Sequelize} from 'sequelize';

const sequelize = new Sequelize(
 'sales',
 'root',
 'password',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

export {sequelize};