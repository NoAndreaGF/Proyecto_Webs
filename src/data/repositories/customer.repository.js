import { db } from '../../models/models.js';

const Customer = db.customer;

export class CustomerRepository {
    async create(customer) {
        return await Customer.create(customer);
    };

    async update(idCustomer, customerData) {
        let customerUpdate = await Customer.findByPk(idCustomer);
        // Validation
        if(customerUpdate === undefined){
            throw new Error("El cliente no se encuentra definido y no se puede actualizar");
        }
        else if(customerUpdate === null){
            throw new Error("El cliente es nulo y no se puede actualizar");
        }

        await Customer.update(customerData, {
            where: {
                idCustomer
            }
        });
    };

    async findById(idCustomer) {
        let result = await Customer.findByPk(idCustomer, {
            include:["orders"]
        });

        // Validation
        if (result === null) {
            throw new Error("El cliente no existe");
        }
        return result;
    };

    async findAll() {
        let result = await Customer.findAll({
            attributes: ["idCustomer", "name", "lastName", "phone", "address", "createdAt", "updatedAt"],
            include:["orders"],
        });

        // Validation
        if (result === null) {
            throw new Error("No hay clientes registrados");
        }
        return result;
    };

    async delete(idCustomer){
        await Customer.destroy({ 
            where: {idCustomer} 
        });
    };
}