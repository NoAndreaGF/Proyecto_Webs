import { Sequelize } from 'sequelize';
import { sequelize } from '../data/connection.js';
import { Customer } from './customer.model.js';
import { Order } from './order.model.js';
import { In } from './in.model.js';
import { Out } from './out.model.js';
import { Product } from './product.model.js';
import { RelProductOrder } from './relProductOrder.model.js';
import { User } from './user.model.js';

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = User;
db.order = Order;
db.customer = Customer;
db.relProductOrder = RelProductOrder;
db.product = Product;
db.in = In;
db.out = Out;

// Association One to Many orders-customer
db.customer.hasMany(db.order, {as:'orders'});
db.order.belongsTo(db.customer, {as:'customer', foreignKey: {allowNull: false, name: 'idCustomer' }});

// Association One to Many product-in
db.product.hasMany(db.in, {as:'ins'});
db.in.belongsTo(db.product, {as:'product', foreignKey: {allowNull: false, name: 'idProducts' }});

// Association One to Many product-out
db.product.hasMany(db.out, {as:'outs'});
db.out.belongsTo(db.product, {as:'product', foreignKey: {allowNull: false, name: 'idProducts' }});

// Association One to Many product-relProductOrder
db.product.hasMany(db.relProductOrder, {as:'orders'});
db.relProductOrder.belongsTo(db.product, {as:'product', foreignKey: {allowNull: false, name: 'idProducts' }});

// Association One to Many order-relProductOrder
db.order.hasMany(db.relProductOrder, {as:'products'});
db.relProductOrder.belongsTo(db.order, {as:'order', foreignKey: {allowNull: false, name: 'idOrder' }});

export { db };