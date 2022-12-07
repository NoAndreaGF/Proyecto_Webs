import { db } from '../../models/models.js';
import { Op } from 'sequelize';

const Customer = db.customer;

export class CustomerRepository {
    
    async create(customer) {
        return await Customer.create(customer);
    };

    async update(idCustomer, customerData) {
        await Customer.update(customerData, {
            where: {
                idCustomer
            }
        });
    };

    async findById(idCustomer) {
        return await Customer.findByPk(idCustomer, {
            include:["orders"]
        });
    };

    async findAll() {
        return await Customer.findAll({
            attributes: ["idCustomer", "name", "lastName", "phone", "address", "createdAt", "updatedAt"],
            include:["orders"],
        });
    };

    async delete(idCustomer){
        await Customer.destroy({ 
            where: {idCustomer} 
        });
    };

    async findBySearch(search) {
        return await Customer.findAll({
            attributes: ["idCustomer", "name", "lastName", "phone", "address", "createdAt", "updatedAt"],
            include:["orders"],
            where: {
                [Op.or]: {
                    name: {
                        [Op.substring]: search
                    },
                    idCustomer: {
                        [Op.eq]: search
                    },
                    lastName: {
                        [Op.substring]: search
                    },
                    phone: {
                        [Op.eq]: search
                    }
                }         
            } 
        });
    }
}