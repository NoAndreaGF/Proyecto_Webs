import {Sequelize} from 'sequelize';

const sequelize = new Sequelize(
 'sales2',
 'root',
 '123456',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

export {sequelize};