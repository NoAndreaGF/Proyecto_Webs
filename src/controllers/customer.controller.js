import { db } from '../models/models.js';

const Customer = db.customer;

const create = (customer) => {
    return Customer.create({
       name: customer.name,
       lastName: customer.lastName,
       phone: customer.phone,
       address: customer.address,
    }).then((customer) => {
       console.log("Se creo el cliente: " + JSON.stringify(customer, null, 4));
       return customer;
    }).catch((err) => {
       console.error("Error al crear el cliente: ", err)
    });
};

const findById = (idCustomer) => {
    return Customer.findByPk(idCustomer, {include:["orders"]})
    .then((customer) => {
       return customer;
    }).catch((err) => {
       console.error("Error al buscar cliente: ", err);
    });
};

const findAll = () => {
    return Customer.findAll({
        include:["orders"],
    }).then((customers) => {
       return customers;
    });
};

const update = (idCustomer, customerData) => {
    return Customer.update(customerData, {
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

const drop = (idCustomer) => {
    return Customer.destroy({ 
        where: {idCustomer} 
    }).then((idCustomer) => {
        console.log("Se eliminó el cliente: " + JSON.stringify(idCustomer, null, 4));
     }).catch((err) => {
        console.error("Error al eliminar el cliente: ", err)
     });
};

export { create, findAll, findById, update, drop };