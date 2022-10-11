import { db } from '../../models/models.js';

const Customer = db.customer;

export class CustomerRepository {

    create = async (customer) => {
        return await Customer.create(
            customer
         ).then((customer) => {
            console.log("Se creo el cliente: " + JSON.stringify(customer, null, 4));
            return customer;
         }).catch((err) => {
            console.error("Error al crear el cliente: ", err)
         });
    };

    update = async (idCustomer, customerData) => {
        return await Customer.update(customerData, {
            where: {
                idCustomer
            }
        }).then((customer) => {
            console.log("Se actualizó el cliente: " + JSON.stringify(customer, null, 4));
            return customer;
        }).catch((err) => {
            console.error("Error al actualizar el cliente: ", err)
        });
    };

    findById = async (idCustomer) => {
        return await Customer.findByPk(idCustomer, {
            include:["orders"]
        }).then((customer) => {
           return customer;
        }).catch((err) => {
           console.error("Error al buscar cliente: ", err);
        });
    };

    findAll = async () => {
        return await Customer.findAll({
            attributes: ["idCustomer", "name", "lastName", "phone", "address", "createdAt", "updatedAt"],
            include:["orders"],
        }).then((customers) => {
           return customers;
        });
    };

    delete = async (idCustomer) => {
        await Customer.destroy({ 
            where: {idCustomer} 
        }).then((idCustomer) => {
            console.log("Se eliminó el cliente: " + JSON.stringify(idCustomer, null, 4));
         }).catch((err) => {
            console.error("Error al eliminar el cliente: ", err)
        });
    };

}